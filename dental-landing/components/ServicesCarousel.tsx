"use client";

import { useEffect, useRef, useState } from "react";

const services: { name: string; image?: string }[] = [
  { name: "Limpieza dental", image: "/img/limpieza.jpg" },
  { name: "Estética dental", image: "/img/estetica.jpg" },
  { name: "Ortodoncia", image: "/img/brackets.jpg" },
  { name: "Implantes", image: "/img/implantes.jpg" },
  { name: "Prótesis", image: "/img/protesis.jpg" },
  { name: "Endodoncia", image: "/img/ondodoncia.jpg" },
  { name: "Odontopediatría", image: "/img/Odontopediatría.jpg" },
  { name: "Urgencias", image: "/img/emergencia.jpg" },
];

export function ServicesCarousel() {
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
        className="flex gap-4 overflow-x-auto overflow-y-hidden touch-pan-x pb-2 mx-[calc(50%-50vw)] pl-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] pr-6 lg:pr-[max(40px,calc((100vw-1280px)/2+40px))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map(({ name, image }, i) => (
          <div
            key={name}
            className={`relative h-[280px] w-[240px] shrink-0 overflow-hidden rounded-2xl bg-gray-200 ${revealed ? "animate-hero-fade-up" : "opacity-0"
              }`}
            style={revealed ? { animationDelay: `${i * 90}ms` } : undefined}
          >
            {image && (
              <>
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9F9FB] via-[#F9F9FB]/80 to-transparent" />
              </>
            )}
            <p className="absolute bottom-5 left-5 right-5 text-center text-[18px] italic leading-[1.1] text-[#8d9fb9]">
              {name}
            </p>
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
