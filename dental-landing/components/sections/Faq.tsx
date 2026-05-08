"use client";

import { useEffect, useRef, useState } from "react";
import { dmSerifDisplay } from "@/app/fonts";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { clinic } from "@/lib/clinic";
import { toRevealSegments } from "@/lib/accentSegments";

export function Faq() {
  const { faq } = clinic.sections;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [groupRevealed, setGroupRevealed] = useState(false);

  useEffect(() => {
    const el = listRef.current;
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

  if (!faq || faq.items.length === 0) return null;

  return (
    <section
      id="faq"
      className="w-full bg-brand-bg-soft pt-24 pb-4 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[860px] px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[.3px] text-brand-label">
            {faq.eyebrow}
          </p>
        </Reveal>

        <RevealWords
          as="h2"
          className="mt-4 whitespace-pre-line text-center text-[34px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-brand-primary"
          startDelay={120}
          wordDelay={50}
          segments={toRevealSegments(
            faq.heading,
            `${dmSerifDisplay.className} font-normal italic text-brand-accent`
          )}
        />

        <div ref={listRef} className="mt-12 md:mt-16">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={groupRevealed ? "animate-hero-fade-up" : "opacity-0"}
                style={groupRevealed ? { animationDelay: `${i * 220}ms` } : undefined}
              >
                <div className="border-b border-brand-text/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-brand-accent"
                  >
                    <span className="text-base sm:text-lg font-medium leading-snug text-brand-primary">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative inline-flex h-6 w-6 flex-none items-center justify-center text-brand-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-8 text-[15px] leading-[1.6] text-brand-text/65 whitespace-pre-line">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
