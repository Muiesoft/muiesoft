import { describe, expect, it } from "vitest";
import { filterInstitutions } from "./harta-filter";
import type { Institution } from "@/domain/institution";

const items: Institution[] = [
  {
    id: "1",
    slug: "a",
    name: "Portalul Exemplu",
    category: "Portal digital",
    county: "Cluj",
    status: "operational",
    sources: [],
    demo: true,
  },
  {
    id: "2",
    slug: "b",
    name: "Direcția PDF",
    category: "Agenție",
    county: "București",
    status: "degraded",
    sources: [],
    demo: true,
  },
];

describe("filterInstitutions", () => {
  it("filters by institution query", () => {
    expect(
      filterInstitutions(items, {
        county: "toate",
        status: "toate",
        category: "toate",
        query: "pdf",
      }),
    ).toEqual([items[1]]);
  });

  it("filters by category", () => {
    expect(
      filterInstitutions(items, {
        county: "toate",
        status: "toate",
        category: "Portal digital",
        query: "",
      }),
    ).toEqual([items[0]]);
  });
});
