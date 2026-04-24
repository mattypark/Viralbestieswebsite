import {
  Play,
  PlayCircle,
  MessageCircleQuestion,
  Trophy,
  Package,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import WaitlistForm from "@/components/WaitlistForm";
import Reveal from "@/components/Reveal";
import BackButton from "@/components/BackButton";

type VipPerk = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const VIP_PERKS: VipPerk[] = [
  {
    icon: <PlayCircle size={22} className="text-black" />,
    title: "Event Replay Access",
    body: "Placeholder copy — can't make it live or want to rewatch? You'll have 48 hours to revisit the entire training. Pause, rewind, take notes.",
  },
  {
    icon: <MessageCircleQuestion size={22} className="text-black" />,
    title: "VIP Q&A Priority",
    body: "Placeholder copy — time runs out fast during Q&A. VIP questions go to the front. Drop them in chat — you're getting answered first.",
  },
  {
    icon: <Trophy size={22} className="text-black" />,
    title: "Priority Selection for Live Brand Build",
    body: "Placeholder copy — we're picking ONE person at the end and building their brand positioning live. VIPs get priority selection.",
  },
  {
    icon: <Package size={22} className="text-black" />,
    title: "Brand Builder Starter Pack",
    body: "Placeholder copy — the full AI prompt from the training plus bonus prompts for content, offers, and your bio. Plus a brand positioning worksheet.",
  },
];

const THIS_IS_FOR_YOU = [
  "You're tired of registering for trainings and never doing anything with them",
  "You want to show up ready to implement, not just \u201Clearn\u201D",
  "You're serious about finally building something that pays you",
  "You want the best possible shot at building a successful personal brand",
];

// Stylized payment-method chips (names only — real logos are trademarked)
const PAYMENT_METHODS = ["VISA", "AMEX", "DISCOVER", "MASTERCARD", "PAYPAL", "APPLE PAY", "KLARNA", "AFFIRM"];

export default function WaitlistPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12 md:py-16 flex flex-col gap-10">
      <BackButton />

      <Reveal>
        <div className="flex justify-center">
          <ProfileHeader />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-brand/40 bg-pink-brand/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-pink-200">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-brand animate-pulse" />
            Now accepting applications
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight tracking-tight text-white text-center">
            Viral Besties Club
            <br />
            <span className="text-pink-brand">Waitlist</span>
          </h1>
        </div>
      </Reveal>

      {/* Video placeholder */}
      <Reveal delay={180} className="w-full">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-brand/30 bg-gradient-to-br from-pink-950/60 via-black to-black shadow-[0_0_40px_rgba(236,72,153,0.2)] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-pink-brand flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <Play
              size={28}
              className="text-black translate-x-0.5"
              fill="currentColor"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.15),transparent_60%)]" />
        </div>
      </Reveal>

      <Reveal delay={240}>
        <p className="text-center text-neutral-300 max-w-xl mx-auto">
          {/* Placeholder description — swap for real copy */}
          A short description of what the Viral Besties Club is goes here. Build the brand,
          launch the product, automate the growth — with a community that&apos;s actually done
          it.
        </p>
      </Reveal>

      {/* ---- Storytelling Q&A block (dashed border, mirrors the ref) ---- */}
      <Reveal delay={300} className="w-full">
        <div className="w-full rounded-2xl border border-dashed border-pink-brand/50 bg-gradient-to-br from-pink-950/30 via-black to-black p-6 md:p-8 space-y-5 text-neutral-200 leading-relaxed">
          {/* Placeholder copy — swap when Jayda sends it */}
          <p className="font-semibold text-white">So here&apos;s my question&hellip;</p>
          <p>
            Are you one of the few who will actually use what I teach to change your life?
          </p>
          <p>
            Or are you going to watch, take notes, feel inspired&hellip; and never post?
          </p>
          <p>If you&apos;re one of the few who takes action, keep reading.</p>
          <p className="text-pink-brand font-semibold">I have something for you.</p>
        </div>
      </Reveal>

      {/* ---- VIP Experience price banner ---- */}
      <Reveal delay={360} className="w-full">
        <div className="w-full rounded-2xl border border-pink-brand/40 bg-gradient-to-br from-pink-brand/20 via-pink-950/40 to-black px-6 py-5 text-center">
          <div className="font-serif text-2xl md:text-3xl text-white">
            The Viral Besties{" "}
            <em className="not-italic text-pink-brand font-semibold">VIP Experience</em>
          </div>
          <div className="mt-2 text-sm text-neutral-300">
            Total Value: <span className="line-through">$197</span>{" "}
            <span className="text-neutral-500">|</span> Yours Today{" "}
            <strong className="text-white">For Just $27</strong>
          </div>
        </div>
      </Reveal>

      {/* ---- "Here's What You Get When You Go VIP:" ---- */}
      <Reveal delay={420}>
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center max-w-md mx-auto">
          Here&apos;s What You Get When You Go <span className="text-pink-brand">VIP</span>:
        </h2>
      </Reveal>

      <section className="w-full flex flex-col gap-4">
        {VIP_PERKS.map((p, i) => (
          <Reveal key={p.title} delay={460 + i * 70} className="w-full">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-pink-brand/80 via-pink-brand/30 to-transparent">
              <div className="rounded-2xl bg-gradient-to-br from-pink-950/70 via-black to-black p-5 md:p-6 flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-pink-brand flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="font-serif text-xl md:text-2xl text-white italic">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ---- Total Value + big CTA ---- */}
      <Reveal delay={780} className="w-full">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-white">
            <div className="text-xl md:text-2xl font-semibold">
              Total Value <span className="line-through text-neutral-500">$197</span>{" "}
              <span className="text-neutral-600">|</span> Today&apos;s Price:
            </div>
            <div className="mt-1 text-2xl md:text-3xl font-bold">
              1 Single Payment of{" "}
              <span className="text-pink-brand">ONLY $27!</span>
            </div>
          </div>

          {/* TODO: wire to Stripe / checkout URL when ready */}
          <a
            href="#"
            className="w-full inline-flex flex-col items-center gap-1 rounded-2xl py-5 px-6 bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] transition-shadow"
          >
            <span className="flex items-center gap-3 text-xl md:text-2xl font-bold tracking-wide">
              YES. I&apos;m Going VIP
              <ArrowRight size={24} />
            </span>
            <span className="text-xs text-white/85">
              Click here to get instant access for <strong>$27</strong>
            </span>
          </a>

          <a
            href="#"
            className="text-sm text-neutral-300 underline underline-offset-4 hover:text-pink-brand transition-colors italic font-semibold"
          >
            No thanks, I&apos;ll just attend the free training
          </a>

          {/* 5 stars */}
          <div className="flex items-center gap-1 mt-2" aria-label="5 star rating">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={18}
                className="text-pink-brand"
                fill="currentColor"
              />
            ))}
          </div>

          <p className="text-xs text-neutral-400 max-w-sm">
            When you click the button, you will be redirected to a secure checkout where you
            can pay with:
          </p>

          {/* Payment methods — stylized chips (real logos are trademarked) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
            {PAYMENT_METHODS.map((m) => (
              <span
                key={m}
                className="text-[9px] font-bold tracking-wider px-2 py-1 rounded bg-white/95 text-black"
              >
                {m}
              </span>
            ))}
          </div>

          <p className="text-xs text-neutral-400 max-w-md mt-2">
            {/* Placeholder disclaimer — swap for real copy */}
            After payment you will get instant access to Viral Besties Mastery. If you have
            any questions, contact us.
          </p>
        </div>
      </Reveal>

      {/* ---- "THIS IS FOR YOU IF..." card ---- */}
      <Reveal delay={860} className="w-full">
        <div className="w-full rounded-2xl border border-pink-brand/30 bg-gradient-to-br from-pink-950/50 via-black to-black p-6 md:p-8">
          <div className="text-center font-semibold tracking-[0.3em] text-pink-brand uppercase text-xs mb-5">
            This is for you if&hellip;
          </div>
          <ul className="flex flex-col gap-4">
            {THIS_IS_FOR_YOU.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full border border-pink-brand/60 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-pink-brand" strokeWidth={3} />
                </span>
                <span className="text-neutral-200 text-sm md:text-base leading-relaxed">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---- Join the waitlist (Typeform) ---- */}
      <Reveal delay={920} className="w-full">
        <section className="w-full flex flex-col items-center gap-5">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Join the waitlist</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Drop your info — we&apos;ll reach out when the doors open.
            </p>
          </div>
          <WaitlistForm />
        </section>
      </Reveal>

      {/* ---- CASE STUDIES divider ---- */}
      <Reveal delay={1000} className="w-full">
        <div className="w-full flex items-center gap-4 pt-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-brand/60 to-transparent" />
          <span className="text-sm tracking-[0.25em] text-pink-300 font-semibold">
            CASE STUDIES
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-brand/60 to-transparent" />
        </div>
      </Reveal>

      {/* ---- footer-ish disclaimer (mirrors the BE RICH footer in the ref) ---- */}
      <Reveal delay={1060}>
        <div className="text-center text-xs text-neutral-500 leading-relaxed max-w-xl mx-auto pt-8 border-t border-neutral-800/60 space-y-3">
          <div className="font-serif text-lg tracking-[0.25em] text-neutral-300">
            VIRAL BESTIES CLUB
          </div>
          <p>
            {/* Placeholder legal disclaimer — swap for real copy */}
            VIRAL BESTIES CLUB and its affiliates do not guarantee any specific results or
            earnings from the use of our system. Your success depends on many factors,
            including the time, effort, and actions you take. All strategies, tools, and
            training are for educational purposes only and should not be taken as investment
            or financial advice.
          </p>
          <p className="font-semibold text-neutral-400">Not Endorsed by Google or Meta</p>
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
