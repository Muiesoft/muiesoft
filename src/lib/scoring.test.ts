import { describe, expect, it } from "vitest";
import { DemoInstitutionRepository } from "@/adapters/demo/institution";
import { registryServices } from "@/data/registry/services";
import type { InstitutionScore } from "@/domain/institution";
import {
  applyMuieScore,
  clampScore,
  computeMuieScore,
  displayScore,
  frictionTone,
} from "./scoring";

const dims = (
  n: number,
): InstitutionScore => ({
  total: 0,
  reliability: n,
  usability: n,
  accessibility: n,
  interoperability: n,
  transparency: n,
  bureaucracy: n,
});

describe("scoring display", () => {
  it("shows total when score exists", () => {
    expect(displayScore({ total: 84 })).toBe("84");
  });

  it("shows n/a when missing", () => {
    expect(displayScore(null)).toBe("n/a");
    expect(displayScore(undefined)).toBe("n/a");
  });
});

describe("computeMuieScore", () => {
  it("clamps to 0-100", () => {
    expect(clampScore(-3)).toBe(0);
    expect(clampScore(140)).toBe(100);
    expect(
      computeMuieScore({
        status: "broken",
        score: dims(100),
        incidentCount: 5,
        probeVerdict: "down",
        lighthouse: { performance: 0, accessibility: 0 },
      }),
    ).toBeLessThanOrEqual(100);
  });

  it("treats higher friction as worse", () => {
    const low = computeMuieScore({
      status: "operational",
      score: dims(10),
      incidentCount: 0,
    });
    const high = computeMuieScore({
      status: "broken",
      score: dims(90),
      incidentCount: 1,
      probeVerdict: "down",
    });
    expect(high).toBeGreaterThan(low);
  });

  it("maps high totals to danger tone", () => {
    expect(frictionTone(12)).toBe("success");
    expect(frictionTone(50)).toBe("warning");
    expect(frictionTone(90)).toBe("danger");
  });
});

describe("friction ranking", () => {
  it("sorts descending by friction", async () => {
    const ranking = await new DemoInstitutionRepository().getRanking();
    const totals = ranking.map((item) => item.score?.total ?? 0);
    expect(totals).toEqual([...totals].sort((a, b) => b - a));
  });

  it("ranks ANCPI above Oradea", () => {
    const ancpi = applyMuieScore(
      registryServices.find((s) => s.slug === "ancpi-ro")!,
    );
    const oradea = applyMuieScore(
      registryServices.find((s) => s.slug === "primaria-oradea")!,
    );
    expect(ancpi.score!.total).toBeGreaterThan(oradea.score!.total);
  });
});
