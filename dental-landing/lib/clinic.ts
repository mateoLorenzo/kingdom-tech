import defaultClinic from "@/config/clinics/default.json";
import apo from "@/config/clinics/apo.json";
import centroOdontologico from "@/config/clinics/centro-odontologico.json";
import clinicaSanMiguel from "@/config/clinics/clinica-san-miguel.json";
import drScime from "@/config/clinics/dr-scime.json";
import kdf from "@/config/clinics/kdf.json";
import coiHaedo from "@/config/clinics/coi-haedo.json";
import mbOdontologia from "@/config/clinics/mb-odontologia.json";
import ortheRecoleta from "@/config/clinics/orthe-recoleta.json";
import dentalSur from "@/config/clinics/dental-sur.json";
import comyr from "@/config/clinics/comyr.json";
import miOdontologia from "@/config/clinics/mi-odontologia.json";
import dentivita from "@/config/clinics/dentivita.json";
import zuroAlvear from "@/config/clinics/zuro-alvear.json";
import centroOdontologicoCastelar from "@/config/clinics/centro-odontologico-castelar.json";
import boulevard from "@/config/clinics/boulevard.json";
import dentalAdvance from "@/config/clinics/dental-advance.json";
import nordelta from "@/config/clinics/nordelta.json";
import clinicaAyacucho from "@/config/clinics/clinica-ayacucho.json";
import dentalPalermo from "@/config/clinics/dental-palermo.json";
import drLucero from "@/config/clinics/dr-lucero.json";
import jhonBarrios from "@/config/clinics/jhon-barrios.json";
import smilingCongreso from "@/config/clinics/smiling-congreso.json";
import neodental from "@/config/clinics/neodental.json";
import tuSonrisa from "@/config/clinics/tu-sonrisa.json";
import sanIsidroLabrador from "@/config/clinics/san-isidro-labrador.json";
import villaUrquiza from "@/config/clinics/villa-urquiza.json";
import ceimed from "@/config/clinics/ceimed.json";
import arenales from "@/config/clinics/arenales.json";
import odontologialp from "@/config/clinics/odontologialp.json";
import centroOdontologicoMrz from "@/config/clinics/centro-odontologico-mrz.json";
import myosCentralLaPlata from "@/config/clinics/myos-central-la-plata.json";
import odontologiaIntegralLp from "@/config/clinics/odontologia-integral-lp.json";
import consultoriosOdontologicosIoma from "@/config/clinics/consultorios-odontologicos-ioma.json";
import dentalWoda from "@/config/clinics/dental-woda.json";
import urgenciasOdontologicasPalermo from "@/config/clinics/urgencias-odontologicas-palermo.json";
import maycenter from "@/config/clinics/maycenter.json";
import odontologiaCaballito from "@/config/clinics/odontologia-caballito.json";
import espacioOdontologicoIntegral from "@/config/clinics/espacio-odontologico-integral.json";
import centroImplantoBarrioNorte from "@/config/clinics/centro-implanto-barrio-norte.json";
import proteccionDentalVillaCrespo from "@/config/clinics/proteccion-dental-villa-crespo.json";
import consultoriosOdontologicosGaray from "@/config/clinics/consultorios-odontologicos-garay.json";
import amosmile from "@/config/clinics/amosmile.json";
import centroOdontologicoAcoyte from "@/config/clinics/centro-odontologico-acoyte.json";
import recoletaOdontologia from "@/config/clinics/recoleta-odontologia.json";
import sisoDentalPalermo from "@/config/clinics/siso-dental-palermo.json";
import smOdontologia from "@/config/clinics/sm-odontologia.json";
import checkup from "@/config/clinics/checkup.json";
import odontoMartinGarcia from "@/config/clinics/odonto-martin-garcia.json";
import consultoriosOdontologicosCentro from "@/config/clinics/consultorios-odontologicos-centro.json";
import bycOdontologia from "@/config/clinics/byc-odontologia.json";
import juninOdontologia from "@/config/clinics/junin-odontologia.json";
import ioat from "@/config/clinics/ioat.json";
import smilingBalvanera from "@/config/clinics/smiling-balvanera.json";
import clinicaOdontologicaAragones from "@/config/clinics/clinica-odontologica-aragones.json";
import ciosDental from "@/config/clinics/cios-dental.json";
import ehOdontologia from "@/config/clinics/eh-odontologia.json";
import odontocentro from "@/config/clinics/odontocentro.json";
import odontoShine from "@/config/clinics/odonto-shine.json";
import armonident from "@/config/clinics/armonident.json";
import clinicaOdontologicaCallao from "@/config/clinics/clinica-odontologica-callao.json";
import qcGrupoDental from "@/config/clinics/qc-grupo-dental.json";
import type { ClinicConfig } from "@/config/types";

