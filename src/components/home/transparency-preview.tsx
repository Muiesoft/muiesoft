import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function TransparencyPreview() {
  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">BANII MUIESOFT</SectionLabel>
      </div>
      <SectionHeading>Și noi trebuie să fim transparenți.</SectionHeading>
      <p className="mt-4 max-w-xl text-muted">
        Dacă cerem statului transparență, n-avem voie să operăm noi dintr-un
        Excel secret.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ["VENITURI", "€0"],
          ["CHELTUIELI", "€0"],
          ["INFRASTRUCTURĂ", "€0"],
          ["BOUNTIES", "€0"],
        ].map(([label, value]) => (
          <div key={label} className="border border-border p-5">
            <p className="terminal-label">{label}</p>
            <p className="mt-3 font-mono text-3xl">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        În versiunea reală, fiecare leu intrat și fiecare leu cheltuit trebuie
        să poată fi urmărit.
      </p>
      <div className="mt-8">
        <Button href="/transparenta">Transparența noastră</Button>
      </div>
    </Section>
  );
}
