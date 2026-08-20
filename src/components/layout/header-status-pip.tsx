import { probeHeaderState, probeTimestamp } from "@/lib/probes";
import { cn } from "@/lib/utils";

const toneClass = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
} as const;

export function HeaderStatusPip() {
  const state = probeHeaderState();
  const label = `${state.answered}/${state.total} portaluri au răspuns · ultima rundă ${probeTimestamp(state.generatedAt)}`;

  return (
    <span className="relative inline-flex items-center">
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full",
          toneClass[state.tone],
          state.pulse && "status-pulse",
        )}
        title={label}
        aria-hidden
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
