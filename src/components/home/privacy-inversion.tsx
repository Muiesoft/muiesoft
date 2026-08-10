import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

export function PrivacyInversion() {
  return (
    <Section>
      <SectionLabel>PRIVACY</SectionLabel>
      <SectionHeading>
        Nu vrem datele tale.
        <br />
        Vrem datele lor.
      </SectionHeading>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="border border-border p-6 font-mono text-sm leading-8">
          <p className="text-acid">TU</p>
          <p>↓</p>
          <p>local encrypted vault</p>
          <p>↓</p>
          <p>consimțământ explicit</p>
          <p>↓</p>
          <p>minimum necesar</p>
          <p>↓</p>
          <p>instituție</p>
        </div>
        <div className="border border-border p-6 font-mono text-sm leading-8">
          <p className="text-acid">STAT</p>
          <p>
            contracte <span className="text-muted">public</span>
          </p>
          <p>
            bugete <span className="text-muted">public</span>
          </p>
          <p>
            SLA <span className="text-muted">public</span>
          </p>
          <p>
            status <span className="text-muted">public</span>
          </p>
          <p>
            API <span className="text-muted">documentat</span>
          </p>
          <p>
            schimbări <span className="text-muted">versionate</span>
          </p>
        </div>
      </div>
      <ul className="mt-8 grid gap-2 text-sm text-muted md:grid-cols-2">
        <li>local-first</li>
        <li>data minimization</li>
        <li>encryption</li>
        <li>zero advertising trackers</li>
        <li>zero selling data</li>
        <li>export complet</li>
        <li>delete complet</li>
      </ul>
      <p className="mt-8">
        Statul te vede destul.
        <br />
        Acum e rândul nostru să vedem statul.
      </p>
    </Section>
  );
}
