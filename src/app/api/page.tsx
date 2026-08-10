import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { FeatureStatus } from "@/components/shared/feature-status";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "România, dar cu API",
  description:
    "API public read-only în preview: legi, portaluri, contracte, proceduri și incidente, cu provenance, direct din registry-ul Muiesoft.",
  path: "/api",
});

const endpoints = [
  ["/api/v1/laws", "legi explicate, cu surse oficiale"],
  ["/api/v1/services", "portaluri publice + scoruri etichetate"],
  ["/api/v1/institutions", "director instituții pentru cereri 544"],
  ["/api/v1/contracts", "contracte publice documentate"],
  ["/api/v1/procedures", "proceduri civice pas cu pas"],
  ["/api/v1/incidents", "incidente de disponibilitate cu surse"],
  ["/api/v1/probes", "probă HTTP zilnică pe portaluri"],
  ["/api/v1/lighthouse", "snapshot-uri Lighthouse pe portaluri"],
  ["/api/v1/changes", "changelog Muiesoft"],
];

const exampleJson = `{
  "meta": {
    "endpoint": "/api/v1/contracts",
    "count": 5,
    "generatedAt": "…",
    "license": "AGPL-3.0",
    "note": "Date din registry-ul Muiesoft, cu provenance…"
  },
  "data": [
    {
      "id": "ctr-adr-cloud-dedicat-vodafone-2024",
      "institution": "Autoritatea pentru Digitalizarea României (ADR)",
      "valueRon": 417099800,
      "sources": [{ "url": "https://www.adr.gov.ro/cpg", "sourceType": "official" }],
      "demo": false
    }
  ]
}`;

const statusCodes = [
  ["200", "OK · payload cu meta + provenance (activ)"],
  ["404", "Not Found · resursa nu există (activ)"],
  ["304", "Not Modified · rezervat"],
  ["400", "Bad Request · rezervat pentru query params"],
  ["429", "Too Many Requests · rezervat pentru rate limits"],
  ["503", "Service Unavailable · când API-ul e oprit"],
];

export default function ApiPage() {
  return (
    <>
      <PageHero
        feature="api"
        title="România, dar cu API."
        subtitle="Dacă statul are date publice, oamenii ar trebui să le poată folosi fără ritualuri oculte."
      />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8">
        <div className="flex flex-wrap gap-3">
          <FeatureStatus feature="romaniaApi" />
          <Badge variant="preview">
            Read-only · date reale din registry · fără auth, fără SLA
          </Badge>
        </div>
        <p className="mt-4 text-sm text-muted">
          Specificație OpenAPI:{" "}
          <code className="text-acid">docs/api/openapi.yaml</code>
          {"; "}
          scheme Zod:{" "}
          <code className="text-acid">src/domain/schemas.ts</code>
        </p>
        <div className="mt-8 border border-border bg-surface">
          <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
            <Badge variant="preview">PREVIEW · LIVE</Badge>
            <p className="font-mono text-xs text-muted">
              Endpoint-urile răspund. Copiază și rulează.
            </p>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm text-acid">
            {endpoints
              .slice(0, 5)
              .map(([path]) => `curl ${siteConfig.url}${path}`)
              .join("\n")}
          </pre>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {endpoints.map(([endpoint, description]) => (
            <a
              key={endpoint}
              href={endpoint}
              className="border border-border p-5 transition-colors hover:border-acid"
            >
              <p className="font-mono text-acid">{endpoint}</p>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </a>
          ))}
        </div>

        <section className="mt-12 border border-border p-6">
          <p className="terminal-label">Formatul răspunsului</p>
          <pre className="mt-4 overflow-x-auto font-mono text-xs text-muted">
            {exampleJson}
          </pre>
          <p className="mt-4 text-sm text-muted">
            Fiecare înregistrare cu impact real are `sources`. Ce e
            demonstrativ poartă `demo: true`. Scorurile de portal sunt
            `opinion-estimate`, nu măsurători: e scris în payload.
          </p>
        </section>

        <section className="mt-8 border border-border p-6">
          <p className="terminal-label">Status codes</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            {statusCodes.map(([code, meaning]) => (
              <li key={code}>
                <span className="text-acid">{code}</span>{" "}
                <span className="text-muted">{meaning}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Versioning: `/v1`. Auth + rate limits: când va exista trafic care
            să le ceară. Provenance obligatoriu pe orice claim numeric.
          </p>
        </section>

        <p className="mt-8 text-muted">
          ANAF, dacă citești asta: avem pull request.
        </p>

        <div className="mt-16">
          <ModulePlaceholder
            content={getModulePlaceholder("api.public")}
            badge="PLANNED"
          />
        </div>
      </div>
    </>
  );
}
