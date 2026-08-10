import { Badge } from "@/components/ui/badge";
import {
  features,
  type FeatureKey,
  type FeatureMode,
} from "@/config/features";

const modeLabel: Record<FeatureMode, string> = {
  live: "LIVE",
  preview: "PREVIEW",
  planned: "ÎN LUCRU",
  disabled: "DEZACTIVAT",
};

const modeVariant: Record<
  FeatureMode,
  "live" | "preview" | "planned" | "muted"
> = {
  live: "live",
  preview: "preview",
  planned: "planned",
  disabled: "muted",
};

export function FeatureStatus({
  feature,
  showLabel = false,
}: {
  feature: FeatureKey;
  showLabel?: boolean;
}) {
  const def = features[feature];
  return (
    <span className="inline-flex items-center gap-2" data-testid="feature-status">
      {showLabel ? (
        <span className="font-mono text-xs text-muted uppercase">
          {def.label}
        </span>
      ) : null}
      <Badge variant={modeVariant[def.mode]}>{modeLabel[def.mode]}</Badge>
    </span>
  );
}
