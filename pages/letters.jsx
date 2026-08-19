import Head from 'next/head';

export default function LettersPage() {
  return (
    <>
      <Head>
        <title>Human-Led AI Letters</title>
      </Head>
      <p className="eyebrow">Letters</p>
      <h1>Human-Led AI Letters</h1>
      <p className="lede">Clear. Capable. Human.</p>
      <div
        dangerouslySetInnerHTML={{ __html: `<p><strong>For The Record.</strong></p>

<p>You will not find a buy button on this page. There is no cart, no price. Nowhere to pull out a credit card even if you wanted to. I know how strange that is to read on a page that clearly wants something from you. Stay with me anyway, it will be well worth it!</p>

<p><strong>Where This All Actually Leads.</strong></p>

<p>If you have read this far into the site, you have probably already leaned in more than once.</p>

<p>This is where you step forward. And it starts, simply, with an email address.</p>

<p>You will receive a short series of letters through email, roughly five minutes each that pick up exactly where the manifesto left off. Call it a further orientation. One idea at a time, in the order your mind can actually absorb it, instead of all of it at once.</p>

<p>By the end of them, one of two things will happen.</p>

<p>You will still be here, and you will want more.</p>

<p>Or you will have found the unsubscribe button and have used it, because this is not for you right now, or possibly ever. Forget any mystic on a late-night phone line you will have your own honest answer, from paying real attention for a week.</p>

<p>Both outcomes are completely fine. The second one is, if I'm honest, half the point. I would rather you spend a week finding out for free than commit to something before you actually know what it is.</p>

<p><strong>Why Free, And Why First?</strong></p>

<p>The easy version of this page would ask for your money before you've had a chance to think.</p>

<p>I would rather ask for a week of your inbox instead. Slower. Quieter. The opposite of the noise and adrenaline everyone else seems to be selling around AI right now. Nobody rushes you into agency. You arrive at it, one honest email at a time and by the time anything costs anything, you will already know exactly what you are and are not saying yes to.</p>

<p><strong><em>"You do not need to master AI. You need to stay yourself while everyone around you tries to master it for you."</em></strong></p>

<p>That is the whole letters series, compressed into one line.</p>

<p>If you're a visual person like me...</p>

<p>Picture two roads leaving the same junction.</p>

<p>One is crowded, fast, and everyone on it is checking over their shoulder to see how far behind they've fallen. The other is quieter, a little slower, and the people walking it are looking straight ahead not because they're behind, but because they already decided where they're going before they started moving.</p>

<p>Same AI. Same tools. Completely different way of walking through it. That second road is what these letters are actually mapping.</p>

<p><strong>One Honest Push.</strong></p>

<p>Nothing changes for you until you actually apply this to your own life, in your own words, on your own terms. Reading about it is not the same as doing it, and I won't pretend otherwise.</p>

<p>Self-awareness is the starting line, not the finish. That is genuinely all this asks of you at the start your attention, for about five minutes a day, for a week.</p>

<p>Or you can stay exactly where you are, doing exactly what you've always done. No judgment here either way. Some people are not ready yet, and that's a perfectly honest place to be.</p>

<p>You know your own crossroads better than I do. I'm just here to make sure you see it clearly before you choose.</p>

<p><strong>Stay Connected.</strong></p>

<p>This site is going to keep expanding more letters, more essays, more of the map filled in.</p>

<p>If you don't want to miss what comes next, this list is the way to stay close to it.</p>

<p>These letters are meant to be a quieter place to think about what is changing, what is being gained, what may be lost, and what needs to remain human.</p>

<p>It's free and you can unsubscribe at any time.</p>

<p>And whether you join or not: reach out any time. Tell me what excites you here, what you disagree with, or what this site could simply do better. I read every email.</p>

<p><strong>~Manoj</strong><br>Human-Led AI<br>Clear. Capable. Human.</p>` }}
      />
      <a href="/join" className="cta">Join Human-Led AI Letters →</a>
    </>
  );
}
