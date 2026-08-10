import { Button } from "@/components/ui/button";
import { DemoBadge } from "@/components/shared/demo-badge";
import type { ModulePlaceholderContent } from "@/config/module-placeholders";
import { cn } from "@/lib/utils";

export function ModulePlaceholder({
  content,
  demo,
  badge,
  className,
}: {
  content: ModulePlaceholderContent;
  demo?: React.ReactNode;
  badge?: "ÎN LUCRU" | "PREVIEW" | "PLANNED";
  className?: string;
}) {
  return (
    <section
      id={content.id}
      data-testid="module-placeholder"
      className={cn("border border-border bg-surface p-6 md:p-8", className)}
      aria-labelledby={`${content.id}-title`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {badge ? <DemoBadge label={badge} /> : null}
      </div>
      <h2
        id={`${content.id}-title`}
        className="font-display mt-4 text-2xl uppercase md:text-3xl"
      >
        {content.title}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="terminal-label mb-2">1. Ce problemă rezolvă</p>
          <p className="text-sm text-foreground/90">{content.problem}</p>
        </div>
        <div>
          <p className="terminal-label mb-2">2. Cum va funcționa</p>
          <p className="text-sm text-foreground/90">{content.how}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="terminal-label mb-2">3. Cum arată acum</p>
        {demo ? (
          <div className="mt-3">{demo}</div>
        ) : (
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
            {content.demoSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="terminal-label mb-2">4. Arhitectură</p>
          <ul className="mt-2 space-y-1 font-mono text-xs text-muted">
            {content.architecture.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="terminal-label mb-2">5. Ce construim în continuare</p>
          <p className="text-sm text-foreground/90">{content.missing}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="terminal-label mb-2">6. Roadmap</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {content.roadmap.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="terminal-label mb-2">7. Contribuie</p>
          <p className="text-sm text-foreground/90">{content.help}</p>
          <div className="mt-4">
            <Button href={content.helpHref ?? "/contribuie"} variant="secondary">
              Cum poți ajuta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
