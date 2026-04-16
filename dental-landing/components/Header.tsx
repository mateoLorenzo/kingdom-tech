import { Button } from "./Button";
import { whatsappUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contactanos", href: whatsappUrl(), external: true },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-black/5 bg-white/40 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          className="text-xl font-semibold tracking-tight text-[#0E1F3A]"
        >
          Dental
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-medium text-[#1A1A1A] transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          Contactanos
        </Button>
      </div>
    </header>
  );
}
