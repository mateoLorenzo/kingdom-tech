"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Service } from "@/config/types";

export function ServicesCarousel({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0.2);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

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

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      const p = emblaApi.scrollProgress();
      setProgress(Math.max(0, Math.min(1, p)));

      const viewport = emblaApi.rootNode();
      const container = emblaApi.containerNode();
      if (viewport && container) {
        const ratio = viewport.clientWidth / container.scrollWidth;
        setThumbWidth(Math.max(0.05, Math.min(1, ratio)));
      }
    };

    update();
    emblaApi.on("scroll", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("scroll", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  const thumbPct = thumbWidth * 100;
  const leftPct = progress * (100 - thumbPct);
  const hasOverflow = thumbWidth < 1;

  return (
    <div ref={containerRef} className="mt-12 w-full">
      <div ref={emblaRef} className="mx-[calc(50%-50vw)] overflow-hidden">
        <div className="flex -ml-4 pl-6 pr-6 lg:pl-[max(40px,calc((100vw_-_1280px)/2_+_40px))] lg:pr-[max(40px,calc((100vw_-_1280px)/2_+_40px))]">
          {services.map(({ name, image }, i) => (
            <div key={name} className="min-w-0 shrink-0 grow-0 pl-4">
              <div
                className={`relative h-[280px] w-[240px] overflow-hidden rounded-2xl bg-gray-200 ${
                  revealed ? "animate-hero-fade-up" : "opacity-0"
                }`}
                style={revealed ? { animationDelay: `${i * 90}ms` } : undefined}
              >
                {image && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-bg-soft via-brand-bg-soft/80 to-transparent" />
                  </>
                )}
                <p className="absolute bottom-5 left-5 right-5 text-center text-[18px] italic leading-[1.1] text-[#8d9fb9]">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {hasOverflow && (
        <div className="relative mt-8 h-[2px] w-full bg-brand-primary/15">
          <div
            className="absolute top-0 h-full rounded-full bg-brand-primary/50"
            style={{ width: `${thumbPct}%`, left: `${leftPct}%` }}
          />
        </div>
      )}
    </div>
  );
}
