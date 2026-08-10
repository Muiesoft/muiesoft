"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { getModulePlaceholder } from "@/config/module-placeholders";
import {
  moneyContextLinks,
  moneyIndicators,
} from "@/data/registry/money-indicators";
import type { PublicContract } from "@/domain/contract";
import { formatRon } from "@/lib/format";
import { buildFreedom544Href } from "@/lib/freedom544";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

export function MoneyClient({
  contracts,
  initialQuery = "",
}: {
  contracts: PublicContract[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return contracts;
    return contracts.filter((c) =>
      normalize(
        [c.title, c.system, c.institution, c.supplier].join(" "),
      ).includes(q),
    );
  }, [contracts, query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <p className="max-w-3xl text-sm text-muted">
        Contracte și plafoane din surse publice (ADR, SEAP/SICAP, HG, Scoreboard
        UE, presă). Anomalie ≠ vinovăție. Fiecare cifră duce la sursă.
      </p>

      <label htmlFor="money-search" className="sr-only">
        Caută instituție, contract sau furnizor
      </label>
      <input
        id="money-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Caută instituție, contract sau furnizor..."
        className="mt-6 w-full border border-border bg-surface px-4 py-4 text-lg outline-none focus:border-acid"
      />

      <div className="mt-8 grid gap-4">
        {results.map((contract) => (
          <article
            key={contract.id}
            className="border border-border bg-surface p-5"
            data-testid="money-contract"
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant={contract.demo ? "demo" : "live"}>
                {contract.demo ? "DATE DEMONSTRATIVE" : "SURSE PUBLICE"}
              </Badge>
              <Badge variant="muted">{contract.status}</Badge>
            </div>
            <h2 className="font-display mt-3 text-2xl uppercase">
              {contract.title}
            </h2>
            <dl className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <dt className="text-muted">Sistem</dt>
                <dd>{contract.system}</dd>
              </div>
              <div>
                <dt className="text-muted">Valoare (lei, fără conversii inventate)</dt>
                <dd className="font-mono text-acid">
                  {formatRon(contract.valueRon)}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Instituție</dt>
                <dd>{contract.institution}</dd>
              </div>
              <div>
                <dt className="text-muted">Furnizor / parte</dt>
                <dd>{contract.supplier}</dd>
              </div>
              {contract.signedAt ? (
                <div>
                  <dt className="text-muted">Dată (semnare / act)</dt>
                  <dd className="font-mono">{contract.signedAt}</dd>
                </div>
              ) : null}
              {contract.procurementType ? (
                <div>
                  <dt className="text-muted">Tip</dt>
                  <dd>{contract.procurementType}</dd>
                </div>
              ) : null}
            </dl>
            <ul className="mt-4 space-y-1 text-xs text-muted">
              {contract.sources.map((source) => (
                <li key={source.id}>
                  <a
                    href={source.url}
                    className="text-acid hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.publisher}: {source.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              <Link
                href={buildFreedom544Href({
                  template: "contract",
                  target: contract.institution,
                  name: contract.system,
                })}
                className="font-mono text-xs tracking-wider text-acid uppercase underline-offset-2 hover:underline"
              >
                Cere detalii cu 544
              </Link>
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 border border-border p-6 font-mono text-sm leading-8">
        <p className="terminal-label mb-4">Exemplu lanț · Cloud Dedicat</p>
        <p>ADR</p>
        <p className="text-muted">↓</p>
        <p>Cloud Dedicat (CPG)</p>
        <p className="text-muted">↓</p>
        <p>Vodafone România</p>
        <p className="text-muted">↓</p>
        <p>stack Microsoft (conform comunicare publică)</p>
        <p className="mt-4 text-xs text-muted">
          Nu e graf complet SEAP. E un fir documentat din sursele de mai sus.
        </p>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="terminal-label mb-0">Indicatori</p>
          <Badge variant="live">CU PROVENANCE</Badge>
        </div>
        <p className="mb-4 text-sm text-muted">
          Doar cifre din rapoarte oficiale. Restul rămâne n/a până la ingestie
          SEAP automată. Anomalie ≠ vinovăție.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {moneyIndicators.map((item) => (
            <div key={item.id} className="border border-border p-4">
              <p className="font-mono text-[10px] text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-2 font-mono text-2xl text-acid">{item.value}</p>
              <p className="mt-2 text-xs text-muted">{item.note}</p>
              <ul className="mt-3 space-y-1 text-xs">
                {item.sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      className="text-acid hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.publisher}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border border-border p-5">
        <p className="terminal-label">Surse de ingestie (viitor + acum)</p>
        <ul className="mt-4 space-y-2 font-mono text-xs">
          {moneyContextLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className="text-acid hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-muted">
        Muiesoft detectează anomalii. Nu emite sentințe.
      </p>

      <div className="mt-16">
        <ModulePlaceholder
          content={getModulePlaceholder("money.ingestion")}
          badge="PREVIEW"
        />
      </div>
    </div>
  );
}
