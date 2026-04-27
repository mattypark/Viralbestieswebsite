type Props = {
  /** Tailwind position classes — e.g. "top-10 right-0 -translate-x-4" */
  position?: string;
  /** Width in px */
  size?: number;
  /** Opacity 0-100; kept faint by default */
  opacity?: number;
  /** Variant of constellation pattern */
  variant?: "wheel" | "scatter" | "lines";
};

/**
 * Faint astrology decoration. Pure SVG, pointer-events disabled,
 * positioned absolutely so it sits behind content without affecting layout.
 */
export default function Constellation({
  position = "top-0 left-0",
  size = 240,
  opacity = 8,
  variant = "scatter",
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${position}`}
      style={{ width: size, height: size, opacity: opacity / 100 }}
    >
      {variant === "wheel" && <ZodiacWheel />}
      {variant === "scatter" && <Scatter />}
      {variant === "lines" && <ConstellationLines />}
    </div>
  );
}

function ZodiacWheel() {
  // 12 zodiac glyphs around a circle.
  const glyphs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <g
        style={{
          transformOrigin: "100px 100px",
          animation: "zodiac-spin 120s linear infinite",
        }}
      >
        {/* outer + inner rings */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="#ec4899"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="72"
          fill="none"
          stroke="#ec4899"
          strokeWidth="0.4"
          strokeDasharray="2 4"
        />
        <circle
          cx="100"
          cy="100"
          r="46"
          fill="none"
          stroke="#ec4899"
          strokeWidth="0.4"
        />

        {/* spokes */}
        {glyphs.map((_, i) => {
          const angle = (i / glyphs.length) * Math.PI * 2 - Math.PI / 2;
          const x1 = 100 + Math.cos(angle) * 46;
          const y1 = 100 + Math.sin(angle) * 46;
          const x2 = 100 + Math.cos(angle) * 92;
          const y2 = 100 + Math.sin(angle) * 92;
          return (
            <line
              key={`s${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#ec4899"
              strokeWidth="0.3"
              strokeDasharray="1 3"
            />
          );
        })}

        {/* glyphs */}
        {glyphs.map((g, i) => {
          const angle =
            (i / glyphs.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / glyphs.length;
          const r = 82;
          const x = 100 + Math.cos(angle) * r;
          const y = 100 + Math.sin(angle) * r;
          return (
            <text
              key={`g${i}`}
              x={x}
              y={y + 4}
              textAnchor="middle"
              fontSize="10"
              fill="#fbcfe8"
              fontFamily="serif"
            >
              {g}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

function Scatter() {
  // Pseudo-random but stable star scatter
  const stars = [
    { x: 12, y: 18, r: 0.8 },
    { x: 78, y: 9, r: 1.2 },
    { x: 34, y: 42, r: 0.6 },
    { x: 90, y: 55, r: 0.9 },
    { x: 22, y: 78, r: 1.3 },
    { x: 62, y: 88, r: 0.7 },
    { x: 50, y: 30, r: 0.5 },
    { x: 8, y: 64, r: 1.0 },
    { x: 70, y: 70, r: 0.8 },
    { x: 44, y: 16, r: 0.6 },
    { x: 88, y: 32, r: 0.5 },
    { x: 18, y: 52, r: 0.7 },
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {stars.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.r} fill="#fbcfe8" />
          {/* tiny cross sparkle */}
          <line
            x1={s.x - s.r * 2.4}
            y1={s.y}
            x2={s.x + s.r * 2.4}
            y2={s.y}
            stroke="#fbcfe8"
            strokeWidth="0.18"
          />
          <line
            x1={s.x}
            y1={s.y - s.r * 2.4}
            x2={s.x}
            y2={s.y + s.r * 2.4}
            stroke="#fbcfe8"
            strokeWidth="0.18"
          />
        </g>
      ))}
    </svg>
  );
}

function ConstellationLines() {
  // A sketched constellation — looks like Cassiopeia / Big Dipper-ish
  const points: [number, number][] = [
    [10, 60],
    [28, 40],
    [44, 56],
    [62, 36],
    [82, 52],
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <polyline
        points={points.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="#ec4899"
        strokeWidth="0.4"
        strokeDasharray="1.5 2"
      />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="#fbcfe8" />
      ))}
    </svg>
  );
}
