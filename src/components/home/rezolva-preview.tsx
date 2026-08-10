"use client";

import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { quickActions } from "@/data/demo/procedures";
import type { CivicProcedure } from "@/domain/procedure";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

type RezolvaPreviewProps = {
  procedures: CivicProcedure[];
};

export function RezolvaPreview({ procedures }: RezolvaPreviewProps) {
  const [query, setQuery] = useState("");

  const match = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return null;
    return (
      procedures.find(
        (p) =>
          normalize(p.title).includes(q) ||
          p.keywords.some(
            (k) => normalize(k).includes(q) || q.includes(normalize(k)),
          ),
      ) ?? null
    );
  }, [procedures, query]);

  return (
    <Section>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">REZOLVĂ</SectionLabel>
      </div>
      <SectionHeading>Rezolvă-mi dracu problema.</SectionHeading>
      <label htmlFor="home-rezolva" className="sr-only">
        Ce vrei să faci?
      </label>
      <input
        id="home-rezolva"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ce vrei să faci?"
        className="mt-8 w-full border border-border bg-surface px-4 py-5 text-xl outline-none placeholder:text-muted focus:border-acid"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.query}
            type="button"
            className="border border-border px-3 py-2 font-mono text-xs uppercase transition-colors hover:border-acid"
            onClick={() => setQuery(action.query)}
          >
            {action.label}
          </button>
        ))}
      </div>
      {match ? (
        <div className="mt-8 border border-border bg-surface p-6">
          {match.demo ? <DemoBadge /> : null}
          <p
            className={`font-display text-2xl uppercase ${match.demo ? "mt-4" : ""}`}
          >
            {match.title}
          </p>
          <ol className="mt-6 space-y-3">
            {match.steps.map((step) => (
              <li key={step.id} className="flex gap-3 text-sm">
                <span className="font-mono text-acid">{step.order}.</span>
                <span>
                  <strong className="text-foreground">{step.title}</strong>
                  <br />
                  <span className="text-muted">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      <div className="mt-8">
        <Button href="/rezolva">Vezi procedurile</Button>
      </div>
    </Section>
  );
}
