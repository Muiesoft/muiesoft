import type { SourceReference } from "./source";

export type PublicContract = {
  id: string;
  title: string;
  system: string;
  institution: string;
  supplier: string;
  valueRon: number;
  signedAt?: string;
  procurementType?: string;
  status: string;
  sources: SourceReference[];
  demo?: boolean;
};
