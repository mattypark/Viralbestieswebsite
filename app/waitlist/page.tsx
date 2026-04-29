import {
  Play,
  Check,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Flame,
  Mic,
  Target,
  PenLine,
  MessageSquare,
  DollarSign,
  Settings2,
  Brain,
  Heart,
} from "lucide-react";
import MasterclassForm from "@/components/MasterclassForm";
import Reveal from "@/components/Reveal";
import BackButton from "@/components/BackButton";
import JJMark from "@/components/JJMark";
import Constellation from "@/components/Constellation";

type Topic = {
  icon: React.ReactNode;
  label: string;
};

// "You will be coached on" — the nine coaching topics
const COACHING_TOPICS: Topic[] = [
  { icon: <Brain size={18} className="text-black" />, label: "Content psychology" },
  { icon: <MessageSquare size={18} className="text-black" />, label: "Messaging" },
  { icon: <Flame size={18} className="text-black" />, label: "Hooks" },
  { icon: <Mic size={18} className="text-black" />, label: "Talking-head delivery" },
  { icon: <PenLine size={18} className="text-black" />, label: "Storytelling" },
  { icon: <DollarSign size={18} className="text-black" />, label: "Monetization" },
  { icon: <Settings2 size={18} className="text-black" />, label: "Account setup" },
  { icon: <Target size={18} className="text-black" />, label: "Implementation" },
  { icon: <Heart size={18} className="text-black" />, label: "Mindset & self-concept" },
];

// "Inside this experience, you will learn how to:"
const LEARN_BULLETS = [
  "Clarify your niche and message",
  "Become more powerful on camera",
  "Create content people actually connect with",
  "Build trust through magnetic storytelling",
  "Put a simple offer behind your content",
  "Turn attention into momentum, and momentum into money",
];

// Power Weekend bullets
const POWER_WEEKEND = [
  "Define who you are talking to",
  "Optimize your account",
  "Strengthen your presence on camera",
  "Script your first content",
  "Create your first monetization path",
  "Prepare for the 30-day sprint",
];

// Challenge structure — "For 30 days, you will receive:"
const CHALLENGE_STRUCTURE = [
  "A daily lesson and challenge",
  "A daily checklist",
  "A clear content focus",
  "Posting requirements",
  "Support inside the community",
  "Two live sessions per week for coaching and audits",
];

// Results-oriented bullets
const RESULTS = [
  "Stop hiding",
  "Start posting consistently",
  "Build real confidence",
  "Become clearer in your message",
  "Attract the right people",
  "Build momentum",
  "Create income opportunities around your voice",
];

// Offer stack
const OFFER_STACK = [
  "Live virtual coaching",
  "Daily unlocked lessons",
  "Daily implementation challenges",
  "Posting accountability",
  "Two weekly coaching & audit calls",
  "Community support inside Viral Besties Club",
  "A pathway into continued growth through the $111/month membership",
];

// Who it's for
const WHO_ITS_FOR = [
  "Creators",
  "Coaches",
  "Service providers",
  "Women building a personal brand",
  "Women who want to stop hiding",
  "Women who know they are meant for more",
  "Women ready to be challenged, coached, and seen",
];

// Beta perks
const BETA_PERKS = [
  "Get in before the public launch",
  "Experience the full challenge live",
  "Help shape future rounds",
  "Access founding pricing",
  "Be part of the first wave of testimonials and results",
];

