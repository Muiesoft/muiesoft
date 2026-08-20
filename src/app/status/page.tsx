import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { features } from "@/config/features";
import { registryServices } from "@/data/registry/services";
import {
  EXTRA_TARGETS,
  catalogResults,
  isCatalogProbe,
} from "@/lib/probe-verdict";
import {
  probeAgo,
  probeData,
  probeSummary,
  verdictMeta,
} from "@/lib/probes";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { ProbeVerdict } from "@/domain/probe";

export const metadata = buildMetadata({
  title: "Status",
  description:
    "Proba HTTP pe portalurile din catalog și starea uneltelor Muiesoft. Proba nu e uptime de cetățean.",
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

const verdictOrder: Record<ProbeVerdict, number> = {
  down: 0,
  unreachable: 1,
  tls: 2,
  blocked: 3,
  ok: 4,
};

function portalMeta(slug: string): { name: string; href: string } {
  const extra = EXTRA_TARGETS.find((t) => t.slug === slug);
  if (extra) return { name: extra.label, href: extra.href };
  const service = registryServices.find((s) => s.slug === slug);
  return { name: service?.name ?? slug, href: `/muie-index/${slug}` };
}

export default function StatusPage() {
  const verdicts = Object.keys(verdictMeta) as ProbeVerdict[];
  const catalog = catalogResults(probeData.results);
  const countFor = (verdict: ProbeVerdict) =>
    catalog.filter((r) => r.verdict === verdict).length;
  const ranked = [...probeData.results].sort((a, b) => {
    const byVerdict = verdictOrder[a.verdict] - verdictOrder[b.verdict];
    if (byVerdict !== 0) return byVerdict;
    return portalMeta(a.slug).name.localeCompare(portalMeta(b.slug).name, "ro");
  });
  const origin =
    probeData.origin === "adhoc"
      ? "Runda de față e adhoc, nu cronul GitHub Actions."
      : "Runda de față e din GitHub Actions.";

  return (
    <>
      <PageHero
        feature="status"
        title="Status"
        subtitle="Proba HTTP pe portaluri. Mai jos: uneltele Muiesoft, nu uptime."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <section className="border border-border bg-surface p-6">
          <p className="terminal-label">Proba HTTP</p>
          <p className="mt-3 font-mono text-sm">
            {catalog.length} portaluri din catalog · {probeAgo(probeData.generatedAt)}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs md:grid-cols-5">
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
            Un GET, IPv4 first, din runner. {origin} Semnal de disponibilitate,
            nu afirmație că cetățeanul nu deschide site-ul.{" "}
            <Link href="/metodologie" className="text-acid hover:underline">
              Metodologie
            </Link>
            .
          </p>
        </section>

        <div className="mt-8 overflow-x-auto border border-border bg-surface">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="px-4 py-3 font-normal">Portal</th>
                <th className="px-4 py-3 font-normal">Verdict</th>
                <th className="px-4 py-3 text-right font-normal">Detaliu</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((result) => {
                const meta = portalMeta(result.slug);
                return (
                  <tr key={result.slug} className="border-b border-border/50">
                    <td className="px-4 py-3">
                      <Link href={meta.href} className="hover:text-acid">
                        {meta.name}
                      </Link>
                      {isCatalogProbe(result.slug) ? null : (
                        <span className="mt-1 block text-[10px] text-muted">
                          Extra · incident documentat, nu e în pip-ul din header
                        </span>
                      )}
                    </td>
                    <td
                      className={cn(
                        "px-4 py-3",
                        toneClass[verdictMeta[result.verdict].tone],
                      )}
                    >
                      {verdictMeta[result.verdict].label}
                    </td>
                    <td className="px-4 py-3 text-right text-muted">
                      {probeSummary(result)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <p className="terminal-label">Unelte Muiesoft</p>
          <p className="mt-3 text-sm text-muted">
            Live / Preview / Planned descriu modulele noastre, nu portalurile
            statului.
          </p>
          <ul className="mt-6 divide-y divide-border border border-border">
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
        </section>
      </div>
    </>
  );
}
