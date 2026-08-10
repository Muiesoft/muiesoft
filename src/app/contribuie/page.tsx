import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contribuie",
  description: "Nu comenta de pe margine. Deschide issue.",
  path: "/contribuie",
});

const issueChoose = `${siteConfig.github}/issues/new/choose`;

const types = [
  { label: "Cod", template: "cod.yml" },
  { label: "UX", template: "ux.yml" },
  { label: "Date", template: "date.yml" },
  { label: "Drept", template: "drept.yml" },
  { label: "Research", template: "research.yml" },
  { label: "Jurnalism", template: null },
  { label: "Contabilitate", template: null },
  { label: "Security", template: null },
] as const;

const repoCards = [
  {
    key: "site" as const,
    label: "muiesoft",
    role: "Site, brand, UI, documentație. PR-urile pornesc aici.",
  },
  {
    key: "data" as const,
    label: "muiesoft-data",
    role: "Registry, ingestie, date cu provenance. Rezervat.",
  },
  {
    key: "api" as const,
    label: "romania-api",
    role: "Contracte API publice. Rezervat până la launch.",
  },
];

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  x: "X / Twitter",
  linkedin: "LinkedIn",
};

const liveSocial = (
  Object.keys(siteConfig.social) as Array<keyof typeof siteConfig.social>
).filter((key) => siteConfig.social[key]);

export default function ContribuiePage() {
  return (
    <>
      <PageHero
        feature="contribuie"
        title="Nu comenta de pe margine."
        subtitle={
          <p className="font-display text-3xl text-foreground uppercase">
            Deschide issue.
          </p>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {types.map((type) => {
            const href = type.template
              ? `${siteConfig.github}/issues/new?template=${type.template}`
              : issueChoose;
            return (
              <a
                key={type.label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border p-5 transition-colors hover:border-acid"
              >
                <p className="font-display text-xl uppercase">{type.label}</p>
                <p className="mt-2 font-mono text-[10px] text-muted uppercase">
                  Deschide issue →
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 border border-border bg-surface p-6">
          <p className="terminal-label">Repository principal</p>
          <p className="mt-3 text-muted">
            Codul site-ului e public. Issue {">"} rant. PR {">"} screenshot.
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

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {repoCards.map((repo) => (
            <a
              key={repo.key}
              href={siteConfig.repos[repo.key]}
              className="border border-border bg-surface p-5 transition-colors hover:border-acid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-mono text-xs text-acid">{repo.label}</p>
              <p className="mt-3 text-sm text-muted">{repo.role}</p>
            </a>
          ))}
        </div>

        {liveSocial.length > 0 ? (
          <div className="mt-10 border border-border p-6">
            <p className="terminal-label">Social</p>
            <ul className="mt-4 space-y-3">
              {liveSocial.map((key) => (
                <li
                  key={key}
                  className="flex flex-wrap items-center justify-between gap-3 border border-border px-4 py-3"
                >
                  <span className="text-sm">{socialLabels[key]}</span>
                  <a
                    href={siteConfig.social[key]}
                    className="font-mono text-xs text-acid uppercase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deschide
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 border border-border p-6">
          <p className="terminal-label">Model propus</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Muiesoft: brand + media + comunitate</li>
            <li>Organizație civică: guvernanță viitoare</li>
            <li>Repository public: cod (AGPL-3.0)</li>
            <li>Data infrastructure: date + provenance</li>
            <li>Contributors: community</li>
          </ul>
        </div>
      </div>
    </>
  );
}
