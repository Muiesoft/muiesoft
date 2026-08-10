"use client";

import { useState } from "react";
import { LegalConfidence } from "@/components/lex/confidence";
import { AvocatulPulii } from "@/components/lex/avocatul-pulii";
import { AvocatulPuliiFundingCard } from "@/components/lex/funding-card";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Badge } from "@/components/ui/badge";
import { getModulePlaceholder } from "@/config/module-placeholders";
import type { LegalDocument } from "@/domain/law";
import { cn } from "@/lib/utils";

const tabs = [
  "Pe românește",
  "Text oficial",
  "Ce s-a schimbat",
  "Jurisprudență",
  "Istoric",
  "Dependențe",
] as const;

type Tab = (typeof tabs)[number];

const translatorViews = [
  {
    id: "om",
    label: "Ca pentru un om normal",
    text: "Regula normală nu se aplică. Completezi de două ori.",
  },
  {
    id: "antreprenor",
    label: "Pentru antreprenor",
    text: "Instituția B îți cere iar ce i-ai dat deja instituției A. Bugetă timp.",
  },
  {
    id: "contabil",
    label: "Pentru contabil",
    text: "Termen demo: 15 zile. Dublu exemplar. Nu e normă reală · document demonstrativ.",
  },
] as const;

const demoCaseLaw = [
  {
    id: "j1",
    title: "Decizie demonstrativă 1/2026",
    summary:
      "Instanța fictivă clarifică că dublul exemplar nu înlocuiește once-only.",
  },
  {
    id: "j2",
    title: "Decizie demonstrativă 2/2025",
    summary:
      "Practică neunitară inventată pentru UI. Nu cita asta nicăieri în afara demo-ului.",
  },
];

