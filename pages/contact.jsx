import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'the site'}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:manoj@manojtailor.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Head>
        <title>Contact — Manoj Tailor</title>
      </Head>

      <h1>Contact.</h1>

      <p className="lede">Get in touch.</p>

      <p>The simplest way is to send a message below. I read every one.</p>

      <p>You don&rsquo;t need to write anything formal. You don&rsquo;t need to have the perfect question. Just say what you need to say.</p>

      <h3>What to get in contact about.</h3>

      <p>You&rsquo;re welcome to message me if:</p>
      <ul>
        <li>something on the site resonated with you</li>
        <li>you&rsquo;re unsure whether this work speaks to your situation</li>
        <li>you have a thoughtful question around meaning, purpose, identity, discernment, or inner orientation</li>
        <li>you&rsquo;ve taken the Purpose Path Diagnostic<sup className="tm">™</sup> and want to share what came up</li>
        <li>you noticed something that may be useful for me to know</li>
      </ul>

      <p>You don&rsquo;t need a polished message. Sometimes a simple, honest note is enough.</p>

      <h3>Send a message.</h3>

      <form onSubmit={sendMessage}>
        <label className="caption" htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          className="form-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

        <label className="caption" htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          className="form-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <label className="caption" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className="form-field"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="cta-row">
          <button type="submit" className="cta">Send Message</button>
        </div>
      </form>

      <p>
        If you&rsquo;ve been thinking about reaching out, there may be a reason. You don&rsquo;t
        need to explain your whole life. You don&rsquo;t need to make it perfect. You don&rsquo;t
        need to sound certain.
      </p>

      <p>Just start from where you are.</p>

      <p><strong>~ Manoj.</strong></p>
    </>
  );
}
