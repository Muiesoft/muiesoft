# Deploy (Cloudflare Workers + OpenNext)

Repo: `github.com/Muiesoft/muiesoft`  
Worker name: `muiesoft-v1` (trebuie să coincidă cu Workers Builds din Cloudflare)  
Domeniu țintă: `muiesoft.ro`

## Ce e în repo

- `@opennextjs/cloudflare` + `wrangler`
- [`wrangler.jsonc`](../wrangler.jsonc)
- [`open-next.config.ts`](../open-next.config.ts)
- Scripts: `build:cf`, `preview:cf`, `deploy:cf`, `upload:cf`

## Workers Builds după recreate repo

Dacă repo-ul GitHub a fost recreat (ID nou, același nume), leagă din nou sursa în Cloudflare:

1. Workers / Builds → proiectul `muiesoft-v1`
2. Re-selectează GitHub → `Muiesoft/muiesoft` (re-authorize GitHub App dacă cere)
3. Branch `main`, build/deploy ca mai jos
4. Trigger deploy manual o dată

Worker-ul și domeniul rămân; se rup doar webhook-ul/source-ul Git.

## Workers Builds (dashboard Cloudflare)

Setări recomandate:

| Câmp | Valoare |
|------|---------|
| Root directory | `/` |
| Package manager | `pnpm` |
| Build command | `pnpm run build:cf` |
| Deploy command | `npx wrangler deploy` |
| Version command | `npx wrangler versions upload` |

Nu folosi doar `pnpm run build` (`next build`): produce `.next` Node, nu Worker.

## Local

```bash
cp .dev.vars.example .dev.vars
pnpm install
pnpm run build:cf
pnpm run preview:cf
```

Deploy (necesită login Wrangler / token):

```bash
pnpm run deploy:cf
```

## Domeniu

În Cloudflare: Workers → `muiesoft-v1` → Custom domains → `muiesoft.ro` (și `www` dacă vrei).

## Smoke după cutover

`/`, `/muie-index`, `/bani`, `/lex`, `/544`, `/privacy`, favicon, OG.