export function LawDetail({ law }: { law: LegalDocument }) {
  const [tab, setTab] = useState<Tab>("Pe românește");
  const [versionIndex, setVersionIndex] = useState(law.versions.length - 1);
  const [sourceOpen, setSourceOpen] = useState<string | null>(null);
  const [translatorView, setTranslatorView] = useState(0);
  const version = law.versions[versionIndex];
  const jurisprudencePlaceholder = getModulePlaceholder("muieLex.jurisprudence");
  const isDemo = Boolean(law.demo);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      {isDemo ? (
        <div className="mb-6">
          <Badge variant="danger" className="text-[11px]">
            DOCUMENT DEMONSTRATIV · NU ESTE ACT NORMATIV REAL
          </Badge>
        </div>
      ) : (
        <div className="mb-6">
          <Badge variant="default" className="text-[11px]">
            ACT NORMATIV · TEXT ORIENTATIV CU SURSE
          </Badge>
        </div>
      )}
      <h1 className="font-display text-4xl leading-tight font-bold uppercase md:text-5xl">
        {law.title}
      </h1>
      <p className="mt-3 font-mono text-sm text-muted">
        {law.number}/{law.year} · status: {law.status}
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tab === item}
            className={cn(
              "min-h-11 border px-3 py-2 font-mono text-xs uppercase",
              tab === item
                ? "border-acid bg-acid text-background"
                : "border-border text-muted",
            )}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
        <div>
          {tab === "Pe românește" ? (
            <div className="space-y-6">
              {law.articles.map((article) => (
                <article key={article.id} className="border border-border p-5">
                  <p className="terminal-label">Art. {article.number}</p>
                  <h2 className="font-display mt-2 text-xl uppercase">
                    {article.title}
                  </h2>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="border border-border bg-surface p-4">
                      <p className="terminal-label">Text oficial</p>
                      <p className="mt-2 text-sm">{article.officialText}</p>
                    </div>
                    <div className="border border-acid/30 bg-acid/5 p-4">
                      <p className="terminal-label text-acid">Pe românește</p>
                      <p className="mt-2 text-sm">{article.plainLanguage}</p>
                    </div>
                  </div>
                  {article.interpretation ? (
                    <div className="mt-4 border border-warning/30 p-4">
                      <p className="terminal-label text-warning">
                        Interpretare instituțională
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {article.interpretation}
                      </p>
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="mt-4 font-mono text-xs tracking-wider text-acid uppercase"
                    onClick={() =>
                      setSourceOpen((id) =>
                        id === article.id ? null : article.id,
                      )
                    }
                    aria-expanded={sourceOpen === article.id}
                  >
                    Arată-mi sursa
                  </button>
                  {sourceOpen === article.id ? (
                    <div
                      className="mt-4 border border-border bg-surface p-4"
                      data-testid="source-panel"
                    >
                      <p className="terminal-label">Afirmație → sursă</p>
                      <ol className="mt-3 space-y-3 text-sm">
                        {law.sources.map((source) => (
                          <li key={source.id} className="border border-border p-3">
                            <p className="font-mono text-[10px] text-muted uppercase">
                              {source.sourceType}
                            </p>
                            <p className="mt-1">{source.title}</p>
                            <p className="mt-1 text-muted">{source.publisher}</p>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 block font-mono text-xs text-acid break-all underline underline-offset-2"
                            >
                              {source.url}
                            </a>
                            <p className="mt-2 text-xs text-muted">
                              Art. {article.number}
                              {isDemo ? " · paragraf demo" : ""}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : null}
                </article>
              ))}
              {isDemo ? (
                <div className="border border-border p-5">
                  <p className="terminal-label">Bullshit Translator</p>
                  <p className="mt-3 text-sm text-muted">Original:</p>
                  <p className="mt-1 text-sm">
                    „Prin derogare de la prevederile...”
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {translatorViews.map((view, index) => (
                      <button
                        key={view.id}
                        type="button"
                        className={cn(
                          "border px-3 py-2 font-mono text-[10px] uppercase",
                          translatorView === index
                            ? "border-acid bg-acid text-background"
                            : "border-border text-muted",
                        )}
                        onClick={() => setTranslatorView(index)}
                      >
                        {view.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted">Pe românește:</p>
                  <p className="mt-1 text-sm">
                    {translatorViews[translatorView].text}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {tab === "Text oficial" ? (
            <div className="border border-border p-5">
              {isDemo ? <DemoBadge /> : null}
              <pre
                className={`whitespace-pre-wrap font-mono text-sm ${isDemo ? "mt-4" : ""}`}
              >
                {law.articles
                  .map((a) => `Art. ${a.number}\n${a.officialText}\n\n`)
                  .join("")}
              </pre>
            </div>
          ) : null}

          {tab === "Ce s-a schimbat" ? (
            isDemo ? (
              <div className="space-y-4">
                <pre className="overflow-x-auto border border-border bg-surface p-5 font-mono text-sm">
{`- termen: 30 zile
+ termen: 15 zile`}
                </pre>
                <div className="border border-border p-5">
                  <p className="terminal-label">Pe românește</p>
                  <p className="mt-3">
                    Până ieri aveai 30.
                    <br />
                    Acum ai 15.
                  </p>
                </div>
              </div>
            ) : (
              <div className="border border-border p-5">
                <p className="text-sm text-muted">
                  Diff-ul pe modificări nu e încă ingestat automat. Consultă
                  textul consolidat și istoricul pe Portalul Legislativ.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {law.sources.map((source) => (
                    <li key={source.id}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-acid underline underline-offset-2"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ) : null}

          {tab === "Jurisprudență" ? (
            <div className="space-y-4">
              {isDemo ? (
                <>
                  <DemoBadge />
                  {demoCaseLaw.map((item) => (
                    <article key={item.id} className="border border-border p-5">
                      <Badge variant="warning">JURISPRUDENȚĂ ILUSTRATIVĂ</Badge>
                      <h3 className="font-display mt-3 text-xl uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{item.summary}</p>
                    </article>
                  ))}
                </>
              ) : null}
              <ModulePlaceholder
                content={jurisprudencePlaceholder}
                badge="PREVIEW"
              />
            </div>
          ) : null}

          {tab === "Istoric" ? (
            <div className="border border-border p-5">
              <p className="terminal-label">
                {isDemo
                  ? "Cine a futut articolul ăsta?"
                  : "Versiuni în catalog"}
              </p>
              <div className="mt-6 font-mono text-sm leading-8">
                {law.versions.map((v) => (
                  <p key={v.id}>
                    <span className="text-muted">
                      {v.effectiveFrom.slice(0, 4)}
                    </span>{" "}
                    {v.label}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {tab === "Dependențe" ? (
            <div className="border border-border p-5 font-mono text-sm leading-8">
              <p>LEGE</p>
              {law.dependencies.map((dep) => (
                <p key={dep}>├── {dep}</p>
              ))}
              {isDemo ? (
                <p className="mt-6 text-muted">
                  Articolul ăsta depinde de încă {law.dependencies.length} texte.
                  <br />
                  Normal că n-ai înțeles nimic.
                </p>
              ) : (
                <p className="mt-6 text-muted">
                  Aplicarea concretă ține și de norme metodologice și de practică
                  instituțională. Verifică sursele.
                </p>
              )}
            </div>
          ) : null}
        </div>

        <aside className="space-y-6">
          <LegalConfidence {...law.confidence} />
          <div className="border border-border p-5">
            <p className="terminal-label">Time Machine juridic</p>
            <p className="mt-2 text-sm text-muted">Ce spunea legea atunci?</p>
            <input
              type="range"
              min={0}
              max={Math.max(law.versions.length - 1, 0)}
              value={versionIndex}
              onChange={(e) => setVersionIndex(Number(e.target.value))}
              className="mt-4 w-full"
              aria-label="Selectează versiunea"
              disabled={law.versions.length < 2}
            />
            {version ? (
              <>
                <p className="mt-2 font-mono text-xs text-acid">
                  {version.effectiveFrom}
                </p>
                <p className="mt-3 text-sm">{version.plainLanguage}</p>
              </>
            ) : null}
          </div>
          {isDemo ? (
            <div className="border border-border p-5">
              <p className="terminal-label">Mă afectează?</p>
              <DemoBadge className="mt-3" label="DATE DEMONSTRATIVE" />
              <p className="mt-3 text-sm text-muted">Profil demonstrativ:</p>
              <ul className="mt-2 font-mono text-sm">
                <li>SRL</li>
                <li>3 angajați</li>
                <li>plătitor TVA</li>
              </ul>
              <p className="mt-4 font-display text-xl text-warning uppercase">
                Probabil da
              </p>
              <p className="mt-2 text-sm">Impact: MEDIU</p>
              <p className="text-sm text-muted">
                Acțiune: verifică înainte de data demo
              </p>
            </div>
          ) : (
            <div className="border border-border p-5">
              <p className="terminal-label">Ce poți face</p>
              <p className="mt-3 text-sm text-muted">
                Folosește generatorul 544 ca să ceri informații pe baza acestei
                legi. Nu e trimitere automată: copiezi și trimiți tu.
              </p>
              <a
                href="/544?template=open-data&q=Solicit%20informa%C8%9Bii%20de%20interes%20public%20%C3%AEn%20temeiul%20Legii%20544%2F2001"
                className="mt-4 inline-block font-mono text-xs tracking-wider text-acid uppercase underline underline-offset-2"
              >
                Deschide Dă cu 544
              </a>
            </div>
          )}
          <div className="border border-border p-5">
            <p className="terminal-label">Surse</p>
            <ul className="mt-3 space-y-2 text-sm">
              {law.sources.map((source) => (
                <li key={source.id}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-acid"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {isDemo ? (
            <>
              <div className="border border-border p-5">
                <p className="terminal-label">Verifică-mă</p>
                <ul className="mt-3 space-y-1 font-mono text-xs">
                  <li>Afirmația 1 ✓ susținută</li>
                  <li>Afirmația 2 ✓ susținută</li>
                  <li>Afirmația 3 ! interpretare</li>
                </ul>
              </div>
              <div className="border border-border p-5">
                <p className="terminal-label">Unit tests pentru legi</p>
                <pre className="mt-3 overflow-x-auto text-xs text-muted">
{`scenario:
  user: "PFA fictiv"
  revenue: "demo"
expected:
  result: "demo"`}
                </pre>
                <p className="mt-4 font-mono text-sm text-danger">TEST FAILED</p>
                <p className="mt-2 text-sm text-muted">
                  O modificare a invalidat ghidul. Dacă legea se schimbă,
                  documentația trebuie să pice înainte să pice cetățeanul.
                </p>
              </div>
            </>
          ) : null}
          <AvocatulPuliiFundingCard />
          <AvocatulPulii />
        </aside>
      </div>
    </div>
  );
}
