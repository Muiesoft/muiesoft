import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DemoBadge({
  className,
  label = "DATE DEMONSTRATIVE",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Badge variant="demo" className={cn(className)} data-testid="demo-badge">
      {label}
    </Badge>
  );
}
