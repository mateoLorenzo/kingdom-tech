import { dmSerifDisplay } from "@/app/fonts";

export function Team() {
  return (
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
            <div key={i} className="h-[380px] rounded-2xl bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
