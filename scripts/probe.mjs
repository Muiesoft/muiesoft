import { readFileSync, writeFileSync } from "node:fs";
import dns from "node:dns";
import net from "node:net";

dns.setDefaultResultOrder("ipv4first");
net.setDefaultAutoSelectFamily?.(true);

const servicesFile = new URL("../src/data/registry/services.ts", import.meta.url);
const probesFile = new URL("../src/data/registry/probes.json", import.meta.url);
const lighthouseFile = new URL(
  "../src/data/registry/lighthouse-snapshots.json",
  import.meta.url,
);

const ETERRA_SLUG = "ancpi-eterra";
const EXTRA_TARGETS = [{ slug: ETERRA_SLUG, url: "https://eterra3.ancpi.ro" }];
const CONCURRENCY = 3;
const ATTEMPTS = 3;
const TIMEOUT_MS = 20_000;

const TLS_CODES = new Set([
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_HAS_EXPIRED",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "ERR_TLS_CERT_ALTNAME_INVALID",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "CERT_SIGNATURE_FAILURE",
]);
const DNS_CODES = new Set(["ENOTFOUND", "ENETUNREACH"]);

const PROBE_NOTE =
  "Probă HTTP: un GET per portal, IPv4 first, max 3 în paralel, 2 reîncercări pe eșec de transport. Runda zilnică e din GitHub Actions; origin=adhoc e o rulare în afara cronului. Semnal de disponibilitate, nu uptime și nu scor Muie Index. Verdicte: ok = 2xx/3xx; blocked = 403/429/503 (refuză clienți automați); tls = certificat neverificabil pentru clienți stricți; unreachable = timeout / RST / socket, nu e afirmație că cetățeanul nu deschide site-ul; down = DNS mort sau fără rută. Un snapshot Lighthouse existent previne down. Istoricul anterior a fost recitit cu aceste reguli (503/timeout ≠ down).";

function classifyHttpStatus(status) {
  if (status === 403 || status === 429 || status === 503) return "blocked";
  if (status >= 200 && status < 400) return "ok";
  return "down";
}

function classifyError(code) {
  if (TLS_CODES.has(code)) return "tls";
  if (DNS_CODES.has(code)) return "down";
  return "unreachable";
}

function applyLighthouseVeto(verdict, hasLighthouse) {
  if (verdict === "down" && hasLighthouse) return "unreachable";
  return verdict;
}

function remapHistoryVerdict(slug, status, verdict) {
  if (verdict !== "down") return verdict;
  if (status === 503) return "blocked";
  if (slug === ETERRA_SLUG) return "down";
  if (status === 0) return "unreachable";
  return verdict;
}

function remapHistoryDay(day) {
  const services = {};
  for (const [slug, entry] of Object.entries(day.services ?? {})) {
    services[slug] = [entry[0], entry[1], remapHistoryVerdict(slug, entry[0], entry[2])];
  }
  const catalog = Object.entries(services).filter(([slug]) => slug !== ETERRA_SLUG);
  return {
    ...day,
    up: catalog.filter(([, entry]) => entry[2] === "ok" || entry[2] === "blocked").length,
    total: catalog.length || day.total,
    services,
  };
}

function targets() {
  const src = readFileSync(servicesFile, "utf8");
  const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
  const sites = [...src.matchAll(/website: "([^"]+)"/g)].map((m) => m[1]);
  if (slugs.length === 0 || slugs.length !== sites.length) {
    console.error(`probe: ${slugs.length} slugs vs ${sites.length} websites în services.ts`);
    process.exit(1);
  }
  return [...slugs.map((slug, i) => ({ slug, url: sites[i] })), ...EXTRA_TARGETS];
}

function lighthouseSlugs() {
  try {
    return new Set(
      JSON.parse(readFileSync(lighthouseFile, "utf8")).map((s) => s.serviceSlug),
    );
  } catch {
    return new Set();
  }
}

function errorCode(error) {
  if (error.name === "TimeoutError" || error.name === "AbortError") return "timeout";
  return error.cause?.code ?? error.code ?? error.cause?.cause?.code ?? error.name;
}

async function probeOnce({ slug, url }) {
  const checkedAt = new Date().toISOString();
  const start = performance.now();
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; MuiesoftProbe/1.0; +https://muiesoft.ro/muie-index)",
        accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        "accept-language": "ro-RO,ro;q=0.9,en;q=0.5",
      },
    });
    await res.arrayBuffer();
    return {
      slug,
      url,
      status: res.status,
      verdict: classifyHttpStatus(res.status),
      latencyMs: Math.round(performance.now() - start),
      checkedAt,
    };
  } catch (error) {
    const code = errorCode(error);
    return {
      slug,
      url,
      status: 0,
      verdict: classifyError(code),
      error: code,
      latencyMs: Math.round(performance.now() - start),
      checkedAt,
    };
  }
}

async function probeTarget(target, hasLighthouse) {
  let result = await probeOnce(target);
  for (let i = 1; i < ATTEMPTS && result.verdict === "unreachable"; i += 1) {
    result = await probeOnce(target);
  }
  return {
    ...result,
    verdict: applyLighthouseVeto(result.verdict, hasLighthouse),
  };
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      out[index] = await fn(items[index]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker()),
  );
  return out;
}

const hasLh = lighthouseSlugs();
const results = await mapPool(targets(), CONCURRENCY, (target) =>
  probeTarget(target, hasLh.has(target.slug)),
);

let history = [];
try {
  history = JSON.parse(readFileSync(probesFile, "utf8")).history ?? [];
} catch {}

history = history.map(remapHistoryDay);

const day = new Date().toISOString().slice(0, 10);
const catalog = results.filter((r) => r.slug !== ETERRA_SLUG);
const responded = catalog.filter((r) => r.verdict === "ok" || r.verdict === "blocked");
history = history.filter((h) => h.date !== day);
history.push({
  date: day,
  up: responded.length,
  total: catalog.length,
  services: Object.fromEntries(
    results.map((r) => [r.slug, [r.status, r.latencyMs, r.verdict]]),
  ),
});
history = history.slice(-90);

const origin = process.env.GITHUB_ACTIONS ? "github-actions" : "adhoc";

writeFileSync(
  probesFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      tool: "muiesoft-probe",
      origin,
      note: PROBE_NOTE,
      results,
      history,
    },
    null,
    2,
  ) + "\n",
);

console.log(
  `probe: ${responded.length}/${catalog.length} catalog au răspuns · origin=${origin}`,
);
