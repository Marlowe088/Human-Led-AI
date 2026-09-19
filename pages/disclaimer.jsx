import Head from 'next/head';
import LegalSections from '../components/LegalSections';

const SECTIONS = [
  {
    number: 1,
    title: 'A Clear Starting Point.',
    html: `<p>This website is designed to support reflection, meaning, purpose, identity, discernment, and practical self-understanding. It is not intended to tell you what to do, is not a substitute for professional advice, and does not remove your personal responsibility for your own choices and outcomes.</p>`,
  },
  {
    number: 2,
    title: 'Informational and Educational Purposes Only.',
    html: `<p>All content &mdash; website pages, the Purpose Path&trade; Diagnostic, the Meaning Map&trade; report, and any future digital products &mdash; is provided for informational, educational, reflective, and personal development purposes only. It is not professional advice.</p>`,
  },
  {
    number: 3,
    title: 'No Professional Advice.',
    html: `<p>Nothing on this website constitutes legal, financial, medical, psychological, therapeutic, or business advice, counselling, diagnosis, crisis support, or religious instruction. If you need any of these, consult an appropriately qualified professional.</p>`,
  },
  {
    number: 4,
    title: 'Not Therapy, Counselling, or Mental Health Support.',
    html: `<p>This material is not therapy, counselling, psychological treatment, or mental health support, and does not diagnose, treat, cure, or prevent any mental health condition. If you&rsquo;re experiencing serious emotional distress, crisis, or thoughts of self-harm, seek immediate help from an appropriate professional, emergency service, or crisis support provider in your country.</p>`,
  },
  {
    number: 5,
    title: 'Personal Responsibility.',
    html: `<p>You remain responsible for how you interpret and apply any material from this website, including your decisions, actions, and any outcomes resulting from them. The material offers frameworks, reflections, and prompts &mdash; it does not make decisions for you or replace your own judgment.</p>`,
  },
  {
    number: 6,
    title: 'No Guarantees.',
    html: `<p>No specific outcome is guaranteed. Completing the diagnostic or purchasing the Meaning Map&trade; does not guarantee finding your purpose, achieving clarity, improving relationships, or any other specific personal or professional result. Results will vary.</p>`,
  },
  {
    number: 7,
    title: 'No Guarantee of &ldquo;Correct&rdquo; Decisions.',
    html: `<p>This material may support decision clarity and self-reflection, but it does not guarantee that any decision you make will be correct, successful, or favourable in hindsight. Life involves uncertainty and consequences outside your control.</p>`,
  },
  {
    number: 8,
    title: 'The Purpose Path Diagnostic&trade;.',
    html: `<p>This tool is not a clinical, medical, psychological, or scientific assessment. It&rsquo;s intended to support self-reflection and orientation. Any result should be treated as a reflective prompt &mdash; not a fixed identity, diagnosis, or final verdict on your life.</p>`,
  },
  {
    number: 9,
    title: 'The Meaning Map&trade;.',
    html: `<p>The Meaning Map&trade; is a personal written report, built from your diagnostic answers, designed for educational and reflective purposes. It may help you understand the pattern currently shaping your decisions, what it&rsquo;s likely costing you, and one honest next step &mdash; but it does not guarantee a specific outcome, and it is not therapy, medical care, legal advice, or religious instruction. Your use of it remains your responsibility.</p>`,
  },
  {
    number: 10,
    title: 'AI-Assisted Material.',
    html: `<p>Some content or diagnostic scoring may involve AI-assisted tools. This can be useful but may contain errors or interpretations that don&rsquo;t apply to your situation. You should not rely on it as a substitute for your own judgment or professional advice.</p>`,
  },
  {
    number: 11,
    title: 'Accuracy, Completeness, and Suitability.',
    html: `<p>Reasonable care is taken to keep content accurate and useful, but no warranty is made that it&rsquo;s complete, current, or error-free. Content may be updated or changed at any time.</p>`,
  },
  {
    number: 12,
    title: 'External Factors.',
    html: `<p>Personal, professional, and life outcomes are influenced by many factors outside the scope of this website &mdash; your circumstances, health, relationships, and choices among them. These are outside our control.</p>`,
  },
  {
    number: 13,
    title: 'Testimonials, Examples, and Stories.',
    html: `<p>Any testimonials or examples shared are individual experiences, not guarantees of similar results.</p>`,
  },
  {
    number: 14,
    title: 'Third-Party Links and Services.',
    html: `<p>This website may link to or use third-party services (including Stripe, Kit, and Vercel). We don&rsquo;t control these services and aren&rsquo;t responsible for their content, availability, or practices. Use of third-party services is at your own discretion.</p>`,
  },
  {
    number: 15,
    title: 'Digital Products and Consumer Rights.',
    html: `<p>The Meaning Map&trade; is delivered digitally, shortly after purchase. Nothing in this Disclaimer removes or reduces your statutory rights under applicable consumer law. Refunds and cancellations are handled per the Terms of Use and Refund Policy.</p>`,
  },
  {
    number: 16,
    title: 'Privacy, Cookies, and Data.',
    html: `<p>Your use of this website may involve the collection of personal data, as explained in the Privacy Policy, and cookies as explained in the Cookies Policy.</p>`,
  },
  {
    number: 17,
    title: 'Limitation of Liability.',
    html: `<p>To the fullest extent permitted by law, Manoj Tailor and manojtailor.com are not liable for loss arising from use of this website, reliance on its content, or third-party services, including financial loss, loss of opportunity, or indirect loss. Nothing here excludes liability that cannot legally be excluded, including for death or personal injury caused by negligence, fraud, or statutory rights that cannot be excluded.</p>`,
  },
  {
    number: 18,
    title: 'No Warranties.',
    html: `<p>All content and products are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; with no warranty of fitness for a particular purpose, reliability, or error-free operation.</p>`,
  },
  {
    number: 19,
    title: 'Global Use and Jurisdiction.',
    html: `<p>This website is operated from the United Kingdom but may be accessed globally. This Disclaimer is governed by the laws of England and Wales, subject to any mandatory consumer rights that apply in your jurisdiction.</p>`,
  },
  {
    number: 20,
    title: 'Relationship With Other Policies.',
    html: `<p>This Disclaimer should be read alongside the Terms of Use, Privacy Policy, and Refund Policy. Where there&rsquo;s a conflict with any mandatory legal right you have, your legal right applies.</p>`,
  },
  {
    number: 21,
    title: 'Changes to This Disclaimer.',
    html: `<p>This Disclaimer may be updated from time to time. The latest version is always available here.</p>`,
  },
  {
    number: 22,
    title: 'Contact.',
    html: `<p>Email: <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a></p>`,
  },
  {
    number: 23,
    title: 'Final Note.',
    html: `<p>This website is designed to support clearer thinking and deeper reflection &mdash; not to remove uncertainty, make decisions for you, or replace professional advice. It offers language, questions, and frameworks that may help you engage more consciously with your own life. Responsibility for your life remains with you.</p>`,
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>Disclaimer — Manoj Tailor</title>
      </Head>
      <h1 className="legal-title">Disclaimer.</h1>
      <p className="caption">manojtailor.com &middot; Last updated: September 2026.</p>
      <LegalSections sections={SECTIONS} />
    </>
  );
}
