import Head from 'next/head';
import Link from 'next/link';
import BrandSignature from '../components/BrandSignature';

export default function ValuesPage() {
  return (
    <>
      <Head>
        <title>Our Values — Manoj Tailor</title>
        <meta
          name="description"
          content="The core values that shape how I show up in the world, in business and in life."
        />
      </Head>

      <h1>Our Values.</h1>

      <p className="lede">
        Values are the guiding principles that shape our actions, decisions, behaviour and
        choices in life. When we identify, understand and vocalise our values they help us to
        live more intentional, fulfilling and dharma driven lives.
      </p>

      <p>
        The values below are the ones I have chosen which define who we are and what we believe
        in both in business and in life so you know what you can expect from me if, and when, you
        are ready to join.
      </p>

      <h3>This Is What We Stand For:</h3>

      <p>Below are some of the core values we hold dear. They demonstrate how we show up in the world.</p>

      <h3>Boldness.</h3>
      <p>
        We approach life&rsquo;s obstacles with confidence and determination, unafraid to take
        risks or make difficult decisions.
      </p>

      <h3>Courage: Staying courageous in spite of fear.</h3>
      <p>
        We inspire ourselves and all those we come into contact with to overcome challenges and
        adversity. Courage to us ignites personal growth and resilience.
      </p>

      <h3>Contribution.</h3>
      <p>
        To do what we can, moment by moment, step by step, to make the world we live in a better
        place, in whichever way we can, big or small.
      </p>

      <h3>Service.</h3>
      <p>
        We contribute to the well-being and happiness of all those we come into contact with,
        engaging in acts of kindness, generosity, and selflessness, and using our skills and
        resources to make a positive impact on the lives of others and the world we live in.
      </p>

      <h3>Leadership.</h3>
      <p>
        We inspire, guide, and support others towards a common goal or vision, demonstrating
        effective communication, decision-making, and problem-solving skills. We lead by example.
      </p>

      <h3>Advocating Preeminence.</h3>
      <p>
        Jay Abraham&rsquo;s Strategy of Preeminence demands that once somebody comes into our
        world, from that moment onwards we see ourselves &mdash; in the relationships we have
        with our customers, subscribers and clients &mdash; as one of being their most trusted
        advisor, counsel and confidant.
      </p>
      <p>
        We want to be seen as the definitive expert source, and the most trusted advisor, and as
        a fiduciary &mdash; as someone who has taken on the responsibility of their governance,
        their decisions, their best interests, as their most trusted counsel.
      </p>

      <h3>Going beyond the obvious.</h3>
      <p>Always looking within and without and asking better questions of ourselves. We are resourceful.</p>

      <h3>Determination.</h3>
      <p>
        We persist in the face of obstacles, setbacks, and challenges, maintaining focus and
        motivation in the pursuit of our personal and professional goals.
      </p>

      <h3>Keeping things simple &mdash; or as simple as they can be.</h3>
      <p>
        We strive for more high thinking and less complexity wherever we can. We value quality
        over quantity, focusing on the essential aspects of life that bring true fulfilment and
        happiness.
      </p>

      <h3>Staying Accountable.</h3>
      <p>
        We promote self-awareness and integrity in all that we do. We take ownership and
        responsibility for our own actions and decisions. We own up to mistakes, and make amends
        where and when necessary.
      </p>

      <h3>Being Adaptable.</h3>
      <p>We are flexible and responsive to change. We embrace new experiences and challenges with a positive attitude.</p>

      <h3>Honesty.</h3>
      <p>
        Being truthful, sincere, and transparent in all aspects of life, valuing integrity and
        trust in personal and professional relationships. Staying truthful and sincere in
        communications. These all act as great foundations for trust.
      </p>

      <h3>Continuous Learning. We stay lean and agile.</h3>
      <p>
        We continuously seek new opportunities for personal and professional development,
        embracing new experiences and challenges as a means of expanding our knowledge and
        skills.
      </p>
      <p>We are on a path of self-discovery and ultimately self-realisation.</p>

      <hr className="rule" />

      <p>
        Thanks for stopping by and reading this page. <Link href="/contact">Contact us any time.</Link>
      </p>

      <p>I will be waiting.</p>

      <BrandSignature />
    </>
  );
}
