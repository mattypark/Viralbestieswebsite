import { Sparkles, Rocket } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import AnalyticsCard from "@/components/tech/AnalyticsCard";
import PhoneCard from "@/components/tech/PhoneCard";
import AICard from "@/components/tech/AICard";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center gap-10">
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
          <p className="text-lg text-neutral-300">Where do you want to grow?</p>
        </div>
      </Reveal>

      <div className="w-full flex flex-col gap-4">
        <Reveal delay={240}>
          <CTAButton
            href="/waitlist"
            title="Apply for Waitlist"
            description="Join the Viral Besties Club"
            icon={<Sparkles size={28} className="text-black" />}
            className="bg-pink-brand hover:bg-pink-bright"
            tone="dark"
          />
        </Reveal>
        <Reveal delay={320}>
          <CTAButton
            href="/quantum"
            title="Apply for Quantum"
            description="Next-level growth partnership"
            icon={<Rocket size={28} className="text-white" />}
            className="bg-black border border-pink-brand/60 hover:border-pink-brand"
            tone="light"
          />
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
