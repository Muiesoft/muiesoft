# Modules

## Muie Index

- **Purpose:** măsoară serviciile publice digitale
- **Mode:** preview
- **Repository:** `InstitutionRepository`
- **Real data needed:** registry servicii, probe uptime/UX/a11y
- **External deps:** Lighthouse (snapshot-uri one-off în registry), HTTP probes zilnice (GitHub Actions → `probes.json`)
- **Legal:** public measurement, no unauthorized testing
- **Cost drivers:** monitoring infra continuu (încă nu; probele zilnice rulează pe GH Actions gratuit)
- **Milestones:** methodology → probes zilnice + snapshot Lighthouse pe ~31 portaluri → public scores măsurate
- **Now:** scor catalog = `opinion-estimate`; probe HTTP zilnice publice; Lighthouse pe profiluri; incidente documentate pe `/` și `/muie-index`

## MuieLex

- **Purpose:** legislație pe românește, cu surse
- **Mode:** preview
- **Repository:** `LegalRepository`
- **Real data needed:** Portal Legislativ / MO metadata / court sources
- **External deps:** ingestion + search + optional AI
- **Legal:** no fabricated legal advice; confidence gate
- **Cost drivers:** storage, parsing, AI inference
- **Milestones:** ingestion → versions → search → AI

## Rezolvă

- **Purpose:** workflow-uri pentru probleme civice
- **Mode:** preview
- **Repository:** `ProcedureRepository`
- **Real data needed:** machine-readable procedures + MuieLex links
- **Legal:** must cite sources; not legal advice in V1 demos
- **Milestones:** taxonomy → sourced steps (8 proceduri în registry) → UX flows
- **Now:** browse + search pe proceduri cu surse oficiale; ghid orientativ

## Unde-s banii?

- **Purpose:** contracte publice inteligibile
- **Mode:** preview
- **Repository:** `MoneyRepository`
- **Real data needed:** procurement open data
- **Legal:** anomaly ≠ guilt
- **Milestones:** ingest → search → graph → anomaly flags

## 544

- **Purpose:** generare/tracking cereri informații publice
- **Mode:** preview
- **Real data needed:** institution directory + optional archive
- **Legal:** user-owned requests; no silent sending in V1
- **Milestones:** wizard → local export/archive → send → track → public archive
- **Now:** directory static, clipboard, print/.txt, arhivă localStorage; fără trimitere automată

## romania.api

- **Purpose:** API public pentru date civice
- **Mode:** preview
- **Repo rezervat:** https://github.com/Muiesoft/romania-api
- **Real data needed:** stable schemas + provenance
- **Milestones:** contracts → read-only preview (`/api/v1/*` pe site, live) → auth/rate limits → subdomeniu dedicat
- **Now:** endpoint-uri read-only servite din registry, envelope `{ meta, data }`, CORS deschis

## muiesoft-data

- **Purpose:** registry, ingestie, date cu provenance
- **Mode:** planned
- **Repo rezervat:** https://github.com/Muiesoft/muiesoft-data
- **Related:** Muie Index registry static din site până la migrare

## Bounties / Premii / Competență / Transparență

- Community and accountability surfaces
- Mostly editorial + crowdfunding later
- Keep DEMO until real nominations/funding exist
