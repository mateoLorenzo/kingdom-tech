import { Info, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

// Fixed bottom notice shown to leads so they understand that photos and some
// data are placeholders. `open` drives the fade-up entrance / fade-out exit
// (BottomOverlays keeps it mounted until the exit finishes). The X dismisses it
// for the session (it reappears on reload).
export function DisclaimerBanner({ open, onClose }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-x-3 bottom-3 z-40 mx-auto max-w-xl lg:bottom-6 ${
        open ? "animate-hero-fade-up" : "animate-fade-out-down"
      }`}
    >
      <div className="relative flex items-start gap-3 rounded-2xl border border-brand-primary/15 bg-white/95 px-4 py-3.5 shadow-[0_10px_34px_-10px_rgba(7,54,119,0.28)] backdrop-blur-md lg:px-5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
          <Info className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 pr-6">
          <p className="text-[13px] font-semibold tracking-tight text-brand-primary">
            Vista de demostración
          </p>
          <p className="mt-0.5 text-[12.5px] leading-snug text-brand-text/70">
            Las fotos y algunos datos son de muestra. Si conservan la web,
            cargamos los datos reales.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar aviso"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-brand-primary/50 transition-colors hover:bg-brand-primary/5 hover:text-brand-primary"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
