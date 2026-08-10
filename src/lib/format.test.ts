import { describe, expect, it } from "vitest";
import {
  formatEur,
  formatPercent,
  formatRon,
  fundingPercent,
  padCounter,
} from "./format";

describe("format", () => {
  it("formats RON", () => {
    expect(formatRon(12345678)).toContain("lei");
  });

  it("formats EUR", () => {
    expect(formatEur(3800)).toContain("€");
  });

  it("formats percent", () => {
    expect(formatPercent(91.2)).toBe("91%");
  });

  it("computes funding percent", () => {
    expect(fundingPercent(0, 3800)).toBe(0);
    expect(fundingPercent(1900, 3800)).toBe(50);
    expect(fundingPercent(10, 0)).toBe(0);
  });

  it("pads counter", () => {
    expect(padCounter(0)).toBe("000,000");
  });
});
