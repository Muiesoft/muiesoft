import { beforeEach, describe, expect, it } from "vitest";
import {
  FREEDOM544_ARCHIVE_KEY,
  FREEDOM544_ARCHIVE_MAX,
  addFreedom544ArchiveEntry,
  readFreedom544Archive,
  removeFreedom544ArchiveEntry,
} from "./freedom544-archive";

describe("freedom544 archive", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns empty when unset", () => {
    expect(readFreedom544Archive()).toEqual([]);
  });

  it("adds and removes an archive entry", () => {
    const now = new Date("2026-08-07T12:00:00.000Z");
    const entry = addFreedom544ArchiveEntry({
      target: "ANAF",
      question: "Cost platformă SPV",
      letter: "Către: ANAF\n...",
      status: "copied",
      now,
    });
    expect(window.localStorage.getItem(FREEDOM544_ARCHIVE_KEY)).toBeTruthy();
    expect(entry.status).toBe("copied");
    expect(readFreedom544Archive()).toHaveLength(1);
    removeFreedom544ArchiveEntry(entry.id);
    expect(readFreedom544Archive()).toHaveLength(0);
  });

  it("caps archive size", () => {
    for (let i = 0; i < FREEDOM544_ARCHIVE_MAX + 5; i += 1) {
      addFreedom544ArchiveEntry({
        target: `Inst ${i}`,
        question: `Q ${i}`,
        letter: `Letter ${i}`,
        now: new Date(Date.UTC(2026, 7, 7, 12, 0, i)),
      });
    }
    expect(readFreedom544Archive()).toHaveLength(FREEDOM544_ARCHIVE_MAX);
  });
});
