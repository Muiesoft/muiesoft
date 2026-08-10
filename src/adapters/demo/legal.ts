import { demoLaws, demoLegalFeed } from "@/data/demo/laws";
import { registryLaws } from "@/data/registry/laws";
import type { LegalChange, LegalDocument } from "@/domain/law";
import type { LegalRepository } from "@/repositories/legal";

const allLaws: LegalDocument[] = [...registryLaws, ...demoLaws];

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export class DemoLegalRepository implements LegalRepository {
  async getLaws(): Promise<LegalDocument[]> {
    return allLaws;
  }

  async getLaw(slug: string): Promise<LegalDocument | null> {
    return allLaws.find((law) => law.slug === slug) ?? null;
  }

  async searchLaws(query: string): Promise<LegalDocument[]> {
    const q = normalize(query.trim());
    if (!q) return allLaws;
    return allLaws.filter((law) => {
      const haystack = normalize(
        [
          law.title,
          law.number,
          String(law.year),
          law.slug,
          ...law.articles.map((a) => `${a.title} ${a.plainLanguage}`),
        ].join(" "),
      );
      return haystack.includes(q);
    });
  }

  async getChanges(category?: string): Promise<LegalChange[]> {
    if (!category || category === "toate") return demoLegalFeed;
    return demoLegalFeed.filter((change) => change.category === category);
  }
}

export const legalRepository = new DemoLegalRepository();
