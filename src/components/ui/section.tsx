import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  invert = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  invert?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border px-4 py-12 md:px-8 md:py-16",
        invert ? "bg-foreground text-background" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("terminal-label mb-4", className)}>{children}</p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-tight font-semibold tracking-tight md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
