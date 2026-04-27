import Constellation from "@/components/Constellation";

/**
 * Replaces the avatar+social header on the waitlist page with a typographic
 * "JJ" monogram, ringed by a faint slowly-rotating zodiac wheel.
 */
export default function JJMark() {
  return (
    <div className="relative flex items-center justify-center w-44 h-44 mx-auto">
      {/* Faint rotating zodiac wheel behind the monogram */}
      <Constellation position="inset-0 -m-2" size={192} variant="wheel" opacity={20} />

      {/* Soft pink glow halo */}
      <div className="absolute inset-6 rounded-full bg-pink-brand/10 blur-2xl" />

      {/* Monogram */}
      <div className="relative">
        <span
          className="font-serif font-bold text-[88px] leading-none tracking-tight text-white drop-shadow-[0_0_30px_rgba(236,72,153,0.45)]"
          aria-label="JJ"
        >
          <span className="text-white">J</span>
          <span className="text-pink-brand -ml-2">J</span>
        </span>
      </div>
    </div>
  );
}
