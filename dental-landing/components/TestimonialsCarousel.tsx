"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Testimonial } from "@/config/types";
import { colorByIndex, initialFor } from "@/lib/avatar";

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

const GENDER_PHOTO_COUNT = 10;

function resolveAvatarSrc(
  t: Testimonial,
  genderCounts: { male: number; female: number }
): string | null {
  if (t.avatar) return t.avatar;
  if (!t.gender) return null;
  const nth = ++genderCounts[t.gender];
  const slot = ((nth - 1) % GENDER_PHOTO_COUNT) + 1;
  return `/img/reviews/${t.gender}-${slot}.png`;
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        align: "start",
        loop: false,
        dragFree: true,
        containScroll: "trimSnaps",
      },
    },
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

  return (
    <div ref={containerRef} className="mt-12 w-full">
      <div ref={emblaRef} className="mx-[calc(50%-50vw)] overflow-hidden">
        <div className="flex -ml-4 py-3 lg:pl-[max(40px,calc((100vw_-_1280px)/2_+_40px))]">
          {(() => {
            const counts = { male: 0, female: 0 };
            return items.map((t, i) => {
              const avatarSrc = resolveAvatarSrc(t, counts);
              return (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 lg:basis-auto lg:last:pr-[max(40px,calc((100vw_-_1280px)/2_+_40px))]"
            >
              <div
                className={`flex h-full w-full flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-black/5 lg:w-[320px] ${
                  revealed ? "animate-hero-fade-up" : "opacity-0"
                }`}
                style={revealed ? { animationDelay: `${i * 90}ms` } : undefined}
              >
                <p className="text-[15px] italic leading-[1.5] text-brand-text/80">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                  {avatarSrc ? (
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#F2F4F7]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={avatarSrc}
                        alt={t.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
                      style={{ backgroundColor: colorByIndex(i) }}
                    >
                      {initialFor(t.name)}
                    </div>
                  )}
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[.3px] text-brand-primary">
                      {t.name}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Stars rating={t.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}
