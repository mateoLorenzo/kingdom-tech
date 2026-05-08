import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { clinic, whatsappUrl } from "@/lib/clinic";
import { dmSerifDisplay } from "@/app/fonts";
import { toRevealSegments } from "@/lib/accentSegments";

export function ContactCta() {
  const { contactCta } = clinic.sections;
  const mapSrc = `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${encodeURIComponent(
    clinic.contact.mapQuery
  ).replace(/%20/g, "+")}`;

  return (
    <section id="contacto" className="w-full bg-brand-bg-soft pt-12 pb-6 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 pt-12 pb-0 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[.3px] text-brand-label">
                {contactCta.eyebrow}
              </p>
            </Reveal>
            <RevealWords
              as="h2"
              className="mt-4 whitespace-pre-line text-[38px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-brand-primary"
              startDelay={120}
              wordDelay={50}
              segments={toRevealSegments(
                contactCta.heading,
                `${dmSerifDisplay.className} font-normal italic text-brand-accent`
              )}
            />
            <Reveal delay={460}>
              <p className="mt-6 whitespace-pre-line max-w-[480px] text-base text-brand-text/70 lg:mx-0 mx-auto">
                {contactCta.description}
              </p>
            </Reveal>
            <Reveal delay={620}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
                <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  {contactCta.ctaLabel}
                </Button>
                <div className="text-sm text-brand-text/70 text-center sm:text-left">
                  <p className="font-medium text-brand-primary">
                    {contactCta.addressLine}
                  </p>
                  <p className="mt-0.5">{contactCta.hoursLine}</p>
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
              title={contactCta.mapTitle}
              src={mapSrc}
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
