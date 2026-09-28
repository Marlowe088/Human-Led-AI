// pages/api/stripe-webhook.js
//
// Stripe calls this after a payment succeeds. It:
//   1. Verifies the request genuinely came from Stripe (signature check).
//   2. Only acts on PAID checkout sessions.
//   3. Upserts the buyer in Kit, sets their "Purpose Path" and "Report Link"
//      custom fields, and applies the "Meaning Map Purchased" tag — which is
//      the entry point for the delivery email in Kit.
//
// If anything on the Kit side fails, this returns 500 so Stripe retries the
// webhook automatically (with backoff, for up to three days). Every step is
// safe to repeat.

import { getStripe, PURPOSE_PATHS, SITE_URL } from '../../lib/stripe';
import {
  ensureCustomField,
  ensureTag,
  upsertSubscriber,
  tagSubscriber,
  findSequenceId,
  addSubscriberToSequence,
} from '../../lib/kit';

// The email sequence in Kit that holds the delivery email. Must match its name exactly.
const DELIVERY_SEQUENCE_NAME = 'Meaning Map delivery';

// Stripe's signature check needs the raw, unparsed request body.
export const config = { api: { bodyParser: false } };

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

async function handlePaidSession(session) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) throw new Error('KIT_API_KEY is not set');

  const email =
    (session.customer_details && session.customer_details.email) || session.customer_email;
  const purposePath = session.metadata && session.metadata.purposePath;

  if (!email) throw new Error(`Session ${session.id} has no email`);
  if (!PURPOSE_PATHS.includes(purposePath)) {
    throw new Error(`Session ${session.id} has an unknown purposePath: ${purposePath}`);
  }

  const firstName =
    (session.metadata && session.metadata.firstName) ||
    ((session.customer_details && session.customer_details.name) || '').split(' ')[0] ||
    null;

  const reportLink = `${SITE_URL}/api/download?session_id=${session.id}`;

  const purposePathField = await ensureCustomField(apiKey, 'Purpose Path');
  const reportLinkField = await ensureCustomField(apiKey, 'Report Link');

  const subscriberId = await upsertSubscriber(apiKey, {
    email,
    firstName,
    fields: {
      [purposePathField.key]: purposePath,
      [reportLinkField.key]: reportLink,
    },
  });

  const purchasedTag = await ensureTag(apiKey, 'Meaning Map Purchased');
  await tagSubscriber(apiKey, purchasedTag.id, subscriberId);

  // Send the delivery email: add the buyer to the "Meaning Map delivery" sequence.
  // If that sequence doesn't exist yet this throws, so Stripe retries the webhook
  // (for up to three days) and the buyer is emailed as soon as it has been created.
  const sequenceId = await findSequenceId(apiKey, DELIVERY_SEQUENCE_NAME);
  if (!sequenceId) {
    throw new Error(
      `Kit email sequence "${DELIVERY_SEQUENCE_NAME}" was not found. Create it in Kit (Automations > Email sequences).`
    );
  }
  await addSubscriberToSequence(apiKey, sequenceId, subscriberId);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed');
  }

  const stripe = getStripe();
  // Tolerate anything picked up around the secret when it was copied into Vercel
  // (extra text, newlines, quote marks) — the most common cause of "Invalid
  // signature". A real signing secret is one whitespace-free token starting with
  // "whsec_", so pull out exactly that; fall back to the trimmed value if none.
  const rawSecretValue = process.env.STRIPE_WEBHOOK_SECRET || '';
  const secretMatch = rawSecretValue.match(/whsec_[^\s"'`,;]+/);
  const webhookSecret = secretMatch
    ? secretMatch[0]
    : rawSecretValue.trim().replace(/^["']+|["']+$/g, '').trim();
  if (!stripe || !webhookSecret) {
    console.error('stripe-webhook: STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET is not set');
    return res.status(500).end('Webhook not configured');
  }

  let event;
  let rawBody = null;
  try {
    rawBody = await readRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, req.headers['stripe-signature'], webhookSecret);
  } catch (err) {
    // Logs the reason plus non-secret facts about the configured secret (never the
    // value itself), so a mismatch can be diagnosed from Vercel's logs.
    console.error(
      'stripe-webhook: signature verification failed:',
      err.message,
      `| secret starts with whsec_: ${webhookSecret.startsWith('whsec_')}`,
      `| secret length used: ${webhookSecret.length} (value stored in Vercel: ${rawSecretValue.length})`,
      `| stripe-signature header present: ${Boolean(req.headers['stripe-signature'])}`,
      `| raw body bytes received: ${rawBody ? rawBody.length : 'not read'}`
    );
    return res.status(400).end('Invalid signature');
  }

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'checkout.session.async_payment_succeeded'
  ) {
    const session = event.data.object;
    if (session.payment_status === 'paid') {
      try {
        await handlePaidSession(session);
      } catch (err) {
        console.error('stripe-webhook: could not process paid session:', err);
        return res.status(500).json({ received: false });
      }
    }
  }

  return res.status(200).json({ received: true });
}
