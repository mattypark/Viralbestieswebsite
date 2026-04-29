import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";

// PARKED — full 5-tier pricing ladder. Pulled off the main /waitlist page
// while we lead with the free masterclass funnel. Re-link from /waitlist
// when the time comes.

export default function WaitlistDetailsPage() {
  return (
    <main className="relative mx-auto w-full max-w-2xl px-6 py-10 md:py-16 flex flex-col gap-8">
      <Link
        href="/waitlist"
        className="inline-flex items-center gap-2 text-sm text-pink-300 hover:text-pink-brand transition-colors w-fit"
      >
        <ArrowLeft size={16} /> Back to waitlist
      </Link>

      <Reveal>
        <div className="text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            The full path
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-white max-w-lg mx-auto leading-tight">
            Your journey from{" "}
            <span className="italic text-neutral-400">watching</span> to{" "}
            <span className="text-pink-brand italic">unignorable</span>
          </h1>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="flex flex-col gap-3">
          {/* 1 — Waitlist (free, current) */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-pink-brand/70 via-pink-brand/20 to-transparent">
            <div className="rounded-2xl bg-gradient-to-br from-pink-950/50 via-black to-black p-5 flex items-center gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-pink-brand flex items-center justify-center text-black font-bold shadow-[0_0_18px_rgba(236,72,153,0.4)]">
                01
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-lg md:text-xl text-white">
                    Waitlist
                  </span>
                  <span className="rounded-full bg-pink-brand/20 border border-pink-brand/40 text-pink-200 px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase">
                    You are here
                  </span>
                </div>
                <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                  Free — first access to the beta round
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-serif text-lg md:text-xl text-pink-brand font-bold">
                  FREE
                </div>
              </div>
            </div>
          </div>

          {/* 2 — VIP $27 */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 flex items-center gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800 text-neutral-300 flex items-center justify-center font-bold">
              02
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-lg md:text-xl text-white">
                VIP Training Access
              </div>
              <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                Event replay, priority Q&amp;A, brand builder starter pack
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-serif text-lg md:text-xl text-white font-bold">
                $27
              </div>
            </div>
          </div>

          {/* 3 — Power Weekend $222 add-on */}
          <div className="rounded-2xl border border-pink-brand/30 bg-gradient-to-br from-pink-950/30 via-black to-black p-5 flex items-center gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800 text-neutral-300 flex items-center justify-center font-bold">
              03
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif text-lg md:text-xl text-white">
                  Power Weekend
                </span>
                <span className="rounded-full bg-pink-brand/15 border border-pink-brand/40 text-pink-200 px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase">
                  Add-on
                </span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                3-day live seminar + optional curated NYC meetups
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-serif text-lg md:text-xl text-white font-bold">
                $222
              </div>
            </div>
          </div>

          {/* 4 — Challenge $555 (featured) */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-pink-bright via-pink-brand to-pink-deep shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            <div className="rounded-2xl bg-gradient-to-br from-pink-950/70 via-black to-black p-5 flex items-center gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-pink-brand text-black flex items-center justify-center font-bold shadow-[0_0_18px_rgba(236,72,153,0.5)]">
                04
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-lg md:text-xl text-white">
                    The 30-Day Challenge
                  </span>
                  <span className="rounded-full bg-pink-brand text-black px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase font-bold">
                    Main event
                  </span>
                </div>
                <p className="text-xs md:text-sm text-neutral-300 mt-0.5">
                  30 days of live coaching, daily lessons, community, and
                  audits
                </p>
              </div>
              <div className="shrink-0 text-right">
                <div className="font-serif text-lg md:text-xl text-pink-brand font-bold">
                  $555
                </div>
              </div>
            </div>
          </div>

          {/* 5 — Membership $111/mo */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 flex items-center gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-neutral-800 text-neutral-300 flex items-center justify-center font-bold">
              05
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-lg md:text-xl text-white">
                Viral Besties Membership
              </div>
              <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                Ongoing coaching, community, and continued growth after the
                challenge
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-serif text-lg md:text-xl text-white font-bold">
                $111
                <span className="text-xs text-neutral-500 font-normal">
                  /mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-center text-xs text-neutral-500 max-w-md mx-auto">
          Every tier is optional. Start on the free waitlist and choose
          what&apos;s right for you when the beta opens.
        </p>
      </Reveal>
    </main>
  );
}
