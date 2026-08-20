import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { features } from "@/config/features";
import { probeAgo, probeData, verdictMeta } from "@/lib/probes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Status",
  description: "Starea serviciilor Muiesoft. Dacă totul e roșu, probabil am devenit instituție publică.",
  path: "/status",
});

const modeMeta = {
  live: { label: "Live", tone: "text-success" },
  preview: { label: "Preview", tone: "text-acid" },
  planned: { label: "Planned", tone: "text-muted" },
  disabled: { label: "Disabled", tone: "text-muted" },
} as const;

const toneClass = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
} as const;

export default function StatusPage() {
  const verdicts = Object.keys(verdictMeta) as (keyof typeof verdictMeta)[];
  const countFor = (verdict: string) =>
    probeData.results.filter((r) => r.verdict === verdict).length;

  return (
    <>
      <PageHero
        feature="status"
        title="Status"
        subtitle="Live = unealtă folosibilă azi. Preview = UI cu date parțiale. Planned = fără treabă încă."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <section className="border border-border bg-surface p-6">
          <p className="terminal-label">Proba HTTP zilnică</p>
          <p className="mt-3 font-mono text-sm">
            {probeData.results.length} portaluri verificate ·{" "}
            {probeAgo(probeData.generatedAt)}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs md:grid-cols-4">
            {verdicts.map((verdict) => (
              <li key={verdict}>
                <span className={toneClass[verdictMeta[verdict].tone]}>
                  {countFor(verdict)}
                </span>{" "}
                {verdictMeta[verdict].label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Un GET pe zi din GitHub Actions, cu istoricul commitat public.
            Semnal de disponibilitate, nu uptime complet.{" "}
            <Link href="/muie-index" className="text-acid hover:underline">
              Detalii per portal în Muie Index
            </Link>
            .
          </p>
        </section>

        <ul className="mt-8 divide-y divide-border border border-border">
          {Object.entries(features).map(([key, feature]) => (
            <li
              key={key}
              className="flex items-center justify-between px-4 py-4"
            >
              <Link href={feature.href} className="hover:text-acid">
                {feature.label}
              </Link>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase">
                <span className={modeMeta[feature.mode].tone}>●</span>
                {modeMeta[feature.mode].label}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Dacă totul e roșu, probabil am devenit instituție publică.
        </p>
      </div>
    </>
  );
}
