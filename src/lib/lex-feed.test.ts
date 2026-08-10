import { describe, expect, it } from "vitest";
import { filterLegalFeed } from "./lex-feed";
import type { LegalChange } from "@/domain/law";

const items: LegalChange[] = [
  {
    id: "1",
    kind: "new",
    title: "a",
    summary: "a",
    affects: "a",
    effectiveFrom: "2026-01-01",
    category: "firme",
  },
  {
    id: "2",
    kind: "new",
    title: "b",
    summary: "b",
    affects: "b",
    effectiveFrom: "2026-01-01",
    category: "taxe",
  },
];

describe("filterLegalFeed", () => {
  it("returns all when category is toate", () => {
    expect(filterLegalFeed(items, "toate")).toHaveLength(2);
  });

  it("filters by category", () => {
    expect(filterLegalFeed(items, "firme")).toEqual([items[0]]);
  });
});
