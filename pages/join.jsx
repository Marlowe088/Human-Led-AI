import Head from 'next/head';

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Join — Human-Led AI Letters</title>
      </Head>
      <p className="eyebrow">Join</p>
      <h1>Human-Led AI Letters</h1>
      <p className="lede">
        One short letter a week. Free. Leave whenever you like. The next step
        takes you to the sign-up page — it only takes a moment.
      </p>
      <div className="form-shell">
        <a href="https://join.manojtailor.com" className="join-cta">
          I&apos;m In →
        </a>
        <p className="fallback-note">
          If the button above doesn&apos;t take you through — sometimes an ad
          blocker or browser setting is the cause — you can use{' '}
          <a href="https://letters.manojtailor.com">this alternative link</a>{' '}
          instead.
        </p>
      </div>
    </>
  );
}
