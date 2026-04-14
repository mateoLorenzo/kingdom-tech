import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";
import { dmSerifDisplay } from "./fonts";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppFab />
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

      <section id="testimonios" className="w-full bg-white py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <p className="text-center text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Testimonios
          </p>
          <h2 className="mt-4 text-center text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]">
            Historias reales
            <br />
            <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
              Pacientes felices
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] rounded-2xl bg-[#F2F4F7]"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="w-full bg-[#F9F9FB] py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div className="text-center lg:text-left">
              <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
                Reservá turno
              </p>
              <h2 className="mt-4 text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]">
                Tu mejor sonrisa
                <br />
                <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
                  Te esta esperando
                </span>
              </h2>
              <p className="mt-6 max-w-[480px] text-base text-[#1A1A1A]/70 lg:mx-0 mx-auto">
                Te respondemos en minutos y coordinamos <br /> tu primera consulta en el momento.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
                <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Reservar por WhatsApp
                </Button>
                <div className="text-sm text-[#1A1A1A]/70 text-center sm:text-left">
                  <p className="font-medium text-[#073677]">Palermo Hollywood, CABA</p>
                  <p className="mt-0.5">Lun a Vie · 9–19h</p>
                </div>
              </div>
            </div>

            <div className="relative h-[360px] w-full overflow-hidden rounded-[24px] ring-1 ring-black/5 lg:h-[420px]">
              <iframe
                title="Ubicación de la clínica"
                src="https://www.google.com/maps?q=Palermo+Hollywood,+Buenos+Aires&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#0A1F3D] text-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xl font-semibold tracking-tight">Dental</p>
              <p className="mt-3 text-sm text-white/60">
                Odontología cercana en Palermo Hollywood. Tratamientos pensados para vos.
              </p>
              <div className="mt-5 flex gap-3 text-sm text-white/70">
                <a href="#" className="hover:text-white">Instagram</a>
                <span className="text-white/30">·</span>
                <a href="#" className="hover:text-white">Facebook</a>
                <span className="text-white/30">·</span>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Navegar</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
                <li><a href="#metodologia" className="hover:text-white">Metodología</a></li>
                <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
                <li><a href="#testimonios" className="hover:text-white">Testimonios</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Servicios</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li><a href="#servicios" className="hover:text-white">Prótesis dentales</a></li>
                <li><a href="#servicios" className="hover:text-white">Odontopediatría</a></li>
                <li><a href="#servicios" className="hover:text-white">Ortodoncia</a></li>
                <li><a href="#servicios" className="hover:text-white">Implantes</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Contacto</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Palermo Hollywood, CABA</li>
                <li>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    +54 9 11 4039-2404
                  </a>
                </li>
                <li>
                  <a href="mailto:hola@dental.com" className="hover:text-white">
                    hola@dental.com
                  </a>
                </li>
                <li className="text-white/60">Lun a Vie · 9–19h</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Dental. Todos los derechos reservados.</p>
            <a href="#" className="hover:text-white">Política de privacidad</a>
          </div>
        </div>
      </footer>
    </>
  );
}
