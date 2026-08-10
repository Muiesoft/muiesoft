import type { CivicProcedure } from "@/domain/procedure";

export interface ProcedureRepository {
  getProcedures(): Promise<CivicProcedure[]>;
  getProcedure(slug: string): Promise<CivicProcedure | null>;
  searchProcedures(query: string): Promise<CivicProcedure[]>;
}
