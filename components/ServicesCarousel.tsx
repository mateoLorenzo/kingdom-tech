"use client";

import { useEffect, useRef, useState } from "react";

export function ServicesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0.2);

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

  const thumbPct = thumbWidth * 100;
  const leftPct = progress * (100 - thumbPct);

  return (
    <div className="mt-12 w-full">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 mx-[calc(50%-50vw)] pl-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] pr-6 lg:pr-[max(40px,calc((100vw-1280px)/2+40px))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-[280px] w-[240px] shrink-0 rounded-2xl bg-gray-200"
          />
        ))}
      </div>

      <div className="relative mt-6 h-[2px] w-full bg-[#073677]/15">
        <div
          className="absolute top-0 h-full rounded-full bg-[#073677]"
          style={{ width: `${thumbPct}%`, left: `${leftPct}%` }}
        />
      </div>
    </div>
  );
}
