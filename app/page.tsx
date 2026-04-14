import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";
import { dmSerifDisplay } from "./fonts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full h-[100dvh] pt-2.5 pr-2.5 pb-2.5">
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[54fr_48fr]">
          <div className="flex flex-col items-center justify-center gap-8 pt-32 lg:pt-18 pb-16 pl-6 pr-6 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))] text-center">
            <span className="text-base font-normal text-[#1A1A1A]">
              Palermo Hollywood
            </span>
            <h1 className="text-[72px] font-medium leading-[68px] tracking-tight text-[#073677]">
              Expertos en
              <br />
              <span className={`${dmSerifDisplay.className} font-normal text-[#0588D7]`}>
                Odontologia
              </span>
            </h1>
            <Button
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              Reservá Turno
            </Button>
          </div>

          <div className="relative min-h-[640px] lg:h-[calc(100dvh-20px)] lg:min-h-0 rounded-[28px] bg-neutral-200 overflow-hidden">
            <Image
              // src="/img/hero-5.jpg"
              src="/img/hero-7.jpg"
              // src="/img/hero-4.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/30 backdrop-blur-md ring-1 ring-white/40">
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="flex items-center justify-center -space-x-3 px-4 py-4">
                  <span
                    aria-hidden="true"
                    className="block h-14 w-14 shrink-0 bg-[#073677]"
                    style={{
                      WebkitMaskImage: "url(/svg/laurel-pro-left.svg)",
                      maskImage: "url(/svg/laurel-pro-left.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div className="text-center">
                    <p className="text-base font-semibold leading-tight text-[#073677]">
                      Dental
                    </p>
                    <p className="text-xs whitespace-nowrap text-[#073677]/70">Confiado por Miles</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="block h-14 w-14 shrink-0 bg-[#073677]"
                    style={{
                      WebkitMaskImage: "url(/svg/laurel-pro-right.svg)",
                      maskImage: "url(/svg/laurel-pro-right.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>

                <div className="flex items-center justify-center px-4 py-4">
                  <div className="flex h-full flex-col items-center justify-center gap-1 border-l border-[#073677]/40 pl-4 w-full">
                    <p className="text-lg font-medium text-[#073677]">100%</p>
                    <p className="text-xs text-[#073677]/70">Satisfaction</p>
                  </div>
                </div>

                <div className="flex items-center justify-center px-4 py-4">
                  <div className="flex h-full flex-col items-center justify-center gap-1 border-l border-[#073677]/40 pl-4 w-full">
                    <p className="text-lg font-medium text-[#073677]">4.98</p>
                    <p className="text-xs tracking-widest text-[#073677]">★★★★★</p>
                  </div>
                </div>

                <div className="flex items-center justify-center px-4 py-4">
                  <div className="flex h-full flex-col items-center justify-center gap-1 border-l border-[#073677]/40 pl-4 w-full">
                    <p className="text-lg font-medium text-[#073677]">150</p>
                    <p className="text-xs text-[#073677]/70">Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="servicios" className="w-full overflow-x-clip bg-[#F9F9FB] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Servicios
          </p>
          <h2 className="mt-4 text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]">
            Tratamientos dentales
            <br />
            <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
              Para tu mejor sonrisa
            </span>
          </h2>

          <ServicesCarousel />
        </div>
      </section>

      <section id="metodologia" className="w-full bg-white py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <p className="text-center text-sm font-medium uppercase tracking-normal text-[#09357C]">
            Metodología
          </p>
          <p className="mx-auto mt-6 max-w-[760px] text-center text-2xl font-normal leading-[1.2] tracking-[-.3px] text-[#1A1A1A]">
            Combinamos tecnología de última generación junto con atención cercana y humana. Nuestro enfoque está en brindarte tratamientos efectivos y comodos,{" "}
            <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>pensados para tu bienestar en cada etapa.</span>
          </p>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-[360px] rounded-2xl bg-[#F2F4F7]"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="flex min-h-[100dvh] w-full items-center bg-[#F9F9FB] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Sobre Nosotros
          </p>
          <h2 className="mt-4 text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]">
            Conocé El Equipo
            <br />
            <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
              Detrás De Tu Sonrisa
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-[380px] rounded-2xl bg-white"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
