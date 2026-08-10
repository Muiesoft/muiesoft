"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { commandPaletteItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return commandPaletteItems;
    return commandPaletteItems.filter((item) =>
      normalize(item.label).includes(q),
    );
  }, [query]);

  const safeActive = Math.min(active, Math.max(results.length - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => {
          if (v) {
            setQuery("");
            setActive(0);
          }
          return !v;
        });
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
        setActive(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-background/85 p-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Caută în Muiesoft"
      data-testid="command-palette"
      onClick={() => {
        setOpen(false);
        setQuery("");
        setActive(0);
      }}
    >
      <div
        className="w-full max-w-xl border border-border bg-surface-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="sr-only" htmlFor="command-search">
          Caută în Muiesoft
        </label>
        <input
          id="command-search"
          autoFocus
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          placeholder="Caută în Muiesoft..."
          className="w-full border-b border-border bg-transparent px-4 py-4 font-mono text-sm outline-none placeholder:text-muted"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) =>
                Math.min(i + 1, Math.max(results.length - 1, 0)),
              );
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            }
            if (e.key === "Enter" && results[safeActive]) {
              router.push(results[safeActive].href);
              setOpen(false);
              setQuery("");
              setActive(0);
            }
          }}
        />
        <ul className="max-h-80 overflow-auto py-2" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-muted">
              N-am găsit nimic.
              <br />
              Măcar n-am zis că există.
            </li>
          ) : (
            results.map((item, index) => (
              <li
                key={item.href + item.label}
                role="option"
                aria-selected={index === safeActive}
              >
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                    index === safeActive
                      ? "bg-acid text-background"
                      : "text-foreground hover:bg-surface",
                  )}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => {
                    router.push(item.href);
                    setOpen(false);
                    setQuery("");
                    setActive(0);
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "font-mono text-[10px] tracking-wider uppercase",
                      index === safeActive
                        ? "text-background/70"
                        : "text-muted",
                    )}
                  >
                    Enter
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-border px-4 py-2 font-mono text-[10px] tracking-wider text-muted uppercase">
          ↑↓ navighează · Enter deschide · Esc închide
        </div>
      </div>
    </div>
  );
}
