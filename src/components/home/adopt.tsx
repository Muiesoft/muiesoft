import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function AdoptMess() {
  return (
    <Section>
      <SectionLabel>ADOPTĂ</SectionLabel>
      <SectionHeading>Adoptă o mizerie.</SectionHeading>
      <div className="mt-8 max-w-xl space-y-2 text-lg text-muted">
        <p>Urmărește-o.</p>
        <p>Testeaz-o.</p>
        <p>Documenteaz-o.</p>
        <p>Repar-o dacă poți.</p>
        <p>Fă mișto de ea dacă merită.</p>
      </div>
      <div className="mt-8">
        <Button href="/contribuie">Alege-ți mizeria</Button>
      </div>
    </Section>
  );
}
