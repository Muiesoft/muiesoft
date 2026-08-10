import Link from "next/link";
import { NominateMailto } from "@/components/shared/nominate-mailto";
import { PageHero } from "@/components/shared/page-hero";
import { demoAwards } from "@/data/demo/awards";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Premiile Muiesoft · Excelență în administrația futută",
  description:
    "Pula de Plumb, Nodul Gordian, PDF-ul de Platină și alte distincții. Laureat doar cu caz documentat și surse.",
  path: "/premii",
});

function AwardStatus({
  status,
  laureate,
  category,
}: {
  status: "awarded" | "unawarded";
  laureate?: string;
  category: "absurd" | "competence";
}) {
  if (status === "awarded" && laureate) {
    return (
      <p className="mt-8 font-mono text-xs tracking-wider text-acid uppercase">
        Laureat · {laureate}
      </p>
    );
  }
  return (
    <p className="mt-8 font-mono text-xs tracking-wider text-muted uppercase">
      {category === "competence" ? "Competență" : "Tipologie"} · neacordat încă
    </p>
  );
}

export default function PremiiPage() {
  const [plumb, ...rest] = demoAwards;

  return (
    <>
      <PageHero
        feature="premii"
        title="Premiile Muiesoft"
        subtitle={
          <>
            <p className="font-display text-2xl text-foreground uppercase md:text-3xl">
              Excelență în administrația futută.
            </p>
            <p className="mt-4">
              Catalog de tipologii. Laureatul apare doar când există caz
              documentat, surse și review.
            </p>
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <section className="border border-border p-6 md:p-8">
          <p className="terminal-label">Metodologie</p>
          <ul className="mt-4 max-w-2xl space-y-2 text-sm text-muted">
            <li>• Premiile satriză tipologii de eșec digital, nu persoane.</li>
            <li>
              • Nu atribuim laureat fără caz documentat, surse și review.
            </li>
            <li>• „Nicio Pulă, Bravo” cere dovezi de competență, nu PR.</li>
            <li>• Outlier ≠ corupție. Anomalie ≠ vinovăție.</li>
          </ul>
          <div className="mt-6">
            <NominateMailto
              subject="Nominalizare Premii Muiesoft"
              body={`Premiu propus:\nInstituție / serviciu:\nDe ce merită (fapte):\nSurse (URL):\n\nTrimis către Muiesoft · fără date personale inutile.`}
              label="Nominalizează un premiu"
            />
          </div>
        </section>

        <article className="mt-10 border-2 border-acid bg-acid/5 p-8 md:p-14">
          <p className="font-mono text-xs tracking-[0.2em] text-acid uppercase">
            Premiul 01
          </p>
          <h2 className="font-display mt-4 text-5xl leading-[0.92] font-bold uppercase md:text-7xl">
            {plumb.name}
          </h2>
          <p className="mt-8 max-w-2xl text-xl text-foreground/90">
            {plumb.description}
          </p>
          <AwardStatus
            status={plumb.status}
            laureate={plumb.laureate}
            category={plumb.category}
          />
          {plumb.citation ? (
            <p className="mt-4 max-w-2xl text-sm text-muted">{plumb.citation}</p>
          ) : null}
          {plumb.caseHref ? (
            <p className="mt-4">
              <Link
                href={plumb.caseHref}
                className="font-mono text-xs text-acid uppercase hover:underline"
              >
                Cazul documentat →
              </Link>
            </p>
          ) : null}
        </article>

        <div className="mt-8 space-y-8">
          {rest.map((award, index) => (
            <article
              key={award.id}
              className="border border-border bg-surface p-8 md:p-12"
              style={{
                transform:
                  index % 2 === 0 ? "rotate(-0.35deg)" : "rotate(0.35deg)",
              }}
            >
              <p className="font-mono text-xs text-muted">
                PREMIUL {String(index + 2).padStart(2, "0")}
              </p>
              <h2 className="font-display mt-4 text-4xl leading-[0.95] font-bold uppercase md:text-6xl">
                {award.name}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted">
                {award.description}
              </p>
              <AwardStatus
                status={award.status}
                laureate={award.laureate}
                category={award.category}
              />
              {award.citation ? (
                <p className="mt-4 max-w-2xl text-sm text-muted">
                  {award.citation}
                </p>
              ) : null}
              {award.caseHref ? (
                <p className="mt-4">
                  <Link
                    href={award.caseHref}
                    className="font-mono text-xs text-acid uppercase hover:underline"
                  >
                    Cazul documentat →
                  </Link>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
