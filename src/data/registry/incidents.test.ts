import { describe, expect, it } from "vitest";
import { getFeaturedCase } from "@/data/editorial/cases";
import {
  getIncident,
  registryIncidents,
} from "@/data/registry/incidents";

describe("ANCPI e-Terra incident", () => {
  it("exists with official sources and is not demo", () => {
    const incident = getIncident("inc-ancpi-eterra-ransomware-2026-07");
    expect(incident).not.toBeNull();
    expect(incident?.demo).toBe(false);
    expect(incident?.serviceSlug).toBe("ancpi-ro");
    expect(incident?.sources?.length).toBeGreaterThanOrEqual(3);
    expect(
      incident?.sources?.some((s) => s.url.includes("gov.ro")),
    ).toBe(true);
  });

  it("is listed in registry incidents", () => {
    expect(
      registryIncidents.some(
        (i) => i.id === "inc-ancpi-eterra-ransomware-2026-07",
      ),
    ).toBe(true);
  });
});

describe("editorial featured", () => {
  it("features the ANCPI merge-la-mine case", () => {
    const featured = getFeaturedCase("merge-la-mine");
    expect(featured?.id).toBe("ancpi-eterra-ransomware-2026-07");
  });
});
