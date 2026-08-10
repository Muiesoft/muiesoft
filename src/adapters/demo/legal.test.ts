import { describe, expect, it } from "vitest";
import { DemoLegalRepository } from "./legal";

describe("DemoLegalRepository", () => {
  const repo = new DemoLegalRepository();

  it("finds demo law by query", async () => {
    const results = await repo.searchLaws("formular");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((l) => l.demo)).toBe(true);
  });

  it("finds Legea 544 by query", async () => {
    const results = await repo.searchLaws("544");
    expect(results.some((l) => l.slug === "legea-544-2001-acces-informatii")).toBe(
      true,
    );
  });

  it("returns law by slug", async () => {
    const law = await repo.getLaw("legea-404-2026-formularul-duplicat");
    expect(law?.title).toContain("404");
  });

  it("returns real 544 without demo flag", async () => {
    const law = await repo.getLaw("legea-544-2001-acces-informatii");
    expect(law?.demo).toBeFalsy();
    expect(law?.sources[0]?.sourceType).toBe("official");
  });
});
