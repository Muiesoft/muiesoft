import type { InstitutionStatus } from "@/domain/institution";

export const hartaStatusMeta: Record<
  InstitutionStatus,
  { label: string; shortLabel: string; stampClass: string; tileClass: string }
> = {
  operational: {
    label: "MERGE",
    shortLabel: "MERGE",
    stampClass: "text-success",
    tileClass: "bg-success/20 text-success border-success/40",
  },
  degraded: {
    label: "DEGRADAT",
    shortLabel: "DEGRADAT",
    stampClass: "text-warning",
    tileClass: "bg-warning/15 text-warning border-warning/40",
  },
  broken: {
    label: "MERGE CA PULA",
    shortLabel: "MERGE CA PULA",
    stampClass: "text-danger",
    tileClass: "bg-danger/15 text-danger border-danger/40",
  },
  "physical-required": {
    label: "NECESITĂ GHIȘEU",
    shortLabel: "GHIȘEU",
    stampClass: "text-muted",
    tileClass: "bg-muted/10 text-muted border-border",
  },
  unknown: {
    label: "DIGITALIZAT ÎN POWERPOINT",
    shortLabel: "POWERPOINT",
    stampClass: "text-muted",
    tileClass: "bg-foreground/5 text-muted border-border",
  },
};

export const hartaStatusOrder: InstitutionStatus[] = [
  "operational",
  "degraded",
  "broken",
  "physical-required",
  "unknown",
];

export function getHartaStatus(status: InstitutionStatus) {
  return hartaStatusMeta[status];
}
