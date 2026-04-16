import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { whatsappUrl } from "@/lib/whatsapp";
import { dmSerifDisplay } from "@/app/fonts";

export function ContactCta() {
  return (
    <section id="contacto" className="w-full bg-[#F9F9FB] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
                Reservá turno
              </p>
            </Reveal>
            <RevealWords
              as="h2"
              className="mt-4 whitespace-pre-line text-[38px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-[#073677]"
              startDelay={120}
              wordDelay={50}
              segments={[
                { text: "Tu mejor sonrisa\n" },
                {
                  text: "Te esta esperando",
                  className: `${dmSerifDisplay.className} font-normal italic text-[#0588D7]`,
                },
              ]}
            />
            <Reveal delay={460}>
              <p className="mt-6 max-w-[480px] text-base text-[#1A1A1A]/70 lg:mx-0 mx-auto">
                Te respondemos en minutos y coordinamos <br /> tu primera consulta en el momento.
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
                <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Reservar por WhatsApp
                </Button>
                <div className="text-sm text-[#1A1A1A]/70 text-center sm:text-left">
                  <p className="font-medium text-[#073677]">Honduras 5730, Palermo Hollywood</p>
                  <p className="mt-0.5">Lun a Vie · 09:00hs - 19:00hs</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={280}
            variant="in"
            className="relative h-[360px] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 lg:h-[420px]"
          >
            <iframe
              title="Ubicación de la clínica"
              src="https://www.google.com/maps?q=Honduras+5730,+Palermo,+Buenos+Aires&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              suppressHydrationWarning
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
