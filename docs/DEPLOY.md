# Deploy (Cloudflare Workers + OpenNext)

Repo: `github.com/Muiesoft/muiesoft`  
Worker name: `muiesoft-v1` (trebuie să coincidă cu Workers Builds din Cloudflare)  
Domeniu țintă: `muiesoft.ro`

## Ce e în repo

- `@opennextjs/cloudflare` + `wrangler`
- [`wrangler.jsonc`](../wrangler.jsonc)
- [`open-next.config.ts`](../open-next.config.ts)
- Scripts: `build:cf`, `preview:cf`, `deploy:cf`, `upload:cf`

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
