"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { registryContracts } from "@/data/registry/contracts";
import { formatRon } from "@/lib/format";

const chips = ["Cloud", "ADR", "Microsoft", "SEAP"];

export function MoneyPreview() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const contract = registryContracts[0];

  const go = (value: string) => {
    const q = value.trim();
    router.push(q ? `/bani?q=${encodeURIComponent(q)}` : "/bani");
  };

  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">BANII</SectionLabel>
        <Badge variant="live">SURSE PUBLICE</Badge>
      </div>
      <SectionHeading>Unde-s banii?</SectionHeading>
      <form
        className="mt-8 border border-border bg-background p-4 md:p-6"
        onSubmit={(e) => {
          e.preventDefault();
          go(query);
        }}
      >
        <label htmlFor="home-money-search" className="terminal-label">
          Caută instituție, contract sau furnizor
        </label>
        <input
          id="home-money-search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută instituție, contract sau furnizor..."
          className="mt-3 w-full border border-border bg-surface px-4 py-4 text-foreground outline-none placeholder:text-muted focus:border-acid"
          autoComplete="off"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              className="border border-border px-3 py-1.5 font-mono text-xs text-muted uppercase transition-colors hover:border-acid hover:text-foreground"
              onClick={() => setQuery(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <Button type="submit">Caută banii</Button>
        </div>
      </form>
      <div className="mt-6 border border-border p-6">
        <p className="font-mono text-[10px] tracking-wider text-acid uppercase">
          {contract.status}
        </p>
        <h3 className="font-display mt-3 text-xl uppercase md:text-2xl">
          {contract.title}
        </h3>
        <dl className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <dt className="terminal-label">Sistem</dt>
            <dd className="mt-1 text-lg">{contract.system}</dd>
          </div>
          <div>
            <dt className="terminal-label">Valoare</dt>
            <dd className="mt-1 font-mono text-2xl text-acid">
              {formatRon(contract.valueRon)}
            </dd>
          </div>
          <div>
            <dt className="terminal-label">Furnizor</dt>
            <dd className="mt-1">{contract.supplier}</dd>
          </div>
          <div>
            <dt className="terminal-label">Instituție</dt>
            <dd className="mt-1">{contract.institution}</dd>
          </div>
        </dl>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="border border-border p-5">
          <p className="font-display text-xl uppercase">
            Single bidder RO 2024: 44%
          </p>
          <p className="mt-2 text-xs text-muted">
            Scoreboard UE. Prag „nesatisfăcător”: peste 20%.
          </p>
        </div>
        <div className="border border-border p-5">
          <p className="font-display text-xl uppercase">SEAP pe data.gov.ro</p>
          <p className="mt-2 text-xs text-muted">
            Contracte trimestriale, gata de ingestie. Fără inventat.
          </p>
        </div>
      </div>
      <p className="mt-6 text-muted">
        Cât a costat căcatul ăsta?
        <br />
        Zero „trust me bro”. Fiecare număr duce la documentul primar.
      </p>
    </Section>
  );
}
