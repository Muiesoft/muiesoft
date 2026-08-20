import { legalRepository } from "@/adapters/demo/legal";
import { AvocatulPuliiFundingCard } from "@/components/lex/funding-card";
import { LexFeed } from "@/components/lex/lex-feed";
import { LexSearch } from "@/components/lex/lex-search";
import { PageHero } from "@/components/shared/page-hero";
import { brandCopy } from "@/config/copy";
import { demoFeedStats, demoLegalFeed } from "@/data/demo/laws";
import { registryLaws } from "@/data/registry/laws";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MuieLex · legislație pe românește, cu surse",
  description:
    "Legea pe românește, cu text oficial și limbaj clar. Acte cu surse Portal Legislativ; ingestia Monitorului Oficial nu e live.",
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
  const sourcedCount = registryLaws.length;

  return (
    <>
      <PageHero
        feature="muieLex"
        title="MuieLex"
        subtitle={
          <>
            <p className="font-display text-2xl text-foreground">
              {brandCopy.muieLexTagline}
            </p>
            <p className="mt-4">
              {sourcedCount} acte cu surse Portal Legislativ. Ingestia
              Monitorului Oficial nu e live.
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
        <LexSearch laws={laws} initialQuery={initialQuery} />
        <div className="mt-16">
          <LexFeed items={demoLegalFeed} stats={demoFeedStats} />
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
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
        <p className="mt-8 text-sm text-muted">
          Pipeline de ingestie și RAG: pe roadmap. Search-ul de mai sus e local,
          pe documentele din registry plus exemple etichetate.
        </p>
      </div>
    </>
  );
}
