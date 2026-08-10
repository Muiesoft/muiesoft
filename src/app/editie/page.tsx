import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { editorialFormats } from "@/config/editorial";
import { formatsWithCases } from "@/data/editorial/cases";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ediție · Formate editoriale Muiesoft",
  description:
    "Muia Zilei, PDF-ul Săptămânii, Merge La Mine™ și restul. Cazuri doar cu surse.",
  path: "/editie",
});

export default function EditiePage() {
  const active = formatsWithCases();

  return (
    <>
      <PageHero
        title="Ediție"
        subtitle={
          <>
            <p>
              Formatele prin care Muiesoft face mișto inteligent și documentează
              prostia verificabilă.
            </p>
            <p className="mt-4 text-sm">
              Formate active cu cazuri documentate: Merge La Mine™, Cât a
              costat butonul, Atenție urmează digitalizare. Restul așteaptă
              surse.
            </p>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="live">{active.size} ACTIVE</Badge>
          <Badge variant="planned">
            {editorialFormats.length - active.size} INACTIVE
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {editorialFormats.map((format) => {
            const isActive = active.has(format.slug);
            return (
              <Link
                key={format.slug}
                href={`/editie/${format.slug}`}
                className="group border border-border bg-surface p-6 transition-colors hover:border-acid"
              >
                <p
                  className={`font-mono text-[10px] tracking-wider uppercase ${
                    isActive ? "text-success" : "text-warning"
                  }`}
                >
                  {isActive ? "ACTIV" : "FORMAT"}
                </p>
                <h2 className="font-display mt-3 text-2xl uppercase group-hover:text-acid">
                  {format.title}
                </h2>
                <p className="mt-3 text-sm text-muted">{format.punchline}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
