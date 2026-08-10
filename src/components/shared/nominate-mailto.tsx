import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function NominateMailto({
  subject,
  body,
  label = "Nominalizează pe email",
  className,
}: {
  subject: string;
  body: string;
  label?: string;
  className?: string;
}) {
  const href = `mailto:${siteConfig.contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center border border-border px-5 py-2.5 font-display text-sm font-semibold tracking-wide uppercase transition-colors hover:border-foreground",
        className,
      )}
    >
      {label}
    </a>
  );
}
