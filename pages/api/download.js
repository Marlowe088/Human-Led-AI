// pages/api/download.js
//
// GET /api/download?session_id=cs_...
//
// Asks Stripe whether that checkout session was actually PAID, works out which
// of the five reports it was for, then streams that PDF out of the private
// Vercel Blob store. The PDFs are never in the public GitHub repo and have no
// public URL — this route is the only door to them.

import { Readable } from 'node:stream';
import { get, list } from '@vercel/blob';
import {
  getStripe,
  isValidSessionId,
  PURPOSE_PATHS,
  buyerCountry,
  isCountryAllowed,
} from '../../lib/stripe';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end('Method not allowed');
  }

  const sessionId = req.query.session_id;
  if (!isValidSessionId(sessionId)) {
    return res.status(400).end('Missing or invalid link.');
  }

  const stripe = getStripe();
  if (!stripe) {
    console.error('download: STRIPE_SECRET_KEY is not set');
    return res.status(500).end('Downloads are not configured.');
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (err) {
    console.error('download: could not retrieve session:', err.message);
    return res.status(404).end('We could not find that purchase.');
  }

  if (session.payment_status !== 'paid') {
    return res.status(402).end('This purchase has not been completed.');
  }

  if (!isCountryAllowed(buyerCountry(session))) {
    return res
      .status(403)
      .end('The Meaning Map is not currently available in your country, so this purchase is being refunded.');
  }

  const purposePath = session.metadata && session.metadata.purposePath;
  if (!PURPOSE_PATHS.includes(purposePath)) {
    console.error(`download: session ${sessionId} has unknown purposePath: ${purposePath}`);
    return res.status(500).end('Something went wrong. Please contact manoj@manojtailor.com.');
  }

  try {
    // Find the file by name prefix so it works whether or not the upload added
    // a random suffix to the filename.
    const { blobs } = await list({ prefix: `Meaning_Map_${purposePath}` });
    const found = blobs && blobs[0];
    if (!found) {
      console.error(`download: no blob found for prefix Meaning_Map_${purposePath}`);
      return res.status(500).end('Something went wrong. Please contact manoj@manojtailor.com.');
    }

    const result = await get(found.pathname, { access: 'private' });
    if (!result || result.statusCode !== 200) {
      console.error(`download: could not read blob ${found.pathname}`);
      return res.status(500).end('Something went wrong. Please contact manoj@manojtailor.com.');
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="Meaning-Map-${purposePath}.pdf"`
    );
    res.setHeader('Cache-Control', 'private, no-store');
    Readable.fromWeb(result.stream).pipe(res);
  } catch (err) {
    console.error('download: error reading report:', err);
    return res.status(500).end('Something went wrong. Please contact manoj@manojtailor.com.');
  }
}
