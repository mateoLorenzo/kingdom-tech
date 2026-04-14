import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { whatsappUrl } from "@/lib/whatsapp";
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
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/30 backdrop-blur-md ring-1 ring-white/40">
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="flex items-center justify-center -space-x-3 px-4 py-4">
                  <span
                    aria-hidden="true"
                    className="block h-14 w-14 shrink-0 bg-[#073677]"
                    style={{
                      WebkitMaskImage: "url(/laurel-pro-left.svg)",
                      maskImage: "url(/laurel-pro-left.svg)",
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
                      WebkitMaskImage: "url(/laurel-pro-right.svg)",
                      maskImage: "url(/laurel-pro-right.svg)",
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

      <section id="servicios" className="min-h-[100dvh] w-full bg-[#F9F9FB]" />
    </>
  );
}
