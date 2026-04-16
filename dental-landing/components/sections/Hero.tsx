"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import { dmSerifDisplay } from "@/app/fonts";

const laurelMaskStyle = (url: string) => ({
  WebkitMaskImage: `url(${url})`,
  maskImage: `url(${url})`,
  WebkitMaskRepeat: "no-repeat" as const,
  maskRepeat: "no-repeat" as const,
  WebkitMaskSize: "contain" as const,
  maskSize: "contain" as const,
  WebkitMaskPosition: "center" as const,
  maskPosition: "center" as const,
});

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <main className="relative w-full min-h-[100dvh] lg:h-[100dvh] px-2.5 pt-2.5 pb-2.5 lg:pl-0 flex flex-col lg:block">
      <section className="flex flex-col flex-1 gap-4 sm:gap-6 lg:grid lg:flex-none lg:gap-8 lg:grid-cols-[54fr_48fr]">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 lg:gap-8 pt-24 sm:pt-28 lg:pt-18 pb-2 sm:pb-6 lg:pb-16 px-4 sm:px-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] lg:pr-6 text-center shrink-0">
          <span
            className="animate-hero-fade-up text-sm sm:text-base font-normal text-[#1A1A1A]"
            style={{ animationDelay: "100ms" }}
          >
            Palermo Hollywood
          </span>
          <h1
            className="animate-hero-fade-up text-[40px] leading-[40px] sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[68px] font-medium tracking-tight text-[#073677]"
            style={{ animationDelay: "220ms" }}
          >
            Expertos en
            <br />
            <span className={`${dmSerifDisplay.className} font-normal text-[#0588D7]`}>
              Odontologia
            </span>
          </h1>
          <div
            className="hidden sm:block animate-hero-fade-up mt-1 sm:mt-2"
            style={{ animationDelay: "420ms" }}
          >
            <Button
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservá Turno
            </Button>
          </div>
        </div>

        <div
          className="animate-hero-fade-in relative flex-1 min-h-[280px] sm:min-h-[460px] lg:h-[calc(100dvh-20px)] rounded-[20px] lg:rounded-[28px] bg-neutral-200 overflow-hidden"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src="/img/hero-7.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div
            className="animate-hero-fade-up absolute inset-x-3 bottom-3 lg:inset-x-4 lg:bottom-4 rounded-xl lg:rounded-2xl bg-white/30 backdrop-blur-md ring-1 ring-white/40"
            style={{ animationDelay: isMobile ? "400ms" : "700ms" }}
          >
            <div className="grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="flex items-center justify-center -space-x-2 sm:-space-x-3 px-2 py-2.5 sm:px-4 sm:py-4">
                <span
                  aria-hidden="true"
                  className="block h-10 w-10 sm:h-14 sm:w-14 shrink-0 bg-[#073677]"
                  style={laurelMaskStyle("/svg/laurel-pro-left.svg")}
                />
                <div className="text-center">
                  <p className="text-sm sm:text-base font-semibold leading-tight text-[#073677]">
                    Dental
                  </p>
                  <p className="text-[11px] sm:text-xs whitespace-nowrap text-[#073677]/70">
                    Confiado por Miles
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="block h-10 w-10 sm:h-14 sm:w-14 shrink-0 bg-[#073677]"
                  style={laurelMaskStyle("/svg/laurel-pro-right.svg")}
                />
              </div>

              <HeroStat value="100%" label="Satisfaction" wrapperClass="hidden sm:flex" />
              <HeroStat value="4.98" label="★★★★★" labelClass="tracking-widest text-[#073677]" />
              <HeroStat value="150" label="Reviews" />
            </div>
          </div>
        </div>
      </section>
    </main>
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

function HeroStat({
  value,
  label,
  labelClass = "text-[#073677]/70",
  wrapperClass = "flex",
}: {
  value: string;
  label: string;
  labelClass?: string;
  wrapperClass?: string;
}) {
  return (
    <div className={`${wrapperClass} items-center justify-center px-2 py-2.5 sm:px-4 sm:py-4`}>
      <div className="flex h-full flex-col items-center justify-center gap-1 w-full pl-2 sm:pl-4 border-l border-[#073677]/40">
        <p className="text-base sm:text-lg font-medium text-[#073677]">{value}</p>
        <p className={`text-[11px] sm:text-xs ${labelClass}`}>{label}</p>
      </div>
    </div>
  );
}
