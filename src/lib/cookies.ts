export const COOKIE_STORAGE_KEY = "muiesoft.cookie-prefs";
export const COOKIE_OPEN_EVENT = "muiesoft:open-cookies";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

export const defaultCookiePreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: "",
};

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decidedAt: String(parsed.decidedAt ?? ""),
    };
  } catch {
    return null;
  }
}

export function writeCookiePreferences(prefs: CookiePreferences): void {
  window.localStorage.setItem(
    COOKIE_STORAGE_KEY,
    JSON.stringify({ ...prefs, necessary: true }),
  );
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(COOKIE_OPEN_EVENT));
}
