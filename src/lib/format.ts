export function formatRon(value: number): string {
  return new Intl.NumberFormat("ro-RO").format(value) + " lei";
}

export function formatEur(value: number): string {
  return (
    "€" +
    new Intl.NumberFormat("ro-RO", {
      maximumFractionDigits: 0,
    }).format(value)
  );
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function fundingPercent(raised: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((raised / goal) * 100));
}

export function padCounter(value: number, digits = 6): string {
  return value.toString().padStart(digits, "0").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
