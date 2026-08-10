import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function ApiPreview() {
  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">ROMÂNIA.API</SectionLabel>
        <FeatureStatus feature="romaniaApi" />
      </div>
      <SectionHeading>România, dar cu API.</SectionHeading>
      <pre className="mt-8 overflow-x-auto border border-border bg-background p-6 font-mono text-sm text-acid">
{`GET /api/v1/laws
GET /api/v1/services
GET /api/v1/contracts
GET /api/v1/procedures
GET /api/v1/incidents`}
      </pre>
      <p className="mt-6 max-w-xl text-muted">
        Endpoint-urile răspund deja: read-only, cu provenance, direct din
        registry. Dacă statul are date publice, oamenii ar trebui să le poată
        folosi fără ritualuri oculte.
      </p>
      <p className="mt-3">ANAF, dacă citești asta: avem pull request.</p>
      <div className="mt-8">
        <Button href="/api" variant="secondary">
          Folosește API-ul
        </Button>
      </div>
    </Section>
  );
}
