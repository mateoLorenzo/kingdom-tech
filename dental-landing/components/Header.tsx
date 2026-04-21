"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { BrandLogo } from "./BrandLogo";
import { clinic, whatsappUrl, resolveHref } from "@/lib/clinic";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-black/5 bg-white/40 backdrop-blur-md transition-transform duration-300 ease-out ${
        scrolled ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
      }`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#inicio" aria-label={clinic.brand.name}>
          <BrandLogo variant="onLight" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {clinic.nav.map((link) => (
            <a
              key={link.label}
              href={resolveHref(link)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-medium text-[#1A1A1A] transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          {clinic.cta.contactLabel}
        </Button>
      </div>
    </header>
  );
}
