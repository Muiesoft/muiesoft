import Link from "next/link";
import { notFound } from "next/navigation";
import { CiteBlock } from "@/components/shared/cite-block";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Badge } from "@/components/ui/badge";
import { getIncident, registryIncidents } from "@/data/registry/incidents";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return registryIncidents.map((i) => ({ id: i.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const incident = getIncident(id);
  return buildMetadata({
    title: incident
      ? `${incident.title} · Incident Muie Index`
      : "Incident negăsit",
    description: incident?.summary,
    path: `/muie-index/incidente/${id}`,
  });
}

export default async function IncidentPage({ params }: Props) {
  const { id } = await params;
  const incident = getIncident(id);
  if (!incident) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-8">
      <div className="flex flex-wrap gap-2">
        <Badge variant="danger">{incident.status}</Badge>
        {incident.demo ? (
          <DemoBadge />
        ) : (
          <Badge variant="live">SURSE PUBLICE</Badge>
        )}
      </div>
      <h1 className="font-display mt-6 text-4xl font-semibold md:text-5xl">
        {incident.title}
      </h1>
      <p className="mt-3 font-mono text-xs text-muted">{incident.when}</p>
      <p className="mt-6 text-muted">{incident.summary}</p>
      <dl className="mt-8 space-y-4 text-sm">
        <div>
          <dt className="text-muted">URL</dt>
          <dd className="font-mono text-acid break-all">
            <a
              href={incident.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {incident.url}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-muted">Browser</dt>
          <dd>{incident.browser}</dd>
        </div>
      </dl>
      <section className="mt-8 border border-border p-6">
        <p className="terminal-label">Pași documentați</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
          {incident.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      {incident.sources?.length ? (
        <section className="mt-8 border border-border p-6">
          <p className="terminal-label">Surse</p>
          <ul className="mt-4 space-y-2 text-sm">
            {incident.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  className="text-acid hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <CiteBlock
        title={incident.title}
        path={`/muie-index/incidente/${incident.id}`}
      />
      <p className="mt-10">
        <Link
          href="/muie-index"
          className="font-mono text-xs text-acid uppercase hover:underline"
        >
          ← Înapoi la Muie Index
        </Link>
      </p>
    </div>
  );
}
