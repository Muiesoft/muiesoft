"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";
import type { LegalDocument } from "@/domain/law";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

const examples = [
  "544",
  "acces informații",
  "Pot cumpăra laptop pe firmă?",
  "Cum contest o amendă?",
  "formular",
  "404",
];

export function LexSearch({
  laws,
  initialQuery = "",
}: {
  laws: LegalDocument[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return laws;
    return laws.filter((law) => {
      const hay = normalize(
        [
          law.title,
          law.number,
          String(law.year),
          ...law.articles.map((a) => a.plainLanguage),
        ].join(" "),
      );
      return hay.includes(q);
    });
  }, [laws, query]);

  return (
    <div>
      <label htmlFor="lex-search" className="sr-only">
        Ce vrei să afli?
      </label>
      <input
        id="lex-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ce vrei să afli?"
        className="w-full border border-border bg-surface px-4 py-5 text-xl outline-none focus:border-acid"
        data-testid="lex-search"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            className="border border-border px-3 py-2 font-mono text-xs hover:border-acid"
            onClick={() => setQuery(example)}
          >
            {example}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-3">
        {results.length === 0 ? (
          <p className="text-muted">
            N-am găsit nimic.
            <br />
            Măcar n-am zis că există.
          </p>
        ) : (
          results.map((law) => (
            <Link
              key={law.id}
              href={`/lex/${law.slug}`}
              className="block border border-border bg-surface p-5 transition-colors hover:border-acid"
              data-testid="lex-result"
            >
              {law.demo ? (
                <div className="flex flex-wrap gap-2">
                  <DemoBadge label="DATE DEMONSTRATIVE" />
                </div>
              ) : null}
              <h3
                className={`font-display text-xl uppercase ${law.demo ? "mt-3" : ""}`}
              >
                {law.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {law.articles[0]?.plainLanguage}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
