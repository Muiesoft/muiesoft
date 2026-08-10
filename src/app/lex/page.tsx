import { legalRepository } from "@/adapters/demo/legal";
import { AvocatulPuliiFundingCard } from "@/components/lex/funding-card";
import { LexFeed } from "@/components/lex/lex-feed";
import { LexSearch } from "@/components/lex/lex-search";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { PageHero } from "@/components/shared/page-hero";
import { getModulePlaceholder } from "@/config/module-placeholders";
import { demoFeedStats, demoLegalFeed } from "@/data/demo/laws";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MuieLex · legislație pe românește, cu surse",
  description:
    "Legea pe românește, cu text oficial și limbaj clar. Preview MuieLex: acte cu surse; ingestia Monitorului Oficial nu e live încă.",
  path: "/lex",
});

const pipeline = [
  "Portal Legislativ / Monitorul Oficial metadata",
  "CCR / ÎCCJ / alte surse legale",
  "scheduled ingestion",
  "immutable raw store",
  "hash + diff",
  "normalization",
  "Postgres legal graph",
  "search index",
  "RAG",
  "citation verifier",
  "AI (doar după evidență)",
];

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function LexPage({ searchParams }: Props) {
  const params = await searchParams;
  const raw = params.q;
  const initialQuery = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const laws = await legalRepository.getLaws();
  const pipelinePlaceholder = getModulePlaceholder("muieLex.pipeline");
  const aiPlaceholder = getModulePlaceholder("muieLex.ai");

  return (
    <>
      <PageHero
        feature="muieLex"
        title="MuieLex"
        subtitle={
          <>
            <p className="font-display text-2xl text-foreground uppercase">
              Legea, fără pula de lemn.
            </p>
            <p className="mt-4">
              Ținta: legislație pe românește, cu surse, gratis.
              <br />
              Acum: feed ilustrativ + pipeline rezervat.
              <br />
              Ingestia Monitorului Oficial nu e live.
            </p>
            <p className="mt-4 text-foreground">
              AI-ul poate explica adevărul.
              <br />
              AI-ul nu are voie să fie adevărul.
            </p>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-border bg-surface p-6 font-mono text-sm leading-8">
            <p className="terminal-label mb-4">Arhitectură rezervată</p>
            {pipeline.map((step, index) => (
              <p key={step}>
                {step}
                {index < pipeline.length - 1 ? (
                  <span className="text-muted"> ↓</span>
                ) : null}
              </p>
            ))}
            <p className="mt-6 text-xs text-muted">
              FETCH → HASH → S-A SCHIMBAT? → DIFF → DEPENDENCIES → INVALIDATE →
              REGENERATE
            </p>
          </div>
          <AvocatulPuliiFundingCard />
        </div>
        <LexSearch laws={laws} initialQuery={initialQuery} />
        <div className="mt-16">
          <LexFeed items={demoLegalFeed} stats={demoFeedStats} />
        </div>
        <div className="mt-16 space-y-8">
          <ModulePlaceholder
            content={pipelinePlaceholder}
            badge="PREVIEW"
            demo={
              <p className="font-mono text-xs text-muted">
                Search-ul de mai sus e local pe documente ilustrative.
                Pipeline-ul de ingestie înlocuiește adapterul, nu UI-ul.
              </p>
            }
          />
          <ModulePlaceholder content={aiPlaceholder} badge="PLANNED" />
        </div>
      </div>
    </>
  );
}
