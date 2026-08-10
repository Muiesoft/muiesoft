import { describe, expect, it, beforeEach } from "vitest";
import {
  COOKIE_STORAGE_KEY,
  defaultCookiePreferences,
  readCookiePreferences,
  writeCookiePreferences,
} from "./cookies";

describe("cookie preferences", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns null when empty", () => {
    expect(readCookiePreferences()).toBeNull();
  });

  it("persists and reads preferences", () => {
    writeCookiePreferences({
      ...defaultCookiePreferences,
      analytics: true,
      marketing: false,
      decidedAt: "2026-08-06T00:00:00.000Z",
    });
    expect(window.localStorage.getItem(COOKIE_STORAGE_KEY)).toBeTruthy();
    const prefs = readCookiePreferences();
    expect(prefs?.necessary).toBe(true);
    expect(prefs?.analytics).toBe(true);
    expect(prefs?.marketing).toBe(false);
  });
});
