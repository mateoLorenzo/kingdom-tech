"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Segment = {
  text: string;
  className?: string;
};

type Props = {
  segments: Segment[];
  className?: string;
  as?: "p" | "h1" | "h2" | "h3";
  wordDelay?: number;
  startDelay?: number;
  children?: ReactNode;
};

export function RevealWords({
  segments,
  className = "",
  as: Tag = "p",
  wordDelay = 28,
  startDelay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let wordIndex = 0;

  return (
    <div ref={ref}>
      <Tag className={className}>
        {segments.map((seg, si) => {
          const words = seg.text.split(/(\s+)/);
          return (
            <span key={si} className={seg.className}>
              {words.map((w, wi) => {
                if (/^\s+$/.test(w)) return w;
                const delay = startDelay + wordIndex * wordDelay;
                wordIndex += 1;
                return (
                  <span
                    key={wi}
                    className={`inline-block ${
                      visible ? "animate-hero-fade-up" : "opacity-0"
                    }`}
                    style={visible ? { animationDelay: `${delay}ms` } : undefined}
                  >
                    {w}
                  </span>
                );
              })}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
