import { dmSerifDisplay } from "@/app/fonts";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";

const testimonials = [
  {
    quote:
      "Excelente atención. La doctora es muy profesional, respetuosa y se nota el cuidado en cada detalle. El consultorio está impecable, todo muy limpio y ordenado. Me sentí cómoda y bien atendida durante toda la consulta. Súper recomendable.",
    name: "Ashley Landazo",
    rating: 5,
    avatar: "/img/reviews/person-1.png",
  },
  {
    quote:
      "Impecable atención y mucha profesionalidad. La doctora es súper clara, cuidadosa y te hace sentir tranquilo en todo momento. El consultorio es cómodo y todo impecable. Muy recomendable.",
    name: "Marcos Gutierrez",
    rating: 5,
    avatar: "/img/reviews/person-2.png",
  },
  {
    quote:
      "Me atendió en el mismo día, me resolvió un problemón. Muy amable, recomiendo.",
    name: "Manuel Leandro",
    rating: 4,
    avatar: "/img/reviews/person-3.png",
  },
  {
    quote:
      "Muy profesional, muy buena atención, equipos de primera y ambiente muy agradable. Te explica súper bien todo. Recomiendo al 100%.",
    name: "Lucia Fernández",
    rating: 5,
    avatar: "/img/reviews/person-4.png",
  },
  {
    quote:
      "Excelente atención. La doctora es muy profesional, respetuosa y se nota el cuidado en cada detalle. El consultorio está impecable y me sentí cómoda durante toda la consulta. Súper recomendable.",
    name: "Valentina Ríos",
    rating: 5,
    avatar: "/img/reviews/person-5.png",
  },
  {
    quote:
      "Excelente atención y mucha profesionalidad. La doctora es súper clara, cuidadosa y te hace sentir tranquilo en todo momento. Muy recomendable.",
    name: "Pablo Castro",
    rating: 4,
    avatar: "/img/reviews/person-6.png",
  },
  {
    quote:
      "Súper buena experiencia. Me explicaron cada paso del tratamiento con paciencia y sin apuro. Salí tranquila y sin dudas.",
    name: "Sofía Paredes",
    rating: 5,
    avatar: "/img/reviews/person-7.png",
  },
  {
    quote:
      "Fui por primera vez y me sentí muy cómodo. Precios claros, sin sorpresas, y un trato excelente de principio a fin.",
    name: "Gastón Medina",
    rating: 5,
    avatar: "/img/reviews/person-8.png",
  },
  {
    quote:
      "Vengo hace años con mi familia. Siempre puntuales, siempre atentos. Los nenes salen contentos, que no es poco.",
    name: "Camila Soria",
    rating: 5,
    avatar: "/img/reviews/person-9.png",
  },
  {
    quote:
      "Hicieron un trabajo impecable con mi implante. Seguimiento constante y mucha claridad durante todo el proceso.",
    name: "Julián Mori",
    rating: 5,
    avatar: "/img/reviews/person-10.png",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="w-full overflow-x-clip bg-white min-h-[100svh] flex flex-col justify-center py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Testimonios
          </p>
        </Reveal>
        <RevealWords
          as="h2"
          className="mt-4 whitespace-pre-line text-center text-[34px] leading-[1.1] sm:text-[36px] sm:leading-[1.08] lg:text-[44px] lg:leading-[1.05] font-normal sm:font-medium tracking-tight text-[#073677]"
          startDelay={120}
          wordDelay={50}
          segments={[
            { text: "Historias reales\n" },
            {
              text: "Pacientes felices",
              className: `${dmSerifDisplay.className} font-normal italic text-[#0588D7]`,
            },
          ]}
        />

        <TestimonialsCarousel items={testimonials} />
      </div>
    </section>
  );
}
