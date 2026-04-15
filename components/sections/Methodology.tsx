import { dmSerifDisplay } from "@/app/fonts";

type Card =
  | { type: "content"; title: string; body: string }
  | { type: "placeholder"; image?: string };

const cards: Card[] = [
  {
    type: "content",
    title: "+200 Clientes\nTodos los Meses",
    body: "La confianza de nuestros pacientes es nuestro mayor respaldo. Cada consulta está pensada para brindarte una atención clara, cómoda y enfocada en lograr los mejores resultados posibles.",
  },
  { type: "placeholder", image: "/img/metodology-1.jpg" },
  {
    type: "content",
    title: "4.9/5 Calificación\nPromedio",
    body: "Más que una clínica, somos un equipo comprometido con tu bienestar. Nuestros pacientes confían en nosotros por la atención cercana, la claridad en cada tratamiento y los resultados obtenidos.",
  },
  { type: "placeholder", image: "/img/metodology-2.jpg" },
];

function ToothIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/svg/dental.svg" alt="" aria-hidden="true" className="h-7 w-7" />
    </div>
  );
}

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
          {cards.map((card, i) =>
            card.type === "content" ? (
              <div
                key={i}
                className="flex h-[360px] flex-col rounded-2xl bg-[#F2F4F7] p-7"
              >
                <ToothIcon />
                <h3 className="mt-8 whitespace-pre-line text-[22px] font-medium leading-[1.15] tracking-tight text-[#073677]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.35] text-[#1A1A1A]/65">
                  {card.body}
                </p>
              </div>
            ) : (
              <div
                key={i}
                className="relative h-[360px] overflow-hidden rounded-2xl bg-[#F2F4F7]"
              >
                {card.image && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
