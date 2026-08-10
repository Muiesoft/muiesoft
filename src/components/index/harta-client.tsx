"use client";

import { useMemo, useState } from "react";
import { HartaRomania } from "@/components/index/harta-romania";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Badge } from "@/components/ui/badge";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { registryServices } from "@/data/registry/services";
import { filterInstitutions } from "@/lib/harta-filter";
import {
  getHartaStatus,
  hartaStatusMeta,
  hartaStatusOrder,
} from "@/lib/harta-status";
import { cn } from "@/lib/utils";

export function HartaClient() {
  const [county, setCounty] = useState("toate");
  const [status, setStatus] = useState("toate");
  const [category, setCategory] = useState("toate");
  const [query, setQuery] = useState("");

  const counties = useMemo(
    () => ["toate", ...new Set(registryServices.map((i) => i.county ?? "N/A"))],
    [],
  );
  const categories = useMemo(
    () => ["toate", ...new Set(registryServices.map((i) => i.category))],
    [],
  );

  const filtered = useMemo(
    () =>
      filterInstitutions(registryServices, {
        county,
        status,
        category,
        query,
      }),
    [county, status, category, query],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <p className="text-sm text-muted">
        Portaluri reale din registry. Statusul e etichetă de catalog, nu probe
        live.
      </p>
      <div className="mt-6">
        <HartaRomania
          services={registryServices}
          selected={county}
          onSelect={setCounty}
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="block text-sm">
          <span className="terminal-label">Instituție</span>
          <input
            data-testid="harta-institution-filter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută instituție..."
            className="mt-2 w-full border border-border bg-surface px-3 py-3 outline-none focus:border-acid"
          />
        </label>
        <label className="block text-sm">
          <span className="terminal-label">Județ</span>
          <select
            className="mt-2 w-full border border-border bg-surface px-3 py-3 outline-none focus:border-acid"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="terminal-label">Status</span>
          <select
            className="mt-2 w-full border border-border bg-surface px-3 py-3 outline-none focus:border-acid"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="toate">toate</option>
            {hartaStatusOrder.map((s) => (
              <option key={s} value={s}>
                {hartaStatusMeta[s].label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="terminal-label">Categorie</span>
          <select
            className="mt-2 w-full border border-border bg-surface px-3 py-3 outline-none focus:border-acid"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase">
        {hartaStatusOrder.map((s) => (
          <li key={s} className={hartaStatusMeta[s].stampClass}>
            ● {hartaStatusMeta[s].label}
          </li>
        ))}
      </ul>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="text-muted">
            N-am găsit nimic.
            <br />
            Măcar n-am zis că există.
          </p>
        ) : (
          filtered.map((item) => {
            const meta = getHartaStatus(item.status);
            return (
              <article
                key={item.id}
                className="border border-border bg-surface p-5"
              >
                <h2 className="font-display text-xl uppercase">{item.name}</h2>
                <p className={cn("stamp mt-3", meta.stampClass)}>{meta.label}</p>
                <ul className="mt-4 space-y-1 text-sm text-muted">
                  <li>Categorie: {item.category}</li>
                  <li>Servicii digitale: {item.digitalServices}</li>
                  <li>Necesită ghișeu: {item.physicalRequired}</li>
                  <li>PDF-uri: {item.pdfCountLabel}</li>
                </ul>
                {item.demo ? (
                  <div className="mt-4">
                    <DemoBadge />
                  </div>
                ) : item.scoreKind === "opinion-estimate" ? (
                  <div className="mt-4">
                    <Badge variant="warning">ESTIMARE UTILIZATORI</Badge>
                  </div>
                ) : null}
              </article>
            );
          })
        )}
      </div>
      <div className="mt-16">
        <ModulePlaceholder
          content={getModulePlaceholder("harta.live")}
          badge="PREVIEW"
        />
      </div>
    </div>
  );
}
