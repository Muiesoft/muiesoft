import { describe, expect, it } from "vitest";
import { displayScore } from "./scoring";

describe("scoring display", () => {
  it("shows total when score exists", () => {
    expect(displayScore({ total: 84 })).toBe("84");
  });

  it("shows dash when missing", () => {
    expect(displayScore(null)).toBe("n/a");
    expect(displayScore(undefined)).toBe("n/a");
  });
});
