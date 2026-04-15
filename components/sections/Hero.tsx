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
    <main className="relative w-full h-[100dvh] pt-2.5 pr-2.5 pb-2.5">
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[54fr_48fr]">
        <div className="flex flex-col items-center justify-center gap-8 pt-32 lg:pt-18 pb-16 pl-6 pr-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] text-center">
          <span
            className="animate-hero-fade-up text-base font-normal text-[#1A1A1A]"
            style={{ animationDelay: "100ms" }}
          >
            Palermo Hollywood
          </span>
          <h1
            className="animate-hero-fade-up text-[72px] font-medium leading-[68px] tracking-tight text-[#073677]"
            style={{ animationDelay: "220ms" }}
          >
            Expertos en
            <br />
            <span className={`${dmSerifDisplay.className} font-normal text-[#0588D7]`}>
              Odontologia
            </span>
          </h1>
          <div
            className="animate-hero-fade-up mt-2"
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
          className="animate-hero-fade-in relative min-h-[640px] lg:h-[calc(100dvh-20px)] lg:min-h-0 rounded-[28px] bg-neutral-200 overflow-hidden"
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
            className="animate-hero-fade-up absolute inset-x-4 bottom-4 rounded-2xl bg-white/30 backdrop-blur-md ring-1 ring-white/40"
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
}: {
  value: string;
  label: string;
  labelClass?: string;
}) {
  return (
    <div className="flex items-center justify-center px-4 py-4">
      <div className="flex h-full flex-col items-center justify-center gap-1 border-l border-[#073677]/40 pl-4 w-full">
        <p className="text-lg font-medium text-[#073677]">{value}</p>
        <p className={`text-xs ${labelClass}`}>{label}</p>
      </div>
    </div>
  );
}
