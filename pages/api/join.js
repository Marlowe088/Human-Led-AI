// pages/api/join.js
//
// Called by the Join page's email signup form. Separate from
// pages/api/subscribe.js (the diagnostic's email gate) deliberately —
// that route requires a purposePath and applies diagnostic-specific tags;
// this one is a plain newsletter signup and should work on its own.
//
// What it does:
//   1. Upserts the subscriber in Kit.
//   2. Applies the "Human-Led AI Letters" tag.
//   3. Tries to add them to an email sequence of the same name, so the
//      7-day series actually sends. If that sequence doesn't exist yet in
//      Kit (it has to be built there by hand — Kit's visual-automation
//      trigger is already used by the diagnostic, so this goes straight
//      into a sequence instead, same pattern as the paid-report delivery),
//      this is logged and skipped, NOT treated as a failure — the
//      subscriber is still captured and tagged correctly.
//
// Never blocks the page: any Kit-side error is logged and swallowed,
// returning 200 + ok:false rather than a 500.

import { ensureTag, upsertSubscriber, tagSubscriber, findSequenceId, addSubscriberToSequence } from '../../lib/kit';

const LIST_TAG_NAME = 'Human-Led AI Letters';
const SEQUENCE_NAME = 'Human-Led AI Letters';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required' });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error('join: KIT_API_KEY is not set');
    return res.status(200).json({ ok: false, reason: 'not_configured' });
  }

  try {
    const subscriberId = await upsertSubscriber(apiKey, {
      email: email.trim(),
      firstName: (name || '').trim() || null,
      fields: {},
    });

    const listTag = await ensureTag(apiKey, LIST_TAG_NAME);
    await tagSubscriber(apiKey, listTag.id, subscriberId);

    const sequenceId = await findSequenceId(apiKey, SEQUENCE_NAME);
    if (sequenceId) {
      await addSubscriberToSequence(apiKey, sequenceId, subscriberId);
    } else {
      console.warn(
        `join: Kit sequence "${SEQUENCE_NAME}" not found; subscriber tagged but not added to a sequence yet.`
      );
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('join: Kit integration error:', err);
    return res.status(200).json({ ok: false, reason: 'kit_error' });
  }
}
