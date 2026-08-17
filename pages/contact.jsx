import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Human-Led AI</title>
      </Head>
      <p className="eyebrow">Contact</p>
      <h1>Get in Touch</h1>
      <div className="photo-frame">
        <img src="/manoj-photo.png" alt="Manoj Tailor" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: `<p>You're welcome to send me a message.</p>

<p>It doesn't need to be formal, and you don't need to arrive with a perfectly formed question. A clear, honest note is enough. I read every genuine message myself — though I can't always promise a reply in depth.</p>

<p><strong>What to write to me about</strong>.</p>

<p>Get in touch if something here resonated, if you have a question about AI, judgment, or where the line between the two sits for you. If AI is changing how you decide things, and you want to think it through out loud with someone. If something on the site was wrong, unclear, or worth challenging — thoughtful disagreement is genuinely welcome here, not just tolerated. Or if you have a question about something you've bought, or a media or collaboration enquiry.</p>

<p>You don't need to agree with everything I've written to write to me. Some of my favourite replies start with "I don't think that's quite right."</p>

<p><strong>Before you write</strong>.</p>

<p>New here? The <strong>Manifesto</strong> is the best place to start — it's the thinking underneath everything else on this site.</p>

<p><strong><a href="/manifesto">Read the Manifesto →</a></strong></p>

<p>If you'd rather receive it in your inbox, join <strong>"Human-Led AI Letters</strong>." New readers start with a short seven-day series — no selling in it, just the ideas continued. After that, a weekly letter, and the option to hear about anything further if you ever want it. Not an AI news roundup. A quieter place to think.</p>

<p><strong><a href="/join">Join Human-Led AI Letters →</a></strong></p>

<p><strong>Send a message</strong></p>

<p>You can reach me directly at:</p>

<p><strong>manoj@manojtailor.com</strong></p>

<p>By writing to me, you're agreeing that I can use what you send to read, manage, and respond to it. For how I handle that information more broadly, see the <strong><a href="/privacy-policy">Privacy Policy.</a></strong></p>

<p><strong>One practical ask</strong>.</p>

<p>Please don't send anything sensitive through email or a contact form — this includes medical details, banking or payment information, passwords, confidential legal documents, or private details about someone else who hasn't agreed to share them.</p>

<p>You're welcome to describe the shape of a decision or situation without the specifics. If you're writing about something you've purchased, just enough detail to identify it is plenty.</p>

<p><strong>What this is, and isn't</strong>.</p>

<p>I read genuine messages carefully, but I can't guarantee a response, and reply times will vary. Writing to me doesn't create a professional or advisory relationship, and I can't take responsibility for a decision based on a single email exchange.</p>

<p>Everything on this site, and anything I write back to you, is offered as thinking — not as legal, financial, medical, or other regulated professional advice. Where a situation genuinely needs a specialist, please seek one.</p>

<p><strong>If you are in crisis or immediate danger, please don't use this page.</strong> Contact your local emergency service, a healthcare provider, or a relevant support organisation directly.</p>

<p><strong>Where I'm based</strong>.</p>

<p>I'm based in the United Kingdom. This site is written for thoughtful readers wherever they are, though laws and professional standards do differ by country — worth bearing in mind if anything here touches a regulated area of your life.</p>

<p><strong>Last thing</strong>.</p>

<p>An unfinished question is still worth asking.</p>

<p>You don't need to sound certain. You don't need to explain everything at once.</p>

<p>Start with whatever matters most.</p>

<p><strong>Manoj Tailor</strong> </p>

<p><strong>Human-Led AI</strong></p>` }}
      />
    </>
  );
}
