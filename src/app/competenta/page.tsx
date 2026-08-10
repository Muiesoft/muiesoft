import { ComingSoonNominate } from "@/components/competence/nominate-placeholder";
import { DemoBadge } from "@/components/shared/demo-badge";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { NominateMailto } from "@/components/shared/nominate-mailto";
import { PageHero } from "@/components/shared/page-hero";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nicio muie. Bravo.",
  description:
    "Premierea exemplelor de administrație competentă. Nu avem preferați. Avem standarde.",
  path: "/competenta",
});

const criteria = [
  {
    title: "UX",
    body: "Once-only: dacă instituția deja are datele, nu le mai cere.",
  },
  {
    title: "Disponibilitate",
    body: "Serviciul e util când e nevoie, nu doar în PowerPoint și la lansare.",
  },
  {
    title: "Transparență",
    body: "Pași, termene și formulare pe site, fără PDF-uri din 2011.",
  },
  {
    title: "Accesibilitate",
    body: "Tastatură, contrast, semantică. Nu doar un banner „accesibil”.",
  },
  {
    title: "Interoperabilitate",
    body: "Sistemele vorbesc între ele. Cetățeanul nu e curier între ministere.",
  },
  {
    title: "Impact",
    body: "Mai puține drumuri, mai puține formulare, timp recuperat pe bune.",
  },
] as const;

export default function CompetentaPage() {
  return (
    <>
      <PageHero
        feature="competenta"
        title="Nicio muie. Bravo."
        subtitle={
          <>
            <p>Nu avem preferați.</p>
            <p>Avem standarde.</p>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <DemoBadge />
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Scopul acestei pagini: premierea exemplelor de administrație
          competentă. Când avem date reale cu surse, apar aici.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {criteria.map((criterion) => (
            <div key={criterion.title} className="border border-border p-5">
              <p className="font-display text-xl uppercase">{criterion.title}</p>
              <p className="mt-3 text-sm text-muted">{criterion.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border border-success/40 bg-success/5 p-6">
          <DemoBadge label="DATE DEMONSTRATIVE" />
          <h2 className="font-display mt-4 text-2xl uppercase">
            Exemplu fictiv de competență
          </h2>
          <p className="mt-3 text-muted">
            Portalul Exemplu a redus un pas dintr-un flux. Nu reprezintă o
            instituție reală.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <NominateMailto
            subject="Nominalizare Competență · Nicio muie"
            body={`Serviciu / instituție:\nCe a făcut bine:\nCriterii atinse (UX / uptime / a11y / interop / impact):\nSurse (URL, capturi):\n\nFără date personale. Doar fapte verificabile.`}
            label="Nominalizează pe email"
          />
          <ComingSoonNominate />
        </div>
        <div className="mt-16">
          <ModulePlaceholder
            content={getModulePlaceholder("competenta.nominations")}
            badge="PREVIEW"
          />
        </div>
      </div>
    </>
  );
}
