import { Sparkles } from "lucide-react";

export default function EncoreBanner() {
  return (
    <div className="w-full rounded-2xl p-[1px] bg-gradient-to-r from-pink-bright via-pink-brand to-pink-deep shadow-[0_0_40px_rgba(236,72,153,0.45)]">
      <div className="rounded-2xl bg-gradient-to-br from-pink-950/70 via-black to-black px-5 py-4 flex items-center justify-center gap-3 text-center">
        <Sparkles size={18} className="text-pink-brand shrink-0 animate-pulse" />
        <div className="space-y-0.5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 font-semibold">
            Finale!!
          </div>
          <div className="font-serif text-base md:text-lg text-white leading-tight">
            Friday, June 5 · <span className="text-pink-brand">6pm</span>
          </div>
        </div>
        <Sparkles size={18} className="text-pink-brand shrink-0 animate-pulse" />
      </div>
    </div>
  );
}
