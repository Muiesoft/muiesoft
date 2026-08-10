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
        "border-b border-border px-4 py-16 md:px-8 md:py-24",
        invert ? "bg-acid text-background" : "bg-background text-foreground",
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
        "font-display text-4xl leading-[0.95] font-bold tracking-tight uppercase md:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
