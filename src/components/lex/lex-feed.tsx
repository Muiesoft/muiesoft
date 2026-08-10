"use client";

import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";
import { FeatureStatus } from "@/components/shared/feature-status";
import type { LegalChange } from "@/domain/law";
import {
  filterLegalFeed,
  LEX_FEED_CATEGORIES,
  type LexFeedCategory,
} from "@/lib/lex-feed";
import { cn } from "@/lib/utils";

export function LexFeed({
  items,
  stats,
}: {
  items: LegalChange[];
  stats: {
    newActs: number;
    modifications: number;
    affectCompanies: number;
    worthReading: number;
  };
}) {
  const [category, setCategory] = useState<LexFeedCategory>("toate");
  const filtered = useMemo(
    () => filterLegalFeed(items, category),
    [items, category],
  );

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h2 className="font-display text-3xl uppercase">Ce s-a futut azi?</h2>
        <FeatureStatus feature="muieLex" />
        {items.some((item) => item.demo) ? <DemoBadge /> : null}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          [stats.newActs, "acte noi"],
          [stats.modifications, "modificări"],
          [stats.affectCompanies, "afectează firme"],
          [stats.worthReading, "merită citită"],
        ].map(([n, label]) => (
          <div key={String(label)} className="border border-border p-4">
            <p className="font-mono text-3xl text-acid">{n}</p>
            <p className="text-sm text-muted">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2" data-testid="lex-feed-filters">
        {LEX_FEED_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            className={cn(
              "min-h-11 border px-3 py-2 font-mono text-xs uppercase",
              category === c
                ? "border-acid bg-acid text-background"
                : "border-border text-muted",
            )}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="text-muted">
            N-am găsit nimic.
            <br />
            Măcar n-am zis că există.
          </p>
        ) : (
          filtered.map((change) => (
            <article key={change.id} className="border border-border p-5">
              {change.demo ? (
                <DemoBadge label="DATE DEMONSTRATIVE" />
              ) : null}
              <p
                className={`font-mono text-[10px] text-muted uppercase ${change.demo ? "mt-2" : ""}`}
              >
                {change.category}
              </p>
              <h3 className="mt-2 font-display uppercase">{change.title}</h3>
              <p className="mt-2 text-sm text-muted">{change.summary}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
