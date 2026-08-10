import { describe, expect, it } from "vitest";
import {
  getLighthouseSnapshot,
  lighthouseSnapshots,
} from "./lighthouse-snapshots";
import { registryServices } from "./services";

describe("lighthouse snapshots", () => {
  it("carries provenance and valid scores", () => {
    expect(lighthouseSnapshots.length).toBeGreaterThan(0);
    for (const snap of lighthouseSnapshots) {
      expect(snap.tool).toBe("lighthouse");
      expect(snap.toolVersion).toBeTruthy();
      expect(snap.fetchedAt).toBeTruthy();
      for (const score of Object.values(snap.scores)) {
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      }
      expect(snap.note.toLowerCase()).toContain("nu este scor muie index");
    }
  });

  it("references only registry services", () => {
    const slugs = new Set(registryServices.map((s) => s.slug));
    for (const snap of lighthouseSnapshots) {
      expect(slugs.has(snap.serviceSlug)).toBe(true);
    }
  });

  it("looks up by service slug", () => {
    const first = lighthouseSnapshots[0];
    expect(getLighthouseSnapshot(first.serviceSlug)?.id).toBe(first.id);
    expect(getLighthouseSnapshot("missing")).toBeUndefined();
  });
});
