import { useState } from 'react';
import Head from 'next/head';
import BrandSignature from '../components/BrandSignature';

export default function JoinPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!email.trim() || !consent) {
      setError('Please add your email and tick the box so I know it\u2019s okay to send the letters.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setDone(true);
      } else {
        setError('Sorry, something went wrong on my end. Please try again, or email manoj@manojtailor.com directly.');
      }
    } catch (err) {
      console.error('join request failed:', err);
      setError('Sorry, something went wrong on my end. Please try again, or email manoj@manojtailor.com directly.');
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Join — Manoj Tailor</title>
        <meta
          name="description"
          content="A short seven-day email series that picks up where the manifesto left off. Free, no sales pitch, unsubscribe any time."
        />
      </Head>

      <h1>Join.</h1>

      <p>
        You will not find a buy button on this page. There is no cart, no price, nowhere to pull
        out a credit card even if you wanted to &mdash; I know how strange that is to read on a
        page that clearly wants something from you.
      </p>

      <p>Stay with me anyway.</p>

      <h3>Where This Actually Leads.</h3>

      <p>If you have read this far into the site, you have probably already leaned in more than once.</p>

      <p>This is where you step forward and it starts simply, with an email address.</p>

      <p>
        You will receive a short seven day email series, one email a day for seven days &mdash;
        real emails, not marketing hype and promotions, roughly five minutes each to read &mdash;
        that pick up exactly where the manifesto left off. Call it a further orientation. One idea
        at a time, in the order your mind can actually absorb it, instead of all of it at once.
      </p>

      <p>By the end of them, one of two things will be true.</p>

      <p>
        You will still be here, and you will want more. Or you will have found the unsubscribe
        button and used it, because this is not for you right now, or possibly ever. You will have
        your own honest answer, from paying real attention for a week.
      </p>

      <p>
        Both outcomes are completely fine. The second one is, if I&rsquo;m honest, half the point.
        I would rather you spend a week finding out for free than commit to something before you
        actually know what it is.
      </p>

      <h3>Why Free, And Why First.</h3>

      <p>The easy version of this page would ask for your money before you&rsquo;ve had a chance to think.</p>

      <p>
        I would rather ask for a week of your inbox instead. Slower. Quieter. The opposite of the
        noise and dopamine everyone else seems to be selling around AI right now. Nobody rushes
        you into agency. You arrive at it, one honest email at a time &mdash; and by the time
        anything costs anything, you will already know exactly what you are and are not saying yes
        to.
      </p>

      <p>
        <em>
          You do not need to master AI. You need to stay yourself while everyone around you tries
          to master it for you.
        </em>
      </p>

      <p>That is the whole email series, compressed into one line.</p>

      <h3>Imagine This.</h3>

      <p>Picture two roads leaving the same junction.</p>

      <p>
        One is crowded, fast, and everyone on it is checking over their shoulder to see how far
        behind they&rsquo;ve fallen. The other is quieter, a little slower, and the people walking
        it are looking straight ahead &mdash; not because they&rsquo;re behind, but because they
        already decided where they&rsquo;re going before they started moving.
      </p>

      <p>Same AI. Same tools. Completely different way of walking through it. That second road is what these emails are actually mapping.</p>

      <h3>More&hellip;</h3>

      <p>
        Nothing changes for you until you actually apply this to your own life, in your own words,
        on your own terms. Reading about it is not the same as doing it, and I won&rsquo;t pretend
        otherwise.
      </p>

      <p>
        Self-awareness is the starting line, not the finish. That is genuinely all this asks of
        you at the start &mdash; attention, for about five minutes a day, for a week.
      </p>

      <p>
        Or you can stay exactly where you are, doing exactly what you&rsquo;ve always done. No
        judgment here either way. Some people are not ready yet, and that&rsquo;s a perfectly
        honest place to be.
      </p>

      <p>You know your own crossroads better than I do. I&rsquo;m just here to make sure you see it clearly before you choose.</p>

      <h3>Keep Visiting.</h3>

      <p>
        This site is still young, and it is going to keep expanding &mdash; more letters, more
        essays, more of the map filled in.
      </p>

      <p>If you don&rsquo;t want to miss what comes next, adding yourself to my email list is the way to stay close to it.</p>

      <p>
        And whether you join or not: reach out any time. Tell me what excites you here, what you
        disagree with, or what this site could simply do better. I read every email.
      </p>

      <hr className="rule" />

      {done ? (
        <p>
          <strong>You&rsquo;re in.</strong> Your first letter will land shortly &mdash; check your
          Promotions tab and spam folder if you don&rsquo;t see it within a few minutes.
        </p>
      ) : (
        <form onSubmit={submit}>
          <label className="caption" htmlFor="join-name">Name</label>
          <input
            id="join-name"
            className="form-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />

          <label className="caption" htmlFor="join-email">Email</label>
          <input
            id="join-email"
            className="form-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div className="checkbox-row">
            <input
              id="join-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label htmlFor="join-consent">
              Send me the Human-Led AI Letters and occasional related emails. I can unsubscribe
              any time &mdash; see the Privacy Policy for how your data is used.
            </label>
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="cta-row">
            <button type="submit" className="cta" disabled={loading}>
              {loading ? 'One moment\u2026' : 'Join Letters →'}
            </button>
          </div>
        </form>
      )}

      <p style={{ marginTop: 'var(--space-4)' }}>~Manoj</p>

      <BrandSignature />
    </>
  );
}
