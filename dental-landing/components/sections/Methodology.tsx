"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { dmSerifDisplay } from "@/app/fonts";
import { clinic } from "@/lib/clinic";
import { toRevealSegments } from "@/lib/accentSegments";

function ToothIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/svg/dental.svg" alt="" aria-hidden="true" className="h-7 w-7" />
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export function Methodology() {
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const [groupRevealed, setGroupRevealed] = useState(false);
  const { methodology } = clinic.sections;

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setGroupRevealed(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="metodologia" className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-normal text-brand-label">
            {methodology.eyebrow}
          </p>
        </Reveal>
        <RevealWords
          className="mx-auto mt-6 max-w-[760px] text-center text-2xl font-normal leading-[1.2] tracking-[-.3px] text-brand-text"
          startDelay={120}
          wordDelay={32}
          segments={toRevealSegments(
            methodology.paragraph,
            `${dmSerifDisplay.className} font-normal italic text-brand-accent`
          )}
        />

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {methodology.cards.map((card, i) => {
            const cardInner =
              card.type === "content" ? (
                <div className="flex flex-col items-center rounded-2xl bg-[#F2F4F7] p-6 text-center sm:h-[360px] sm:items-start sm:p-7 sm:text-left">
                  <ToothIcon />
                  <h3 className="mt-5 whitespace-normal text-[20px] font-medium leading-[1.15] tracking-tight text-brand-primary sm:mt-8 sm:whitespace-pre-line sm:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.4] text-brand-text/65 sm:text-sm sm:leading-[1.35]">
                    {card.body}
                  </p>
                </div>
              ) : (
                <div className="relative h-[260px] sm:h-[360px] overflow-hidden rounded-2xl bg-[#F2F4F7]">
                  {card.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={card.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>
              );

            if (isMobile) {
              return (
                <div
                  key={i}
                  className={groupRevealed ? "animate-hero-fade-up" : "opacity-0"}
                  style={groupRevealed ? { animationDelay: `${i * 110}ms` } : undefined}
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Reveal key={i} delay={280 + i * 110}>
                {cardInner}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
