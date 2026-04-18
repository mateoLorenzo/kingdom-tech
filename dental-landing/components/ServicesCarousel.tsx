"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const services: { name: string; image?: string }[] = [
  { name: "Limpieza dental", image: "/img/limpieza.jpg" },
  { name: "Estética dental", image: "/img/estetica.jpg" },
  { name: "Ortodoncia", image: "/img/brackets.jpg" },
  { name: "Implantes", image: "/img/implantes.jpg" },
  { name: "Prótesis", image: "/img/protesis.jpg" },
  { name: "Endodoncia", image: "/img/ondodoncia.jpg" },
  { name: "Odontopediatría", image: "/img/Odontopediatría.jpg" },
  { name: "Urgencias", image: "/img/emergencia.jpg" },
];

export function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mt-12 w-full">
      <div ref={emblaRef} className="mx-[calc(50%-50vw)] overflow-hidden">
        <div className="flex -ml-4 pl-6 pr-6 lg:pl-[max(40px,calc((100vw_-_1280px)/2_+_40px))] lg:pr-[max(40px,calc((100vw_-_1280px)/2_+_40px))]">
          {services.map(({ name, image }, i) => (
            <div key={name} className="min-w-0 shrink-0 grow-0 pl-4">
              <div
                className={`relative h-[280px] w-[240px] overflow-hidden rounded-2xl bg-gray-200 ${
                  revealed ? "animate-hero-fade-up" : "opacity-0"
                }`}
                style={revealed ? { animationDelay: `${i * 90}ms` } : undefined}
              >
                {image && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F9F9FB] via-[#F9F9FB]/80 to-transparent" />
                  </>
                )}
                <p className="absolute bottom-5 left-5 right-5 text-center text-[18px] italic leading-[1.1] text-[#8d9fb9]">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
