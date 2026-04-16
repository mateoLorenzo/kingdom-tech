import Image from "next/image";
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
  return (
    <main className="relative w-full min-h-svh lg:h-svh lg:px-2.5 lg:pt-2.5 lg:pb-2.5 lg:pl-0 flex flex-col lg:block">
      <section className="flex flex-col flex-1 lg:grid lg:flex-none lg:gap-8 lg:grid-cols-[54fr_48fr]">
        <div className="order-2 lg:order-1 flex flex-1 lg:flex-none flex-col items-center justify-center gap-5 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-18 pb-10 sm:pb-12 lg:pb-16 px-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] lg:pr-6 text-center lg:shrink-0">
          <span
            className="animate-hero-fade-up inline-flex items-center gap-2 text-sm sm:text-base font-normal text-[#073677]"
            style={{ animationDelay: "100ms" }}
          >
            Palermo Hollywood
          </span>
          <h1
            className="animate-hero-fade-up text-[44px] leading-[44px] sm:text-[56px] sm:leading-[56px] lg:text-[72px] lg:leading-[68px] font-medium tracking-tight text-[#073677]"
            style={{ animationDelay: "220ms" }}
          >
            Expertos en
            <br />
            <span className={`${dmSerifDisplay.className} font-normal text-[#0588D7]`}>
              Odontologia
            </span>
          </h1>
          <div
            className="animate-hero-fade-up mt-1 sm:mt-2"
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
          className="animate-hero-fade-in relative order-1 lg:order-2 h-[50svh] sm:h-[55svh] lg:h-[calc(100svh-20px)] rounded-none lg:rounded-[28px] bg-neutral-200 overflow-hidden"
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
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/85 to-transparent lg:hidden"
          />
          <div
            className="hidden lg:block animate-hero-fade-up absolute inset-x-4 bottom-4 rounded-2xl bg-white/30 backdrop-blur-md ring-1 ring-white/40"
            style={{ animationDelay: "700ms" }}
          >
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="flex items-center justify-center -space-x-3 px-4 py-4">
                <span
                  aria-hidden="true"
                  className="block h-14 w-14 shrink-0 bg-[#073677]"
                  style={laurelMaskStyle("/svg/laurel-pro-left.svg")}
                />
                <div className="text-center">
                  <p className="text-base font-semibold leading-tight text-[#073677]">
                    Dental
                  </p>
                  <p className="text-xs whitespace-nowrap text-[#073677]/70">
                    Confiado por Miles
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="block h-14 w-14 shrink-0 bg-[#073677]"
                  style={laurelMaskStyle("/svg/laurel-pro-right.svg")}
                />
              </div>

              <HeroStat value="100%" label="Satisfaction" />
              <HeroStat value="4.98" label="★★★★★" labelClass="tracking-widest text-[#073677]" />
              <HeroStat value="150" label="Reviews" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
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
