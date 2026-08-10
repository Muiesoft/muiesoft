import { readFileSync, writeFileSync } from "node:fs";

const servicesFile = new URL("../src/data/registry/services.ts", import.meta.url);
const probesFile = new URL("../src/data/registry/probes.json", import.meta.url);

const tlsCodes = new Set([
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_HAS_EXPIRED",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "ERR_TLS_CERT_ALTNAME_INVALID",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
]);

const EXTRA_TARGETS = [
  { slug: "ancpi-eterra", url: "https://eterra3.ancpi.ro" },
];

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

function verdictFor(status) {
  if (status === 403 || status === 429) return "blocked";
  if (status >= 200 && status < 400) return "ok";
  return "down";
}

async function probe({ slug, url }) {
  const checkedAt = new Date().toISOString();
  const start = performance.now();
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; MuiesoftProbe/1.0; +https://muiesoft.ro/muie-index)",
      },
    });
    await res.arrayBuffer();
    return {
      slug,
      url,
      status: res.status,
      verdict: verdictFor(res.status),
      latencyMs: Math.round(performance.now() - start),
      checkedAt,
    };
  } catch (error) {
    const code = error.cause?.code ?? error.name;
    const verdict = tlsCodes.has(code) ? "tls" : "down";
    return {
      slug,
      url,
      status: 0,
      verdict,
      error: error.name === "TimeoutError" ? "timeout" : code,
      latencyMs: Math.round(performance.now() - start),
      checkedAt,
    };
  }
}

const results = await Promise.all(targets().map(probe));

let history = [];
try {
  history = JSON.parse(readFileSync(probesFile, "utf8")).history ?? [];
} catch {}

const day = new Date().toISOString().slice(0, 10);
const responded = results.filter((r) => r.verdict === "ok" || r.verdict === "blocked");
history = history.filter((h) => h.date !== day);
history.push({
  date: day,
  up: responded.length,
  total: results.length,
  services: Object.fromEntries(
    results.map((r) => [r.slug, [r.status, r.latencyMs, r.verdict]]),
  ),
});
history = history.slice(-90);

writeFileSync(
  probesFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      tool: "muiesoft-probe",
      note: "Probă HTTP simplă: un GET per portal, o dată pe zi, din GitHub Actions. Semnal de disponibilitate, nu uptime complet și nu scor Muie Index. Verdictele: ok = răspuns 2xx/3xx; blocked = 403/429 (refuză clienți automați); tls = certificat neverificabil pentru clienți stricți; down = timeout / eroare de conexiune / 5xx.",
      results,
      history,
    },
    null,
    2,
  ) + "\n",
);

console.log(`probe: ${responded.length}/${results.length} au răspuns`);
