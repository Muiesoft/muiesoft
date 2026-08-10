# Architecture

## Domain model

Domain types live in `src/domain/`:

- `Institution`
- `LegalDocument`
- `PublicContract`
- `CivicProcedure`
- `Bounty`
- `SourceReference`

## Repository model

Interfaces in `src/repositories/`:

- `InstitutionRepository`
- `LegalRepository`
- `MoneyRepository`
- `ProcedureRepository`

UI consumes repositories, never demo arrays directly where avoidable.

## Adapters

V1 adapters in `src/adapters/demo/`.

Later:

```ts
ApiInstitutionRepository implements InstitutionRepository
```

Swap at composition root without UI refactor.

## Feature modes

`src/config/features.ts` controls LIVE / PREVIEW / PLANNED / DISABLED.

## Adding a real backend

1. Implement repository interface.
2. Keep demo adapter for local/dev.
3. Select adapter via env/config.
4. Preserve `SourceReference` on every real record.
5. Never silently drop demo labeling until data is proven.

## Provenance

Every real metric/document must carry:

```ts
sources: SourceReference[]
```

If source cannot be shown, claim cannot be published.

## MuieLex future architecture

```text
Portal Legislativ / MO / CCR / ÎCCJ / ...
 ↓
scheduled ingestion
 ↓
immutable raw store
 ↓
hash + diff
 ↓
normalization
 ↓
Postgres legal graph
 ↓
search index
 ↓
RAG + citation verifier
 ↓
AI
```

Incremental pipeline:

```text
FETCH → HASH → changed? → DIFF → DEPENDENCIES → INVALIDATE → REGENERATE
```

## Search juridic viitor

exact citation + BM25 + semantic + legal graph expansion + reranking

## Crowdfunding / analytics future

Not implemented in V1. Crowdfunding marked „în pregătire”. Analytics only if privacy-first.

## Repos

- Site: `github.com/Muiesoft/muiesoft`
- Data (rezervat): `github.com/Muiesoft/muiesoft-data`
- API (rezervat): `github.com/Muiesoft/romania-api`
