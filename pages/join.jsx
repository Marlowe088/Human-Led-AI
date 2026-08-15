import Head from 'next/head';

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Join — Human-Led AI Letters</title>
      </Head>
      <p className="eyebrow">Join</p>
      <h1>Human-Led AI Letters</h1>
      <p className="lede">One short letter a week. Free. Leave whenever you like.</p>
      <div className="form-shell">
        {/*
          TODO (Manoj): the original WordPress page used a ConvertKit
          shortcode ([convertkit form=9628670]) which only works inside
          WordPress and will not render here. Replace this block with
          your actual ConvertKit embed code, copied from:
          ConvertKit dashboard > Grow > Landing Pages & Forms >
          (your form) > Embed > "Embed code (JS)"
        */}
        <p className="eyebrow" style={{ marginBottom: 8 }}>Sign-up form</p>
        <p style={{ marginBottom: 0 }}>
          This is a placeholder — paste your real ConvertKit embed code here
          to make the form live.
        </p>
      </div>
    </>
  );
}
