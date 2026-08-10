import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { demoBounties } from "@/data/demo/bounties";
import { formatEur } from "@/lib/format";

export function BountiesPreview() {
  return (
    <Section className="bg-surface">
      <SectionLabel>BOUNTIES</SectionLabel>
      <SectionHeading>Nu comenta. Pune bounty.</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Probleme pe listă, finanțare zero. Crowdfunding-ul nu e deschis.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {demoBounties.slice(0, 3).map((bounty) => (
          <article
            key={bounty.id}
            className="border border-border bg-background p-5"
          >
            <p className="font-mono text-xs tracking-wider text-muted uppercase">
              Nefinanțat
            </p>
            <p className="mt-3 font-mono text-2xl text-acid">
              Obiectiv {formatEur(bounty.goalEur)}
            </p>
            <h3 className="mt-3 font-display text-lg uppercase">
              {bounty.title}
            </h3>
            <p className="mt-4 font-mono text-xs text-muted">
              Strâns: {formatEur(0)}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/bounties">Vezi bounty-urile</Button>
      </div>
    </Section>
  );
}
