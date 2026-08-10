"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COOKIE_OPEN_EVENT,
  COOKIE_STORAGE_KEY,
  defaultCookiePreferences,
  readCookiePreferences,
  writeCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookies";
import { cn } from "@/lib/utils";

const FAB_STACK_GAP_PX = 12;

function clearFabStack() {
  document.documentElement.style.setProperty("--fab-stack", "0px");
}

function setFabStack(height: number) {
  const stack = Math.max(0, Math.ceil(height) + FAB_STACK_GAP_PX);
  document.documentElement.style.setProperty("--fab-stack", `${stack}px`);
}

type Snapshot = {
  saved: CookiePreferences | null;
  forcedOpen: boolean;
};

let forcedOpen = false;
let cachedSnapshot: Snapshot = { saved: null, forcedOpen: false };
const listeners = new Set<() => void>();

function getCachedSnapshot(): Snapshot {
  const saved = readCookiePreferences();
  if (
    cachedSnapshot.forcedOpen === forcedOpen &&
    cachedSnapshot.saved?.analytics === saved?.analytics &&
    cachedSnapshot.saved?.marketing === saved?.marketing &&
    cachedSnapshot.saved?.decidedAt === saved?.decidedAt &&
    Boolean(cachedSnapshot.saved) === Boolean(saved)
  ) {
    return cachedSnapshot;
  }
  cachedSnapshot = { saved, forcedOpen };
  return cachedSnapshot;
}

function emit() {
  cachedSnapshot = {
    saved: readCookiePreferences(),
    forcedOpen,
  };
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onOpen = () => {
    forcedOpen = true;
    emit();
  };
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key === COOKIE_STORAGE_KEY) emit();
  };
  window.addEventListener(COOKIE_OPEN_EVENT, onOpen);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener(COOKIE_OPEN_EVENT, onOpen);
    window.removeEventListener("storage", onStorage);
  };
}

const SERVER_SNAPSHOT: Snapshot = { saved: null, forcedOpen: false };

function getServerSnapshot(): Snapshot {
  return SERVER_SNAPSHOT;
}

function useIsClient(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function CookieConsent() {
  const isClient = useIsClient();
  const snapshot = useSyncExternalStore(
    subscribe,
    getCachedSnapshot,
    getServerSnapshot,
  );
  const base = snapshot.saved ?? defaultCookiePreferences;
  const [draft, setDraft] = useState<CookiePreferences>(base);
  const [userExpanded, setUserExpanded] = useState<boolean | null>(null);

  const visible =
    isClient && (snapshot.forcedOpen || snapshot.saved === null);
  const showDetails = userExpanded ?? snapshot.forcedOpen;
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) {
      clearFabStack();
      return;
    }
    const node = bannerRef.current;
    if (!node || typeof ResizeObserver === "undefined") {
      clearFabStack();
      return;
    }
    const sync = () => setFabStack(node.getBoundingClientRect().height);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearFabStack();
    };
  }, [visible, showDetails]);

  if (!visible) return null;

  const persist = (next: CookiePreferences) => {
    const withTime = {
      ...next,
      necessary: true as const,
      decidedAt: new Date().toISOString(),
    };
    writeCookiePreferences(withTime);
    forcedOpen = false;
    setDraft(withTime);
    setUserExpanded(null);
    emit();
  };

  return (
    <div
      ref={bannerRef}
      className={cn(
        "fixed inset-x-0 bottom-0 z-[70] border-t border-border bg-surface-elevated/98 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_40px_rgba(0,0,0,0.45)] md:p-6 md:pb-[max(1.5rem,env(safe-area-inset-bottom))]",
      )}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      data-testid="cookie-consent"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="muted">PREFERINȚE LOCALE</Badge>
              <Badge variant="live">FĂRĂ TRACKING</Badge>
            </div>
            <h2
              id="cookie-title"
              className="font-display mt-3 text-xl font-bold uppercase md:text-2xl"
            >
              Preferințe cookie. Fără tracking.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Salvăm doar alegerea ta în browser (localStorage). Nu încărcăm
              scripturi de analytics sau marketing. Poți schimba preferințele
              oricând din footer.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                persist({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                  decidedAt: "",
                })
              }
            >
              Respinge neesențiale
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setDraft(base);
                setUserExpanded((prev) => {
                  const current = prev ?? snapshot.forcedOpen;
                  return !current;
                });
              }}
            >
              {showDetails ? "Ascunde detalii" : "Personalizează"}
            </Button>
            <Button
              type="button"
              onClick={() =>
                persist({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  decidedAt: "",
                })
              }
            >
              Acceptă tot
            </Button>
          </div>
        </div>

        {showDetails ? (
          <div className="mt-6 grid gap-3 border-t border-border pt-6 md:grid-cols-3">
            {(
              [
                [
                  "necessary",
                  "Necesare",
                  "Sesiune UI, preferințe cookie, accesibilitate. Mereu on.",
                  true,
                ],
                [
                  "analytics",
                  "Analytics",
                  "Măsurători agregate. Momentan: nimic. Toggle-ul e decor serios.",
                  false,
                ],
                [
                  "marketing",
                  "Marketing",
                  "Nu vindem atenție. Nu există pixel. Poți bifa dacă vrei absurd.",
                  false,
                ],
              ] as const
            ).map(([key, title, body, locked]) => (
              <label
                key={key}
                className="flex cursor-pointer flex-col border border-border bg-background p-4"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm uppercase">{title}</span>
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[var(--acid)]"
                    checked={
                      key === "necessary"
                        ? true
                        : draft[key as "analytics" | "marketing"]
                    }
                    disabled={locked}
                    onChange={(e) => {
                      if (key === "necessary") return;
                      setDraft((prev) => ({
                        ...prev,
                        [key]: e.target.checked,
                      }));
                    }}
                  />
                </span>
                <span className="mt-3 text-xs text-muted">{body}</span>
              </label>
            ))}
            <div className="md:col-span-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => persist(draft)}
              >
                Salvează preferințele
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
