import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const servicesFile = new URL("../src/data/registry/services.ts", import.meta.url);
const snapshotsFile = new URL(
  "../src/data/registry/lighthouse-snapshots.json",
  import.meta.url,
);

const note =
  "Snapshot Lighthouse one-off (mobile default). Nu este scor Muie Index complet, nu este uptime, nu înlocuiește estimarea din catalog.";

function targets() {
  const src = readFileSync(servicesFile, "utf8");
  const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
  const sites = [...src.matchAll(/website: "([^"]+)"/g)].map((m) => m[1]);
  if (slugs.length === 0 || slugs.length !== sites.length) {
    console.error(`lighthouse: ${slugs.length} slugs vs ${sites.length} websites în services.ts`);
    process.exit(1);
  }
  return slugs.map((slug, i) => ({ slug, url: sites[i] }));
}

function run({ slug, url }) {
  const raw = execFileSync(
    "npx",
    [
      "--yes",
      "lighthouse@13",
      url,
      "--output=json",
      "--output-path=stdout",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--quiet",
      '--chrome-flags=--headless=new --no-sandbox',
    ],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, timeout: 300000 },
  );
  const report = JSON.parse(raw);
  const pct = (key) => Math.round((report.categories[key]?.score ?? 0) * 100);
  return {
    id: `lh-${slug}-${new Date().toISOString().slice(0, 10)}`,
    serviceSlug: slug,
    url,
    fetchedAt: new Date().toISOString(),
    tool: "lighthouse",
    toolVersion: report.lighthouseVersion,
    formFactor: "mobile",
    scores: {
      performance: pct("performance"),
      accessibility: pct("accessibility"),
      bestPractices: pct("best-practices"),
      seo: pct("seo"),
    },
    note,
  };
}

let previous = [];
try {
  previous = JSON.parse(readFileSync(snapshotsFile, "utf8"));
} catch {}

const snapshots = [];
for (const target of targets()) {
  try {
    snapshots.push(run(target));
    console.log(`lighthouse: ok ${target.slug}`);
  } catch {
    const kept = previous.find((s) => s.serviceSlug === target.slug);
    if (kept) snapshots.push(kept);
    console.warn(`lighthouse: fail ${target.slug}${kept ? " (păstrat snapshot anterior)" : ""}`);
  }
}

writeFileSync(snapshotsFile, JSON.stringify(snapshots, null, 2) + "\n");
console.log(`lighthouse: ${snapshots.length} snapshot-uri scrise`);
