import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { editorialFormats } from "@/config/editorial";
import {
  editorialCases,
  formatsWithCases,
  getFeaturedCase,
} from "@/data/editorial/cases";

export function EditorialPreview() {
  const activeFormats = formatsWithCases();
  const featured = getFeaturedCase("merge-la-mine");
  const caseCount = editorialCases.length;

  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">EDIȚIE</SectionLabel>
        {caseCount > 0 ? (
          <Badge variant="live">{caseCount} CAZURI DOCUMENTATE</Badge>
        ) : (
          <Badge variant="planned">URMEAZĂ</Badge>
        )}
      </div>
      <SectionHeading>Formate editoriale.</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Satira e shareable. Faptele trebuie să aibă surse. Avem {caseCount}{" "}
        cazuri documentate pe formate active; restul formatelor așteaptă
        provenance.
      </p>

      {featured ? (
        <Link
          href="/editie/merge-la-mine"
          className="mt-8 block border border-acid/40 bg-acid/5 p-6 transition-colors hover:border-acid"
        >
          <p className="font-mono text-[10px] tracking-wider text-acid uppercase">
            Merge La Mine™ · featured
          </p>
          <h3 className="font-display mt-2 text-2xl uppercase md:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            {featured.summary.slice(0, 180)}…
          </p>
        </Link>
      ) : null}

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {editorialFormats.map((format) => {
          const active = activeFormats.has(format.slug);
          return (
            <Link
              key={format.slug}
              href={`/editie/${format.slug}`}
              className="border border-border bg-background p-5 transition-colors hover:border-acid"
            >
              <p
                className={`font-mono text-[10px] tracking-wider uppercase ${
                  active ? "text-success" : "text-warning"
                }`}
              >
                {active ? "ACTIV" : "INACTIV"}
              </p>
              <h3 className="font-display mt-2 text-lg uppercase">
                {format.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{format.punchline}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <Button href="/editie" variant="secondary">
          Deschide ediția
        </Button>
      </div>
    </Section>
  );
}
