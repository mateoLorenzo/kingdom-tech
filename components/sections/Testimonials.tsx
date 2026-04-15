import { dmSerifDisplay } from "@/app/fonts";

export function Testimonials() {
  return (
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
            <div key={i} className="h-[260px] rounded-2xl bg-[#F2F4F7]" />
          ))}
        </div>
      </div>
    </section>
  );
}
