"use client";

import { useMemo, useState } from "react";
import { DemoBadge } from "@/components/shared/demo-badge";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { quickActions } from "@/data/demo/procedures";
import type { CivicProcedure } from "@/domain/procedure";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function matchesQuery(procedure: CivicProcedure, q: string): boolean {
  if (!q) return true;
  return (
    normalize(procedure.title).includes(q) ||
    procedure.keywords.some(
      (k) => normalize(k).includes(q) || q.includes(normalize(k)),
    )
  );
}

type RezolvaPageClientProps = {
  procedures: CivicProcedure[];
};

export function RezolvaPageClient({ procedures }: RezolvaPageClientProps) {
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const q = normalize(query.trim());

  const filtered = useMemo(
    () => procedures.filter((p) => matchesQuery(p, q)),
    [procedures, q],
  );

  const match = useMemo(() => {
    if (!q) {
      if (selectedSlug) {
        return procedures.find((p) => p.slug === selectedSlug) ?? null;
      }
      return null;
    }
    if (selectedSlug) {
      const selected = filtered.find((p) => p.slug === selectedSlug);
      if (selected) return selected;
    }
    return filtered[0] ?? null;
  }, [filtered, procedures, q, selectedSlug]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <label htmlFor="rezolva-search" className="sr-only">
        Ce vrei să faci?
      </label>
      <input
        id="rezolva-search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedSlug(null);
        }}
        placeholder="Ce vrei să faci?"
        className="w-full border border-border bg-surface px-4 py-5 text-2xl outline-none focus:border-acid"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action.query}
            type="button"
            className="border border-border px-3 py-2 font-mono text-xs uppercase hover:border-acid"
            onClick={() => {
              setQuery(action.query);
              setSelectedSlug(null);
            }}
          >
            {action.label}
          </button>
        ))}
      </div>

      {!match ? (
        <div className="mt-10">
          <p className="terminal-label">
            {q ? "Nicio potrivire" : "Proceduri"}
          </p>
          {q && filtered.length === 0 ? (
            <p className="mt-4 text-muted">
              Nicio procedură nu se potrivește. Șterge căutarea sau alege un chip.
            </p>
          ) : null}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {(q ? filtered : procedures).map((procedure) => (
              <li key={procedure.id}>
                <button
                  type="button"
                  className="w-full border border-border bg-surface p-4 text-left hover:border-acid"
                  onClick={() => {
                    setSelectedSlug(procedure.slug);
                    setQuery(procedure.title);
                  }}
                >
                  <span className="font-display text-lg uppercase">
                    {procedure.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted line-clamp-2">
                    {procedure.summary}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="border border-border bg-surface p-6">
            {match.demo ? <DemoBadge label="DATE DEMONSTRATIVE" /> : null}
            <h2
              className={`font-display text-3xl uppercase ${match.demo ? "mt-4" : ""}`}
            >
              {match.title}
            </h2>
            <p className="mt-3 text-muted">{match.summary}</p>
            {(match.requiresPhysicalPresence || match.requiresPrinting) && (
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs uppercase">
                {match.requiresPhysicalPresence ? (
                  <li className="border border-border px-2 py-1">
                    Prezență fizică posibilă
                  </li>
                ) : null}
                {match.requiresPrinting ? (
                  <li className="border border-border px-2 py-1">
                    Tipărire utilă
                  </li>
                ) : null}
              </ul>
            )}
            <ol className="mt-8 space-y-6">
              {match.steps.map((step) => (
                <li key={step.id} className="border-l-2 border-acid pl-4">
                  <p className="font-mono text-xs text-acid">
                    PASUL {step.order}
                  </p>
                  <h3 className="mt-1 font-display text-xl uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="h-fit border border-border bg-surface p-6 lg:sticky lg:top-24">
            <p className="terminal-label">Ce ai nevoie</p>
            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-muted">Documente</p>
                <ul className="mt-1 space-y-1">
                  {match.documents.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted">Termene</p>
                <ul className="mt-1 space-y-1">
                  {match.deadlines.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted">Cost</p>
                <ul className="mt-1 space-y-1">
                  {match.costs.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted">Instituții</p>
                <ul className="mt-1 space-y-1">
                  {match.authorities.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-muted">Surse</p>
                <ul className="mt-1 space-y-1">
                  {match.sources.map((s) => (
                    <li key={s.id}>
                      •{" "}
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-acid"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 font-mono text-xs uppercase text-muted underline underline-offset-2 hover:text-acid"
              onClick={() => {
                setQuery("");
                setSelectedSlug(null);
              }}
            >
              ← Toate procedurile
            </button>
          </aside>
        </div>
      )}
      <p className="mt-8 max-w-2xl text-sm text-muted">
        Ghid orientativ cu surse oficiale. Verifică mereu formularele, taxele și
        termenele pe site-ul instituției înainte să depui ceva.
      </p>
      <div className="mt-16">
        <ModulePlaceholder
          content={getModulePlaceholder("rezolva.sourced")}
          badge="PREVIEW"
        />
      </div>
    </div>
  );
}
