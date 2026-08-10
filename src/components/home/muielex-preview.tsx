"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

const suggestions = [
  "Ce taxe plătesc ca PFA?",
  "Câte zile de concediu am?",
  "Cum contest o amendă?",
  "Ce s-a schimbat luna asta?",
];

export function MuieLexPreview() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const go = (value: string) => {
    const q = value.trim();
    router.push(q ? `/lex?q=${encodeURIComponent(q)}` : "/lex");
  };

  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">LEGE</SectionLabel>
        <FeatureStatus feature="muieLex" />
      </div>
      <SectionHeading>MUIELEX</SectionHeading>
      <p className="font-display mt-4 text-2xl text-muted uppercase md:text-3xl">
        Legea, fără pula de lemn.
      </p>
      <div className="mt-8 max-w-2xl space-y-3 text-lg">
        <p>
          Ținta: legislație pe românește, cu surse, gratis. Acum: preview cu
          acte ilustrative; ingestia Monitorului Oficial nu e live.
        </p>
        <p className="text-muted">
          Statul scrie legea.
          <br />
          MuieLex îți spune ce pula mea înseamnă.
        </p>
      </div>
      <form
        className="mt-10 border border-border bg-background p-4 md:p-6"
        onSubmit={(e) => {
          e.preventDefault();
          go(query);
        }}
      >
        <label htmlFor="home-lex-search" className="terminal-label">
          Ce vrei să afli?
        </label>
        <input
          id="home-lex-search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută în MuieLex..."
          className="mt-3 w-full border border-border bg-surface px-4 py-4 text-foreground outline-none placeholder:text-muted focus:border-acid"
          autoComplete="off"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              className="border border-border px-3 py-1.5 font-mono text-xs text-muted uppercase transition-colors hover:border-acid hover:text-foreground"
              onClick={() => setQuery(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <Button type="submit">Caută în MuieLex</Button>
        </div>
      </form>
    </Section>
  );
}
