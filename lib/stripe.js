// lib/stripe.js
//
// Shared Stripe setup for the checkout, webhook, download, and thank-you code.
// The price lives HERE, server-side — never taken from the browser — so it
// can't be tampered with.

import Stripe from 'stripe';

export const PURPOSE_PATHS = ['Steward', 'Optimizer', 'Protector', 'Guide'];

// £7.00, in pence.
export const PRICE_PENCE = 700;
export const CURRENCY = 'gbp';

export const SITE_URL = (process.env.SITE_URL || 'https://www.manojtailor.com').replace(/\/$/, '');

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  // STRIPE_TEST_HOST is only ever set in local automated tests, to point the SDK
  // at a mock server. It is never set on Vercel.
  if (process.env.STRIPE_TEST_HOST) {
    return new Stripe(key, {
      host: process.env.STRIPE_TEST_HOST,
      port: Number(process.env.STRIPE_TEST_PORT),
      protocol: 'http',
    });
  }
  return new Stripe(key);
}

// Session ids look like cs_test_a1B2... or cs_live_a1B2...
export function isValidSessionId(id) {
  return typeof id === 'string' && /^cs_(test|live)_[A-Za-z0-9]+$/.test(id);
}

// Safety catch: a LIVE Stripe key is refused by the checkout route unless
// ALLOW_LIVE_PAYMENTS=true is set in Vercel. That way real money can never be
// taken by accident before delivery has been tested end to end.
export function livePaymentsBlocked() {
  const key = process.env.STRIPE_SECRET_KEY || '';
  return /^(sk|rk)_live_/.test(key) && process.env.ALLOW_LIVE_PAYMENTS !== 'true';
}

// ---- Where the Meaning Map is currently sold ----
// Default: UK, USA, Australia. To add countries later, set ALLOWED_COUNTRIES in
// Vercel to a comma-separated list of two-letter codes, e.g. "GB,US,AU,CA,NZ",
// then redeploy. No code change needed.
const DEFAULT_ALLOWED_COUNTRIES = ['GB', 'US', 'AU'];

export function allowedCountries() {
  const fromEnv = (process.env.ALLOWED_COUNTRIES || '')
    .split(/[\s,;]+/)
    .map((c) => c.trim().toUpperCase())
    .filter((c) => /^[A-Z]{2}$/.test(c));
  return fromEnv.length > 0 ? fromEnv : DEFAULT_ALLOWED_COUNTRIES;
}

// The buyer's billing country as entered at Stripe Checkout, or null if Stripe
// didn't return one.
export function buyerCountry(session) {
  const country =
    session &&
    session.customer_details &&
    session.customer_details.address &&
    session.customer_details.address.country;
  return typeof country === 'string' && country ? country.toUpperCase() : null;
}

// If Stripe gave us no country we let the order through (and the caller logs it):
// wrongly turning away a genuine customer is worse than the rare unknown.
export function isCountryAllowed(country) {
  if (!country) return true;
  return allowedCountries().includes(country);
}

// Readable list for the Stripe payment page, e.g. "United Kingdom, United States and
// Australia". Built from the same allowed list, so it updates when ALLOWED_COUNTRIES does.
export function allowedCountryNames() {
  let names = allowedCountries();
  try {
    const display = new Intl.DisplayNames(['en'], { type: 'region' });
    names = names.map((code) => display.of(code) || code);
  } catch (err) {
    // fall back to the raw codes
  }
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}
