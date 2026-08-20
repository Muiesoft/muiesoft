import type { ProbeDay, ProbeResult, ProbeVerdict } from "../domain/probe";

export const ETERRA_SLUG = "ancpi-eterra";

export const EXTRA_TARGETS = [
  {
    slug: ETERRA_SLUG,
    url: "https://eterra3.ancpi.ro",
    label: "e-Terra (ANCPI)",
    href: "/muie-index/incidente/inc-ancpi-eterra-ransomware-2026-07",
  },
] as const;

export const TLS_CODES = new Set([
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_HAS_EXPIRED",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "ERR_TLS_CERT_ALTNAME_INVALID",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "CERT_SIGNATURE_FAILURE",
]);

export const DNS_CODES = new Set(["ENOTFOUND", "ENETUNREACH"]);

export const PROBE_NOTE =
  "Probă HTTP: un GET per portal, IPv4 first, max 3 în paralel, 2 reîncercări pe eșec de transport. Runda zilnică e din GitHub Actions; origin=adhoc e o rulare în afara cronului. Semnal de disponibilitate, nu uptime și nu scor Muie Index. Verdicte: ok = 2xx/3xx; blocked = 403/429/503 (refuză clienți automați); tls = certificat neverificabil pentru clienți stricți; unreachable = timeout / RST / socket, nu e afirmație că cetățeanul nu deschide site-ul; down = DNS mort sau fără rută. Un snapshot Lighthouse existent previne down. Istoricul anterior a fost recitit cu aceste reguli (503/timeout ≠ down).";

export function isCatalogProbe(slug: string): boolean {
  return slug !== ETERRA_SLUG;
}

export function classifyHttpStatus(status: number): ProbeVerdict {
  if (status === 403 || status === 429 || status === 503) return "blocked";
  if (status >= 200 && status < 400) return "ok";
  return "down";
}

export function classifyError(code: string): ProbeVerdict {
  if (TLS_CODES.has(code)) return "tls";
  if (DNS_CODES.has(code)) return "down";
  return "unreachable";
}

export function applyLighthouseVeto(
  verdict: ProbeVerdict,
  hasLighthouse: boolean,
): ProbeVerdict {
  if (verdict === "down" && hasLighthouse) return "unreachable";
  return verdict;
}

export function remapHistoryVerdict(
  slug: string,
  status: number,
  verdict: ProbeVerdict,
): ProbeVerdict {
  if (verdict !== "down") return verdict;
  if (status === 503) return "blocked";
  if (slug === ETERRA_SLUG) return "down";
  if (status === 0) return "unreachable";
  return verdict;
}

export function remapHistoryDay(day: ProbeDay): ProbeDay {
  const services: ProbeDay["services"] = {};
  for (const [slug, entry] of Object.entries(day.services)) {
    const verdict = remapHistoryVerdict(slug, entry[0], entry[2]);
    services[slug] = [entry[0], entry[1], verdict];
  }
  const catalog = Object.entries(services).filter(([slug]) =>
    isCatalogProbe(slug),
  );
  const up = catalog.filter(([, entry]) => {
    const verdict = entry[2];
    return verdict === "ok" || verdict === "blocked";
  }).length;
  return {
    ...day,
    up,
    total: catalog.length || day.total,
    services,
  };
}

export function shouldRetry(verdict: ProbeVerdict): boolean {
  return verdict === "unreachable";
}

export function catalogResults(results: ProbeResult[]): ProbeResult[] {
  return results.filter((r) => isCatalogProbe(r.slug));
}

export function headerStateFrom(
  results: ProbeResult[],
  generatedAt: string,
): {
  tone: "success" | "warning" | "danger";
  pulse: boolean;
  answered: number;
  warn: number;
  down: number;
  unreachable: number;
  total: number;
  generatedAt: string;
} {
  const catalog = catalogResults(results);
  const down = catalog.filter((r) => r.verdict === "down").length;
  const unreachable = catalog.filter((r) => r.verdict === "unreachable").length;
  const warn = catalog.filter(
    (r) =>
      r.verdict === "tls" ||
      r.verdict === "blocked" ||
      r.verdict === "unreachable",
  ).length;
  const answered = catalog.filter(
    (r) => r.verdict === "ok" || r.verdict === "blocked",
  ).length;
  const tone: "success" | "warning" | "danger" =
    down > 0 ? "danger" : warn > 0 ? "warning" : "success";
  return {
    tone,
    pulse: down > 0,
    answered,
    warn,
    down,
    unreachable,
    total: catalog.length,
    generatedAt,
  };
}
