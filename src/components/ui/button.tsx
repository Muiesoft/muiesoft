import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "invert";

const variants: Record<Variant, string> = {
  primary:
    "bg-acid text-background hover:bg-foreground hover:text-background border-acid",
  secondary:
    "bg-transparent text-foreground border-border hover:border-foreground",
  ghost: "bg-transparent text-muted border-transparent hover:text-foreground",
  danger: "bg-transparent text-danger border-danger hover:bg-danger hover:text-background",
  invert:
    "bg-background text-acid border-background hover:bg-acid hover:text-background",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-2.5 font-display text-sm font-semibold tracking-wide uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-40";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  disabled,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], className);

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
