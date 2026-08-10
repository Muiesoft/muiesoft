import type { SourceReference } from "./source";

export type LegalStatus = "in-force" | "repealed" | "future" | "unknown";

export type LegalVersion = {
  id: string;
  effectiveFrom: string;
  label: string;
  summary: string;
  plainLanguage: string;
  officialText: string;
};

export type LegalArticle = {
  id: string;
  number: string;
  title: string;
  officialText: string;
  plainLanguage: string;
  interpretation?: string;
};

export type LegalChange = {
  id: string;
  kind: "new" | "modification" | "repeal";
  title: string;
  summary: string;
  affects: string;
  effectiveFrom: string;
  category: string;
  demo?: boolean;
};

export type LegalDocument = {
  id: string;
  slug: string;
  number: string;
  year: number;
  title: string;
  status: LegalStatus;
  effectiveFrom?: string;
  effectiveUntil?: string;
  versions: LegalVersion[];
  articles: LegalArticle[];
  changes: LegalChange[];
  dependencies: string[];
  confidence: {
    score: number;
    explicitText: boolean;
    applicableNorms: boolean;
    bindingDecision: boolean;
    unevenPractice: boolean;
    recentChange: boolean;
  };
  sources: SourceReference[];
  demo?: boolean;
};
