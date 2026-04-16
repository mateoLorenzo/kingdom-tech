import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Reveal } from "@/components/Reveal";
import { dmSerifDisplay } from "@/app/fonts";

export function Services() {
  return (
    <section id="servicios" className="w-full overflow-x-clip bg-[#F9F9FB] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Servicios
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-4 text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]">
            Tratamientos dentales
            <br />
            <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
              Para tu mejor sonrisa
            </span>
          </h2>
        </Reveal>

        <ServicesCarousel />
      </div>
    </section>
  );
}
