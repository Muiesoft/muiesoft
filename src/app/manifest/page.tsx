import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { brandCopy } from "@/config/copy";
import { editorialFormats } from "@/config/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Manifest",
  description: "Cetățean privat. Stat transparent. Revoluția are test suite.",
  path: "/manifest",
});

const points = [
  "Cetățeanul nu trebuie să fie API-ul dintre două instituții.",
  "Dacă statul are deja informația, nu ne-o mai cere.",
  "Un PDF nu este o transformare digitală.",
  "Un formular printat nu devine digital pentru că îl descarci online.",
  "Software-ul public trebuie măsurat.",
  "Banii publici trebuie urmăriți.",
  "Codul finanțat public ar trebui, oriunde este posibil și legal, să fie auditat și reutilizabil.",
  "Datele cetățeanului trebuie minimizate.",
  "Instituțiile trebuie să fie observabile.",
  "Dacă avem o soluție mai bună, o construim.",
];

export default function ManifestPage() {
  return (
    <>
      <PageHero feature="manifest" title="Manifest Muiesoft" />
      <article className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <div className="space-y-10">
          {points.map((point, index) => (
            <section key={point}>
              <p className="font-mono text-xs text-acid">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-2 text-2xl uppercase md:text-3xl">
                {point}
              </h2>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-10">
          <p className="text-lg">
            Nu cerem permisiunea să demonstrăm că se poate mai bine.
            <br />
            Construim.
          </p>
          <p className="font-display mt-8 text-4xl uppercase">
            {brandCopy.slogan}.
          </p>
        </div>
        <div className="mt-16 border border-border p-6">
          <p className="terminal-label">Formate editoriale</p>
          <p className="mt-3 text-sm text-muted">
            Shell-uri gata. Feed-uri goale până avem cazuri cu surse.
          </p>
          <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            {editorialFormats.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/editie/${item.slug}`}
                  className="text-foreground transition-colors hover:text-acid"
                >
                  • {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/editie" className="font-mono text-xs text-acid uppercase">
              Deschide /editie →
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
