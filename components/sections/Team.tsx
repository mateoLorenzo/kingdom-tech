import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { dmSerifDisplay } from "@/app/fonts";

const members = [
  { name: "Dra. Martina Reyes", role: "Directora Clínica", experience: "+8 AÑOS DE EXP", image: "/img/team-1.jpg" },
  { name: "Dr. Ignacio Alvarez", role: "Implantología", experience: "+17 AÑOS DE EXP", image: "/img/team-2.jpg" },
  { name: "Dra. Carolina Fuentes", role: "Ortodoncia", experience: "+6 AÑOS DE EXP", image: "/img/team-3.jpg" },
  { name: "Dr. Tomás Herrera", role: "Odontopediatría", experience: "+13 AÑOS DE EXP", image: "/img/team-4.jpg" },
];

export function Team() {
  return (
    <section id="nosotros" className="flex min-h-[100dvh] w-full items-center bg-[#F9F9FB] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[.3px] text-[#09357C]">
            Sobre Nosotros
          </p>
        </Reveal>
        <RevealWords
          as="h2"
          className="mt-4 whitespace-pre-line text-[44px] font-medium leading-[1.05] tracking-tight text-[#073677]"
          startDelay={120}
          wordDelay={50}
          segments={[
            { text: "Conocé El Equipo\n" },
            {
              text: "Detrás De Tu Sonrisa",
              className: `${dmSerifDisplay.className} font-normal italic text-[#0588D7]`,
            },
          ]}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal
              key={i}
              delay={360 + i * 120}
              className="flex flex-col rounded-2xl bg-white p-3 shadow-[0_4px_20px_-8px_rgba(7,54,119,0.15)] ring-1 ring-black/5"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F2F4F7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium tracking-[.3px] text-[#073677] ring-1 ring-white/30 backdrop-blur-md">
                  {/* <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium tracking-[.3px] text-[#073677] shadow-sm backdrop-blur-sm"> */}
                  {m.experience}
                </span>
              </div>
              <div className="px-2 pt-4 pb-2">
                <p className="text-base font-semibold tracking-tight text-[#073677]">
                  {m.name}
                </p>
                <p className="mt-1 text-xs text-[#1A1A1A]/60">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
