import { registryServices } from "@/data/registry/services";
import type {
  Institution,
  InstitutionRankingEntry,
} from "@/domain/institution";
import type { InstitutionRepository } from "@/repositories/institution";

export class DemoInstitutionRepository implements InstitutionRepository {
  async getInstitutions(): Promise<Institution[]> {
    return registryServices;
  }

  async getInstitution(slug: string): Promise<Institution | null> {
    return registryServices.find((i) => i.slug === slug) ?? null;
  }

  async getRanking(): Promise<InstitutionRankingEntry[]> {
    return [...registryServices]
      .sort((a, b) => (b.score?.total ?? 0) - (a.score?.total ?? 0))
      .map((institution, index) => ({
        ...institution,
        rank: index + 1,
      }));
  }
}

export const institutionRepository = new DemoInstitutionRepository();
