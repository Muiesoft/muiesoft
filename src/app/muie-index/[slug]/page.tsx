import Link from "next/link";
import { notFound } from "next/navigation";
import { institutionRepository } from "@/adapters/demo/institution";
import { ProbeStatus } from "@/components/index/probe-status";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Badge } from "@/components/ui/badge";
import { getIncidentsForService } from "@/data/registry/incidents";
import { getLighthouseSnapshot } from "@/data/registry/lighthouse-snapshots";
import { buildFreedom544Href } from "@/lib/freedom544";
import { getProbe, probeSummary, verdictMeta } from "@/lib/probes";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const institutions = await institutionRepository.getInstitutions();
  return institutions.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const institution = await institutionRepository.getInstitution(slug);
  if (!institution) {
    return buildMetadata({
      title: "Instituție negăsită · Muie Index",
      path: `/muie-index/${slug}`,
    });
  }
  return buildMetadata({
    title: `${institution.name} · Muie Index`,
    description:
      institution.summary ??
      "Profil în Muie Index. Estimări etichetate clar când nu sunt măsurători.",
    path: `/muie-index/${slug}`,
  });
}

function scoreBadge(kind?: string) {
  if (kind === "opinion-estimate") {
    return (
      <Badge variant="warning">
        ESTIMARE UTILIZATORI · NU MĂSURĂTOARE MUIE INDEX
      </Badge>
    );
  }
  if (kind === "measured") {
    return <Badge variant="live">MĂSURAT</Badge>;
  }
  return <Badge variant="demo">EXEMPLU</Badge>;
}

export default async function InstitutionProfilePage({ params }: Props) {
  const { slug } = await params;
  const institution = await institutionRepository.getInstitution(slug);
  if (!institution) notFound();

  const metrics = [
    ["UX", institution.score?.usability],
    ["UPTIME*", institution.score?.reliability],
    ["MOBILE", institution.score?.mobile],
    ["ACCESSIBILITY", institution.score?.accessibility],
    ["INTEROP", institution.score?.interoperability],
    ["TRANSPARENCY", institution.score?.transparency],
    ["BUREAUCRACY", institution.score?.bureaucracy],
  ];
  const incidents = getIncidentsForService(institution.slug);
  const lighthouse = getLighthouseSnapshot(institution.slug);
  const probe = getProbe(institution.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-8">
      <p className="terminal-label">MUIE INDEX / PROFIL</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {scoreBadge(institution.scoreKind)}
        {institution.demo ? <DemoBadge /> : null}
      </div>
      <h1 className="font-display mt-6 text-4xl font-bold uppercase md:text-6xl">
        {institution.name}
      </h1>
      <p className="mt-3 text-muted">
        {institution.category}
        {institution.county ? ` · ${institution.county}` : null}
      </p>
      {institution.website ? (
        <p className="mt-4">
          <a
            href={institution.website}
            className="font-mono text-sm text-acid underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {institution.website}
          </a>
        </p>
      ) : null}
      {institution.summary ? (
        <p className="mt-6 max-w-2xl text-lg text-foreground/90">
          {institution.summary}
        </p>
      ) : null}

      <div className="mt-10 border border-border bg-surface p-6">
        <p className="terminal-label">Muie Score</p>
        <p className="mt-2 font-mono text-6xl text-acid">
          {institution.score?.total ?? "n/a"}
        </p>
        {institution.scoreNote ? (
          <p className="mt-4 text-sm text-muted">{institution.scoreNote}</p>
        ) : null}
        <div className="mt-4">
          <ProbeStatus slug={institution.slug} />
        </div>
        <p className="mt-2 text-xs text-muted">
          * Scorul UPTIME e estimare de sentiment. Proba HTTP zilnică de mai
          sus e semnal măsurat separat, cu istoric în tab-ul Istoric.
        </p>
        <p className="mt-6">
          <Link
            href={buildFreedom544Href({
              template: "sla",
              target: institution.name,
              name: institution.name,
            })}
            className="font-mono text-xs tracking-wider text-acid uppercase underline-offset-2 hover:underline"
          >
            Cere SLA / disponibilitate cu 544
          </Link>
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={String(label)} className="border border-border p-4">
            <p className="font-mono text-[10px] text-muted">{label}</p>
            <p className="mt-1 font-mono text-2xl">{value ?? "n/a"}</p>
          </div>
        ))}
      </div>

      {lighthouse ? (
        <section className="mt-10 border border-border p-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="terminal-label">Snapshot Lighthouse</p>
            <Badge variant="live">PROBE ONE-OFF</Badge>
          </div>
          <p className="mt-3 text-sm text-muted">{lighthouse.note}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {(
              [
                ["Performance", lighthouse.scores.performance],
                ["Accessibility", lighthouse.scores.accessibility],
                ["Best practices", lighthouse.scores.bestPractices],
                ["SEO", lighthouse.scores.seo],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="border border-border p-4">
                <p className="font-mono text-[10px] text-muted">{label}</p>
                <p className="mt-1 font-mono text-2xl text-acid">{value}</p>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-1 font-mono text-xs text-muted">
            <li>
              URL:{" "}
              <a
                href={lighthouse.url}
                className="text-acid hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {lighthouse.url}
              </a>
            </li>
            <li>
              Rulat: {lighthouse.fetchedAt.slice(0, 10)} ·{" "}
              {lighthouse.tool} {lighthouse.toolVersion} ·{" "}
              {lighthouse.formFactor}
            </li>
          </ul>
        </section>
      ) : (
        <section className="mt-10 border border-border p-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="terminal-label">Fără snapshot Lighthouse</p>
            <Badge variant="warning">LIPSĂ</Badge>
          </div>
          <p className="mt-3 text-sm text-muted">
            Nu inventăm scoruri. Portalul a fost inaccesibil sau proba HTTP a
            eșuat în mediul nostru de măsurare; fără rulare Lighthouse reușită
            nu există scoruri de arătat.
          </p>
          {probe ? (
            <p className="mt-3 font-mono text-xs text-muted">
              Probă HTTP: {probeSummary(probe)} ·{" "}
              {verdictMeta[probe.verdict].label}
              {probe.error ? ` · ${probe.error}` : ""} ·{" "}
              {probe.checkedAt.slice(0, 10)}
            </p>
          ) : (
            <p className="mt-3 font-mono text-xs text-muted">
              Nici rezultat de probă HTTP în registry.
            </p>
          )}
        </section>
      )}

      {incidents.length > 0 ? (
        <section className="mt-10 border border-border p-6">
          <p className="terminal-label">Incidente documentate</p>
          <p className="mt-3 text-sm text-muted">
            Statusul de catalog nu e uptime istoric. Incidentele de mai jos au
            surse publice.
          </p>
          <ul className="mt-4 space-y-3">
            {incidents.map((incident) => (
              <li key={incident.id}>
                <Link
                  href={`/muie-index/incidente/${incident.id}`}
                  className="font-display text-lg uppercase text-acid hover:underline"
                >
                  {incident.title}
                </Link>
                <span className="ml-2 font-mono text-xs text-muted">
                  {incident.status} · {incident.when}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10 border border-border p-6">
        <p className="terminal-label">Surse</p>
        <ul className="mt-4 space-y-3 text-sm">
          {institution.sources.map((source) => (
            <li key={source.id}>
              <a
                href={source.url}
                className="text-acid hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {source.title}
              </a>
              <span className="text-muted"> · {source.publisher}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10">
        <Link
          href="/muie-index"
          className="font-mono text-xs text-acid uppercase hover:underline"
        >
          ← Înapoi la clasament
        </Link>
      </p>
    </div>
  );
}
