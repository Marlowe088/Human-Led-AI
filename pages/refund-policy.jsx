import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Simple Starting Point.',
    html: `<p>This Refund Policy explains when a refund may be requested and how requests are handled. The intention is simple: to be fair, clear, and consistent. The Meaning Map<sup class="tm">™</sup> is a digital, reflective product, so refunds are handled differently from physical returns.</p>`,
  },
  {
    number: 2,
    title: 'The Nature of Digital Products.',
    html: `<p>The Meaning Map<sup class="tm">™</sup> is delivered digitally &mdash; a personal written report, based on your diagnostic answers. Access begins shortly after purchase.</p>`,
  },
  {
    number: 3,
    title: 'Your Legal Rights.',
    html: `<p>Nothing in this policy removes or limits your statutory rights. If your report is faulty, inaccessible, or not as described, you may be entitled to a remedy under UK consumer law.</p>`,
  },
  {
    number: 4,
    title: 'Digital Content and Cancellation Rights.',
    html: `<p>UK and EU consumers normally have a 14-day cancellation period for online purchases. Where digital content is supplied immediately and you&rsquo;ve expressly agreed to that, this right may be affected once access begins &mdash; this will be made clear at checkout. This doesn&rsquo;t affect your statutory rights if the product is faulty or not as described.</p>`,
  },
  {
    number: 5,
    title: 'The Meaning Map<sup class="tm">™</sup> Guarantee.',
    html: `<p><em>If your Meaning Map<sup class="tm">™</sup> doesn&rsquo;t accurately describe what&rsquo;s actually going on for you, reply to the delivery email within 14 days of purchase and you&rsquo;ll receive a full refund. No form to complete, no proof required &mdash; just tell us it missed.</em></p>
      <p>This guarantee applies only to the Meaning Map<sup class="tm">™</sup>, and is intentionally simple: we&rsquo;d rather you get an honest no than a reluctant yes. It doesn&rsquo;t apply where a report has been copied, shared, or redistributed beyond personal use.</p>`,
  },
  {
    number: 6,
    title: 'General Refund Position.',
    html: `<p>Beyond the guarantee above, refunds are not automatically provided for a change of mind unrelated to the accuracy of the report, or after the 14-day window has closed. Every request is reviewed fairly and in good faith.</p>`,
  },
  {
    number: 7,
    title: 'When Refunds Are Not Provided.',
    html: `<p>Refunds will generally not be issued where: the 14-day window has expired without a request; the report has been shared, copied, or redistributed beyond personal use; the request is part of repeated refund behaviour; or the customer has breached the Terms of Use. Your statutory rights remain unaffected.</p>`,
  },
  {
    number: 8,
    title: 'How to Request a Refund.',
    html: `<p>Reply directly to the email your Meaning Map<sup class="tm">™</sup> was delivered in, or contact: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a>. Include your name, the email used for purchase, and the date of purchase. Requests are usually reviewed within a few working days.</p>`,
  },
  {
    number: 9,
    title: 'Refund Processing.',
    html: `<p>Approved refunds are issued to the original payment method. Processing times depend on Stripe and your bank, and may take several working days to appear.</p>`,
  },
  {
    number: 10,
    title: 'Access After Refund.',
    html: `<p>If a refund is approved, you agree not to continue using, copying, or sharing the refunded report. It remains protected by copyright and the Terms of Use.</p>`,
  },
  {
    number: 11,
    title: 'Chargebacks and Payment Disputes.',
    html: `<p>If there&rsquo;s a problem with your purchase, contact us first &mdash; most issues resolve quickly through direct communication. This doesn&rsquo;t affect any legal rights you have.</p>`,
  },
  {
    number: 12,
    title: 'If You Are Unsure Before Buying.',
    html: `<p>If you&rsquo;re unsure whether the Meaning Map<sup class="tm">™</sup> is right for you, take your time before purchasing &mdash; read the offer page and FAQ carefully, and ask a question first if something&rsquo;s unclear.</p>`,
  },
  {
    number: 13,
    title: 'International Customers.',
    html: `<p>Refund rights may vary by location. We aim to respect relevant consumer protection principles wherever you are, and nothing here removes any mandatory consumer rights in your country or region.</p>`,
  },
  {
    number: 14,
    title: 'Changes to This Policy.',
    html: `<p>This policy may be updated from time to time. The latest version is always available here; the date at the top will be updated for significant changes.</p>`,
  },
  {
    number: 15,
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
      <p className="caption">manojtailor.com &middot; Last updated: September 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
