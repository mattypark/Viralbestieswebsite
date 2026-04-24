type Post = { who: string; likes: string };

const FEED: Post[] = [
  { who: "@viralbestie", likes: "128K" },
  { who: "@brand.ceo", likes: "94K" },
  { who: "@growth.girl", likes: "212K" },
  { who: "@founder.fm", likes: "76K" },
  { who: "@studio.pink", likes: "341K" },
  { who: "@moneytalks", likes: "58K" },
];

export default function PhoneCard() {
  // Duplicate list so the -50% translate loops seamlessly
  const loop = [...FEED, ...FEED];

  return (
    <div className="tech-card-glow relative rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black border border-pink-500/30 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] uppercase tracking-[0.2em] text-pink-400/80">Live feed</div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" style={{ animation: "node-pulse 1.4s ease-in-out infinite" }} />
          <span className="text-[10px] text-pink-300">streaming</span>
        </div>
      </div>

      <div className="relative mx-auto" style={{ width: 128 }}>
        {/* phone frame */}
        <div className="relative rounded-[22px] border-2 border-pink-500/40 bg-black p-1.5 shadow-[0_0_30px_rgba(236,72,153,0.25)]">
          {/* notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 rounded-b-lg bg-black z-10" />
          <div className="rounded-[16px] bg-neutral-950 overflow-hidden h-[150px] relative">
            {/* scrolling content */}
            <div
              className="flex flex-col gap-1.5 p-2"
              style={{ animation: "feed-scroll 10s linear infinite" }}
            >
              {loop.map((p, i) => (
                <div
                  key={i}
                  className="rounded-md bg-gradient-to-br from-pink-600/80 to-pink-800/80 p-1.5 border border-pink-400/20"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 rounded-full bg-pink-300/70" />
                    <div className="text-[8px] text-white font-medium truncate">{p.who}</div>
                  </div>
                  <div className="h-6 rounded bg-pink-950/60 mb-1" />
                  <div className="flex items-center gap-1">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor" className="text-pink-200"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>
                    <div className="text-[7px] text-pink-200/90">{p.likes}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* top/bottom fade masks */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-neutral-950 to-transparent" />
          </div>
        </div>
      </div>

      <div className="mt-3 text-[11px] text-pink-200/60 text-center">Content that actually goes viral</div>
    </div>
  );
}
