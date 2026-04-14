export const WHATSAPP_PHONE = "5491140392404";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Buenas, quiero reservar un turno en la clínica.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
