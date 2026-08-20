import raw from "@/data/registry/probes.json";
import type { ProbeData, ProbeResult, ProbeVerdict } from "@/domain/probe";

export const probeData = raw as unknown as ProbeData;

export function getProbe(slug: string): ProbeResult | undefined {
  return probeData.results.find((r) => r.slug === slug);
}

export function probeAgo(iso: string): string {
  const hours = Math.max(0, Math.floor((Date.now() - Date.parse(iso)) / 3_600_000));
  if (hours < 1) return "acum mai puțin de o oră";
  if (hours < 24) return `acum ${hours}h`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "acum o zi" : `acum ${days} zile`;
}

export function probeTimestamp(iso: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Bucharest",
  }).format(new Date(iso));
}

export const verdictMeta: Record<
  ProbeVerdict,
  { label: string; tone: "success" | "warning" | "danger" }
> = {
  ok: { label: "răspunde", tone: "success" },
  blocked: { label: "refuză clienți automați", tone: "warning" },
  tls: { label: "TLS neverificabil pentru clienți stricți", tone: "warning" },
  down: { label: "nu răspunde", tone: "danger" },
};

export function probeSummary(result: ProbeResult): string {
  if (result.verdict === "ok") {
    return `${result.status} · ${(result.latencyMs / 1000).toFixed(1)}s`;
  }
  if (result.verdict === "blocked") {
    return `${result.status} · ${verdictMeta.blocked.label}`;
  }
  if (result.verdict === "tls") return verdictMeta.tls.label;
  return `${verdictMeta.down.label}${result.error ? ` · ${result.error}` : ""}`;
}

export function probeHeaderState() {
  const results = probeData.results;
  const down = results.filter((r) => r.verdict === "down").length;
  const warn = results.filter(
    (r) => r.verdict === "tls" || r.verdict === "blocked",
  ).length;
  const answered = results.filter(
    (r) => r.verdict === "ok" || r.verdict === "blocked",
  ).length;
  const tone: "success" | "warning" | "danger" =
    down > 0 ? "danger" : warn > 0 ? "warning" : "success";
  return {
    tone,
    pulse: down > 0,
    answered,
    total: results.length,
    generatedAt: probeData.generatedAt,
  };
}
