import Reveal from "@/components/Reveal";
import BackButton from "@/components/BackButton";
import JJMark from "@/components/JJMark";
import MasterclassForm from "@/components/MasterclassForm";
import Constellation from "@/components/Constellation";

export default function WaitlistPage() {
  return (
    <main className="relative mx-auto w-full max-w-xl px-6 py-10 md:py-14 flex flex-col gap-8">
      {/* Faint astrology backdrops */}
      <Constellation
        position="top-32 -left-12 hidden md:block"
        size={180}
        variant="scatter"
        opacity={10}
      />
      <Constellation
        position="top-[70vh] -right-16 hidden md:block"
        size={220}
        variant="lines"
        opacity={8}
      />

      <BackButton />

      {/* JJ Monogram */}
      <Reveal>
        <div className="flex justify-center">
          <JJMark />
        </div>
      </Reveal>

      {/* Video — does the carrying */}
      <Reveal delay={80} className="w-full">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-brand/30 bg-black shadow-[0_0_40px_rgba(236,72,153,0.2)]">
          <video
            src="/video-1.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={140}>
        <div className="text-center space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-pink-300 font-semibold">
            ✦ Free Masterclass ✦
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-5xl leading-[1.1] tracking-tight text-white max-w-lg mx-auto">
            Helping you get your first{" "}
            <span className="text-pink-brand italic">10K followers</span> in 30
            days
          </h1>
        </div>
      </Reveal>

      {/* Form */}
      <Reveal delay={200} className="w-full">
        <MasterclassForm />
      </Reveal>

      {/* Footer */}
      <Reveal delay={280}>
        <div className="text-center text-xs text-neutral-500 leading-relaxed max-w-xl mx-auto pt-10 border-t border-neutral-800/60 space-y-3">
          <div className="font-serif text-lg tracking-[0.25em] text-neutral-300">
            VIRAL BESTIES CLUB
          </div>
          <div
            className="flex items-center justify-center gap-3 py-1"
            aria-hidden="true"
          >
            {[10, 14, 8, 16, 12, 18, 12, 16, 8, 14, 10, 12].map((size, i) => (
              <svg
                key={i}
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-pink-brand/40 shrink-0"
                style={{
                  animation: `star-twinkle 2.6s ease-in-out ${i * 0.18}s infinite`,
                  filter: "drop-shadow(0 0 4px rgba(236, 72, 153, 0.45))",
                }}
              >
                <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
              </svg>
            ))}
          </div>
          <p>
            Viral Besties Club and its affiliates do not guarantee any specific
            results or earnings from participation in the masterclass or 30-Day
            Viral Frequency Challenge. Your success depends on many factors,
            including the time, effort, and actions you take.
          </p>
          <p className="font-semibold text-neutral-400">
            Not endorsed by Google or Meta
          </p>
          <p>
            This site is not part of Google, Facebook, or Meta, and is not
            endorsed by them in any way.
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
