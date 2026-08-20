import { institutionRepository } from "@/adapters/demo/institution";
import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { frictionToneClass } from "@/lib/scoring";

export async function MuieIndexPreview() {
  const ranking = await institutionRepository.getRanking();
  const worst = ranking.slice(0, 3);
  const best = ranking.at(-1);

  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">Index</SectionLabel>
        <FeatureStatus feature="muieIndex" />
      </div>
      <SectionHeading>Muie Index</SectionHeading>
      <p className="font-display mt-4 text-2xl text-muted md:text-3xl">
        Scor mare înseamnă mai multă coadă pentru tine.
      </p>
      <div className="mt-10 border border-border">
        <div className="border-b border-border px-4 py-3 font-mono text-xs tracking-wider text-muted uppercase">
          Cele mai grele trei
        </div>
        <ul>
          {worst.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-border px-4 py-4 last:border-b-0"
            >
              <div>
                <span className="mr-3 font-mono text-muted">#{item.rank}</span>
                <span className="font-display text-lg md:text-xl">
                  {item.name}
                </span>
              </div>
              <span
                className={`font-mono text-2xl ${frictionToneClass(item.score?.total ?? 0)}`}
              >
                {item.score?.total}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {best ? (
        <div className="mt-6 border border-success/40 bg-success/5 p-5">
          <p className="font-mono text-xs tracking-wider text-success uppercase">
            Când merge
          </p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="font-display text-lg md:text-xl">{best.name}</p>
            <p
              className={`font-mono text-2xl ${frictionToneClass(best.score?.total ?? 0)}`}
            >
              {best.score?.total}
            </p>
          </div>
          <p className="mt-2 text-sm text-muted">
            Cel mai mic indice de frecare din catalog. Nu e premiu. E rar.
          </p>
        </div>
      ) : null}
      <p className="mt-6 text-sm text-muted">
        Estimări de frecare, etichetate. Probele HTTP și Lighthouse sunt
        semnale separate, pe profil.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/muie-index">Deschide clasamentul</Button>
        <Button href="/harta" variant="secondary">
          Harta
        </Button>
      </div>
    </Section>
  );
}
