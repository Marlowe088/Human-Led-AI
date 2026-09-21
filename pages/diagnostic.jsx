import { useState } from 'react';
import Head from 'next/head';

/* ---------------------------------------------------------------------- */
/* Locked copy: questions, scoring, and the five Purpose Path free results */
/* ---------------------------------------------------------------------- */

const QUESTIONS = [
  {
    prompt: 'When you imagine a more meaningful next chapter, what feels most important?',
    options: [
      { letter: 'A', text: 'Being of real help to people, places, or work that genuinely need care.' },
      { letter: 'B', text: 'Building, improving, or growing something that creates practical value.' },
      { letter: 'C', text: 'Standing for what matters and protecting what should not be neglected.' },
      { letter: 'D', text: 'Understanding life more deeply and helping others see more clearly.' },
      { letter: 'E', text: 'Creating a freer, more authentic way forward that does not follow the old script.' },
    ],
  },
  {
    prompt: 'What kind of contribution gives you the strongest sense of quiet satisfaction?',
    options: [
      { letter: 'A', text: 'Supporting something patiently until it becomes steadier, healthier, or more whole.' },
      { letter: 'B', text: 'Turning potential into progress through structure, action, and improvement.' },
      { letter: 'C', text: 'Taking responsibility when something important needs courage, standards, or leadership.' },
      { letter: 'D', text: 'Offering insight, perspective, guidance, or teaching that helps someone understand.' },
      { letter: 'E', text: 'Opening a new path, exploring what others overlook, or creating an original direction.' },
    ],
  },
  {
    prompt: 'What frustrates you most when life feels misaligned?',
    options: [
      { letter: 'A', text: 'People, relationships, or meaningful responsibilities being neglected.' },
      { letter: 'B', text: 'Wasted potential, inefficiency, or things staying stuck when they could improve.' },
      { letter: 'C', text: 'Weak boundaries, lack of courage, or people avoiding necessary responsibility.' },
      { letter: 'D', text: 'Shallow thinking, confusion, noise, or people not seeking deeper truth.' },
      { letter: 'E', text: 'Feeling trapped in roles, routines, or expectations that leave no room for freedom.' },
    ],
  },
  {
    prompt: 'When you are at your best, what role do you naturally play?',
    options: [
      { letter: 'A', text: 'The steady presence who supports, tends, restores, and keeps things grounded.' },
      { letter: 'B', text: 'The builder who improves systems, creates momentum, and helps things work better.' },
      { letter: 'C', text: 'The protector who names what matters, holds the line, and takes responsibility.' },
      { letter: 'D', text: 'The guide who reflects, interprets, teaches, and brings wisdom into the room.' },
      { letter: 'E', text: 'The explorer who questions assumptions, finds new possibilities, and moves beyond convention.' },
    ],
  },
  {
    prompt: 'What do you most need to stop doing in order to live more truthfully?',
    options: [
      { letter: 'A', text: 'Carrying everyone and everything while quietly forgetting yourself.' },
      { letter: 'B', text: 'Measuring your worth by productivity, progress, achievement, or visible success.' },
      { letter: 'C', text: 'Staying strong, guarded, or in control because you feel responsible for everything.' },
      { letter: 'D', text: 'Hiding in thinking, learning, or observing instead of living and expressing your wisdom.' },
      { letter: 'E', text: 'Keeping yourself small inside a life that feels too narrow, predictable, or prescribed.' },
    ],
  },
  {
    prompt: 'Which sentence feels most like the deeper invitation of your next chapter?',
    options: [
      { letter: 'A', text: '"Serve without disappearing."' },
      { letter: 'B', text: '"Build what truly matters."' },
      { letter: 'C', text: '"Protect what is sacred without hardening."' },
      { letter: 'D', text: '"Live the wisdom, not just understand it."' },
      { letter: 'E', text: '"Turn freedom into a path, not an escape."' },
    ],
  },
  {
    prompt: 'What kind of work or activity feels most alive to you now?',
    options: [
      { letter: 'A', text: 'Work that helps, heals, supports, maintains, nurtures, or improves real lives quietly.' },
      { letter: 'B', text: 'Work that builds, organises, grows, improves, sells, creates value, or makes things better.' },
      { letter: 'C', text: 'Work that leads, protects, advocates, challenges, defends, or restores standards.' },
      { letter: 'D', text: 'Work that teaches, writes, interprets, advises, researches, explains, or guides.' },
      { letter: 'E', text: 'Work that explores, invents, travels, disrupts, experiments, creates, or opens new territory.' },
    ],
  },
  {
    prompt: 'When you feel lost, what are you most likely to search for?',
    options: [
      { letter: 'A', text: 'A way to feel useful, connected, and grounded again.' },
      { letter: 'B', text: 'A clearer plan, better system, or more effective way forward.' },
      { letter: 'C', text: 'A stronger boundary, decision, standard, or act of courage.' },
      { letter: 'D', text: 'A deeper insight, teaching, principle, or truth that explains what is happening.' },
      { letter: 'E', text: 'A new possibility, different environment, fresh start, or wider horizon.' },
    ],
  },
  {
    prompt: 'Which "Old Map" pattern do you recognise most?',
    options: [
      { letter: 'A', text: '"I must be needed, useful, and dependable to be worthy."' },
      { letter: 'B', text: '"I must keep improving, achieving, or producing to be valuable."' },
      { letter: 'C', text: '"I must stay strong, responsible, and in control because others will not."' },
      { letter: 'D', text: '"I must understand everything before I can fully live or act."' },
      { letter: 'E', text: '"I must keep moving, escaping, or searching because ordinary life will trap me."' },
    ],
  },
  {
    prompt: 'What would feel like real progress over the next 30 days?',
    options: [
      { letter: 'A', text: 'Creating more space for care, service, rest, and grounded connection without self-erasure.' },
      { letter: 'B', text: 'Making practical progress on something that feels meaningful and worth building.' },
      { letter: 'C', text: 'Taking one courageous stand, setting one boundary, or protecting something important.' },
      { letter: 'D', text: 'Turning one piece of wisdom or insight into visible expression, teaching, or practice.' },
      { letter: 'E', text: 'Taking one honest step toward freedom, originality, exploration, or a more authentic direction.' },
    ],
  },
];

