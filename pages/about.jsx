import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Human-Led AI</title>
      </Head>
      <p className="eyebrow">About</p>
      <h1>The One-Eyed Marksman</h1>
      <div className="photo-frame">
        <img src="/manoj-photo.png" alt="Manoj Tailor" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: `<p>So here is the part that makes no sense until it does.</p>

<p>I am a technophobe. I do not code. For most of my adult life, the most technical thing I did with any reliability was send an email and, as you now know, even that took me the better part of three months the first time round.</p>

<p>So why would a person like me walk head-first into artificial intelligence, at the exact moment the rest of the world was still deciding whether to take it seriously?</p>

<p>It sounds like a contradiction. A one-eyed marksman deciding to become a sniper. It isn't, and here is why.</p>

<p><strong>January 2023</strong>.</p>

<p>ChatGPT had launched two months earlier, at the end of November 2022, and I was, like most people, only half paying attention.</p>

<p>Then I actually sat down and used it.</p>

<p>Most people were still treating it as a novelty a party trick that wrote limericks and finished your emails. I did not have that luxury. Even being a technophobe I could still not afford to dismiss it. If something this different had arrived, I needed to understand it properly or not at all. I was in business after all. What would I look like in front of my peers if I did not understand and use AI? There was no comfortable middle ground available to someone like me.</p>

<p>It took me over two months just to learn how to use it with any competence. Three and a half years on, that feels like a different lifetime. It was not.</p>

<p>That gap between the people who glanced at AI and moved on, and the people who sat with it long enough for it to actually change how they think, is why this site was built.</p>

<p><strong>The Hunt.</strong></p>

<p>I grew tired, fairly quickly, of being lost in a fog of "AI this" and "AI that."</p>

<p>I wanted to know where I stood. AI was changing the rules of work, truth and human value faster than I could redraw my own map of them. I wanted to feel sane in a world that felt like it was accelerating past me.</p>

<p>And the information available to help me did not help much. There was a great deal of it, and almost none of it was built for a specific person's actual life. It was general where I needed it to be personal, and complex where I needed it to be simple. What existed was written for AI engineers, for investors, for people already fluent in the vocabulary. Not for a person standing at the edge of it asking the only question that actually mattered: <em>"what does this mean for me?"</em></p>

<p>I wanted to know what AI meant for my work, my income, the people I am responsible for. I could not find an honest, usable answer anywhere. So I built one first for myself, because my future and the future of the people I love were genuinely at stake, and it had to be right.</p>

<p><strong>What I Actually Did.</strong></p>

<p>I did not read one article and form an opinion. I used the thing, daily, for three and a half years and counting, and paid close attention to what it changed in how I think, decide and work.</p>

<p>I tested it against real deadlines and real decisions, not hypothetical ones. Somewhere in that process, the fog started to lift, and a small number of working principles emerged ideas I could actually rely on, the kind that hold up when the technology underneath them shifts again, which it does constantly.</p>

<p>That is the material this site is built from. Not theory borrowed from someone else's whitepaper. Three and a half years of a technophobe going deliberately, methodically, un-glamorously down the rabbit hole, and writing down what he found.</p>

<p><strong>Where The Human Judgment Actually Comes In.</strong></p>

<p>This site is proof of the method, not just a description of it.</p>

<p>Before I wrote a word of it, I used AI to pressure-test the idea itself the market, the audience, whether "human-led AI" was a genuine gap or simply something I wanted to be true. It compressed months of guesswork into weeks. What it could not do was tell me whether the idea was actually any good. That decision stayed mine, the whole way through.</p>

<p>I use it the same way on the other side of my work. I am a business and property investor work through financial analysis, and stress-test assumptions before any money changes hands. AI does the heavy sifting reading faster than I can, cross-referencing faster than I can, catching the detail on page thirty-three that I might have missed reading at midnight.</p>

<p>But I sign nothing on its say-so. Every decision that actually matters still passes through me last, my judgment, my experience, my name against the outcome if I get it wrong. AI can hand me the strongest case for something and the strongest case against it. It cannot hand me the accountability to act on either one. That part was never going to be automatable, and I would not particularly want it to be.</p>

<p>This is not theory. It is how I work most days, right now, with real consequences attached both professionally and personally.</p>

<p><strong>If Any Of This Sounds Like You...</strong></p>

<p>You want to know what remains uniquely human when machines can convincingly imitate more and more of what we do.</p>

<p>You want to know what AI actually means for your work, your business, your industry, your children, and your own sense of being human without the answer being either blind panic or blind cheerleading.</p>

<p>You want to preserve your meaning, your creativity, your capability and your judgment inside a society that is increasingly AI-assisted, without pretending the technology isn't real or surrendering your agency to it either.</p>

<p>You want a bridge between the technology and the meaning of it. Something built by a person who had to earn the understanding rather than someone who was born fluent in it.</p>

<p>If that is you, we are kindred souls. Welcome.</p>

<p><strong>From AI Anxious to AI Clarity.</strong></p>

<p>That is the shift this site exists to help you make.</p>

<p>Not by adding more noise to an already noisy conversation. By offering the thing I could not find when I went looking: a modern, usable, personal way of thinking about using AI one that respects how complicated the subject actually is, without requiring you to become an engineer to understand it.</p>

<p>I wrote a manifesto to set this all out properly. Think of it as the loud, clear call to arms for people like us "Human-Led Users of AI", doing the work of staying human while everything around us gets faster. I would rather you read it than have me summarise it here.</p>

<p><a href="/manifesto"><strong>Read the Manifesto →</strong></a></p>

<p>Please contact me any time. I read every email myself no filters, no AI assistant standing between us.</p>

<p><strong>~Manoj</strong><br><strong>Human-Led AI.<br>Clear. Capable. Human.</strong></p>` }}
      />
    </>
  );
}
