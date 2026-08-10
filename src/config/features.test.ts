import { describe, expect, it } from "vitest";
import { features, getFeature, isFeatureInteractive } from "./features";

describe("features", () => {
  it("marks muieLex as preview", () => {
    expect(getFeature("muieLex").mode).toBe("preview");
  });

  it("treats preview as interactive", () => {
    expect(isFeatureInteractive("preview")).toBe(true);
    expect(isFeatureInteractive("planned")).toBe(false);
  });

  it("exposes required product features", () => {
    expect(features.muieIndex.label).toBe("MuieIndex");
    expect(features.money.label).toBe("Unde-s banii?");
  });
});
