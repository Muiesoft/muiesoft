import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Transparență",
  description:
    "Dacă banii nu pot fi urmăriți, n-avem voie să cerem altora să-i facă urmăribili.",
  path: "/transparenta",
});

const facts = [
  ["Licență", "AGPL-3.0"],
  ["Contact", siteConfig.contact],
  ["Cod", "public pe GitHub"],
  ["Finanțare", "€0 procesați până acum"],
  ["Donații", "neprocesate"],
  ["Vendors", "0"],
];

export default function TransparentaPage() {
  return (
    <>
      <PageHero
        feature="transparenta"
        title="Și noi trebuie să fim transparenți."
        subtitle="Dacă banii nu pot fi urmăriți, n-avem voie să cerem altora să-i facă urmăribili."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {facts.map(([label, value]) => (
            <div key={label} className="border border-border p-5">
              <p className="terminal-label">{label}</p>
              <p className="mt-3 font-mono text-lg break-all">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 border border-border p-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="terminal-label mb-0">Ledger</p>
            <Badge variant="muted">FĂRĂ TRANZACȚII</Badge>
          </div>
          <p className="mt-4 text-sm text-muted">
            Nu există încă venituri sau cheltuieli de raportat. Când apar, fiecare
            rând va avea document primar. Până atunci, ledger-ul e gol pe bune, nu
            umplut cu zerouri decorative.
          </p>
          <ul className="mt-6 space-y-2 font-mono text-xs text-muted">
            <li>
              Site:{" "}
              <a
                className="text-acid hover:underline"
                href={siteConfig.repos.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.repos.site}
              </a>
            </li>
            <li>
              Date:{" "}
              <a
                className="text-acid hover:underline"
                href={siteConfig.repos.data}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.repos.data}
              </a>
            </li>
            <li>
              API:{" "}
              <a
                className="text-acid hover:underline"
                href={siteConfig.repos.api}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.repos.api}
              </a>
            </li>
          </ul>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="border border-border p-6">
            <h2 className="font-display text-xl uppercase">Metodologie</h2>
            <p className="mt-3 text-sm text-muted">
              Fiecare leu intrat și fiecare leu cheltuit trebuie să poată fi
              urmărit până la documentul primar. Fără document, fără rând.
            </p>
          </section>
          <section className="border border-border p-6">
            <h2 className="font-display text-xl uppercase">
              Conflict of interest
            </h2>
            <p className="mt-3 text-sm text-muted">
              Declarațiile de interese vor fi publice. Momentan nu există
              finanțare de procesat.
            </p>
          </section>
        </div>

      </div>
    </>
  );
}
