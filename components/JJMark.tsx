/**
 * Typographic "JJ" monogram for the waitlist hero.
 * Just the letterforms, with a soft pink glow halo. No zodiac wheel.
 */
export default function JJMark() {
  return (
    <div className="relative flex items-center justify-center w-44 h-44 mx-auto">
      {/* Soft pink glow halo behind the monogram */}
      <div className="absolute inset-4 rounded-full bg-pink-brand/15 blur-3xl" />
      <div className="absolute inset-10 rounded-full bg-pink-brand/25 blur-2xl" />

      {/* Monogram */}
      <div className="relative">
        <span
          className="font-serif font-bold text-[88px] leading-none tracking-tight drop-shadow-[0_0_24px_rgba(236,72,153,0.55)]"
          aria-label="JJ"
        >
          <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">J</span>
          <span className="text-pink-brand -ml-2 drop-shadow-[0_0_18px_rgba(236,72,153,0.8)]">
            J
          </span>
        </span>
      </div>
    </div>
  );
}
