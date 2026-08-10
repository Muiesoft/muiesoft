import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function GitBlame() {
  return (
    <Section>
      <SectionLabel>GIT BLAME ROMÂNIA</SectionLabel>
      <SectionHeading>Cine a futut articolul ăsta?</SectionHeading>
      <p className="mt-3 font-mono text-sm text-acid">git blame România</p>
      <div className="mt-10 max-w-md font-mono text-sm leading-8">
        <p>
          <span className="text-muted">2015</span> text inițial
        </p>
        <p className="text-muted">│</p>
        <p>
          <span className="text-muted">2017</span> modificat
        </p>
        <p className="text-muted">│</p>
        <p>
          <span className="text-muted">2023</span> modificat din nou
        </p>
        <p className="text-muted">│</p>
        <p>
          <span className="text-muted">2026</span> și iar
        </p>
      </div>
      <p className="mt-8 text-muted">
        Legile sunt software fără dependency manager.
      </p>
      <div className="mt-8">
        <Button href="/lex" variant="secondary">
          Deschide MuieLex
        </Button>
      </div>
    </Section>
  );
}
