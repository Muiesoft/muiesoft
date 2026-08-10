"use client";

import { useMemo, useState } from "react";
import { ComingSoonModal } from "@/components/shared/coming-soon-modal";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { demoBounties } from "@/data/demo/bounties";
import { useComingSoon } from "@/hooks/use-coming-soon";
import { formatEur } from "@/lib/format";

const categories = ["toate", "code", "data", "ux", "legal"] as const;

export function BountiesClient() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("toate");
  const soon = useComingSoon("bounties.funding");

  const filtered = useMemo(() => {
    if (category === "toate") return demoBounties;
    return demoBounties.filter((b) => b.category === category);
  }, [category]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <p className="max-w-2xl text-sm text-muted">
        Listă de probleme pe care vrem să le finanțăm. Până acum nu am strâns
        niciun ban. Crowdfunding-ul nu e deschis; butonul de mai jos nu ia bani.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`border px-3 py-2 font-mono text-xs uppercase ${
              category === c
                ? "border-acid bg-acid text-background"
                : "border-border text-muted"
            }`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((bounty) => (
          <article
            key={bounty.id}
            className="border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="planned">NEFINANȚAT</Badge>
            </div>
            <h2 className="font-display mt-4 text-2xl uppercase">
              {bounty.title}
            </h2>
            <p className="mt-3 text-sm text-muted">{bounty.description}</p>
            <p className="mt-4 font-mono text-xl text-acid">
              Obiectiv {formatEur(bounty.goalEur)}
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              Strâns: {formatEur(0)} · Impact: {bounty.impact} · Complexitate:{" "}
              {bounty.complexity}
            </p>
            <div className="mt-5">
              <Button type="button" variant="secondary" onClick={soon.show}>
                Anunță-mă când se deschide
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Total strâns pe toate bounty-urile: {formatEur(0)}. Nu procesăm plăți.
      </p>
      <div className="mt-10 border border-border p-6">
        <p className="terminal-label">Escrow / payout (rezervat)</p>
        <ul className="mt-4 space-y-2 font-mono text-xs text-muted">
          <li>pledge intent → ledger public</li>
          <li>escrow → acceptare deliverable</li>
          <li>payout → /transparenta</li>
        </ul>
      </div>
      <div className="mt-16">
        <ModulePlaceholder
          content={getModulePlaceholder("bounties.funding")}
          badge="PREVIEW"
        />
      </div>
      <ComingSoonModal
        open={soon.open}
        onClose={soon.hide}
        title={soon.title}
        willDo={soon.willDo}
        missing={soon.missing}
        help={soon.help}
      />
    </div>
  );
}
