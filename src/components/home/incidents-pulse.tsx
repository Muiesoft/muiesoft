import Link from "next/link";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { registryIncidents } from "@/data/registry/incidents";

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function IncidentsPulse() {
  const incidents = [...registryIncidents].sort((a, b) =>
    b.when.localeCompare(a.when),
  );

  return (
    <Section id="incidente">
      <SectionLabel>INCIDENTE</SectionLabel>
      <SectionHeading>Ce e picat.</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Fapte din surse publice. Outlier ≠ vinovăție. Dacă nu putem arăta
        sursa, nu pretindem că știm.
      </p>

      <ul className="mt-10 border-t border-border">
        {incidents.map((incident) => (
          <li key={incident.id} className="border-b border-border">
            <Link
              href={`/muie-index/incidente/${incident.id}`}
              className="block py-6 transition-colors hover:text-acid"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-wider text-muted uppercase">
                <time dateTime={incident.when}>{incident.when}</time>
                <span className="stamp text-warning">{incident.status}</span>
                {incident.demo ? <DemoBadge /> : null}
              </div>
              <h3 className="font-display mt-3 text-xl uppercase md:text-2xl">
                {incident.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm text-muted">
                {truncate(incident.summary, 180)}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/muie-index?tab=incidente" variant="secondary">
          Toate în Muie Index
        </Button>
      </div>
    </Section>
  );
}
