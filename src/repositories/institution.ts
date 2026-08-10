import type {
  Institution,
  InstitutionRankingEntry,
} from "@/domain/institution";

export interface InstitutionRepository {
  getInstitutions(): Promise<Institution[]>;
  getInstitution(slug: string): Promise<Institution | null>;
  getRanking(): Promise<InstitutionRankingEntry[]>;
}
