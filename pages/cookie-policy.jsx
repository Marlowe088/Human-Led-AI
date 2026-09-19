import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Clear Starting Point.',
    html: `<p>This page explains what cookies and similar technologies this website uses, and why. The aim is the same as the Privacy Policy: to be clear about what happens, and to only use what&rsquo;s genuinely necessary.</p>`,
  },
  {
    number: 2,
    title: 'What Cookies Are.',
    html: `<p>Cookies are small text files stored on your device when you visit a website. They help the site function, remember preferences, or understand how it&rsquo;s being used.</p>`,
  },
  {
    number: 3,
    title: 'Cookies This Website Currently Uses.',
    html: `<p>This website currently uses a small number of essential cookies, used by our hosting and payment providers to make the site and checkout work correctly:</p>
      <ul>
        <li><strong>Essential/functional cookies</strong> &mdash; set by Vercel (our hosting provider) to support basic site operation, and by Stripe during checkout to process your payment securely. These cannot be switched off, as the site and checkout would not function correctly without them.</li>
        <li><strong>Email service cookies or tracking pixels</strong> &mdash; if you receive emails from us via Kit (our email service provider), those emails may include tracking pixels that tell us whether an email was opened or a link clicked. This helps us understand what&rsquo;s useful and isn&rsquo;t. This is separate from website cookies and is covered in more detail in the Privacy Policy.</li>
      </ul>`,
  },
  {
    number: 4,
    title: 'What This Website Does Not Currently Use.',
    html: `<p>At the time of writing, this website does not use analytics cookies (such as Google Analytics), advertising or retargeting cookies, or social media tracking pixels (such as Meta Pixel). If any of these are added in future, this page will be updated, and &mdash; where required by law &mdash; a consent banner will ask for your permission before non-essential cookies are set.</p>`,
  },
  {
    number: 5,
    title: 'Why We Use Cookies.',
    html: `<p>Only to make the website and checkout function properly, and to understand basic email engagement so we can improve what we send. We do not use cookies to build advertising profiles or sell data to third parties.</p>`,
  },
  {
    number: 6,
    title: 'Managing Cookies.',
    html: `<p>You can control or delete cookies through your browser settings at any time. Blocking essential cookies may affect the site&rsquo;s ability to function, particularly at checkout. Most browsers let you see what cookies you have and delete them individually or block cookies from particular or all websites.</p>`,
  },
  {
    number: 7,
    title: 'Third-Party Cookies.',
    html: `<p>Where a third-party provider (Vercel, Stripe, Kit) sets a cookie as part of delivering their service, that provider&rsquo;s own privacy and cookie practices apply alongside this policy. You can review their policies directly: Vercel&rsquo;s privacy policy, Stripe&rsquo;s privacy policy, and Kit&rsquo;s privacy policy.</p>`,
  },
  {
    number: 8,
    title: 'Changes to This Policy.',
    html: `<p>This Cookies Policy may be updated as the website&rsquo;s tech stack changes &mdash; for example, if analytics or marketing tools are added later. The latest version will always be available on this page, with the date at the top updated for significant changes.</p>`,
  },
  {
    number: 9,
    title: 'Contact.',
    html: `<p>If you have questions about this policy, contact: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>Cookies Policy — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Cookies Policy.</h1>
      <p className="caption">manojtailor.com &middot; Last updated: September 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
