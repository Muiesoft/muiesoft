import { registryServices } from "@/data/registry/services";
import type {
  Institution,
  InstitutionRankingEntry,
} from "@/domain/institution";
import { applyMuieScore } from "@/lib/scoring";
import type { InstitutionRepository } from "@/repositories/institution";

function scoredRegistry(): Institution[] {
  return registryServices.map(applyMuieScore);
}

export class DemoInstitutionRepository implements InstitutionRepository {
  async getInstitutions(): Promise<Institution[]> {
    return scoredRegistry();
  }

  async getInstitution(slug: string): Promise<Institution | null> {
    return scoredRegistry().find((i) => i.slug === slug) ?? null;
  }

  async getRanking(): Promise<InstitutionRankingEntry[]> {
    return scoredRegistry()
      .sort((a, b) => (b.score?.total ?? 0) - (a.score?.total ?? 0))
      .map((institution, index) => ({
        ...institution,
        rank: index + 1,
      }));
  }
}

export const institutionRepository = new DemoInstitutionRepository();
