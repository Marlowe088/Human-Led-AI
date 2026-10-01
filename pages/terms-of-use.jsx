import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Clear Starting Point.',
    html: `<p>These Terms of Use explain how this website, its content, and its email list may be used. By using this website or signing up to receive emails, you agree to these terms.</p>`,
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
    html: `<p>manojtailor.com provides written pages and content, an email list (the Human-Led AI Letters), and may provide downloadable materials and future digital content or services. Content is provided digitally unless clearly stated otherwise.</p>`,
  },
  {
    number: 5,
    title: 'What This Is and What This Is Not.',
    html: `<p>The material on this website is for informational, educational, reflective, and personal development purposes only. It is <strong>not</strong> legal, financial, medical, or psychological advice, therapy, counselling, diagnosis, crisis support, or religious instruction, and it is not a substitute for qualified professional advice. You remain responsible for your decisions, actions, and outcomes.</p>`,
  },
  {
    number: 6,
    title: 'Personal Responsibility.',
    html: `<p>You agree not to use this website or its content as a substitute for your own judgment or for professional advice where required. Nothing on this website guarantees a specific outcome.</p>`,
  },
  {
    number: 7,
    title: 'AI-Assisted Content and Tools.',
    html: `<p>Some materials or content may be created or supported using AI-assisted tools. AI-generated or AI-assisted material can contain errors or incomplete interpretations. You agree not to rely on it as a substitute for your own judgment or professional advice.</p>`,
  },
  {
    number: 8,
    title: 'Your Use of This Website and Materials.',
    html: `<p>You may use any materials on this site for your own personal use only. You may not copy, redistribute, resell, share access, upload materials for AI training or scraping, or use the content to create a competing product, without written permission.</p>`,
  },
  {
    number: 9,
    title: 'Intellectual Property.',
    html: `<p>All content on this website is owned by Manoj Tailor or licensed for use, and protected by copyright and applicable law. You may not reproduce, sell, distribute, or train AI systems on this material without written permission.</p>`,
  },
  {
    number: 10,
    title: 'Email Content.',
    html: `<p>If you opt in to the Human-Led AI Letters, you agree to receive emails from Manoj Tailor related to that content and occasional related material. You can unsubscribe at any time. You may forward an occasional email to someone you think would benefit; you may not reproduce, republish, or commercially distribute email content without permission.</p>`,
  },
  {
    number: 11,
    title: 'No Guarantees.',
    html: `<p>The content on this website is designed to support reflection and orientation. No specific outcome is guaranteed &mdash; not finding your purpose, achieving a particular decision, or any specific life, career, or emotional result. Outcomes depend on your own context, choices, and actions.</p>`,
  },
  {
    number: 12,
    title: 'Testimonials and Examples.',
    html: `<p>Any testimonials or examples shown are individual experiences, not guarantees of similar results, used only with appropriate permission.</p>`,
  },
  {
    number: 13,
    title: 'Website Availability.',
    html: `<p>We aim to keep the website and digital materials accessible, but uninterrupted access is not guaranteed. Content may be updated, paused, or withdrawn at any time.</p>`,
  },
  {
    number: 14,
    title: 'No Products Currently Sold Directly.',
    html: `<p>This website does not currently sell any product or service directly. If that changes, these Terms will be updated to set out the relevant purchase, payment, and cancellation terms before anything is offered for sale here.</p>`,
  },
  {
    number: 15,
    title: 'Third-Party Services and Links.',
    html: `<p>This website uses third-party providers including Kit (email) and Vercel (hosting), and may link to external websites. We are not responsible for the content, policies, or performance of services outside our control.</p>`,
  },
  {
    number: 16,
    title: 'Privacy and Data.',
    html: `<p>Your use of this site is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which explains how personal data is collected, used, and protected.</p>`,
  },
  {
    number: 17,
    title: 'Limitation of Liability.',
    html: `<p>To the fullest extent permitted by law, Manoj Tailor and manojtailor.com are not liable for indirect or consequential loss, decisions made based on website content, losses from third-party services, or website downtime. Nothing here excludes liability that cannot legally be excluded under the laws of England and Wales, including for death or personal injury caused by negligence, fraud, or statutory consumer rights that cannot be excluded.</p>`,
  },
  {
    number: 18,
    title: 'Indemnity.',
    html: `<p>You agree to take responsibility for loss arising from your misuse of this website, breach of these terms, or unauthorised sharing of materials. This does not affect your rights as a consumer.</p>`,
  },
  {
    number: 19,
    title: 'Changes to These Terms.',
    html: `<p>These terms may be updated from time to time. The latest version is always on this page; the date at the top will be updated for significant changes.</p>`,
  },
  {
    number: 20,
    title: 'Governing Law.',
    html: `<p>These terms are governed by the laws of England and Wales. If you&rsquo;re a consumer outside England and Wales, you may also have rights under the mandatory consumer protection laws of your own country or region.</p>`,
  },
  {
    number: 21,
    title: 'Contact.',
    html: `<p>Email: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
  {
    number: 22,
    title: 'Final Note.',
    html: `<p>These terms exist to set clear expectations. This website is here to support reflection and orientation &mdash; but your life remains your responsibility. If anything is unclear, ask before relying on the material.</p>`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Terms of Use — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Terms of Use.</h1>
      <p className="caption">manojtailor.com &middot; Last updated: October 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
