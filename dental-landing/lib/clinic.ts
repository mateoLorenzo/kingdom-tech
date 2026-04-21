// import clinicData from "@/config/clinic.json";
import clinicData from "@/config/clinics/apo.json";
import type { ClinicConfig } from "@/config/types";

export const clinic: ClinicConfig = clinicData as ClinicConfig;

export function whatsappUrl(message?: string): string {
  const { phone, defaultMessage } = clinic.contact.whatsapp;
  const text = message ?? defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function resolveHref(link: {
  href?: string;
  whatsapp?: boolean;
}): string {
  if (link.whatsapp) return whatsappUrl();
  return link.href ?? "#";
}