const TYPES = {
  A: {
    name: 'The Steward',
    meaningThrough: 'care, steadiness, service, support, craft, and grounded contribution',
    p1: 'You may be someone who naturally notices what needs tending. People, relationships, spaces, responsibilities, communities, projects, homes, families, animals, traditions, or quiet forms of service may matter deeply to you.',
    p2: 'The Steward does not usually seek meaning through noise or spectacle. This path often finds meaning in being dependable, useful, kind, present, and quietly committed to what matters.',
    p3: 'At your best, you bring steadiness where life has become scattered. You help restore what has been neglected. You care for what others may overlook. You create safety, continuity, and trust.',
    meaningList: 'helping something or someone become steadier; caring for people, places, or work that genuinely matter; restoring order, warmth, beauty, or calm; offering practical support; doing meaningful work quietly and well; honouring responsibility without needing applause.',
    oldMapIntro: 'The Steward can become distorted when care turns into self-erasure.',
    oldMapQuote: 'I must be needed, useful, and dependable to be worthy.',
    oldMapContext: 'You may have spent years being the capable one, the reliable one, the one who holds things together. That may have helped you belong, serve, protect, or survive.',
    deeperQuestion: 'Can I serve without disappearing?',
    chapterP1: 'This chapter may be asking you to care in a more truthful way. Not less love. Not less service. Not less responsibility. But less self-abandonment.',
    chapterP2: 'The Steward’s next chapter is often about learning that your life matters too. Your needs, energy, peace, body, time, and inner world are also part of what must be tended.',
    reflectionQ: 'Where have I confused being useful with being worthy?',
    orientationPhrase: 'Serve without disappearing.',
    bridgeClause: 'where the Old Map may still be guiding you',
  },
  B: {
    name: 'The Optimizer',
    meaningThrough: 'growth, improvement, building, progress, value creation, and practical betterment',
    p1: 'You may be someone who naturally sees potential. You notice what could be improved, organised, strengthened, expanded, refined, or made more useful. You may be drawn to systems, business, projects, money, skills, tools, learning, strategy, or practical achievement.',
    p2: 'The Optimizer is not just interested in “more.” At its best, this path wants progress that matters. It wants to turn possibility into reality.',
    p3: 'At your best, you build. You improve. You create momentum. You help things become more effective, useful, valuable, and alive.',
    meaningList: 'building something meaningful; improving a system, project, business, skill, or process; turning potential into progress; creating practical value; making something work better; seeing visible movement from effort.',
    oldMapIntro: 'The Optimizer can become distorted when growth becomes a substitute for meaning.',
    oldMapQuote: 'I must keep improving, achieving, or producing to be valuable.',
    oldMapContext: 'You may have been rewarded for competence, progress, ambition, productivity, or results. That may have helped you succeed.',
    deeperQuestion: 'Am I building what truly matters — or only improving the old map?',
    chapterP1: 'This chapter may be asking you to shift from achievement for validation to progress with meaning. Not abandoning ambition. Not becoming passive. Not rejecting practical life. But asking better questions about what your energy is building.',
    chapterP2: 'The Optimizer’s next chapter often begins when success alone no longer satisfies. Something in you wants progress that feels aligned, useful, and truthful.',
    reflectionQ: 'What am I still trying to improve that may no longer need to lead my life?',
    orientationPhrase: 'Build what truly matters.',
    bridgeClause: 'whether the Old Map is still measuring your worth through achievement',
  },
  C: {
    name: 'The Protector',
    meaningThrough: 'courage, protection, standards, leadership, justice, responsibility, and standing for what matters',
    p1: 'You may be someone who feels deeply when something important is being neglected, weakened, crossed, exploited, or left undefended. You may naturally sense when boundaries are missing, when truth is being avoided, when responsibility is being abandoned, or when something sacred needs protection.',
    p2: 'The Protector is not here to dominate. At its best, this path protects life, dignity, values, people, principles, and what should not be casually sacrificed.',
    p3: 'At your best, you bring courage, clarity, moral strength, and responsibility.',
    meaningList: 'standing up for what matters; protecting people, values, or work you care about; setting a necessary boundary; restoring standards; leading when others avoid responsibility; bringing courage into a difficult situation.',
    oldMapIntro: 'The Protector can become distorted when protection becomes control, hardness, or over-responsibility.',
    oldMapQuote: 'I must stay strong, responsible, and in control because others will not.',
    oldMapContext: 'You may have learned to be strong because someone had to be. You may have carried more than was yours because it felt unsafe not to.',
    deeperQuestion: 'Can I protect what is sacred without hardening?',
    chapterP1: 'This chapter may be asking you to use your strength with more wisdom. Not to stop caring. Not to lower your standards. Not to become passive. But to stop carrying everything as if the world depends entirely on your vigilance.',
    chapterP2: 'The Protector’s next chapter is often about discerning what truly needs your protection — and what needs your trust, softness, or release.',
    reflectionQ: 'What am I still carrying because I believe no one else will?',
    orientationPhrase: 'Protect what is sacred without hardening.',
    bridgeClause: 'where the Old Map may still be making you over-carry',
  },
  D: {
    name: 'The Guide',
    meaningThrough: 'wisdom, insight, teaching, interpretation, counsel, truth, and illumination',
    p1: 'You may be someone who has always searched for the deeper pattern. You may be drawn to books, ideas, spiritual teachings, psychology, philosophy, meaning, language, mentoring, writing, reflection, or helping others understand what they cannot yet name.',
    p2: 'The Guide does not merely want information. It wants understanding that changes how life is lived.',
    p3: 'At your best, you help bring clarity where there is confusion. You translate complexity. You name what others feel but cannot say. You help wisdom become practical.',
    meaningList: 'understanding something deeply; teaching, writing, advising, or interpreting; helping someone see clearly; translating wisdom into practical insight; studying what is true and useful; turning life experience into guidance.',
    oldMapIntro: 'The Guide can become distorted when wisdom stays private, intellectual, or endlessly unfinished.',
    oldMapQuote: 'I must understand everything before I can fully live or act.',
    oldMapContext: 'You may have gathered insight for years. You may know a great deal. But part of you may also know that more understanding is no longer the same as embodiment.',
    deeperQuestion: 'Am I living the wisdom — or only collecting it?',
    chapterP1: 'This chapter may be asking you to turn insight into expression, practice, teaching, service, or visible truth. Not to stop learning. Not to abandon depth. Not to simplify yourself into slogans. But to let wisdom become lived.',
    chapterP2: 'The Guide’s next chapter often begins when private understanding is no longer enough. Something in you wants to speak, guide, write, teach, embody, or practise what you know.',
    reflectionQ: 'What wisdom have I understood privately but not yet lived or expressed?',
    orientationPhrase: 'Live the wisdom, not just understand it.',
    bridgeClause: 'where you may be hiding in thought',
  },
  E: {
    name: 'The Pathfinder',
    meaningThrough: 'freedom, originality, exploration, reinvention, authenticity, and new ways forward',
    p1: 'You may be someone who feels constrained by inherited scripts, narrow roles, predictable routes, or lives that look correct but feel too small. You may be drawn to fresh possibilities, alternative paths, creative freedom, travel, entrepreneurship, originality, spiritual exploration, or ways of living that others may not immediately understand.',
    p2: 'The Pathfinder is not simply restless. At its best, this path senses when a new direction is needed before the old world can name it.',
    p3: 'At your best, you open doors. You question assumptions. You explore what others avoid. You help life move beyond stale patterns.',
    meaningList: 'exploring a new direction; questioning inherited assumptions; creating something original; reclaiming freedom and authenticity; stepping outside old roles; finding a path that feels more truthful than conventional.',
    oldMapIntro: 'The Pathfinder can become distorted when freedom becomes escape, avoidance, or endless searching.',
    oldMapQuote: 'I must keep moving, escaping, or searching because ordinary life will trap me.',
    oldMapContext: 'You may have learned to distrust fixed structures. You may feel allergic to being boxed in. But freedom without orientation can become another kind of drift.',
    deeperQuestion: 'Can I turn freedom into a path, not an escape?',
    chapterP1: 'This chapter may be asking you to honour your need for freedom while giving it direction. Not to become conventional. Not to silence your originality. Not to return to a life that feels too narrow. But to create a path strong enough to carry your freedom.',
    chapterP2: 'The Pathfinder’s next chapter often begins when searching is no longer enough. Something in you wants to choose, commit, create, or walk a more truthful direction.',
    reflectionQ: 'Where am I seeking freedom — and where might I be avoiding commitment?',
    orientationPhrase: 'Turn freedom into a path, not an escape.',
    bridgeClause: 'what still feels alive',
  },
};

