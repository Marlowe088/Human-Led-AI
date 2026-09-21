import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Clear Starting Point.',
    html: `<p>These Terms of Use explain how this website, its content, diagnostics, products, and services may be used. By using this website, completing the Purpose Path<sup class="tm">™</sup> Diagnostic, purchasing a product, or accessing any content provided through this site, you agree to these terms.</p>`,
  },
  {
    number: 2,
    title: 'Who We Are.',
    html: `<p>Manoj Tailor, manojtailor.com, United Kingdom. Email: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
  {
    number: 3,
    title: 'Who This Site Is For.',
    html: `<p>This website is intended for individuals at least 18 years old, able to enter into a legally binding agreement. The material is designed for people interested in meaning, purpose, identity, discernment, and personal development.</p>`,
  },
  {
    number: 4,
    title: 'What This Website Provides.',
    html: `<p>manojtailor.com may provide: written pages and content, the Purpose Path<sup class="tm">™</sup> Diagnostic, the Meaning Map<sup class="tm">™</sup> digital report, downloadable materials, and future digital products or services. All products are provided digitally unless clearly stated otherwise.</p>`,
  },
  {
    number: 5,
    title: 'What This Is and What This Is Not.',
    html: `<p>The material on this website is for informational, educational, reflective, and personal development purposes only. It is <strong>not</strong> legal, financial, medical, or psychological advice, therapy, counselling, diagnosis, crisis support, or religious instruction, and it is not a substitute for qualified professional advice. You remain responsible for your decisions, actions, and outcomes.</p>`,
  },
  {
    number: 6,
    title: 'Personal Responsibility.',
    html: `<p>You agree not to use this website, the diagnostic, or the Meaning Map<sup class="tm">™</sup> as a substitute for your own judgment or for professional advice where required. Nothing on this website guarantees a specific outcome.</p>`,
  },
  {
    number: 7,
    title: 'The Purpose Path<sup class="tm">™</sup> Diagnostic.',
    html: `<p>This tool is intended to support self-reflection and orientation. It is <strong>not</strong> a clinical assessment, psychological test, professional evaluation, religious classification, fixed identity label, or guarantee about your future. Any result should be treated as a prompt for further thought, not a diagnosis or instruction.</p>`,
  },
  {
    number: 8,
    title: 'AI-Assisted Content and Tools.',
    html: `<p>Some materials, diagnostic scoring, or content may be created or supported using AI-assisted tools. AI-generated or AI-assisted material can contain errors or incomplete interpretations. You agree not to rely on it as a substitute for your own judgment or professional advice.</p>`,
  },
  {
    number: 9,
    title: 'Your Use of This Website and Materials.',
    html: `<p>You may use purchased or free materials for your own personal use only. You may not copy, redistribute, resell, share access, upload materials for AI training or scraping, or use the content to create a competing product, without written permission.</p>`,
  },
  {
    number: 10,
    title: 'Intellectual Property.',
    html: `<p>All content on this website &mdash; including the Meaning Map<sup class="tm">™</sup>, the Purpose Path<sup class="tm">™</sup> Diagnostic, the Five Purpose Paths<sup class="tm">™</sup>, and related materials &mdash; is owned by Manoj Tailor or licensed for use, and protected by copyright and applicable law. You may not reproduce, sell, distribute, or train AI systems on this material without written permission.</p>`,
  },
  {
    number: 11,
    title: 'Email Content.',
    html: `<p>If you opt in to receive emails through the diagnostic or a purchase, you agree to receive emails from Manoj Tailor related to your result, your Meaning Map<sup class="tm">™</sup>, and occasional related content. You can unsubscribe at any time. You may forward an occasional email to someone you think would benefit; you may not reproduce, republish, or commercially distribute email content without permission.</p>`,
  },
  {
    number: 12,
    title: 'Payments and Digital Access.',
    html: `<p>Prices are shown clearly before purchase, in GBP. By purchasing, you agree to pay the stated price, provide accurate information, and receive digital access to the Meaning Map<sup class="tm">™</sup> report. Payment is processed by Stripe; we do not directly store your full card details. Access is provided digitally after purchase.</p>`,
  },
  {
    number: 13,
    title: 'Digital Content and Cancellation Rights.',
    html: `<p>The Meaning Map<sup class="tm">™</sup> report may be made available shortly after purchase. If you&rsquo;re a UK or EU consumer, you have a 14-day cancellation right for online purchases &mdash; but specific rules apply once digital content access has begun, particularly where you&rsquo;ve expressly agreed to immediate access. Nothing in these terms removes or reduces your statutory rights under applicable consumer law. Checkout will clearly state whether access begins immediately and whether this affects your cancellation right.</p>`,
  },
  {
    number: 14,
    title: 'Refunds.',
    html: `<p>The Meaning Map<sup class="tm">™</sup> specific guarantee (14 days, reply to the delivery email for a full refund) is described on the offer page and applies as stated. Beyond that: refund requests must be made within the stated period, the report must not have been shared or redistributed, and we may ask for reasonable information to process the request. If a product is faulty or not as described, your statutory legal rights remain unaffected. Approved refunds go back to the original payment method.</p>`,
  },
  {
    number: 15,
    title: 'Product-Specific Guarantee.',
    html: `<p>The Meaning Map<sup class="tm">™</sup> includes a specific guarantee, detailed on its offer page: if the report doesn&rsquo;t accurately describe you, you can request a full refund within 14 days by replying to the delivery email. This guarantee applies only to the Meaning Map<sup class="tm">™</sup> and does not extend to other products or services unless separately stated. Statutory consumer rights remain unaffected.</p>`,
  },
  {
    number: 16,
    title: 'Subscriptions, Memberships, or Recurring Payments.',
    html: `<p>None are currently offered. If introduced in future, relevant terms &mdash; billing, cancellation, renewal &mdash; will be shown clearly before purchase, and no recurring payment will be taken without clear agreement at checkout.</p>`,
  },
  {
    number: 17,
    title: 'No Guarantees.',
    html: `<p>The Meaning Map<sup class="tm">™</sup> and diagnostic are designed to support reflection and orientation. No specific outcome is guaranteed &mdash; not finding your purpose, achieving a particular decision, or any specific life, career, or emotional result. Outcomes depend on your own context, choices, and actions.</p>`,
  },
  {
    number: 18,
    title: 'Testimonials and Examples.',
    html: `<p>Any testimonials or examples shown are individual experiences, not guarantees of similar results, used only with appropriate permission.</p>`,
  },
  {
    number: 19,
    title: 'Website Availability.',
    html: `<p>We aim to keep the website and digital materials accessible, but uninterrupted access is not guaranteed. Content and products may be updated, paused, or withdrawn at any time.</p>`,
  },
  {
    number: 20,
    title: 'Third-Party Services and Links.',
    html: `<p>This website uses third-party providers including Stripe (payment), Kit (email), and Vercel (hosting), and may link to external websites. We are not responsible for the content, policies, or performance of services outside our control.</p>`,
  },
  {
    number: 21,
    title: 'Privacy and Data.',
    html: `<p>Your use of this site is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which explains how personal data is collected, used, and protected.</p>`,
  },
  {
    number: 22,
    title: 'Limitation of Liability.',
    html: `<p>To the fullest extent permitted by law, Manoj Tailor and manojtailor.com are not liable for indirect or consequential loss, decisions made based on website content or the Meaning Map<sup class="tm">™</sup>, losses from third-party services, or website downtime. Nothing here excludes liability that cannot legally be excluded under the laws of England and Wales, including for death or personal injury caused by negligence, fraud, or statutory consumer rights that cannot be excluded.</p>`,
  },
  {
    number: 23,
    title: 'Indemnity.',
    html: `<p>You agree to take responsibility for loss arising from your misuse of this website, breach of these terms, or unauthorised sharing of materials. This does not affect your rights as a consumer.</p>`,
  },
  {
    number: 24,
    title: 'Changes to These Terms.',
    html: `<p>These terms may be updated from time to time. The latest version is always on this page; the date at the top will be updated for significant changes.</p>`,
  },
  {
    number: 25,
    title: 'Governing Law.',
    html: `<p>These terms are governed by the laws of England and Wales. If you&rsquo;re a consumer outside England and Wales, you may also have rights under the mandatory consumer protection laws of your own country or region.</p>`,
  },
  {
    number: 26,
    title: 'Contact.',
    html: `<p>Email: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
  {
    number: 27,
    title: 'Final Note.',
    html: `<p>These terms exist to set clear expectations. This website is here to support reflection and orientation &mdash; but your life remains your responsibility. If anything is unclear, ask before relying on the material or making a purchase.</p>`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Terms of Use — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Terms of Use.</h1>
      <p className="caption">Last updated: September 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
