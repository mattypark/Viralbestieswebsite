import { Sparkles, Rocket } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import EncoreBanner from "@/components/EncoreBanner";
import AnalyticsCard from "@/components/tech/AnalyticsCard";
import PhoneCard from "@/components/tech/PhoneCard";
import AICard from "@/components/tech/AICard";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center gap-10">
      <Reveal>
        <EncoreBanner />
      </Reveal>

      <Reveal>
        <ProfileHeader />
      </Reveal>

      <Reveal delay={120}>
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-serif font-bold text-5xl md:text-6xl leading-tight tracking-tight text-white">
            {/* Placeholder headline — edit me */}
            I Help Founders
            <br />
            <span className="text-pink-brand">Go Viral.</span>
          </h1>
        </div>
      </Reveal>

      <div className="w-full flex flex-col gap-4">
        <Reveal delay={240}>
          <CTAButton
            href="/waitlist"
            title="Register for the training"
            description="Join the Viral Besties Club"
            icon={<Sparkles size={28} className="text-black" />}
            className="bg-pink-brand hover:bg-pink-bright"
            tone="dark"
          />
        </Reveal>

        {/* Quantum — disabled / coming soon */}
        <Reveal delay={320}>
          <div
            aria-disabled="true"
            className="group relative w-full rounded-2xl py-5 px-6 bg-black border border-pink-brand/30 cursor-not-allowed select-none"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 opacity-50">
                <Rocket size={28} className="text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-bold text-lg leading-tight text-white/60 line-through decoration-pink-brand/70 decoration-2">
                    Apply for Quantum
                  </span>
                  <span className="rounded-full bg-pink-brand/15 border border-pink-brand/40 text-pink-200 px-2 py-0.5 text-[10px] tracking-[0.2em] uppercase font-semibold">
                    Sold Out
                  </span>
                </div>
                <div className="text-sm mt-0.5 text-white/40 line-through decoration-pink-brand/50">
                  Next-level growth partnership
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tech-y animated section — the "wealth infrastructure" stuff */}
      <section className="w-full mt-4 flex flex-col gap-5">
        <Reveal delay={380}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-brand/40 bg-pink-brand/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-pink-200">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-brand animate-pulse" />
              Wealth infrastructure
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white">
              Built on analytics, content & automation.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal delay={420}>
            <AnalyticsCard />
          </Reveal>
          <Reveal delay={500}>
            <PhoneCard />
          </Reveal>
          <Reveal delay={580}>
            <AICard />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
