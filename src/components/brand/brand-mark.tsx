import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-7 w-7",
  md: "h-10 w-10",
  lg: "h-16 w-16 md:h-20 md:w-20",
} as const;

type BrandMarkProps = {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function BrandMark({
  size = "sm",
  className,
  priority = false,
}: BrandMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-512.png"
      alt="Muiesoft"
      width={512}
      height={512}
      className={cn("shrink-0", sizes[size], className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
