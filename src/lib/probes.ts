import raw from "@/data/registry/probes.json";
import type { ProbeData, ProbeResult, ProbeVerdict } from "@/domain/probe";
import {
  headerStateFrom,
  remapHistoryDay,
  remapHistoryVerdict,
} from "@/lib/probe-verdict";

const loaded = raw as unknown as ProbeData;

export const probeData: ProbeData = {
  ...loaded,
  results: loaded.results.map((result) => ({
    ...result,
    verdict: remapHistoryVerdict(result.slug, result.status, result.verdict),
  })),
  history: loaded.history.map(remapHistoryDay),
};

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
  unreachable: { label: "proba nu a ajuns", tone: "warning" },
  down: { label: "nu răspunde", tone: "danger" },
};

export function probeSummary(result: ProbeResult): string {
  if (result.verdict === "ok") {
    return `${result.status} · ${(result.latencyMs / 1000).toFixed(1)}s`;
  }
  if (result.verdict === "blocked") {
    return `${result.status} · ${verdictMeta.blocked.label}`;
  }
  if (result.verdict === "tls") {
    return result.error
      ? `${verdictMeta.tls.label} · ${result.error}`
      : verdictMeta.tls.label;
  }
  if (result.verdict === "unreachable") {
    const detail = result.error || (result.status ? String(result.status) : "");
    return detail
      ? `${verdictMeta.unreachable.label} · ${detail}`
      : verdictMeta.unreachable.label;
  }
  return `${verdictMeta.down.label}${result.error ? ` · ${result.error}` : ""}`;
}

export function probeHeaderState() {
  return headerStateFrom(probeData.results, probeData.generatedAt);
}

export function probeHeaderLabel(): string {
  const state = probeHeaderState();
  const when = probeTimestamp(state.generatedAt);
  if (state.tone === "success") {
    return `${state.total} portaluri din catalog au răspuns probei · ultima rundă ${when}`;
  }
  if (state.tone === "danger") {
    return `${state.down} din ${state.total} fără DNS sau fără rută · ultima rundă ${when}`;
  }
  return `Proba: ${state.answered} răspund, ${state.warn} semnale (WAF, TLS sau proba nu a ajuns) · ultima rundă ${when}`;
}
