import { notFound } from "next/navigation";
import { DemoBadge } from "@/components/shared/demo-badge";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  editorialFormats,
  getEditorialFormat,
} from "@/config/editorial";
import { getModulePlaceholder } from "@/config/module-placeholders";
import {
  getCasesForFormat,
  getFeaturedCase,
} from "@/data/editorial/cases";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return editorialFormats.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const format = getEditorialFormat(slug);
  if (!format) {
    return buildMetadata({
      title: "Format negăsit · Ediție",
      path: `/editie/${slug}`,
    });
  }
  const featured = getFeaturedCase(slug);
  return buildMetadata({
    title: featured
      ? `${featured.title} · ${format.title}`
      : `${format.title} · Ediție Muiesoft`,
    description: featured?.summary.slice(0, 160) ?? format.punchline,
    path: `/editie/${slug}`,
  });
}

export default async function EditorialFormatPage({ params }: Props) {
  const { slug } = await params;
  const format = getEditorialFormat(slug);
  if (!format) notFound();

  const cases = getCasesForFormat(slug);
  const featured = getFeaturedCase(slug);
  const archive = cases.filter((c) => c.id !== featured?.id);
  const active = cases.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-8 md:py-20">
      <div className="flex flex-wrap gap-2">
        {active ? (
          <Badge variant="live">ACTIV</Badge>
        ) : (
          <Badge variant="planned">INACTIV</Badge>
        )}
        {active ? null : <DemoBadge label="FORMAT" />}
      </div>
      <p className="terminal-label mt-6">EDIȚIE / {format.slug}</p>
      <h1 className="font-display mt-3 text-5xl leading-[0.95] font-bold uppercase md:text-6xl">
        {format.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl text-muted">{format.punchline}</p>
      <p className="mt-4 max-w-2xl text-foreground/90">
        Ce arată: {format.whatItShows}
      </p>

      <section className="mt-12 border border-border bg-surface p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl uppercase">
            {format.slotLabels.featured}
          </h2>
          {featured ? (
            <Badge variant="acid">PUBLICAT</Badge>
          ) : (
            <Badge variant="warning">GOL</Badge>
          )}
        </div>

        {featured ? (
          <article className="mt-6 border border-acid/40 bg-acid/5 p-6">
            <p className="font-mono text-xs text-muted">{featured.date}</p>
            <h3 className="font-display mt-2 text-2xl uppercase md:text-3xl">
              {featured.title}
            </h3>
            <p className="stamp mt-4 text-danger">{featured.status}</p>
            <p className="mt-4 text-sm text-muted">{featured.institution}</p>
            <p className="mt-4">{featured.summary}</p>
            <p className="mt-4">
              <a
                href={featured.url}
                className="font-mono text-xs text-acid break-all hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {featured.url}
              </a>
            </p>
            <div className="mt-8">
              <p className="terminal-label">Pași / ce s-a documentat</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
                {featured.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="mt-8">
              <p className="terminal-label">Surse</p>
              <ul className="mt-3 space-y-2 text-sm">
                {featured.sources.map((source) => (
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
            </div>
            <p className="mt-6 text-xs text-muted">
              Fapte din sursele de mai sus. Nu e acuzație de corupție. Outlier ≠
              vinovăție.
            </p>
          </article>
        ) : (
          <div className="mt-6 min-h-32 border border-dashed border-border p-6">
            <p className="font-mono text-xs tracking-wider text-muted uppercase">
              Slot rezervat · fără date fabricate
            </p>
            <p className="mt-4 text-muted">{format.emptyState}</p>
          </div>
        )}
      </section>

      <section className="mt-6 border border-border p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-2xl uppercase">
            {format.slotLabels.archive}
          </h2>
          <Badge variant="muted">{archive.length} intrări</Badge>
        </div>
        {archive.length === 0 ? (
          <ul className="mt-6" aria-label="Arhivă">
            <li className="border border-dashed border-border px-4 py-8 text-center text-sm text-muted">
              {featured
                ? "Arhiva e goală. Cazul de mai sus e singurul deocamdată."
                : "Nimic aici.\n\nO experiență editorială surprinzător de eficientă."}
            </li>
          </ul>
        ) : (
          <ul className="mt-6 space-y-3">
            {archive.map((item) => (
              <li key={item.id} className="border border-border p-4">
                <p className="font-mono text-xs text-muted">{item.date}</p>
                <p className="font-display mt-1 uppercase">{item.title}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/editie" variant="secondary">
          Toate formatele
        </Button>
        <Button href="/contribuie">Propune un caz</Button>
      </div>

      {!active ? (
        <div className="mt-16">
          <ModulePlaceholder
            content={{
              ...getModulePlaceholder("editie.feed"),
              title: format.title,
              problem: format.punchline,
              how: format.whatItShows,
              missing: format.emptyState,
            }}
            badge="PLANNED"
          />
        </div>
      ) : null}
    </div>
  );
}
