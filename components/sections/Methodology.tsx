import { dmSerifDisplay } from "@/app/fonts";

export function Methodology() {
  return (
    <section id="metodologia" className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <p className="text-center text-sm font-medium uppercase tracking-normal text-[#09357C]">
          Metodología
        </p>
        <p className="mx-auto mt-6 max-w-[760px] text-center text-2xl font-normal leading-[1.2] tracking-[-.3px] text-[#1A1A1A]">
          Combinamos tecnología de última generación junto con atención cercana y humana. Nuestro enfoque está en brindarte tratamientos efectivos y comodos,{" "}
          <span className={`${dmSerifDisplay.className} font-normal italic text-[#0588D7]`}>
            pensados para tu bienestar en cada etapa.
          </span>
        </p>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[360px] rounded-2xl bg-[#F2F4F7]" />
          ))}
        </div>
      </div>
    </section>
  );
}
