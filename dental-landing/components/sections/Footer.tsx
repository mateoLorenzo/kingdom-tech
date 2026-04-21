import { clinic, resolveHref } from "@/lib/clinic";
import { BrandLogo } from "@/components/BrandLogo";
import type { FooterItem, FooterSocial } from "@/config/types";

function renderFooterItem(item: FooterItem, key: number) {
  if (item.href || item.whatsapp) {
    return (
      <li key={key}>
        <a
          href={resolveHref(item)}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="hover:text-white"
        >
          {item.label}
        </a>
      </li>
    );
  }
  return (
    <li key={key} className={item.muted ? "text-white/60" : undefined}>
      {item.label}
    </li>
  );
}

function renderSocial(item: FooterSocial, key: number) {
  return (
    <a
      key={key}
      href={resolveHref(item)}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="hover:text-white"
    >
      {item.label}
    </a>
  );
}

export function Footer() {
  const { footer } = clinic.sections;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-footer-bg text-brand-footer-text">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo variant="onDark" />
            <p className="mt-3 whitespace-pre-line text-sm leading-[1.5] text-white/60">
              {footer.about}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
              {footer.socials.map((s, i) => (
                <span key={i} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/30">·</span>}
                  {renderSocial(s, i)}
                </span>
              ))}
            </div>
          </div>

          {footer.columns.map((col, ci) => (
            <div key={ci}>
              <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {col.items.map((item, i) => renderFooterItem(item, i))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {footer.copyrightName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
