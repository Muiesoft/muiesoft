"use client";

import Link from "next/link";
import { useState } from "react";
import { FrictionScore } from "@/components/index/friction-score";
import { MethodologyBody } from "@/components/index/methodology-body";
import { ProbeStatus } from "@/components/index/probe-status";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Badge } from "@/components/ui/badge";
import { registryIncidents } from "@/data/registry/incidents";
import type { InstitutionRankingEntry } from "@/domain/institution";
import type { ProbeVerdict } from "@/domain/probe";
import { probeData, probeAgo } from "@/lib/probes";
import { FRICTION_DIMENSIONS, frictionToneClass } from "@/lib/scoring";
import { cn } from "@/lib/utils";

const dotClass: Record<ProbeVerdict, string> = {
  ok: "bg-success",
  blocked: "bg-warning",
  tls: "bg-warning",
  down: "bg-danger",
};

const tabs = [
  "Clasament",
  "Instituții",
  "Metodologie",
  "Incidente",
  "Istoric",
] as const;

type Tab = (typeof tabs)[number];

const tabSlugs: Record<Tab, string> = {
  Clasament: "clasament",
  Instituții: "institutii",
  Metodologie: "metodologie",
  Incidente: "incidente",
  Istoric: "istoric",
};

const tabId = (tab: Tab) => `muie-index-tab-${tabSlugs[tab]}`;
const panelId = (tab: Tab) => `muie-index-panel-${tabSlugs[tab]}`;

function ScoreKindBadge({ kind }: { kind?: string }) {
  if (kind === "opinion-estimate") {
    return (
      <Badge variant="warning">ESTIMARE UTILIZATORI</Badge>
    );
  }
  if (kind === "measured") {
    return <Badge variant="live">MĂSURAT</Badge>;
  }
  return <Badge variant="demo">EXEMPLU</Badge>;
}

function tabFromSlug(value?: string): Tab {
  if (!value) return "Clasament";
  const match = (Object.entries(tabSlugs) as [Tab, string][]).find(
    ([, slug]) => slug === value,
  );
  return match?.[0] ?? "Clasament";
}

