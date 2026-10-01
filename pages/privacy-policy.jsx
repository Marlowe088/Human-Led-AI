import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Clear Starting Point.',
    html: `<p>Your privacy matters. This page explains how your personal information is collected, used, stored, shared, and protected when you use this website.</p>
      <p>The aim is simple: to be clear about what happens with your data, why it happens, and what rights you have.</p>
      <p>This Privacy Policy applies to manojtailor.com and any related pages, forms, and the Human-Led AI Letters email list.</p>`,
  },
  {
    number: 2,
    title: 'Who We Are.',
    html: `<p>This website is operated by: Manoj Tailor, manojtailor.com, United Kingdom.</p>
      <p>For the purposes of UK data protection law, Manoj Tailor is the data controller of your personal information.</p>
      <p>Email: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
  {
    number: 3,
    title: 'The Data We Collect.',
    html: `<p>We only collect information reasonably needed to operate this website, communicate with you, deliver content, and protect the site. This may include:</p>
      <ul>
        <li>your name</li>
        <li>your email address</li>
        <li>messages you send through the contact form</li>
        <li>technical data such as IP address, browser type, device type, and approximate location</li>
        <li>website usage data, such as pages visited and how you interact with the site</li>
        <li>email engagement data, such as opens, clicks, and unsubscribes</li>
      </ul>`,
  },
  {
    number: 4,
    title: 'How We Collect Your Data.',
    html: `<p>Your information may be collected when you visit the website, complete the contact form, sign up to the Human-Led AI Letters, reply to emails, or click links in emails.</p>`,
  },
  {
    number: 5,
    title: 'Why We Use Your Data.',
    html: `<p>Under UK GDPR, there must be a lawful basis for using personal data.</p>
      <table>
        <thead><tr><th>Purpose</th><th>Lawful Basis</th></tr></thead>
        <tbody>
          <tr><td>To send you the emails you&rsquo;ve opted into</td><td>Consent</td></tr>
          <tr><td>To respond to messages or enquiries</td><td>Legitimate interest</td></tr>
          <tr><td>To keep records for legal purposes</td><td>Legal obligation</td></tr>
          <tr><td>To improve this website and its content</td><td>Legitimate interest</td></tr>
          <tr><td>To protect the website from spam, misuse, or fraud</td><td>Legitimate interest</td></tr>
        </tbody>
      </table>
      <p>We do not use your personal data for unrelated purposes. We do not sell or rent your personal data.</p>`,
  },
  {
    number: 6,
    title: 'Email Communications.',
    html: `<p>When you sign up to the Human-Led AI Letters, you&rsquo;ll be asked for your consent by a clear checkbox &mdash; this is currently the only way you&rsquo;d be added to an email list through this site.</p>
      <p>You can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly. Where consent is the lawful basis for sending emails, you have the right to withdraw that consent at any time.</p>
      <p>We use Kit (kit.com) as our email service provider to manage subscriptions, send emails, and understand basic engagement such as opens, clicks, and unsubscribes.</p>`,
  },
  {
    number: 7,
    title: 'AI-Assisted Tools and Processing.',
    html: `<p>Some content, drafting, and internal workflows may involve AI-assisted tools. Where used, they support reflection, organisation, analysis, or drafting &mdash; they do not replace human judgement in preparing this content. We do not intentionally share unnecessary personal data with AI providers, and data is minimised where practical.</p>`,
  },
  {
    number: 8,
    title: 'Sharing Your Data.',
    html: `<p>We only share your data where necessary to operate the site or comply with legal obligations. This currently includes: Kit (email service provider), our website hosting provider (Vercel), and, where legally required, authorities or regulators.</p>
      <p>All third-party providers are expected to handle data securely and comply with applicable data protection law.</p>`,
  },
  {
    number: 9,
    title: 'International Data Transfers.',
    html: `<p>This website is operated from the United Kingdom but may be accessed worldwide. Your data may be processed outside the UK through the providers listed above. Where personal data is transferred internationally, appropriate safeguards (such as the UK International Data Transfer Agreement or Standard Contractual Clauses) are used where required.</p>`,
  },
  {
    number: 10,
    title: 'Data Retention.',
    html: `<p>We keep personal data only as long as reasonably necessary: email data until you unsubscribe or request deletion; contact form messages as long as needed to respond.</p>`,
  },
  {
    number: 11,
    title: 'Your Rights.',
    html: `<p>Under UK GDPR, you may have the right to: be informed about how your data is used, access it, correct it, request its deletion, restrict or object to processing, request data portability, withdraw consent, and complain to the UK Information Commissioner&rsquo;s Office.</p>`,
  },
  {
    number: 12,
    title: 'Cookies and Similar Technologies.',
    html: `<p>This website may use cookies for essential functionality, security, and analytics. Non-essential cookies will not be used without appropriate consent where required. A separate Cookie Policy applies &mdash; see that page for details.</p>`,
  },
  {
    number: 13,
    title: 'Data Security.',
    html: `<p>Reasonable technical and organisational steps are taken to protect your data, including secure platforms and restricted access. No online service can guarantee complete security, but reasonable safeguards are used to reduce risk.</p>`,
  },
  {
    number: 14,
    title: 'Third-Party Links.',
    html: `<p>This website may contain links to third-party sites. We are not responsible for how they collect or use your data.</p>`,
  },
  {
    number: 15,
    title: 'Children&rsquo;s Privacy.',
    html: `<p>This website is not intended for children. We do not knowingly collect personal data from anyone under 16, or under the age required by applicable local law.</p>`,
  },
  {
    number: 16,
    title: 'Users Outside the United Kingdom.',
    html: `<p>If you&rsquo;re outside the UK, your data may be processed in the UK and by the service providers listed above. We aim to respect relevant privacy principles wherever you&rsquo;re located, including transparency, access, correction, and deletion rights.</p>`,
  },
  {
    number: 17,
    title: 'Changes to This Policy.',
    html: `<p>This policy may be updated from time to time. The latest version will always be available on this page, with the date at the top updated when significant changes are made.</p>`,
  },
  {
    number: 18,
    title: 'Complaints.',
    html: `<p>If you have concerns about how your data is handled, contact us first: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a>. You also have the right to complain to the UK Information Commissioner&rsquo;s Office (ico.org.uk).</p>`,
  },
  {
    number: 19,
    title: 'Final Note.',
    html: `<p>This policy exists for transparency. Your data will be treated with care, used only where there&rsquo;s a clear reason, and never sold or rented. If anything is unclear, get in touch: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Privacy Policy.</h1>
      <p className="caption">manojtailor.com &middot; Last updated: October 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
