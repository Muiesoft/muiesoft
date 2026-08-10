# Muiesoft

> Toată hula sau toată pula.

Civic-tech open-source pentru o Românie în care cetățeanul este privat, statul este transparent și birocrația primește unit tests.

## Project

Muiesoft pornește ca satiră anti-corporate și evoluează într-o infrastructură civic-tech:

- **Muie Index** — măsurăm serviciile publice digitale
- **MuieLex** — legea, pe românește, cu surse
- **Rezolvă** — workflow-uri pentru probleme reale
- **Bani + 544** — urmărire și solicitări de informații

V1 arată complet, dar datele mock sunt etichetate clar ca **DEMO / PREVIEW**.

## Stack

- Next.js (App Router)
- React + TypeScript strict
- Tailwind CSS v4
- Zod
- Vitest + Playwright
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

## Architecture

```text
UI
 ↓
service / repository interface
 ↓
demo adapter      ← V1
real API adapter  ← ulterior
```

Vezi `docs/ARCHITECTURE.md`.

## Feature modes

Definite în `src/config/features.ts`:

- `live`
- `preview`
- `planned`
- `disabled`

Componentă: `<FeatureStatus feature="muieLex" />`

## Loading

Route loading (`app/loading.tsx`) folosește `<StampLoader />` + mesaje din `brandCopy.loading`.

- Componentă reutilizabilă: `src/components/ui/stamp-loader.tsx` (`sm` / `md` / `lg`)
- Animație CSS-only (fără librării), oprită la `prefers-reduced-motion`
- Exemplu: `<StampLoader size="md" />`

## Ce e real azi

- Probe HTTP zilnice pe portalurile din registry (`probes.json`, GH Actions)
- Snapshot-uri Lighthouse pe zeci de portaluri (pe profilul instituției)
- Incidente documentate din surse publice (feed pe homepage + `/muie-index?tab=incidente`)
- MuieLex / proceduri / 544 cu surse oficiale unde e marcat ca atare
- Scorurile de catalog rămân `opinion-estimate` până avem măsurători Muie Index

## Demo data

Orice record mock are `demo: true` și apare cu `<DemoBadge />`.

Portalurile reale din registry pot avea `scoreKind: "opinion-estimate"` — estimări de sentiment, **nu** măsurători Muie Index. Badge obligatoriu pe UI.

Nu prezenta estimări sau mock ca date măsurate.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
pnpm build && pnpm test:e2e
pnpm lint
pnpm typecheck
pnpm run build:cf   # OpenNext → Cloudflare Worker
```

## Deploy

Vezi [`docs/DEPLOY.md`](docs/DEPLOY.md) (Cloudflare Workers Builds + OpenNext).

Pe dashboard Cloudflare folosește `pnpm run build:cf`, nu doar `pnpm run build`.

## Testing

- Unit: Vitest (`src/**/*.test.ts(x)`)
- E2E: Playwright (`e2e/`)

## Repositories

| Repo | Rol |
|------|-----|
| [Muiesoft/muiesoft](https://github.com/Muiesoft/muiesoft) | Site, UI, docs (acest repo) |
| [Muiesoft/muiesoft-data](https://github.com/Muiesoft/muiesoft-data) | Registry / ingestie / date cu provenance (rezervat) |
| [Muiesoft/romania-api](https://github.com/Muiesoft/romania-api) | Contracte API publice (rezervat) |

## Contribution

1. Citește `AGENTS.md` și `docs/EDITORIAL.md`
2. Păstrează diacriticele
3. Nu adăuga dependențe fără motiv
4. Marchează demo-ul ca demo
5. Rulează lint + typecheck + test + build
6. Issues / PR: https://github.com/Muiesoft/muiesoft

## License

**AGPL-3.0** — vezi `LICENSE`.

Infrastructura civică rămâne open când e fork-uită, inclusiv ca serviciu pe rețea. Dacă modifici Muiesoft și îl oferi public pe net, trebuie să oferi și sursa.

## Security

Nu testa vulnerabilități pe infrastructură publică fără permisiune. Nu publica exploits. Nu inventa acuzații.

## Roadmap

Vezi `docs/ROADMAP.md`.