export function MuieIndexClient({
  ranking,
  initialTab,
}: {
  ranking: InstitutionRankingEntry[];
  initialTab?: string;
}) {
  const [tab, setTab] = useState<Tab>(() => tabFromSlug(initialTab));

  return (
    <div className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="flex flex-wrap gap-2 border-b border-border pb-4"
          role="tablist"
          aria-label="MuieIndex tabs"
        >
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              id={tabId(item)}
              role="tab"
              aria-selected={tab === item}
              aria-controls={panelId(item)}
              tabIndex={tab === item ? 0 : -1}
              className={cn(
                "min-h-11 border px-4 py-2 font-mono text-xs tracking-wider uppercase",
                tab === item
                  ? "border-acid bg-acid text-background"
                  : "border-border text-muted hover:text-foreground",
              )}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === "Clasament" ? (
          <div
            className="mt-8 space-y-4"
            role="tabpanel"
            id={panelId("Clasament")}
            aria-labelledby={tabId("Clasament")}
          >
            <p className="max-w-2xl text-sm text-foreground">
              Citește de sus în jos: scorul mare e frecarea, nu lauda. 100 e
              ghișeul etern.
            </p>
            <p className="max-w-2xl text-sm text-muted">
              Portaluri reale din registry. Scorurile sunt etichetate{" "}
              <span className="text-warning">ESTIMARE UTILIZATORI</span>
              : frustrări comune, nu probe automate.
            </p>
            {ranking.map((item) => (
              <article
                key={item.id}
                className="border border-border bg-surface p-5 md:p-6"
                data-testid="institution-card"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted">#{item.rank}</p>
                    <h2 className="font-display mt-1 text-2xl uppercase md:text-3xl">
                      <Link
                        href={`/muie-index/${item.slug}`}
                        className="hover:text-acid"
                      >
                        {item.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-sm text-muted">{item.category}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <ScoreKindBadge kind={item.scoreKind} />
                    </div>
                  </div>
                  <FrictionScore total={item.score?.total} name={item.name} />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {FRICTION_DIMENSIONS.map(([label, key]) => (
                    <div key={key} className="border border-border p-3">
                      <p className="font-mono text-[10px] text-muted">{label}</p>
                      <p className="mt-1 font-mono text-xl">
                        {item.score?.[key] ?? "n/a"}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <ProbeStatus slug={item.slug} />
                </div>
                {item.scoreNote ? (
                  <p className="mt-4 text-xs text-muted">{item.scoreNote}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {tab === "Metodologie" ? (
          <div
            className="mt-8"
            role="tabpanel"
            id={panelId("Metodologie")}
            aria-labelledby={tabId("Metodologie")}
          >
            <MethodologyBody />
            <p className="mt-8">
              <Link
                href="/metodologie"
                className="font-mono text-xs text-acid uppercase hover:underline"
              >
                Pagina stabilă /metodologie →
              </Link>
            </p>
          </div>
        ) : null}

        {tab === "Instituții" ? (
          <div
            className="mt-8 space-y-6"
            role="tabpanel"
            id={panelId("Instituții")}
            aria-labelledby={tabId("Instituții")}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {ranking.map((item) => (
                <article
                  key={item.id}
                  className="border border-border bg-surface p-5"
                >
                  <ScoreKindBadge kind={item.scoreKind} />
                  <h3 className="font-display mt-3 text-xl uppercase">
                    <Link
                      href={`/muie-index/${item.slug}`}
                      className="hover:text-acid"
                    >
                      {item.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {item.website ?? "fără website în registry"}
                  </p>
                  <p
                    className={`mt-2 font-mono text-sm ${frictionToneClass(item.score?.total ?? 0)}`}
                  >
                    frecare {item.score?.total ?? "n/a"}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted">
              Serii Lighthouse și fișe de instituție mai dense: pe roadmap. Lista
              de mai sus e catalogul.
            </p>
          </div>
        ) : null}

        {tab === "Incidente" ? (
          <div
            className="mt-8 space-y-6"
            role="tabpanel"
            id={panelId("Incidente")}
            aria-labelledby={tabId("Incidente")}
          >
            <p className="text-sm text-muted">
              Incidente documentate din surse publice. Fără date personale. Fără
              teste neautorizate.
            </p>
            <div className="space-y-3">
              {registryIncidents.map((incident) => (
                <article
                  key={incident.id}
                  className="border border-border bg-surface p-5"
                  data-testid="incident-card"
                >
                  <div className="flex flex-wrap gap-2">
                    <span className="stamp text-danger">{incident.status}</span>
                    {incident.demo ? (
                      <DemoBadge />
                    ) : (
                      <Badge variant="live">SURSE PUBLICE</Badge>
                    )}
                  </div>
                  <h3 className="font-display mt-3 text-xl uppercase">
                    <Link
                      href={`/muie-index/incidente/${incident.id}`}
                      className="hover:text-acid"
                    >
                      {incident.title}
                    </Link>
                  </h3>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {incident.when}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted">
              Alertă automată pe incidente noi: pe roadmap. Lista de mai sus e
              din surse publice.
            </p>
          </div>
        ) : null}

        {tab === "Istoric" ? (
          <div
            className="mt-8 space-y-6"
            role="tabpanel"
            id={panelId("Istoric")}
            aria-labelledby={tabId("Istoric")}
          >
            <p className="max-w-2xl text-sm text-muted" suppressHydrationWarning>
              Probă HTTP zilnică pe fiecare portal din registry, rulată din
              GitHub Actions și commitată public. {probeData.history.length}{" "}
              {probeData.history.length === 1 ? "zi înregistrată" : "zile înregistrate"}
              , ultima {probeAgo(probeData.generatedAt)}. Un GET pe zi e semnal,
              nu uptime complet.
            </p>
            <div className="overflow-x-auto border border-border bg-surface">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-border text-muted">
                    <th className="px-4 py-3 font-normal">Portal</th>
                    <th className="px-4 py-3 font-normal">
                      Ultimele {Math.min(30, probeData.history.length)} zile
                    </th>
                    <th className="px-4 py-3 text-right font-normal">Răspuns</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.map((item) => {
                    const days = probeData.history.slice(-30);
                    const latest = probeData.results.find(
                      (r) => r.slug === item.slug,
                    );
                    return (
                      <tr key={item.id} className="border-b border-border/50">
                        <td className="px-4 py-3">
                          <Link
                            href={`/muie-index/${item.slug}`}
                            className="hover:text-acid"
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex gap-1">
                            {days.map((day) => {
                              const entry = day.services[item.slug];
                              return (
                                <span
                                  key={day.date}
                                  title={
                                    entry
                                      ? `${day.date}: ${entry[0] || entry[2]} · ${entry[1]}ms`
                                      : `${day.date}: fără probă`
                                  }
                                  className={cn(
                                    "inline-block h-3 w-3",
                                    entry ? dotClass[entry[2]] : "bg-border",
                                  )}
                                />
                              );
                            })}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-muted">
                          {latest
                            ? latest.verdict === "ok"
                              ? `${latest.status} · ${latest.latencyMs}ms`
                              : latest.verdict
                            : "n/a"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="border-t border-border px-4 py-3 font-mono text-[10px] text-muted">
                <span className="text-success">■</span> răspunde ·{" "}
                <span className="text-warning">■</span> refuză clienți automați
                / TLS neverificabil · <span className="text-danger">■</span> nu
                răspunde · seria crește cu o zi la fiecare rulare
              </p>
            </div>
            <p className="text-sm text-muted">
              Probe mai dese decât o zi: pe roadmap. Seria de mai sus e GET
              zilnic, commitat public.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
