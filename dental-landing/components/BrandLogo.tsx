import { clinic } from "@/lib/clinic";

type Props = {
  variant?: "onLight" | "onDark";
  className?: string;
};

export function BrandLogo({ variant = "onLight", className = "" }: Props) {
  const { name, logo } = clinic.brand;

  if (logo?.type === "image") {
    const src =
      variant === "onDark" && logo.srcOnDark ? logo.srcOnDark : logo.src;
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt={logo.alt}
        style={{ height: `${logo.height}px`, width: "auto" }}
        className={`block ${className}`}
      />
    );
  }

  const color = variant === "onDark" ? "text-white" : "text-[#0E1F3A]";
  return (
    <span
      className={`text-xl font-semibold tracking-tight ${color} ${className}`}
    >
      {name}
    </span>
  );
}
