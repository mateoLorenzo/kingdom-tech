import type { ClinicConfig, DayOfWeek } from "@/config/types";

function absoluteUrl(baseUrl: string, path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

function socialUrls(clinic: ClinicConfig): string[] {
  return clinic.sections.footer.socials
    .map((s) => s.href)
    .filter((href): href is string => Boolean(href) && href !== "#");
}

function dayUrl(day: DayOfWeek): string {
  return `https://schema.org/${day}`;
}

export function buildLocalBusinessJsonLd(
  clinic: ClinicConfig
): Record<string, unknown> {
  const { brand, contact, seo } = clinic;
  const sd = seo.structuredData;
  const base = seo.baseUrl.replace(/\/$/, "");

  const doc: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": sd?.type ?? "Dentist",
    "@id": `${base}#business`,
    name: brand.name,
    url: base,
    image: absoluteUrl(base, "/opengraph-image"),
    telephone: contact.phoneDisplay,
    ...(contact.email ? { email: contact.email } : {}),
  };

  if (sd?.address) {
    doc.address = {
      "@type": "PostalAddress",
      streetAddress: sd.address.street,
      addressLocality: sd.address.city,
      addressRegion: sd.address.region,
      ...(sd.address.postalCode ? { postalCode: sd.address.postalCode } : {}),
      addressCountry: sd.address.country,
    };
  }

  if (sd?.geo) {
    doc.geo = {
      "@type": "GeoCoordinates",
      latitude: sd.geo.lat,
      longitude: sd.geo.lng,
    };
  }

  if (sd?.hours?.length) {
    doc.openingHoursSpecification = sd.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map(dayUrl),
      opens: h.opens,
      closes: h.closes,
    }));
  }

  if (sd?.priceRange) {
    doc.priceRange = sd.priceRange;
  }

  if (sd?.rating) {
    doc.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: sd.rating.value,
      reviewCount: sd.rating.count,
    };
  }

  const socials = socialUrls(clinic);
  if (socials.length) {
    doc.sameAs = socials;
  }

  return doc;
}
