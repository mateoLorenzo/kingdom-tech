import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full py-1.5 pl-4 pr-1.5 text-sm font-medium text-white bg-gradient-to-r from-brand-accent to-brand-primary transition-shadow duration-300 ease-out hover:shadow-[0_10px_30px_-8px_rgba(7,54,119,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2";

export function Button({
  href,
  children,
  withArrow = true,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${base} ${className}`}>
        {content}
      </a>
    );
  }

  return <button className={`${base} ${className}`}>{content}</button>;
}
