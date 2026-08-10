import { FeatureStatus } from "@/components/shared/feature-status";
import type { FeatureKey } from "@/config/features";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  feature,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  feature?: FeatureKey;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "border-b border-border px-4 py-14 md:px-8 md:py-20",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {eyebrow ? (
            <p className="terminal-label">{eyebrow}</p>
          ) : null}
          {feature ? <FeatureStatus feature={feature} /> : null}
        </div>
        <h1 className="font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase md:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <div className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            {subtitle}
          </div>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </header>
  );
}
