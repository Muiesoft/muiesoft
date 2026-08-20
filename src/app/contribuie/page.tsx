import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { contestScoreMailto } from "@/lib/scoring";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contribuie",
  description:
    "Cetățean, jurnalist, funcționar, developer: fiecare are o treabă. Muiesoft e infrastructură pentru cine deja face treabă civică.",
  path: "/contribuie",
});

const issueChoose = `${siteConfig.github}/issues/new/choose`;

const roles = [
  {
    id: "cetatean",
    title: "Cetățean",
    body: "Trimite un incident reproductibil: URL, dată, ce ai încercat, captură dacă e public. Folosește generatorul 544. Nu trebuie să scrii cod.",
    href: `${siteConfig.github}/issues/new?template=date.yml`,
    cta: "Trimite un caz",
  },
  {
    id: "jurnalist",
    title: "Jurnalist",
    body: "Citează Muie Index, nu înjurătura. RSS, API /api/v1, metodologie și dreptul la replică sunt publice. Nu înlocuim redacțiile. Le dăm numere.",
    href: "/api",
    cta: "Deschide API-ul",
  },
  {
    id: "functionar",
    title: "Funcționar",
    body: "Instituțiile pot trimite corecții și documente. Dacă un serviciu chiar merge, vrem cazul cu surse, nu comunicatul de presă.",
    href: `mailto:${siteConfig.contact}?subject=${encodeURIComponent("Drept la replică · Muiesoft")}`,
    cta: "Trimite o corecție",
  },
  {
    id: "developer",
    title: "Developer",
    body: "Registry, probe HTTP, ingestie, accesibilitate. GitHub e o bandă, nu ușa din față. Issue înainte de rant. PR înainte de screenshot.",
    href: siteConfig.github,
    cta: "Deschide GitHub",
  },
] as const;

const why = [
  "Alternativele rămân AGPL: un vendor nu le poate înghiți în liniște.",
  "Măsurătorile rămân publice, cu sursă sau deloc.",
  "Incidentele de securitate se documentează. Nu se exploatează.",
] as const;

export default function ContribuiePage() {
  return (
    <>
      <PageHero
        feature="contribuie"
        title="Nu comenta de pe margine."
        subtitle={
          <p className="font-display text-2xl text-foreground md:text-3xl">
            Alege o treabă.
          </p>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <p className="max-w-2xl text-lg text-muted">
          Muiesoft e infrastructură pentru oamenii care deja fac treabă civică:
          jurnalism de date, transparență, unelte. Nu înlocuim ONG-urile. Le
          dăm scoruri, cereri și cod pe care să le folosească.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Un caz documentat pe săptămână bate un Discord gol.
        </p>

        <section className="mt-10 border border-acid/40 bg-acid/5 p-6">
          <h2 className="font-display text-2xl">
            Contestă sau documentează un scor
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            URL, dată, ce s-a întâmplat. Nu trebuie GitHub. Drept la replică, nu
            rant.
          </p>
          <p className="mt-6">
            <a
              href={contestScoreMailto("Muie Index")}
              className="font-mono text-xs text-acid uppercase hover:underline"
            >
              Trimite pe email →
            </a>
          </p>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <section
              key={role.id}
              id={role.id}
              className="scroll-mt-24 border border-border bg-surface p-6"
            >
              <h2 className="font-display text-2xl">{role.title}</h2>
              <p className="mt-3 text-sm text-muted">{role.body}</p>
              {role.id === "jurnalist" ? (
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="/api"
                    className="font-mono text-xs text-acid uppercase hover:underline"
                  >
                    API →
                  </a>
                  <a
                    href="/feed.xml"
                    className="font-mono text-xs text-acid uppercase hover:underline"
                  >
                    RSS →
                  </a>
                  <a
                    href="/metodologie"
                    className="font-mono text-xs text-acid uppercase hover:underline"
                  >
                    Metodologie →
                  </a>
                </div>
              ) : (
                <p className="mt-6">
                  <a
                    href={role.href}
                    className="font-mono text-xs text-acid uppercase hover:underline"
                    {...(role.href.startsWith("http") ||
                    role.href.startsWith("mailto:")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {role.cta} →
                  </a>
                </p>
              )}
            </section>
          ))}
        </div>

        <section className="mt-10 border border-border p-6">
          <h2 className="font-display text-2xl">De ce să ajuți</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {why.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-10 border border-border bg-surface p-6">
          <p className="terminal-label">Cod</p>
          <p className="mt-3 text-muted">
            Site-ul e public. Dacă știi să repari ceva, repară-l acolo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={siteConfig.github}>Deschide GitHub</Button>
            <Button href={issueChoose} variant="secondary">
              Deschide issue
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Contact:{" "}
            <a
              className="text-acid underline"
              href={`mailto:${siteConfig.contact}`}
            >
              {siteConfig.contact}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
