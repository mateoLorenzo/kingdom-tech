import { dmSerifDisplay } from "@/app/fonts";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { clinic } from "@/lib/clinic";
import { toRevealSegments } from "@/lib/accentSegments";

export function Testimonials() {
  const { testimonials } = clinic.sections;

  return (
    <section id="testimonios" className="w-full overflow-x-clip bg-white min-h-svh flex flex-col justify-center py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[.3px] text-brand-label">
            {testimonials.eyebrow}
          </p>
        </Reveal>
        <RevealWords
          as="h2"
          className="mt-4 whitespace-pre-line text-center text-[34px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-brand-primary"
          startDelay={120}
          wordDelay={50}
          segments={toRevealSegments(
            testimonials.heading,
            `${dmSerifDisplay.className} font-normal italic text-brand-accent`
          )}
        />

        <TestimonialsCarousel items={testimonials.items} />
      </div>
    </section>
  );
}
