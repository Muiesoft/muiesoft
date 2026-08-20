import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { TrustClose } from "@/components/shared/trust-close";
import { brandCopy } from "@/config/copy";
import { missionVerbs } from "@/config/mission";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Manifest",
  description:
    "Cetățean privat. Stat transparent. Măsurăm incompetența, construim alternative.",
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
        <p className="text-lg text-muted">
          Dacă reușim, România are un index citabil al portalurilor publice, o
          cale să ceară informații fără ghișeu, și alternative gratuite care fac
          teatrul digital inutil. Nu cerem permisiunea să demonstrăm că se
          poate mai bine.
        </p>
        <div className="mt-12 space-y-10">
          {points.map((point, index) => (
            <section key={point}>
              <p className="font-mono text-xs text-acid">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-2 text-2xl md:text-3xl">
                {point}
              </h2>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-border pt-10">
          <p className="text-lg">Construim.</p>
          <p className="font-display mt-8 text-3xl md:text-4xl">
            {brandCopy.slogan}
          </p>
        </div>
        <div className="mt-16 border border-border p-6">
          <p className="terminal-label">Unelte</p>
          <ul className="mt-4 grid gap-4 text-sm md:grid-cols-2">
            {missionVerbs.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="hover:text-acid">
                  {item.title}
                </Link>
                {"secondaryHref" in item ? (
                  <>
                    {" · "}
                    <Link
                      href={item.secondaryHref}
                      className="text-muted hover:text-acid"
                    >
                      {item.secondaryCta}
                    </Link>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <TrustClose />
      </article>
    </>
  );
}