const FAQS = [
  {
    q: 'Is this a personality test?',
    a: 'No. It’s not here to reduce you to a type, rank you spiritually, or hand you a permanent label. It identifies the pattern most active in this chapter of your life — which can shift as your life does.',
  },
  {
    q: 'Is this religious?',
    a: 'No. Nothing here requires a belief system, and nothing in your report will ask you to adopt one.',
  },
  {
    q: 'Will I have to make drastic changes?',
    a: 'No. The first step here is one honest map and one honest next step — not walking away from your responsibilities or turning everything upside down.',
  },
  {
    q: 'Is my full report actually personal, or a template with my name inserted?',
    a: 'Genuinely personal — built from your specific answers, written by me, not auto-generated. That’s also exactly what the guarantee above covers: if it doesn’t accurately describe you, you don’t pay for it.',
  },
  {
    q: 'What if my result feels wrong?',
    a: 'That happens sometimes, and it’s useful information either way — it’s possible more than one path felt true while you were answering, and this result simply reflects which one scored strongest right now. If it still feels off after reading, the guarantee applies.',
  },
  {
    q: 'How is this different from therapy or coaching?',
    a: 'It isn’t a replacement for either, and it isn’t therapy, medical advice, or a diagnosis of anything clinical. It’s a written orientation tool — something you read and sit with, not a session you attend.',
  },
];