export default function WaitlistPage() {
  return (
    <main className="relative mx-auto w-full max-w-2xl px-6 py-12 md:py-16 flex flex-col gap-12">
      {/* ---- Faint astrology decorations scattered behind content ---- */}
      <Constellation
        position="top-32 -left-12 hidden md:block"
        size={180}
        variant="scatter"
        opacity={10}
      />
      <Constellation
        position="top-[60vh] -right-16 hidden md:block"
        size={220}
        variant="lines"
        opacity={8}
      />
      <Constellation
        position="top-[120vh] -left-20 hidden md:block"
        size={260}
        variant="wheel"
        opacity={5}
      />
      <Constellation
        position="top-[180vh] -right-12 hidden md:block"
        size={200}
        variant="scatter"
        opacity={9}
      />
      <Constellation
        position="top-[240vh] -left-16 hidden md:block"
        size={240}
        variant="lines"
        opacity={7}
      />

      <BackButton />

      {/* ---- JJ Monogram (replaces avatar + social row) ---- */}
      <Reveal>
        <div className="flex justify-center">
          <JJMark />
        </div>
      </Reveal>

      {/* ---- HERO ---- */}
      <Reveal delay={80}>
        <div className="relative flex flex-col items-center gap-4 text-center">
          {/* Faint zodiac wheel directly behind hero text */}
          <Constellation
            position="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            size={420}
            variant="wheel"
            opacity={6}
          />

          <h1 className="relative font-serif font-bold text-4xl md:text-6xl leading-[1.05] tracking-tight text-white">
            30-Day{" "}
            <span className="text-pink-brand italic">Content</span>
            <br />
            Transformation Ritual
          </h1>
          <p className="relative text-sm md:text-base uppercase tracking-[0.2em] text-neutral-400 max-w-md">
            ✦ A live 30 day viral frequency challenge ✦
          </p>
        </div>
      </Reveal>

      {/* ---- Video placeholder ---- */}
      <Reveal delay={140} className="w-full">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-brand/30 bg-gradient-to-br from-pink-950/60 via-black to-black shadow-[0_0_40px_rgba(236,72,153,0.2)] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-pink-brand flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <Play size={28} className="text-black translate-x-0.5" fill="currentColor" />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),transparent_60%)]" />
        </div>
      </Reveal>

      {/* ---- Join the waitlist button (right below the video) ---- */}
      <Reveal delay={180} className="w-full">
        <div className="flex flex-col items-center gap-3">
          <a
            href="#waitlist-form"
            className="group inline-flex items-center gap-3 rounded-2xl py-4 px-8 bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] transition-shadow font-semibold tracking-wide"
          >
            Join the waitlist
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>

      {/* ---- Core promise (dashed pink border) ---- */}
      <Reveal delay={220} className="w-full">
        <div className="w-full rounded-2xl border border-dashed border-pink-brand/50 bg-gradient-to-br from-pink-950/30 via-black to-black p-6 md:p-8 space-y-4 text-neutral-200 leading-relaxed">
          <p className="font-serif text-2xl md:text-3xl text-white">
            This is <em className="not-italic text-pink-brand">not</em> another passive course.
          </p>
          <p>
            This is a live 30-day implementation and transformation challenge for people who
            are ready to post, improve, get coached, build community, and actually change
            their life through visibility.
          </p>
          <div className="pt-2">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-300 font-semibold mb-3">
              Inside this experience, you will learn how to:
            </p>
            <ul className="flex flex-col gap-3">
              {LEARN_BULLETS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-pink-brand" strokeWidth={3} />
                  </span>
                  <span className="text-neutral-200 text-sm md:text-base">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ---- Positioning paragraph ---- */}
      <Reveal delay={260} className="w-full">
        <div className="w-full text-center space-y-4 text-neutral-300 leading-relaxed max-w-xl mx-auto">
          <p>
            Most people do not need more content tips.
            <br />
            They need <span className="text-white font-semibold">structure</span>.
            <br />
            They need <span className="text-white font-semibold">repetition</span>.
            <br />
            They need <span className="text-white font-semibold">belief</span>.
            <br />
            They need <span className="text-white font-semibold">feedback</span>.
            <br />
            They need someone to help them become the version of themselves who can actually
            be seen.
          </p>
          <p className="font-serif text-xl md:text-2xl text-white pt-2">
            That is what this challenge does.
          </p>
          <div className="pt-3 space-y-1 text-neutral-200">
            <p>
              This is where <span className="text-pink-brand font-semibold">visibility</span>{" "}
              meets <span className="text-pink-brand font-semibold">identity</span>.
            </p>
            <p>
              This is where <span className="text-pink-brand font-semibold">strategy</span>{" "}
              meets <span className="text-pink-brand font-semibold">embodiment</span>.
            </p>
            <p>
              This is where <span className="text-pink-brand font-semibold">content</span>{" "}
              meets <span className="text-pink-brand font-semibold">business</span>.
            </p>
            <p>
              This is where women choose themselves, lock in, and expand together.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ---- What makes it different ---- */}
      <Reveal delay={300} className="w-full">
        <div className="w-full text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            What makes it different
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-white max-w-lg mx-auto leading-tight">
            Most programs teach you how to <span className="italic text-neutral-400">post</span>.
            <br />
            This one teaches you how to become{" "}
            <span className="text-pink-brand italic">magnetic</span>.
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
            You are not only learning content strategy. You are learning how to communicate
            with power, lead with conviction, build community, and create offers that turn
            your voice into income.
          </p>
        </div>
      </Reveal>

      {/* ---- Coaching topics grid ---- */}
      <Reveal delay={340} className="w-full">
        <div className="w-full">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-pink-300 font-semibold mb-5">
            You will be coached on
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {COACHING_TOPICS.map((t) => (
              <div
                key={t.label}
                className="rounded-xl p-[1px] bg-gradient-to-br from-pink-brand/60 via-pink-brand/20 to-transparent"
              >
                <div className="rounded-xl bg-gradient-to-br from-pink-950/60 via-black to-black px-3 py-3 flex items-center gap-2.5 h-full">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-pink-brand flex items-center justify-center shadow-[0_0_14px_rgba(236,72,153,0.35)]">
                    {t.icon}
                  </span>
                  <span className="text-xs md:text-sm text-neutral-100 font-medium leading-tight">
                    {t.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ---- Power Weekend pre-event card (OPTIONAL $222 ADD-ON) ---- */}
      <Reveal delay={380} className="w-full">
        <div className="w-full rounded-2xl p-[1px] bg-gradient-to-br from-pink-brand via-pink-brand/40 to-transparent">
          <div className="rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black p-6 md:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
              <Sparkles size={14} className="text-pink-brand" />
              Optional add-on
              <span className="ml-auto rounded-full bg-pink-brand text-black px-3 py-1 text-[10px] tracking-[0.2em] font-bold">
                $222
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              Enter <em className="not-italic text-pink-brand">Power Weekend</em>
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              A 3-day live seminar before the challenge begins — designed to get you clear,
              confident, and ready to execute. Plus <span className="text-white font-semibold">optional curated NYC meetups</span> for
              members who want to strategize in person with Jayda. Over three mornings, we
              will help you:
            </p>
            <ul className="flex flex-col gap-3 pt-1">
              {POWER_WEEKEND.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-pink-brand" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-neutral-200">{line}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-neutral-200">
              You do not enter the challenge confused. You enter{" "}
              <span className="text-pink-brand font-semibold">prepared</span>.
            </p>
          </div>
        </div>
      </Reveal>

      {/* ---- Challenge structure ---- */}
      <Reveal delay={420} className="w-full">
        <div className="w-full rounded-2xl border border-pink-brand/30 bg-gradient-to-br from-pink-950/40 via-black to-black p-6 md:p-8 space-y-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            <Calendar size={14} className="text-pink-brand" />
            Challenge structure
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-white">
            For <span className="text-pink-brand">30 days</span>, you will receive:
          </h3>
          <ul className="flex flex-col gap-3">
            {CHALLENGE_STRUCTURE.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-pink-brand" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-200">{line}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-neutral-300 italic">
            You will not be left alone to “figure it out.” You will implement in real time,
            get feedback, refine your work, and improve quickly.
          </p>
        </div>
      </Reveal>

      {/* ---- Results-oriented ---- */}
      <Reveal delay={460} className="w-full">
        <div className="w-full text-center space-y-5">
          <h3 className="font-serif text-3xl md:text-4xl text-white max-w-xl mx-auto leading-tight">
            For the woman who knows she has{" "}
            <span className="text-pink-brand italic">more in her</span>.
          </h3>
          <p className="text-neutral-300 max-w-xl mx-auto leading-relaxed">
            This challenge is built for her — but she needs a system strong enough to pull it
            out of her. If you commit to the work, this experience can help you:
          </p>
          <ul className="flex flex-col gap-3 max-w-md mx-auto text-left pt-2">
            {RESULTS.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-pink-brand" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-200">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---- Tone / belief statement ---- */}
      <Reveal delay={500} className="w-full">
        <div className="relative w-full rounded-2xl border border-dashed border-pink-brand/50 bg-gradient-to-br from-pink-950/30 via-black to-black p-6 md:p-10 text-center space-y-2 overflow-hidden">
          {/* Faint zodiac wheel behind belief statement */}
          <Constellation
            position="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            size={320}
            variant="wheel"
            opacity={7}
          />
          <p className="relative font-serif text-2xl md:text-3xl text-pink-brand leading-tight">
            Abundance is your birthright.
          </p>
          <p className="relative font-serif text-xl md:text-2xl text-white leading-tight">
            Your voice matters.
            <br />
            Your story matters.
            <br />
            Your presence matters.
          </p>
          <p className="relative pt-3 text-neutral-300 max-w-lg mx-auto leading-relaxed">
            And when you pair that with strategy, service, and execution, your life can
            change.
          </p>
          <p className="relative pt-1 text-white font-semibold">
            This challenge is here to prove that.
          </p>
        </div>
      </Reveal>

      {/* ---- Offer stack ---- */}
      <Reveal delay={540} className="w-full">
        <div className="w-full space-y-5 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            Everything you get
          </div>
          <h3 className="font-serif text-3xl md:text-4xl text-white max-w-lg mx-auto leading-tight">
            Inside the 30-Day Viral Frequency{" "}
            <span className="text-pink-brand">Challenge</span>:
          </h3>
          <ul className="flex flex-col gap-3 max-w-lg mx-auto text-left pt-2">
            {OFFER_STACK.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-pink-brand flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(236,72,153,0.4)]">
                  <Check size={12} className="text-black" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-100">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---- Who it's for ---- */}
      <Reveal delay={580} className="w-full">
        <div className="w-full rounded-2xl border border-pink-brand/30 bg-gradient-to-br from-pink-950/50 via-black to-black p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-brand font-semibold mb-6">
            <Users size={14} />
            This is for
          </div>
          <ul className="flex flex-col gap-3 max-w-md mx-auto">
            {WHO_ITS_FOR.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-pink-brand" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-neutral-200">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---- Beta / waitlist angle ---- */}
      <Reveal delay={620} className="w-full">
        <div className="w-full rounded-2xl p-[1px] bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep shadow-[0_0_40px_rgba(236,72,153,0.25)]">
          <div className="rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black p-6 md:p-8 text-center space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
              Beta round
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              Join the waitlist for first access.
            </h3>
            <p className="text-neutral-300 max-w-md mx-auto">
              The beta round gives early members the chance to:
            </p>
            <ul className="flex flex-col gap-3 max-w-md mx-auto text-left pt-1">
              {BETA_PERKS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-pink-brand" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-neutral-200">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ---- CTA + Waitlist form ---- */}
      <Reveal delay={700} className="w-full">
        <section className="w-full flex flex-col items-center gap-5">
          <h2 className="font-serif text-3xl md:text-5xl text-white text-center max-w-xl leading-tight">
            I&apos;m ready to become{" "}
            <span className="text-pink-brand italic">unignorable</span>.
          </h2>
          <p className="text-center text-neutral-400 max-w-md text-sm">
            Drop your info — you&apos;ll be the first to know when the beta doors open.
          </p>
          <a
            href="#waitlist-form"
            className="group inline-flex items-center gap-3 rounded-2xl py-4 px-8 bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] transition-shadow font-semibold tracking-wide"
          >
            I&apos;m ready to lock in
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <div id="waitlist-form" className="w-full pt-4 scroll-mt-24">
            <MasterclassForm />
          </div>
        </section>
      </Reveal>

      {/* ---- CASE STUDIES divider ---- */}
      <Reveal delay={740} className="w-full">
        <div className="w-full flex items-center gap-4 pt-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-brand/60 to-transparent" />
          <span className="text-sm tracking-[0.25em] text-pink-300 font-semibold">
            ✦ CASE STUDIES ✦
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-brand/60 to-transparent" />
        </div>
      </Reveal>

      {/* ---- footer disclaimer ---- */}
      <Reveal delay={780}>
        <div className="text-center text-xs text-neutral-500 leading-relaxed max-w-xl mx-auto pt-8 border-t border-neutral-800/60 space-y-3">
          <div className="font-serif text-lg tracking-[0.25em] text-neutral-300">
            VIRAL BESTIES CLUB
          </div>
          {/* Faint zodiac glyph row */}
          <div
            className="flex items-center justify-center gap-3 text-pink-brand/30 text-base font-serif select-none"
            aria-hidden="true"
          >
            <span>♈</span>
            <span>♉</span>
            <span>♊</span>
            <span>♋</span>
            <span>♌</span>
            <span>♍</span>
            <span>♎</span>
            <span>♏</span>
            <span>♐</span>
            <span>♑</span>
            <span>♒</span>
            <span>♓</span>
          </div>
          <p>
            Viral Besties Club and its affiliates do not guarantee any specific results or
            earnings from participation in the 30-Day Viral Frequency Challenge. Your
            success depends on many factors, including the time, effort, and actions you
            take. All strategies, tools, and training are for educational purposes only and
            should not be taken as investment or financial advice.
          </p>
          <p className="font-semibold text-neutral-400">Not endorsed by Google or Meta</p>
          <p>
            This site is not part of Google, Facebook, or Meta, and is not endorsed by them
            in any way.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a href="#" className="hover:text-pink-brand transition-colors">
              Terms &amp; Conditions
            </a>
            <span>·</span>
            <a href="#" className="hover:text-pink-brand transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
