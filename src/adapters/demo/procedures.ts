import { registryProcedures } from "@/data/registry/procedures";
import type { CivicProcedure } from "@/domain/procedure";
import type { ProcedureRepository } from "@/repositories/procedures";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export class DemoProcedureRepository implements ProcedureRepository {
  async getProcedures(): Promise<CivicProcedure[]> {
    return registryProcedures;
  }

  async getProcedure(slug: string): Promise<CivicProcedure | null> {
    return registryProcedures.find((p) => p.slug === slug) ?? null;
  }

  async searchProcedures(query: string): Promise<CivicProcedure[]> {
    const q = normalize(query.trim());
    if (!q) return registryProcedures;
    return registryProcedures.filter((procedure) => {
      const haystack = normalize(
        [procedure.title, procedure.summary, ...procedure.keywords].join(" "),
      );
      return (
        haystack.includes(q) ||
        procedure.keywords.some((k) => normalize(k).includes(q))
      );
    });
  }
}

export const procedureRepository = new DemoProcedureRepository();
