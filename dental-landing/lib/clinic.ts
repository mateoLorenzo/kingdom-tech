import defaultClinic from "@/config/clinics/default.json";
import apo from "@/config/clinics/apo.json";
import centroOdontologico from "@/config/clinics/centro-odontologico.json";
import clinicaSanMiguel from "@/config/clinics/clinica-san-miguel.json";
import type { ClinicConfig } from "@/config/types";

const registry = {
  dental: defaultClinic as ClinicConfig,
  apo: apo as ClinicConfig,
  "centro-odontologico": centroOdontologico as ClinicConfig,
  "clinica-san-miguel": clinicaSanMiguel as ClinicConfig,
} as const;

type ClinicId = keyof typeof registry;

function resolveClinicId(): ClinicId {
  const raw = process.env.NEXT_PUBLIC_CLINIC_ID;
  if (raw && raw in registry) {
    return raw as ClinicId;
  }
  return "dental";
}

export const clinic: ClinicConfig = registry[resolveClinicId()];

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