const registry = {
  dental: defaultClinic as ClinicConfig,
  apo: apo as ClinicConfig,
  "centro-odontologico": centroOdontologico as ClinicConfig,
  "clinica-san-miguel": clinicaSanMiguel as ClinicConfig,
  "dr-scime": drScime as ClinicConfig,
  kdf: kdf as ClinicConfig,
  "coi-haedo": coiHaedo as ClinicConfig,
  "mb-odontologia": mbOdontologia as ClinicConfig,
  "orthe-recoleta": ortheRecoleta as ClinicConfig,
  "dental-sur": dentalSur as ClinicConfig,
  comyr: comyr as ClinicConfig,
  "mi-odontologia": miOdontologia as ClinicConfig,
  dentivita: dentivita as ClinicConfig,
  "zuro-alvear": zuroAlvear as ClinicConfig,
  "centro-odontologico-castelar": centroOdontologicoCastelar as ClinicConfig,
  boulevard: boulevard as ClinicConfig,
  "dental-advance": dentalAdvance as ClinicConfig,
  nordelta: nordelta as ClinicConfig,
  "clinica-ayacucho": clinicaAyacucho as ClinicConfig,
  "dental-palermo": dentalPalermo as ClinicConfig,
  "dr-lucero": drLucero as ClinicConfig,
  "jhon-barrios": jhonBarrios as ClinicConfig,
  "smiling-congreso": smilingCongreso as ClinicConfig,
  neodental: neodental as ClinicConfig,
  "tu-sonrisa": tuSonrisa as ClinicConfig,
  "san-isidro-labrador": sanIsidroLabrador as ClinicConfig,
  "villa-urquiza": villaUrquiza as ClinicConfig,
  ceimed: ceimed as ClinicConfig,
  arenales: arenales as ClinicConfig,
  odontologialp: odontologialp as ClinicConfig,
  "centro-odontologico-mrz": centroOdontologicoMrz as ClinicConfig,
  "myos-central-la-plata": myosCentralLaPlata as ClinicConfig,
  "odontologia-integral-lp": odontologiaIntegralLp as ClinicConfig,
  "consultorios-odontologicos-ioma": consultoriosOdontologicosIoma as ClinicConfig,
  "dental-woda": dentalWoda as ClinicConfig,
  "urgencias-odontologicas-palermo": urgenciasOdontologicasPalermo as ClinicConfig,
  maycenter: maycenter as ClinicConfig,
  "odontologia-caballito": odontologiaCaballito as ClinicConfig,
  "espacio-odontologico-integral": espacioOdontologicoIntegral as ClinicConfig,
  "centro-implanto-barrio-norte": centroImplantoBarrioNorte as ClinicConfig,
  "proteccion-dental-villa-crespo": proteccionDentalVillaCrespo as ClinicConfig,
  "consultorios-odontologicos-garay": consultoriosOdontologicosGaray as ClinicConfig,
  amosmile: amosmile as ClinicConfig,
  "centro-odontologico-acoyte": centroOdontologicoAcoyte as ClinicConfig,
  "recoleta-odontologia": recoletaOdontologia as ClinicConfig,
  "siso-dental-palermo": sisoDentalPalermo as ClinicConfig,
  "sm-odontologia": smOdontologia as ClinicConfig,
  checkup: checkup as ClinicConfig,
  "odonto-martin-garcia": odontoMartinGarcia as ClinicConfig,
  "consultorios-odontologicos-centro": consultoriosOdontologicosCentro as ClinicConfig,
  "byc-odontologia": bycOdontologia as ClinicConfig,
  "junin-odontologia": juninOdontologia as ClinicConfig,
  ioat: ioat as ClinicConfig,
  "smiling-balvanera": smilingBalvanera as ClinicConfig,
  "clinica-odontologica-aragones": clinicaOdontologicaAragones as ClinicConfig,
  "cios-dental": ciosDental as ClinicConfig,
  "eh-odontologia": ehOdontologia as ClinicConfig,
  odontocentro: odontocentro as ClinicConfig,
  "odonto-shine": odontoShine as ClinicConfig,
  armonident: armonident as ClinicConfig,
  "clinica-odontologica-callao": clinicaOdontologicaCallao as ClinicConfig,
  "qc-grupo-dental": qcGrupoDental as ClinicConfig,
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
