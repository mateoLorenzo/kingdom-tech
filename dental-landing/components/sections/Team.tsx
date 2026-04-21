"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { dmSerifDisplay } from "@/app/fonts";
import { clinic } from "@/lib/clinic";
import { toRevealSegments } from "@/lib/accentSegments";

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

export function Team() {
  const isMobile = useIsMobile();
  const { team } = clinic.sections;

  return (
    <section id="nosotros" className="flex min-h-svh w-full items-center bg-brand-bg-soft py-12 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[.3px] text-brand-label">
            {team.eyebrow}
          </p>
        </Reveal>
        <RevealWords
          as="h2"
          className="mt-4 whitespace-pre-line text-[34px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-brand-primary"
          startDelay={120}
          wordDelay={50}
          segments={toRevealSegments(
            team.heading,
            `${dmSerifDisplay.className} font-normal italic text-brand-accent`
          )}
        />

        <div className="mt-6 grid grid-cols-1 gap-2 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {team.members.map((m, i) => (
            <Reveal
              key={i}
              delay={isMobile ? 0 : 360 + i * 120}
              duration={300}
              threshold={0.15}
              rootMargin="0px 0px 200px 0px"
              className="flex flex-col rounded-2xl bg-white p-3 shadow-[0_4px_20px_-8px_rgba(7,54,119,0.15)] ring-1 ring-black/5"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F2F4F7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium tracking-[.3px] text-brand-primary ring-1 ring-white/30 backdrop-blur-md">
                  {m.experience}
                </span>
              </div>
              <div className="px-2 pt-4 pb-2">
                <p className="text-base font-semibold tracking-tight text-brand-primary">
                  {m.name}
                </p>
                <p className="mt-1 text-xs text-brand-text/60">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
