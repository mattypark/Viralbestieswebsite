"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: "div" | "section" | "header" | "main";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 120px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;

  // Compress incoming delays so reveals feel snappy on scroll.
  const compressedDelay = Math.round(delay * 0.35);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${compressedDelay}ms` }}
      className={`transition-all duration-300 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
