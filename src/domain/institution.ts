import type { SourceReference } from "./source";

export type InstitutionStatus =
  | "operational"
  | "degraded"
  | "broken"
  | "physical-required"
  | "unknown";

export type InstitutionScore = {
  total: number;
  reliability: number;
  usability: number;
  accessibility: number;
  interoperability: number;
  transparency: number;
  bureaucracy: number;
  costEfficiency?: number;
  mobile?: number;
};

export type ScoreKind = "opinion-estimate" | "measured" | "demo";

export type Institution = {
  id: string;
  slug: string;
  name: string;
  category: string;
  website?: string;
  county?: string;
  score?: InstitutionScore;
  scoreKind?: ScoreKind;
  scoreNote?: string;
  status: InstitutionStatus;
  digitalServices?: number;
  physicalRequired?: number;
  pdfCountLabel?: string;
  summary?: string;
  sources: SourceReference[];
  demo?: boolean;
};

export type InstitutionRankingEntry = Institution & {
  rank: number;
};
