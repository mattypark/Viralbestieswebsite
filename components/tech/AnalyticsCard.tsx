export default function AnalyticsCard() {
  const bars = [0.45, 0.7, 0.35, 0.85, 0.55, 0.95, 0.75];
  return (
    <div className="tech-card-glow relative rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black border border-pink-500/30 p-5 overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-pink-400/80">Followers</div>
          <div className="mt-1 text-2xl font-bold text-white tabular-nums">
            <span
              className="inline-block"
              style={{ animation: "number-tick 3s ease-in-out infinite" }}
            >
              1.7M
            </span>
          </div>
        </div>
        <div className="text-xs font-medium text-pink-400 bg-pink-500/10 rounded-full px-2 py-0.5 border border-pink-500/30">
          +248%
        </div>
      </div>

      <svg viewBox="0 0 200 80" className="w-full h-16" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,70 L0,50 C20,45 35,55 55,40 C75,28 95,42 115,30 C135,18 160,22 180,10 L200,6 L200,80 L0,80 Z"
          fill="url(#lineFill)"
        />
        <path
          d="M0,50 C20,45 35,55 55,40 C75,28 95,42 115,30 C135,18 160,22 180,10 L200,6"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="300"
          style={{ animation: "line-draw 4s ease-in-out infinite" }}
        />
      </svg>

      <div className="mt-3 flex items-end gap-1.5 h-10">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-pink-600 to-pink-400 origin-bottom"
            style={{
              height: `${h * 100}%`,
              animation: `bar-grow 2.4s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="mt-3 text-[11px] text-pink-200/60">Engagement · 30d</div>
    </div>
  );
}
