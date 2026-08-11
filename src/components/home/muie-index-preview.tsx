import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { institutionRepository } from "@/adapters/demo/institution";

export async function MuieIndexPreview() {
  const ranking = (await institutionRepository.getRanking()).slice(0, 4);

  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">INDEX</SectionLabel>
        <FeatureStatus feature="muieIndex" />
      </div>
      <SectionHeading>MUIEINDEX</SectionHeading>
      <p className="font-display mt-4 text-2xl text-muted uppercase md:text-3xl">
        Cine ne fute timpul cel mai tare?
      </p>
      <p
        className="mt-8 grid grid-cols-2 border border-border md:grid-cols-4"
        aria-label="Măsurarea Uzabilității Interoperabilității Eficienței"
      >
        {[
          ["M", "Măsurarea"],
          ["U", "Uzabilității"],
          ["I", "Interoperabilității"],
          ["E", "Eficienței"],
        ].map(([letter, word]) => (
          <span
            key={letter}
            className="border-border p-4 max-md:odd:border-r max-md:[&:nth-child(-n+2)]:border-b md:border-r md:last:border-r-0"
          >
            <span className="font-display block text-2xl text-acid md:text-3xl">
              {letter}
            </span>
            <span className="mt-1 block font-mono text-xs tracking-wide text-muted uppercase md:text-sm">
              {word}
            </span>
          </span>
        ))}
      </p>
      <div className="mt-10 border border-border">
        <div className="border-b border-border px-4 py-3 font-mono text-xs tracking-wider text-muted uppercase">
          Leaderboard: estimare utilizatori
        </div>
        <ul>
          {ranking.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-border px-4 py-4 last:border-b-0"
            >
              <div>
                <span className="mr-3 font-mono text-muted">#{item.rank}</span>
                <span className="font-display text-lg uppercase md:text-xl">
                  {item.name}
                </span>
              </div>
              <span className="font-mono text-2xl text-acid">
                {item.score?.total}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-sm text-muted">
        Acum: estimări etichetate. Viitor: probe automate (uptime, UX, a11y,
        interoperabilitate) cu surse.
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
