# AGENTS.md

Reguli pentru agenții AI care modifică Muiesoft.

1. Citește `README.md` înainte de schimbări majore.
2. Respectă adapterele: UI → repository interface → demo/real adapter.
3. Nu prezenta niciodată date mock ca date reale. Folosește `demo: true` + `DemoBadge`.
4. Păstrează diacriticele românești (ă â î ș ț).
5. Fără copy corporate. Dacă Microsoft ar putea publica propoziția, rescrie.
6. Fără dependențe arbitrare.
7. Server Components by default. Client Components doar pentru interactivitate reală.
8. Menține accesibilitatea: focus, labels, semantic HTML, contrast.
9. Înainte de finalizare rulează:
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm test`
   - `pnpm build`
10. Orice claim real-world nou necesită provenance (`SourceReference`).
11. Nu elimina metadata de sursă.
12. Brandul e tăios și ironic. MUIE e numele, nu vocabularul. O glumă pe ecran, nu pe fiecare linie. Dacă un adolescent ar râde doar de înjurătură, rescrie.
13. Nu inventa statistici despre ANAF, ministere, contracte sau persoane reale.
14. `OUTLIER ≠ CORUPȚIE`. `ANOMALIE ≠ VINOVĂȚIE`.
15. Nu hardcoda URL-uri; folosește `siteConfig`.
16. Commit doar ca Muiesoft (`muiesoft@users.noreply.github.com`). Fără `Co-authored-by`, fără `Made-with: Cursor`, fără email personal.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
