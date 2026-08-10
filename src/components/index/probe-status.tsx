import { getProbe, probeAgo, probeSummary, verdictMeta } from "@/lib/probes";

const toneClass = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
} as const;

export function ProbeStatus({ slug }: { slug: string }) {
  const probe = getProbe(slug);
  if (!probe) return null;
  return (
    <p className="font-mono text-xs text-muted" suppressHydrationWarning>
      <span className={toneClass[verdictMeta[probe.verdict].tone]}>●</span>{" "}
      {probeSummary(probe)} · verificat {probeAgo(probe.checkedAt)}
    </p>
  );
}
