import type { AccentSegment } from "@/config/types";

export function toRevealSegments(
  segments: AccentSegment[],
  accentClassName: string
) {
  return segments.map((s) => ({
    text: s.text,
    className: s.accent ? accentClassName : undefined,
  }));
}
