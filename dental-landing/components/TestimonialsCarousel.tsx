"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  avatar: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={n}
          src={n <= rating ? "/svg/star-full.svg" : "/svg/star-empty.svg"}
          alt=""
          aria-hidden="true"
          className="h-4 w-4"
        />
      ))}
    </div>
  );
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0.2);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
      setThumbWidth(Math.min(1, el.clientWidth / el.scrollWidth));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const thumbPct = thumbWidth * 100;
  const leftPct = progress * (100 - thumbPct);

  return (
    <div ref={containerRef} className="mt-12 w-full">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden touch-pan-x py-3 mx-[calc(50%-50vw)] pl-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] pr-6 lg:pr-[max(40px,calc((100vw-1280px)/2+40px))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <div
            key={i}
            className={`flex w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-black/5 ${
              revealed ? "animate-hero-fade-up" : "opacity-0"
            }`}
            style={revealed ? { animationDelay: `${i * 90}ms` } : undefined}
          >
            <p className="text-[15px] italic leading-[1.5] text-[#1A1A1A]/80">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#F2F4F7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[.3px] text-[#073677]">
                  {t.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Stars rating={t.rating} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 h-[2px] w-full bg-[#073677]/15">
        <div
          className="absolute top-0 h-full rounded-full bg-[#073677]/50"
          style={{ width: `${thumbPct}%`, left: `${leftPct}%` }}
        />
      </div>
    </div>
  );
}
