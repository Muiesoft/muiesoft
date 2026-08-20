import { siteConfig } from "@/config/site";
import { getIncidentsForService } from "@/data/registry/incidents";
import { getLighthouseSnapshot } from "@/data/registry/lighthouse-snapshots";
import type {
  Institution,
  InstitutionScore,
  InstitutionStatus,
} from "@/domain/institution";
import type { ProbeVerdict } from "@/domain/probe";
import { getProbe } from "@/lib/probes";

export type DisplayableScore = {
  total: number;
};

export const STATUS_FRICTION: Record<InstitutionStatus, number> = {
  operational: 38,
  degraded: 55,
  "physical-required": 72,
  broken: 88,
  unknown: 50,
};

export const FRICTION_WEIGHTS = {
  usability: 0.25,
  reliability: 0.2,
  bureaucracy: 0.15,
  interoperability: 0.15,
  transparency: 0.15,
  accessibility: 0.1,
} as const;

export const FRICTION_DIMENSIONS = [
  ["Coadă", "usability"],
  ["Cădere", "reliability"],
  ["Ghișeu", "bureaucracy"],
  ["Izolare", "interoperability"],
  ["Opacitate", "transparency"],
  ["Barieră", "accessibility"],
] as const;

export function displayScore(score?: DisplayableScore | null): string {
  if (!score) return "n/a";
  return String(score.total);
}

export function clampScore(n: number): number {
  return Math.min(100, Math.max(0, Math.round(n)));
}

export function weightedFriction(score: InstitutionScore): number {
  const w = FRICTION_WEIGHTS;
  return (
    score.usability * w.usability +
    score.reliability * w.reliability +
    score.bureaucracy * w.bureaucracy +
    score.interoperability * w.interoperability +
    score.transparency * w.transparency +
    score.accessibility * w.accessibility
  );
}

export function lighthouseFriction(
  performance?: number,
  accessibility?: number,
): number {
  if (performance == null || accessibility == null) return 0;
  return (100 - performance) * 0.08 + (100 - accessibility) * 0.08;
}

export function probeBump(verdict?: ProbeVerdict): number {
  if (verdict === "down") return 12;
  if (verdict === "tls" || verdict === "blocked") return 4;
  return 0;
}

export function computeMuieScore(input: {
  status: InstitutionStatus;
  score: InstitutionScore;
  incidentCount: number;
  probeVerdict?: ProbeVerdict;
  lighthouse?: { performance: number; accessibility: number };
}): number {
  const base = STATUS_FRICTION[input.status];
  const dims = weightedFriction(input.score);
  const incident = input.incidentCount > 0 ? 10 : 0;
  const probe = probeBump(input.probeVerdict);
  const lh = input.lighthouse
    ? lighthouseFriction(
        input.lighthouse.performance,
        input.lighthouse.accessibility,
      )
    : 0;
  const extra = Math.min(20, incident + probe);
  return clampScore(0.45 * base + 0.55 * dims + extra + lh);
}

export function applyMuieScore(institution: Institution): Institution {
  if (!institution.score) return institution;
  const lighthouse = getLighthouseSnapshot(institution.slug);
  const total = computeMuieScore({
    status: institution.status,
    score: institution.score,
    incidentCount: getIncidentsForService(institution.slug).length,
    probeVerdict: getProbe(institution.slug)?.verdict,
    lighthouse: lighthouse?.scores,
  });
  return {
    ...institution,
    score: { ...institution.score, total },
  };
}

export function frictionTone(total: number): "danger" | "warning" | "success" {
  if (total >= 65) return "danger";
  if (total >= 45) return "warning";
  return "success";
}

export function frictionToneClass(total: number): string {
  const tone = frictionTone(total);
  if (tone === "danger") return "text-danger";
  if (tone === "warning") return "text-warning";
  return "text-success";
}

export function contestScoreMailto(name: string): string {
  const subject = encodeURIComponent(`Contestă scorul · ${name}`);
  const body = encodeURIComponent(
    `Portal: ${name}\nURL:\nDată:\nCe s-a întâmplat:\nSurse:\n`,
  );
  return `mailto:${siteConfig.contact}?subject=${subject}&body=${body}`;
}
