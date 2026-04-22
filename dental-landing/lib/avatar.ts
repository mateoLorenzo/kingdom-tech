const PALETTE = [
  "#5c6ac0",
  "#0089d6",
  "#7b1f9c",
  "#e74379",
  "#0099a7",
  "#eb6e09",
];

export function initialFor(name: string): string {
  const clean = name.replace(/^(dr|dra|lic|sr|sra|ing)\.?\s+/i, "").trim();
  return clean.charAt(0).toUpperCase() || "?";
}

export function colorByIndex(index: number): string {
  return PALETTE[((index % PALETTE.length) + PALETTE.length) % PALETTE.length];
}
