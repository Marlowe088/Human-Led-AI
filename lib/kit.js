// lib/kit.js
//
// Minimal Kit (v4) helpers used by the Stripe webhook. Server-side only.
// (pages/api/subscribe.js has its own copy of the same logic from before;
// it is deliberately left untouched because it is working in production.)

const KIT_API_BASE = process.env.KIT_API_BASE || 'https://api.kit.com/v4';

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

export async function ensureCustomField(apiKey, label) {
  const list = await kitFetch('/custom_fields', apiKey);
  const existing = (list.custom_fields || []).find((f) => f.label === label);
  if (existing) return existing;
  const created = await kitFetch('/custom_fields', apiKey, {
    method: 'POST',
    body: JSON.stringify({ label }),
  });
  return created.custom_field;
}

export async function ensureTag(apiKey, name) {
  const list = await kitFetch('/tags', apiKey);
  const existing = (list.tags || []).find((t) => t.name === name);
  if (existing) return existing;
  const created = await kitFetch('/tags', apiKey, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  return created.tag;
}

export async function upsertSubscriber(apiKey, { email, firstName, fields }) {
  const result = await kitFetch('/subscribers', apiKey, {
    method: 'POST',
    body: JSON.stringify({
      email_address: email,
      first_name: firstName || null,
      fields: fields || {},
    }),
  });
  const id = result.subscriber && result.subscriber.id;
  if (!id) throw new Error('Kit did not return a subscriber id: ' + JSON.stringify(result));
  return id;
}

export async function tagSubscriber(apiKey, tagId, subscriberId) {
  await kitFetch(`/tags/${tagId}/subscribers/${subscriberId}`, apiKey, {
    method: 'POST',
    body: JSON.stringify({}),
  });
}
