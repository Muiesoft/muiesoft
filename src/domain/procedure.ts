import type { SourceReference } from "./source";

export type ProcedureStep = {
  id: string;
  order: number;
  title: string;
  description: string;
  authority?: string;
  estimatedDays?: string;
};

export type CivicProcedure = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
  authorities: string[];
  steps: ProcedureStep[];
  documents: string[];
  deadlines: string[];
  costs: string[];
  requiresPhysicalPresence: boolean;
  requiresPrinting: boolean;
  sources: SourceReference[];
  demo?: boolean;
};
