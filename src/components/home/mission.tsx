import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function Mission() {
  return (
    <Section>
      <SectionLabel>{"// MISIUNE"}</SectionLabel>
      <SectionHeading>
        Facem birocrația digitală măsurabilă și inteligibilă.
      </SectionHeading>
      <div className="mt-8 max-w-2xl space-y-4 text-lg text-muted">
        <p>
          Muiesoft e un proiect civic open-source pentru România: evaluăm
          portalurile publice, explicăm legea pe românește cu surse și te
          ajutăm să ceri informații sau să parcurgi pași administrativi.
        </p>
        <p className="text-foreground">
          Fără date inventate. Fără acuzații fără dovezi.
        </p>
      </div>
    </Section>
  );
}
