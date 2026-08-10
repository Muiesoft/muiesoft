import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function HallCompetence() {
  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">HALL OF COMPETENCE</SectionLabel>
      </div>
      <SectionHeading>Nicio muie săptămâna asta.</SectionHeading>
      <p className="mt-4 text-lg text-muted">
        Când statul face ceva bine, spunem și asta. Standardele sunt publice;
        nominalizările se trimit pe email, cu fapte și surse.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="border border-success/40 bg-success/5 p-6">
          <p className="stamp text-success">STANDARD</p>
          <h3 className="font-display mt-4 text-xl uppercase">
            Once-only: nu cere de două ori
          </h3>
          <p className="mt-3 text-sm text-muted">
            Dacă instituția deja are datele, nu le mai cere. Criteriu public
            pentru nominalizări.
          </p>
        </article>
        <article className="border border-success/40 bg-success/5 p-6">
          <p className="stamp text-success">STANDARD</p>
          <h3 className="font-display mt-4 text-xl uppercase">
            Documentație publică, actuală
          </h3>
          <p className="mt-3 text-sm text-muted">
            Pași, termene și formulare pe site, fără PDF-uri din 2011 și fără
            „vino la ghișeu”.
          </p>
        </article>
      </div>
      <p className="mt-8">
        Muiesoft nu urăște statul.
        <br />
        Muiesoft urăște incompetența.
      </p>
      <div className="mt-8">
        <Button href="/competenta" variant="secondary">
          Vezi standardele
        </Button>
      </div>
    </Section>
  );
}
