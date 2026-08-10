import { describe, expect, it } from "vitest";
import { DemoProcedureRepository } from "./procedures";

describe("DemoProcedureRepository", () => {
  const repo = new DemoProcedureRepository();

  it("filters procedures by query", async () => {
    const results = await repo.searchProcedures("deschid firma");
    expect(results[0]?.slug).toBe("deschid-firma-srl");
  });

  it("returns sourced real procedures", async () => {
    const srl = await repo.getProcedure("deschid-firma-srl");
    expect(srl?.demo).toBeFalsy();
    expect(srl?.sources.some((s) => s.sourceType === "official")).toBe(true);
  });

  it("includes the expanded procedure catalog", async () => {
    const all = await repo.getProcedures();
    const slugs = all.map((p) => p.slug);
    expect(slugs).toEqual(
      expect.arrayContaining([
        "deschid-firma-srl",
        "platesc-taxe",
        "contest-amenda",
        "cont-spv-anaf",
        "deschid-pfa",
        "certificat-atestare-fiscala",
        "cont-cnpp",
        "date-deschise-data-gov",
      ]),
    );
    expect(all).toHaveLength(8);
    for (const procedure of all) {
      expect(procedure.demo).toBeFalsy();
      expect(procedure.sources.length).toBeGreaterThan(0);
    }
  });

  it("finds new procedures by keyword", async () => {
    const spv = await repo.searchProcedures("cont spv");
    expect(spv.some((p) => p.slug === "cont-spv-anaf")).toBe(true);
    const pfa = await repo.searchProcedures("deschid pfa");
    expect(pfa[0]?.slug).toBe("deschid-pfa");
  });
});
