import Link from "next/link";
import { Check, AlertTriangle, ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import Constellation from "@/components/Constellation";

// Fanbasis hosted checkout for the $47 VIP signup upsell.
const VIP_CHECKOUT_URL =
  "https://www.fanbasis.com/agency-checkout/viral-besties-club/2908K";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/DVNRRvhOMRM9aHBVtAjoBd?mode=gi_t";

const VIP_BENEFITS = [
  "Lifetime replay access to all 3 masterclass sessions",
  "Priority Q&A — your questions answered live by Jayda",
  "Brand Builder starter pack (templates, scripts, prompts)",
  "Entry into the drawing to be chosen by Jayda for a live brand build-out on the call",
];

export default function WaitlistConfirmedPage() {
  return (
    <main className="relative mx-auto w-full max-w-2xl px-6 py-10 md:py-16 flex flex-col gap-10">
      {/* Faint astrology decoration */}
      <Constellation
        position="top-32 -right-12 hidden md:block"
        size={200}
        variant="scatter"
        opacity={9}
      />
      <Constellation
        position="top-[100vh] -left-16 hidden md:block"
        size={240}
        variant="lines"
        opacity={7}
      />

      {/* Urgency banner */}
      <Reveal>
        <div className="rounded-2xl border border-pink-brand bg-pink-brand/10 px-5 py-4 flex items-start gap-3 shadow-[0_0_30px_rgba(236,72,153,0.25)]">
          <AlertTriangle
            className="text-pink-brand shrink-0 mt-0.5"
            size={20}
          />
          <div>
            <p className="font-bold text-pink-100 uppercase tracking-[0.15em] text-sm">
              Do not leave this page!
            </p>
            <p className="text-sm text-neutral-300 mt-0.5">
              Your registration is not complete.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Headline + congrats */}
      <Reveal delay={80}>
        <div className="text-center space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            ✦ You&apos;re in the masterclass ✦
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-[1.1] tracking-tight">
            Congratulations — your{" "}
            <span className="text-pink-brand italic">seat is saved</span>.
          </h1>
          <p className="text-neutral-300 max-w-lg mx-auto leading-relaxed">
            You just signed up for the live masterclass where Jayda will
            challenge you to build a{" "}
            <span className="text-white font-semibold">
              10K-follower personal brand
            </span>
            . May 15 – 17 · 10am EST.
          </p>
        </div>
      </Reveal>

      {/* Video — Jayda explains the VIP experience */}
      <Reveal delay={140} className="w-full">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-brand/30 bg-black shadow-[0_0_40px_rgba(236,72,153,0.2)]">
          <video
            src="https://im4pjeepekyrk1xl.public.blob.vercel-storage.com/video-2.mp4"
            poster="/video-2-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* WhatsApp group invite */}
      <Reveal delay={170} className="w-full">
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 rounded-xl border border-pink-brand/40 bg-pink-brand/[0.07] p-4 hover:bg-pink-brand/10 transition-colors"
        >
          <span className="shrink-0 w-5 h-5 rounded-md bg-pink-brand flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(236,72,153,0.4)]">
            <Check size={12} className="text-black" strokeWidth={3} />
          </span>
          <span className="text-sm text-neutral-200 leading-relaxed">
            <span className="font-semibold text-pink-100">
              Wanna join the WhatsApp group we have going for The Challenge??? 👀
            </span>{" "}
            <span className="text-neutral-300">
              I&apos;m dropping a resource that only my consulting clients get
              in there too.
            </span>
          </span>
        </a>
      </Reveal>

      {/* The VIP upsell */}
      <Reveal delay={200} className="w-full">
        <section className="rounded-2xl p-[1px] bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep shadow-[0_0_40px_rgba(236,72,153,0.3)]">
          <div className="rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black p-6 md:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
                <Star size={12} className="text-pink-brand" fill="currentColor" />
                Optional · VIP Upgrade
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-pink-200 bg-pink-brand/15 border border-pink-brand/40 rounded-full px-2 py-0.5 font-semibold">
                Closes when doors open
              </div>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight text-center">
              Want the{" "}
              <em className="not-italic text-pink-brand">VIP experience</em>?
            </h2>

            <p className="text-neutral-300 text-center max-w-md mx-auto leading-relaxed">
              For the person who wants to actually <span className="text-white font-semibold">implement</span>, not
              just attend. VIP unlocks lifetime replays, priority Q&amp;A, and
              the Brand Builder pack so you walk in fully equipped.
            </p>

            <ul className="flex flex-col gap-3 max-w-lg mx-auto pt-1">
              {VIP_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-pink-brand flex items-center justify-center mt-0.5 shadow-[0_0_12px_rgba(236,72,153,0.4)]">
                    <Check size={12} className="text-black" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-neutral-100">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Pricing block */}
            <div className="pt-5 mt-2 border-t border-pink-brand/20 text-center space-y-1">
              <div className="text-sm text-neutral-400">
                Total value:{" "}
                <span className="line-through decoration-pink-brand/60">
                  $111
                </span>
              </div>
              <div className="font-serif text-4xl md:text-5xl text-pink-brand font-bold drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                $47
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                One-time · Today only
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-3">
              <a
                href={VIP_CHECKOUT_URL}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl py-4 px-6 bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep text-white shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] transition-shadow font-semibold tracking-wide"
              >
                Yes, upgrade me to VIP for $47
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/waitlist"
                className="text-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors py-2 underline-offset-4 hover:underline"
              >
                No thanks, I&apos;ll just attend the free training.
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Reassurance footer */}
      <Reveal delay={260}>
        <p className="text-center text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
          Your seat for the free masterclass is locked in. VIP is an optional
          upgrade for people who want the replays, the Brand Builder pack, and
          priority access during the live sessions.
        </p>
      </Reveal>
    </main>
  );
}
