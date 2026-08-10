import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function ProcurementGraph() {
  return (
    <Section>
      <SectionLabel>PROCUREMENT GRAPH</SectionLabel>
      <SectionHeading>Anomalii, nu sentințe.</SectionHeading>
      <div className="mt-10 max-w-lg font-mono text-sm leading-8">
        <p>ADR</p>
        <p className="text-muted">↓</p>
        <p>Cloud Dedicat: ~417 mil. lei</p>
        <p className="text-muted">↓</p>
        <p>Vodafone România</p>
        <p className="text-muted">↓</p>
        <p>Alte loturi CPG / PNRR</p>
        <p className="text-muted">↓</p>
        <p>STS, SRI, instituții migrate</p>
      </div>
      <p className="mt-8 max-w-xl text-muted">
        Single bidder RO 2024: 44% (Scoreboard UE). SEAP e pe data.gov.ro.
        Ingestia automată vine. Sentințele nu.
      </p>
      <p className="mt-4 text-foreground">
        Muiesoft detectează anomalii.
        <br />
        Nu emite sentințe.
      </p>
      <div className="mt-8">
        <Button href="/bani">Deschide Bani</Button>
      </div>
    </Section>
  );
}
