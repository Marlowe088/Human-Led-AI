// pages/api/subscribe.js
//
// Called by the diagnostic's email gate on submit. Talks to Kit's v4 API
// server-side only \u2014 the API key never reaches the browser.
//
// What it does, every time:
//   1. Ensures the "Purpose Path" custom field exists in Kit (creates it
//      once, on first ever call; harmless no-op after that).
//   2. Upserts the subscriber by email, setting that custom field to their
//      result type (Steward / Optimizer / Protector / Guide / Pathfinder).
//   3. Applies the "Purpose Path Result" tag \u2014 always. This is the tag
//      Manoj's single Kit automation is triggered by, and its one email
//      uses a Liquid conditional on the Purpose Path field to send the
//      correct one of five result bodies.
//   4. Applies the "Meaning Map Updates" tag \u2014 only if the optional
//      consent checkbox was ticked. This is separate from the required
//      "send my result" consent and drives nothing automatically; it's
//      just a segment for future broadcasts.
//
// Never blocks or fails the diagnostic result reveal: any error here is
// logged server-side and swallowed, returning { ok: false } with a 200,
// not a 500. The on-screen result is the primary delivery; this is a
// best-effort backup copy by email.

const KIT_API_BASE = 'https://api.kit.com/v4';
const CUSTOM_FIELD_LABEL = 'Purpose Path';
const RESULT_TAG_NAME = 'Purpose Path Result';
const UPDATES_TAG_NAME = 'Meaning Map Updates';

async function kitFetch(path, apiKey, options = {}) {
  const res = await fetch(`${KIT_API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': apiKey,
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Kit API ${path} failed (${res.status}): ${JSON.stringify(data)}`);
  }
  return data;
}

async function ensureCustomField(apiKey, label) {
  const list = await kitFetch('/custom_fields', apiKey);
  const existing = (list.custom_fields || []).find((f) => f.label === label);
  if (existing) return existing;
  const created = await kitFetch('/custom_fields', apiKey, {
    method: 'POST',
    body: JSON.stringify({ label }),
  });
  return created.custom_field;
}

async function ensureTag(apiKey, name) {
  const list = await kitFetch('/tags', apiKey);
  const existing = (list.tags || []).find((t) => t.name === name);
  if (existing) return existing;
  const created = await kitFetch('/tags', apiKey, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  return created.tag;
}

async function tagSubscriber(apiKey, tagId, subscriberId) {
  await kitFetch(`/tags/${tagId}/subscribers/${subscriberId}`, apiKey, {
    method: 'POST',
    body: JSON.stringify({}),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, purposePath, wantsUpdates } = req.body || {};

  if (!email || !purposePath) {
    return res.status(400).json({ error: 'Missing email or purposePath' });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error('subscribe: KIT_API_KEY is not set');
    return res.status(200).json({ ok: false, reason: 'not_configured' });
  }

  try {
    await ensureCustomField(apiKey, CUSTOM_FIELD_LABEL);

    const subResult = await kitFetch('/subscribers', apiKey, {
      method: 'POST',
      body: JSON.stringify({
        email_address: email,
        first_name: name || null,
        fields: { [CUSTOM_FIELD_LABEL]: purposePath },
      }),
    });

    const subscriberId = subResult.subscriber && subResult.subscriber.id;
    if (!subscriberId) {
      throw new Error('Kit did not return a subscriber id: ' + JSON.stringify(subResult));
    }

    const resultTag = await ensureTag(apiKey, RESULT_TAG_NAME);
    await tagSubscriber(apiKey, resultTag.id, subscriberId);

    if (wantsUpdates) {
      const updatesTag = await ensureTag(apiKey, UPDATES_TAG_NAME);
      await tagSubscriber(apiKey, updatesTag.id, subscriberId);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('subscribe: Kit integration error:', err);
    return res.status(200).json({ ok: false, reason: 'kit_error' });
  }
}
