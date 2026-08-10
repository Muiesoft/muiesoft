"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggs() {
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    const githubLine = siteConfig.github
      ? siteConfig.github
      : "Repository public în lucru.";
    console.info(
      `%cHei, devule.\n\nDacă tot ai deschis consola:\n${githubLine}\n\nPR > rant.`,
      "color:#c6ff00;font-family:monospace;font-size:12px;",
    );
  }, []);

  useEffect(() => {
    let index = 0;
    const onKey = (e: KeyboardEvent) => {
      const raw = e.key;
      if (typeof raw !== "string" || raw.length === 0) return;
      const key = raw.length === 1 ? raw.toLowerCase() : raw;
      const expected = KONAMI[index];
      if (!expected) {
        index = 0;
        return;
      }
      const expectedNorm =
        expected.length === 1 ? expected.toLowerCase() : expected;
      if (key === expectedNorm) {
        index += 1;
        if (index === KONAMI.length) {
          setAdminMode(true);
          index = 0;
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!adminMode) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-6">
      <div className="max-w-md border border-danger p-8 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-danger uppercase">
          MOD ADMINISTRAȚIE PUBLICĂ
        </p>
        <div className="mt-8 space-y-2 font-mono text-sm text-muted">
          <p>Loading...</p>
          <p>Loading...</p>
          <p>Loading...</p>
        </div>
        <p className="mt-8 text-lg">Vă rugăm reveniți la ghișeu.</p>
        <button
          type="button"
          className="mt-8 border border-border px-4 py-2 font-mono text-xs uppercase"
          onClick={() => setAdminMode(false)}
        >
          Evadează
        </button>
      </div>
    </div>
  );
}
