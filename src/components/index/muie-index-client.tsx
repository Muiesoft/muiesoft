"use client";

import Link from "next/link";
import { useState } from "react";
import { ProbeStatus } from "@/components/index/probe-status";
import { DemoBadge } from "@/components/shared/demo-badge";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { Badge } from "@/components/ui/badge";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { registryIncidents } from "@/data/registry/incidents";
import type { InstitutionRankingEntry } from "@/domain/institution";
import type { ProbeVerdict } from "@/domain/probe";
import { probeData, probeAgo } from "@/lib/probes";
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
            <p className="max-w-2xl text-sm text-muted">
              Portaluri reale din registry. Scorurile sunt etichetate{" "}
              <span className="text-warning">ESTIMARE UTILIZATORI</span>
              : frustrări comune, nu probe Muie Index automate.
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
                  <div className="text-right">
                    <p className="terminal-label">Muie Score</p>
                    <p className="font-mono text-5xl text-acid">
                      {item.score?.total}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {[
                    ["UX", item.score?.usability],
                    ["UPTIME*", item.score?.reliability],
                    ["MOBILE", item.score?.mobile],
                    ["ACCESSIBILITY", item.score?.accessibility],
                    ["INTEROP", item.score?.interoperability],
                    ["TRANSPARENCY", item.score?.transparency],
                  ].map(([label, value]) => (
                    <div key={String(label)} className="border border-border p-3">
                      <p className="font-mono text-[10px] text-muted">{label}</p>
                      <p className="mt-1 font-mono text-xl">{value}</p>
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
            className="mt-8 space-y-8"
            role="tabpanel"
            id={panelId("Metodologie")}
            aria-labelledby={tabId("Metodologie")}
          >
            <p className="max-w-2xl text-muted">
              `npm test`, dar pentru administrație. Există trei straturi: nu le
              amesteca.
            </p>
            <section className="border border-warning/40 bg-warning/5 p-5">
              <h3 className="font-display text-xl uppercase">
                1. Estimare utilizatori
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Reflectă frustrări și așteptări comune, nu probe.</li>
                <li>• Nu e eșantion statistic. Nu e uptime măsurat.</li>
                <li>• Scorul compozit din catalog rămâne pe acest strat.</li>
                <li>• Badge obligatoriu: ESTIMARE UTILIZATORI.</li>
              </ul>
            </section>
            <section className="border border-success/40 bg-success/5 p-5">
              <h3 className="font-display text-xl uppercase">
                2. Semnale măsurate (acum)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  • Probă HTTP zilnică pe fiecare portal din registry: status,
                  latență, verdict. Rulată din GitHub Actions, commitată public.
                </li>
                <li>
                  • Snapshot-uri Lighthouse (performance, accessibility, best
                  practices, SEO) reîmprospătate săptămânal.
                </li>
                <li>
                  • Provenance: tool, versiune, URL, dată. Fără SaaS de
                  monitorizare, totul în repo.
                </li>
                <li>
                  • Semnalele apar pe profil și în tab-ul Istoric. Nu înlocuiesc
                  scorul Muie Index.
                </li>
              </ul>
            </section>
            <section className="border border-border p-5">
              <h3 className="font-display text-xl uppercase">
                3. Măsurătoare Muie Index (viitor)
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Probe availability / latency la interval mai des de o zi</li>
                <li>• Core Web Vitals pe program</li>
                <li>• Accessibility manuală (WCAG, keyboard, contrast)</li>
                <li>• Interoperability + once-only + provenance</li>
                <li>• Scor `measured` doar când metodologia e completă</li>
              </ul>
            </section>
            {[
              [
                "Reliability",
                ["availability", "latency", "HTTP failures"],
              ],
              ["UX", ["task completion", "clicks", "cognitive load", "forms"]],
              [
                "Accessibility",
                ["WCAG", "keyboard", "semantics", "contrast"],
              ],
              [
                "Interoperability",
                ["date duplicate", "API availability", "manual exchange"],
              ],
              [
                "Bureaucracy",
                ["physical presence", "print requirements", "duplicate data"],
              ],
              [
                "Transparency",
                ["docs", "source provenance", "procurement discoverability"],
              ],
              ["Cost efficiency", ["cost vs delivered utility"]],
            ].map(([title, items]) => (
              <section key={String(title)} className="border border-border p-5">
                <h3 className="font-display text-xl uppercase">{title}</h3>
                <ul className="mt-3 grid gap-1 text-sm text-muted md:grid-cols-2">
                  {(items as string[]).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </section>
            ))}
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
                  <p className="mt-2 font-mono text-sm text-acid">
                    scor {item.score?.total ?? "n/a"}
                  </p>
                </article>
              ))}
            </div>
            <ModulePlaceholder
              content={getModulePlaceholder("muieIndex.institutions")}
              badge="PREVIEW"
            />
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
            <ModulePlaceholder
              content={getModulePlaceholder("muieIndex.incidents")}
              badge="PREVIEW"
            />
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
            <ModulePlaceholder
              content={getModulePlaceholder("muieIndex.history")}
              badge="PREVIEW"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
