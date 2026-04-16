import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="w-full bg-[#0A1F3D] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-semibold tracking-tight">Dental</p>
            <p className="mt-3 text-sm leading-[1.5] text-white/60">
              Cuidamos tu sonrisa con dedicación y
              <br />
              una atención cercana en cada consulta,
              <br />
              tratamientos pensados para cada etapa.
            </p>
            <div className="mt-5 flex gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white">Instagram</a>
              <span className="text-white/30">·</span>
              <a href="#" className="hover:text-white">Facebook</a>
              <span className="text-white/30">·</span>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Navegar</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#metodologia" className="hover:text-white">Metodología</a></li>
              <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
              <li><a href="#testimonios" className="hover:text-white">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Servicios</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#servicios" className="hover:text-white">Prótesis dentales</a></li>
              <li><a href="#servicios" className="hover:text-white">Odontopediatría</a></li>
              <li><a href="#servicios" className="hover:text-white">Ortodoncia</a></li>
              <li><a href="#servicios" className="hover:text-white">Implantes</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Honduras 5730, Palermo Hollywood</li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +54 9 11 4039-2404
                </a>
              </li>
              <li>
                <a href="mailto:hola@dental.com" className="hover:text-white">
                  hola@dental.com
                </a>
              </li>
              <li className="text-white/60">Lun a Vie · 9–19h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Dental. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
