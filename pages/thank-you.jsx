import Head from 'next/head';
import Link from 'next/link';
import { getStripe, isValidSessionId } from '../lib/stripe';

export async function getServerSideProps({ query }) {
  const sessionId = typeof query.session_id === 'string' ? query.session_id : '';
  const stripe = getStripe();

  if (!stripe || !isValidSessionId(sessionId)) {
    return { props: { status: 'unknown' } };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') {
      return { props: { status: 'pending' } };
    }
    return {
      props: {
        status: 'paid',
        sessionId,
        purposePath: (session.metadata && session.metadata.purposePath) || '',
        email:
          (session.customer_details && session.customer_details.email) ||
          session.customer_email ||
          '',
      },
    };
  } catch (err) {
    console.error('thank-you: could not retrieve session:', err.message);
    return { props: { status: 'unknown' } };
  }
}

export default function ThankYouPage({ status, sessionId, purposePath, email }) {
  return (
    <>
      <Head>
        <title>Thank you — Manoj Tailor</title>
        <meta name="robots" content="noindex" />
      </Head>

      {status === 'paid' && (
        <>
          <h1>Thank you.</h1>

          <p className="lede">
            Your Meaning Map{purposePath ? ` for The ${purposePath}` : ''} is ready.
          </p>

          <p className="cta-row">
            <a className="cta" href={`/api/download?session_id=${sessionId}`}>
              Download your Meaning Map (PDF)
            </a>
          </p>

          <p>
            A copy is also on its way to {email ? <strong>{email}</strong> : 'your inbox'}. If you
            don&rsquo;t see it within a few minutes, check your Promotions tab and your spam folder.
          </p>

          <p>
            Read it. If it doesn&rsquo;t accurately describe what&rsquo;s going on for you, reply to
            that email within 14 days and I&rsquo;ll refund you in full. The details are in the{' '}
            <Link href="/refund-policy">Refund Policy</Link>.
          </p>

          <p>~Manoj</p>
        </>
      )}

      {status === 'pending' && (
        <>
          <h1>Your payment is still being confirmed.</h1>
          <p>
            This can take a moment. Please wait a minute and refresh this page. If it still
            hasn&rsquo;t changed, email{' '}
            <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a> and I&rsquo;ll sort it
            out directly.
          </p>
        </>
      )}

      {status === 'unknown' && (
        <>
          <h1>We couldn&rsquo;t find that purchase.</h1>
          <p>
            If you&rsquo;ve just paid, email{' '}
            <a href="mailto:manoj@manojtailor.com">manoj@manojtailor.com</a> with the email address
            you used and I&rsquo;ll make sure you get your Meaning Map.
          </p>
        </>
      )}
    </>
  );
}
