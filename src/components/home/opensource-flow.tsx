import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

const steps = [
  "RANT",
  "ISSUE",
  "BENCHMARK",
  "SPEC",
  "IMPLEMENTATION",
  "PULL REQUEST",
];

export function OpenSourceFlow() {
  return (
    <Section className="bg-surface">
      <SectionLabel>OPEN-SOURCE</SectionLabel>
      <SectionHeading>Revoluția e un Git repository.</SectionHeading>
      <div className="mt-10 flex flex-col gap-2 font-mono text-sm md:flex-row md:flex-wrap md:items-center md:gap-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span className="border border-border bg-background px-3 py-2">
              {step}
            </span>
            {i < steps.length - 1 ? (
              <span className="text-muted md:inline">↓</span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-8 text-muted">
        Dacă te plângi de ceva și știi să-l repari, deschide PR.
      </p>
    </Section>
  );
}
