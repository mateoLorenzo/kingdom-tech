import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Reveal } from "@/components/Reveal";
import { dmSerifDisplay } from "@/app/fonts";
import { clinic } from "@/lib/clinic";

export function Services() {
  const { services } = clinic.sections;

  return (
    <section id="servicios" className="w-full overflow-x-clip bg-brand-bg-soft min-h-svh flex flex-col justify-center py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[.3px] text-brand-label">
            {services.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-4 whitespace-pre-line text-[30px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-medium tracking-tight text-brand-primary">
            {services.heading.map((seg, i) =>
              seg.accent ? (
                <span
                  key={i}
                  className={`${dmSerifDisplay.className} font-normal italic text-brand-accent`}
                >
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </h2>
        </Reveal>

        <ServicesCarousel services={services.items} />
      </div>
    </section>
  );
}
