import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { editorialFormats } from "@/config/editorial";
import { formatsWithCases } from "@/data/editorial/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ediție · Formate editoriale Muiesoft",
  description:
    "Cazul zilei, PDF-ul Săptămânii, Merge La Mine™ și restul. Cazuri doar cu surse.",
  path: "/editie",
});

export default function EditiePage() {
  const active = formatsWithCases();
  const withCases = editorialFormats.filter((format) => active.has(format.slug));
  const empty = editorialFormats.filter((format) => !active.has(format.slug));

  return (
    <>
      <PageHero
        title="Ediție"
        subtitle={
          <>
            <p>
              Formatele prin care Muiesoft documentează prostia verificabilă,
              cu ironie și cu surse.
            </p>
            <p className="mt-4 text-sm">
              Formate cu cazuri: {withCases.length}. Sloturi goale: {empty.length}
              , fără date fabricate.
            </p>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="live">{withCases.length} CU CAZURI</Badge>
          <Badge variant="planned">{empty.length} GOALE</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {withCases.map((format) => (
            <Link
              key={format.slug}
              href={`/editie/${format.slug}`}
              className="group border border-border bg-surface p-6 transition-colors hover:border-acid"
            >
              <p className="font-mono text-[10px] tracking-wider text-success uppercase">
                ACTIV
              </p>
              <h2 className="font-display mt-3 text-2xl uppercase group-hover:text-acid">
                {format.title}
              </h2>
              <p className="mt-3 text-sm text-muted">{format.punchline}</p>
            </Link>
          ))}
        </div>
        {empty.length > 0 ? (
          <section className="mt-12">
            <p className="terminal-label">Sloturi fără caz</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {empty.map((format) => (
                <li key={format.slug}>{format.title}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
