import { describe, expect, it } from "vitest";
import { buildFreedom544Href, resolve544Target } from "./freedom544";

describe("freedom544 helpers", () => {
  it("maps ADR institution names to directory entry", () => {
    expect(
      resolve544Target("Autoritatea pentru Digitalizarea României (ADR)"),
    ).toBe("ADR (Autoritatea pentru Digitalizarea României)");
  });

  it("maps portal catalog names to directory entries", () => {
    expect(resolve544Target("Ghișeul.ro")).toBe("Ghișeul.ro");
    expect(resolve544Target("DEPABD (evidența persoanelor)")).toBe("DEPABD");
    expect(resolve544Target("data.gov.ro")).toBe("data.gov.ro");
  });

  it("builds deep link with template and target", () => {
    const href = buildFreedom544Href({
      template: "contract",
      target: "ANAF",
      name: "SPV",
    });
    expect(href.startsWith("/544?")).toBe(true);
    expect(href).toContain("template=contract");
    expect(href).toContain("target=ANAF");
    expect(href).toContain("name=SPV");
  });
});
