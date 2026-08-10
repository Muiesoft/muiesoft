import type { LegalChange } from "@/domain/law";

export const LEX_FEED_CATEGORIES = [
  "toate",
  "firme",
  "persoane",
  "munca",
  "taxe",
  "imobiliare",
  "administratie",
] as const;

export type LexFeedCategory = (typeof LEX_FEED_CATEGORIES)[number];

export function filterLegalFeed(
  items: LegalChange[],
  category: LexFeedCategory,
): LegalChange[] {
  if (category === "toate") return items;
  return items.filter((item) => item.category === category);
}
