import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { demoFeedStats, demoLegalFeed } from "@/data/demo/laws";

export function LegalFeed() {
  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">FEED LEGISLATIV</SectionLabel>
        <DemoBadge />
      </div>
      <SectionHeading>Ce s-a futut azi?</SectionHeading>
      <p className="mt-4 max-w-2xl text-sm text-muted">
        Feed ilustrativ cu date demonstrative. Nu e digest live din Monitorul
        Oficial.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          [demoFeedStats.newActs, "acte noi"],
          [demoFeedStats.modifications, "modificări"],
          [demoFeedStats.affectCompanies, "afectează firme"],
          [demoFeedStats.worthReading, "chiar merită citită"],
        ].map(([n, label]) => (
          <div key={String(label)} className="border border-border p-4">
            <p className="font-mono text-3xl text-acid">{n}</p>
            <p className="mt-1 text-sm text-muted">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {demoLegalFeed.slice(0, 3).map((change) => (
          <article key={change.id} className="border border-border bg-surface p-5">
            <div className="flex flex-wrap gap-2">
              <span className="stamp text-warning">{change.kind}</span>
              <DemoBadge label="DATE DEMONSTRATIVE" />
            </div>
            <h3 className="mt-4 font-display text-lg uppercase">{change.title}</h3>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-muted">Ce s-a schimbat?</dt>
                <dd>{change.summary}</dd>
              </div>
              <div>
                <dt className="text-muted">Pe cine afectează?</dt>
                <dd>{change.affects}</dd>
              </div>
              <div>
                <dt className="text-muted">De când?</dt>
                <dd className="font-mono">{change.effectiveFrom}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-xl text-muted">
        Nu mai citi Monitorul Oficial ca un psihopat.
        <br />
        Îți spunem noi ce te privește.
      </p>
      <div className="mt-8">
        <Button href="/lex">Deschide MuieLex</Button>
      </div>
    </Section>
  );
}
