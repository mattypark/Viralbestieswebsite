export default function AICard() {
  // Central "AI" node surrounded by 6 satellite nodes; dashed connectors flow.
  const satellites = [
    { x: 100, y: 20, delay: 0 },
    { x: 170, y: 55, delay: 0.3 },
    { x: 170, y: 125, delay: 0.6 },
    { x: 100, y: 160, delay: 0.9 },
    { x: 30, y: 125, delay: 1.2 },
    { x: 30, y: 55, delay: 1.5 },
  ];
  const labels = ["Hook", "Script", "Post", "DM", "Email", "Track"];

  return (
    <div className="tech-card-glow relative rounded-2xl bg-gradient-to-br from-pink-950/60 via-black to-black border border-pink-500/30 p-5 overflow-hidden">
      <div className="flex items-start justify-between mb-3">
        <div className="text-[10px] uppercase tracking-[0.2em] text-pink-400/80">Wealth infra</div>
        <div className="text-[10px] text-pink-300 font-medium flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-400"
            style={{ animation: "node-pulse 1.6s ease-in-out infinite" }}
          />
          automated
        </div>
      </div>

      <svg viewBox="0 0 200 180" className="w-full h-40" aria-hidden="true">
        <defs>
          <radialGradient id="coreGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#831843" />
          </radialGradient>
        </defs>

        {/* connectors */}
        {satellites.map((s, i) => (
          <line
            key={`l${i}`}
            x1="100"
            y1="90"
            x2={s.x}
            y2={s.y}
            stroke="#ec4899"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.55"
            style={{
              animation: `dash-flow 1.6s linear ${s.delay}s infinite`,
            }}
          />
        ))}

        {/* satellites */}
        {satellites.map((s, i) => (
          <g key={`n${i}`}>
            <circle
              cx={s.x}
              cy={s.y}
              r="7"
              fill="#0a0a0a"
              stroke="#ec4899"
              strokeWidth="1.5"
              style={{
                transformOrigin: `${s.x}px ${s.y}px`,
                animation: `node-pulse 2.4s ease-in-out ${s.delay}s infinite`,
              }}
            />
            <text
              x={s.x}
              y={s.y + 22}
              textAnchor="middle"
              fontSize="8"
              fontWeight="600"
              fill="#fbcfe8"
            >
              {labels[i]}
            </text>
          </g>
        ))}

        {/* core */}
        <circle
          cx="100"
          cy="90"
          r="22"
          fill="url(#coreGrad)"
          style={{ transformOrigin: "100px 90px", animation: "node-pulse 2.8s ease-in-out infinite" }}
        />
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="1"
        >
          AI
        </text>
      </svg>

      <div className="mt-1 text-[11px] text-pink-200/60 text-center">Automations that compound</div>
    </div>
  );
}
