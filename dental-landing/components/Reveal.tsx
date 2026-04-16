"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  variant?: "up" | "in";
};

export function Reveal({
  children,
  delay = 0,
  duration,
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
  className = "",
  variant = "up",
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
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animClass = visible
    ? variant === "in"
      ? "animate-hero-fade-in"
      : "animate-hero-fade-up"
    : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={
        visible
          ? {
              animationDelay: `${delay}ms`,
              ...(duration !== undefined && { animationDuration: `${duration}ms` }),
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
