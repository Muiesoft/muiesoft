import type { LegalChange, LegalDocument } from "@/domain/law";

export interface LegalRepository {
  getLaws(): Promise<LegalDocument[]>;
  getLaw(slug: string): Promise<LegalDocument | null>;
  searchLaws(query: string): Promise<LegalDocument[]>;
  getChanges(category?: string): Promise<LegalChange[]>;
}