const REPORT_INCLUDES = [
  'The exact moment in a typical week where this pattern makes your decisions for you, before you’ve noticed you’re making one',
  'What you’ve been mistaking for the problem — and what the real one has been the whole time',
  'Where this shows up hardest: work, relationships, or how you talk to yourself when no one’s listening',
  'The one practice that addresses the actual pattern, not the symptom — the thing most people trying to “fix this” have never been pointed at',
  'What tends to happen in the 90 days after someone acts on this correctly, versus what happens when they don’t',
];

/* ---------------------------------------------------------------------- */

function scoreAnswers(answers) {
  const tally = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  answers.forEach((letter) => {
    if (letter) tally[letter] += 1;
  });
  const max = Math.max(...Object.values(tally));
  const leaders = Object.keys(tally).filter((letter) => tally[letter] === max);
  if (leaders.length === 1) return leaders[0];
  // Exact-tie rule: Question 1's answer decides it, if Q1's letter is among the leaders.
  const q1 = answers[0];
  if (q1 && leaders.includes(q1)) return q1;
  return leaders[0];
}

export default function DiagnosticPage() {
  const [step, setStep] = useState(0); // 0-9 questions, 10 email gate, 11 result
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sendResult, setSendResult] = useState(false);
  const [sendUpdates, setSendUpdates] = useState(false);
  const [purchaseConsent, setPurchaseConsent] = useState(false);
  const [gateError, setGateError] = useState('');

  const totalQuestions = QUESTIONS.length;

  function selectAnswer(letter) {
    const next = [...answers];
    next[step] = letter;
    setAnswers(next);
    setTimeout(() => {
      if (step < totalQuestions - 1) {
        setStep(step + 1);
      } else {
        setStep(totalQuestions); // move to email gate
      }
    }, 150);
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  function submitGate(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !sendResult) {
      setGateError('Please add your name, your email, and tick the box so I know where to send your result.');
      return;
    }
    setGateError('');

    const typeInfo = TYPES[scoreAnswers(answers)];
    const purposePath = typeInfo.name.replace(/^The\s+/, '');

    // Best-effort: send to Kit, but never let this block or fail the
    // reveal. The on-screen result is the primary delivery.
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        purposePath,
        wantsUpdates: sendUpdates,
      }),
    }).catch((err) => {
      console.error('subscribe request failed:', err);
    });

    setStep(totalQuestions + 1); // move to result
  }

  const resultType = step > totalQuestions ? TYPES[scoreAnswers(answers)] : null;

  return (
    <>
      <Head>
        <title>The Purpose Path™ Diagnostic — Manoj Tailor</title>
        <meta name="description" content="A short diagnostic to identify the pattern most active in this chapter of your life." />
      </Head>

      {/* ---------------- Questions ---------------- */}
      {step < totalQuestions && (
        <>
          <h1>The Purpose Path<sup className="tm">™</sup> Diagnostic.</h1>
          <p className="lede">
            For each question, choose the answer that feels most true in this chapter of your
            life. Not what sounds most impressive. Not what others expect of you.
            What&rsquo;s most recognisable now.
          </p>

          <p className="progress-label">
            Question {step + 1} of {totalQuestions}
          </p>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((step + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {step > 0 && (
            <button type="button" className="back-link" onClick={goBack}>
              ← Previous
            </button>
          )}

          <p className="question-prompt">{QUESTIONS[step].prompt}</p>

          <ul className="options-list">
            {QUESTIONS[step].options.map((opt) => (
              <li key={opt.letter}>
                <button
                  type="button"
                  className={`option-btn${answers[step] === opt.letter ? ' selected' : ''}`}
                  onClick={() => selectAnswer(opt.letter)}
                >
                  <span className="option-letter">{opt.letter}.</span>
                  {opt.text}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ---------------- Email gate ---------------- */}
      {step === totalQuestions && (
        <>
          <h1>Almost there.</h1>
          <p className="lede">Where should I send your result?</p>

          <form onSubmit={submitGate}>
            <label className="caption" htmlFor="df-name">Name</label>
            <input
              id="df-name"
              className="form-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />

            <label className="caption" htmlFor="df-email">Email</label>
            <input
              id="df-email"
              className="form-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <div className="checkbox-row">
              <input
                id="df-consent-required"
                type="checkbox"
                checked={sendResult}
                onChange={(e) => setSendResult(e.target.checked)}
              />
              <label htmlFor="df-consent-required">Send me my free result by email.</label>
            </div>

            <div className="checkbox-row">
              <input
                id="df-consent-optional"
                type="checkbox"
                checked={sendUpdates}
                onChange={(e) => setSendUpdates(e.target.checked)}
              />
              <label htmlFor="df-consent-optional">
                Also send me occasional emails from Manoj about The Meaning Map<sup className="tm">™</sup> and this
                work. I can unsubscribe any time — see the{' '}
                <a href="/privacy-policy">Privacy Policy</a> for how your data is used.
              </label>
            </div>

            {gateError && <p className="form-error">{gateError}</p>}

            <div className="cta-row">
              <button type="submit" className="cta">
                See My Result →
              </button>
            </div>
          </form>

          <button type="button" className="back-link" onClick={() => setStep(totalQuestions - 1)}>
            ← Back to the diagnostic
          </button>
        </>
      )}

      {/* ---------------- Result + offer ---------------- */}
      {step > totalQuestions && resultType && (
        <>
          <h1>Your Purpose Path: {resultType.name}</h1>

          <p>Your current Purpose Path appears to be <strong>{resultType.name}</strong>.</p>
          <p>This path finds meaning through {resultType.meaningThrough}.</p>
          <p>{resultType.p1}</p>
          <p>{resultType.p2}</p>
          <p>{resultType.p3}</p>

          <h3>What gives this path meaning</h3>
          <p>You may feel most alive when you are: {resultType.meaningList}</p>

          <h3>The Old Map distortion</h3>
          <p>{resultType.oldMapIntro}</p>
          <blockquote className="old-map">The Old Map may say: &ldquo;{resultType.oldMapQuote}&rdquo;</blockquote>
          <p>{resultType.oldMapContext}</p>
          <p>But in this chapter, the deeper question may be: <em>{resultType.deeperQuestion}</em></p>

          <h3>What this chapter may be asking</h3>
          <p>{resultType.chapterP1}</p>
          <p>{resultType.chapterP2}</p>

          <p><strong>Reflection question:</strong> {resultType.reflectionQ}</p>
          <p><strong>First orientation phrase:</strong> {resultType.orientationPhrase}</p>

          <p>
            Your Purpose Path is a doorway, not the full map. Your Meaning Map helps you clarify
            what no longer fits, what matters now, {resultType.bridgeClause}, and the next honest
            step to take from this path.
          </p>

          <hr className="rule" />

          <p><strong>Your full {resultType.name} Meaning Map includes:</strong></p>
          <ul>
            {REPORT_INCLUDES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p>
            Your full Meaning Map is built from your specific answers — not a generic version
            of the {resultType.name} profile. Ready to see it?
          </p>

          <div className="cta-row">
            <button type="button" className="cta" onClick={() => document.getElementById('offer').scrollIntoView({ behavior: 'smooth' })}>
              Get My Meaning Map →
            </button>
          </div>

          <p className="meta-line">
            Your Own Meaning Map, Built From Your Answers &middot; No Course, No App, No Ongoing
            Commitment &middot; Written By Me, Not Generated From a Template
          </p>

          <p className="caption">
            Your answers are for reflection and orientation only. This diagnostic is not therapy,
            medical advice, religious instruction, or a fixed personality assessment. Use it as a
            starting point, not a final verdict.
          </p>

          <hr className="rule" />

          <div id="offer">
            <p><strong>Your full {resultType.name} Meaning Map — £29</strong></p>
            <p>
              Less than the cost of a single hour with most therapists or coaches, delivered as a
              complete, personal, written report you keep — not a session you have to be
              present for, not a course you have to work through.
            </p>

            <div className="checkbox-row">
              <input
                id="df-purchase-consent"
                type="checkbox"
                checked={purchaseConsent}
                onChange={(e) => setPurchaseConsent(e.target.checked)}
              />
              <label htmlFor="df-purchase-consent">
                By purchasing, you agree to receive immediate access to this digital product. You
                understand that once access begins, your statutory cancellation rights may be
                affected, except where the product is faulty, inaccessible, or not as described.
                The Meaning Map<sup className="tm">™</sup> is also covered by the 14-day guarantee described on this
                page.
              </label>
            </div>

            <div className="cta-row">
              <button type="button" className="cta" disabled={!purchaseConsent} title="Checkout is not connected yet">
                Get My Meaning Map — £29 →
              </button>
            </div>

            <p><strong>Read it. If it doesn&rsquo;t land, you don&rsquo;t pay for it.</strong></p>
            <p>
              If your Meaning Map doesn&rsquo;t accurately describe what&rsquo;s actually going on
              for you, reply to the delivery email within 14 days and I&rsquo;ll refund you in
              full — no form to fill in, just tell me it missed. I&rsquo;d rather you get an
              honest no than a reluctant yes.
            </p>

            <div className="cta-row">
              <button type="button" className="cta" disabled={!purchaseConsent} title="Checkout is not connected yet">
                Get My Meaning Map — £29 →
              </button>
            </div>
          </div>

          <hr className="rule" />

          <h2>A few honest questions before you decide</h2>
          {FAQS.map((item) => (
            <p key={item.q}><strong>{item.q}</strong> {item.a}</p>
          ))}

          <hr className="rule" />

          <p>
            <strong>A short note from me.</strong> I&rsquo;m not writing this from outside your
            situation. This site — this whole next chapter — is part of my own.
            I&rsquo;m building it for people who sense the world getting faster, louder, more
            automated, but who also know the older questions haven&rsquo;t gone anywhere. If
            anything, they matter more now.
          </p>

          <div className="cta-row">
            <button type="button" className="cta" disabled={!purchaseConsent} title="Checkout is not connected yet">
              Get My Meaning Map — £29 →
            </button>
          </div>
        </>
      )}
    </>
  );
}
