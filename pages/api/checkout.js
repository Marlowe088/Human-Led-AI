// pages/api/checkout.js
//
// Called when someone clicks "Get My Meaning Map — £7" on the diagnostic page.
// Creates a Stripe Checkout session and returns its URL; the browser then
// redirects to Stripe's own hosted payment page, so card details never touch
// this site.
//
// The price, currency, and product name are set here, server-side. The browser
// only says WHICH of the five reports it's for, and confirms the immediate-
// digital-access consent checkbox was ticked.

import {
  getStripe,
  livePaymentsBlocked,
  allowedCountryNames,
  PURPOSE_PATHS,
  PRICE_PENCE,
  CURRENCY,
  SITE_URL,
} from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { purposePath, email, name, digitalAccessConsent } = req.body || {};

  if (!PURPOSE_PATHS.includes(purposePath)) {
    return res.status(400).json({ error: 'Unknown Purpose Path' });
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (digitalAccessConsent !== true) {
    return res.status(400).json({ error: 'Consent to immediate digital access is required' });
  }

  const stripe = getStripe();
  if (!stripe) {
    console.error('checkout: STRIPE_SECRET_KEY is not set');
    return res.status(500).json({ error: 'Checkout is not configured' });
  }

  // Owner-only test override. If TEST_BUYER_EMAIL is set in Vercel, that ONE email
  // address (and nobody else) may check out while live payments are still closed,
  // and, if TEST_PRICE_PENCE is also set, pays that smaller amount (Stripe's minimum
  // is 30p). Everyone else is unaffected: they stay blocked until ALLOW_LIVE_PAYMENTS
  // is 'true', and then pay the normal £7.
  const testEmail = (process.env.TEST_BUYER_EMAIL || '').trim().toLowerCase();
  const isTestBuyer = testEmail !== '' && email.trim().toLowerCase() === testEmail;

  if (livePaymentsBlocked() && !isTestBuyer) {
    console.error('checkout: live Stripe key present but ALLOW_LIVE_PAYMENTS is not "true" — refusing');
    return res.status(503).json({ error: 'Checkout is not open yet' });
  }

  let unitAmount = PRICE_PENCE;
  if (isTestBuyer) {
    const testPence = parseInt(process.env.TEST_PRICE_PENCE, 10);
    if (Number.isInteger(testPence) && testPence >= 30 && testPence <= PRICE_PENCE) {
      unitAmount = testPence;
      console.log(`checkout: owner test purchase at ${testPence}p`);
    }
  }

  const metadata = {
    purposePath,
    firstName: String(name || '').trim().slice(0, 100),
    digitalAccessConsent: 'true',
    digitalAccessConsentAt: new Date().toISOString(),
    ...(unitAmount !== PRICE_PENCE ? { testPurchase: 'true' } : {}),
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            unit_amount: unitAmount,
            product_data: {
              name: `The Meaning Map™ — The ${purposePath}`,
              description: 'Your written Meaning Map report (digital PDF).',
            },
          },
        },
      ],
      customer_email: email.trim(),
      custom_text: {
        submit: {
          message: `The Meaning Map is currently available to customers in ${allowedCountryNames()}. Orders from other countries are refunded in full.`,
        },
      },
      metadata,
      payment_intent_data: { metadata },
      success_url: `${SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/diagnostic`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('checkout: could not create Stripe session:', err);
    return res.status(500).json({ error: 'Could not start checkout' });
  }
}
