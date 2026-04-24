import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  /** Tailwind classes controlling background/border on the button */
  className?: string;
  /** Whether to render text + icon in dark (for bright bg) or light (for deep bg) */
  tone?: "dark" | "light";
};

export default function CTAButton({
  href,
  title,
  description,
  icon,
  className = "",
  tone = "dark",
}: Props) {
  const titleColor = tone === "dark" ? "text-black" : "text-white";
  const descColor = tone === "dark" ? "text-black/70" : "text-white/80";

  return (
    <Link
      href={href}
      className={`group block w-full rounded-2xl py-5 px-6 transition-transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <div className="flex items-center gap-4">
        {icon ? <div className="shrink-0">{icon}</div> : null}
        <div className="flex-1 text-left">
          <div className={`font-bold text-lg leading-tight ${titleColor}`}>{title}</div>
          {description ? (
            <div className={`text-sm mt-0.5 ${descColor}`}>{description}</div>
          ) : null}
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform group-hover:translate-x-0.5 ${titleColor}`}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
