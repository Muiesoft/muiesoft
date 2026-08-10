import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "acid"
  | "danger"
  | "warning"
  | "muted"
  | "demo"
  | "preview"
  | "planned"
  | "live";

const variants: Record<BadgeVariant, string> = {
  default: "border-border text-foreground",
  acid: "border-acid text-acid",
  danger: "border-danger text-danger",
  warning: "border-warning text-warning",
  muted: "border-border text-muted",
  demo: "border-warning text-warning",
  preview: "border-acid text-acid",
  planned: "border-muted text-muted",
  live: "border-success text-success",
};

export function Badge({
  children,
  variant = "default",
  className,
  ...rest
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
