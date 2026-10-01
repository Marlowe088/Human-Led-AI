import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Simple Starting Point.',
    html: `<p>This Refund Policy explains when a refund may be requested and how requests are handled, for any paid product or service offered through this website.</p>`,
  },
  {
    number: 2,
    title: 'No Products Currently Sold Directly.',
    html: `<p>This website does not currently sell any product or service directly, so no refund situation currently applies. If that changes, this page will be updated with the specific terms that apply to whatever is offered, before it&rsquo;s available for sale.</p>`,
  },
  {
    number: 3,
    title: 'Your Legal Rights.',
    html: `<p>Nothing in this policy removes or limits your statutory rights. If a future purchase from this website is faulty, inaccessible, or not as described, you may be entitled to a remedy under UK consumer law.</p>`,
  },
  {
    number: 4,
    title: 'International Customers.',
    html: `<p>Refund rights may vary by location. We aim to respect relevant consumer protection principles wherever you are, and nothing here removes any mandatory consumer rights in your country or region.</p>`,
  },
  {
    number: 5,
    title: 'Changes to This Policy.',
    html: `<p>This policy may be updated from time to time. The latest version is always available here; the date at the top will be updated for significant changes.</p>`,
  },
  {
    number: 6,
    title: 'Final Note.',
    html: `<p>This policy is designed to be fair, not to create friction. If anything is unclear, contact: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Head>
        <title>Refund Policy — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Refund Policy.</h1>
      <p className="caption">manojtailor.com &middot; Last updated: October 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
