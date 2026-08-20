import Link from "next/link";
import { NominateMailto } from "@/components/shared/nominate-mailto";
import { PageHero } from "@/components/shared/page-hero";
import { demoAwards } from "@/data/demo/awards";
import type { Award } from "@/domain/award";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Premiile Muiesoft · Excelență în administrația care se crede digitală",
  description:
    "Ștampila de Plumb, Nodul Gordian, PDF-ul de Platină și alte distincții. Laureat doar cu caz documentat și surse.",
  path: "/premii",
  ogImage: "/premii/opengraph-image",
});

function AwardStatus({ award }: { award: Award }) {
  if (award.status === "awarded" && award.laureate) {
    return (
      <p className="mt-8 font-mono text-xs tracking-wider text-acid uppercase">
        Laureat · {award.laureate}
      </p>
    );
  }
  return (
    <p className="mt-8 font-mono text-xs tracking-wider text-muted uppercase">
      {award.category === "competence" ? "Competență" : "Tipologie"} · neacordat
      încă
    </p>
  );
}

function AwardBody({ award }: { award: Award }) {
  return (
    <>
      <h2 className="font-display mt-4 text-4xl leading-tight font-semibold md:text-5xl">
        {award.name}
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-muted">{award.description}</p>
      <AwardStatus award={award} />
      {award.citation ? (
        <p className="mt-4 max-w-2xl text-sm text-muted">{award.citation}</p>
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
    </>
  );
}

export default function PremiiPage() {
  const awarded = demoAwards.filter((award) => award.status === "awarded");
  const unawarded = demoAwards.filter((award) => award.status === "unawarded");
  const [featured, ...restAwarded] = awarded;

  return (
    <>
      <PageHero
        feature="premii"
        title="Premiile Muiesoft"
        subtitle={
          <>
            <p className="font-display text-2xl text-foreground md:text-3xl">
              Excelență în administrația care se crede digitală.
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
            <li>• „Nicio scuză. Bravo.” cere dovezi de competență, nu PR.</li>
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

        {featured ? (
          <article className="mt-10 border-2 border-acid bg-acid/5 p-8 md:p-14">
            <p className="font-mono text-xs tracking-[0.2em] text-acid uppercase">
              Premiul 01
            </p>
            <AwardBody award={featured} />
          </article>
        ) : null}

        <div className="mt-8 space-y-8">
          {restAwarded.map((award, index) => (
            <article
              key={award.id}
              className="border border-border bg-surface p-8 md:p-12"
            >
              <p className="font-mono text-xs text-muted">
                PREMIUL {String(index + 2).padStart(2, "0")}
              </p>
              <AwardBody award={award} />
            </article>
          ))}
        </div>

        <details className="mt-12 border border-border p-6">
          <summary className="font-display cursor-pointer text-2xl">
            Neacordate ({unawarded.length})
          </summary>
          <ul className="mt-6 space-y-8">
            {unawarded.map((award) => (
              <li key={award.id}>
                <p className="font-mono text-xs text-muted">{award.slug}</p>
                <AwardBody award={award} />
              </li>
            ))}
          </ul>
        </details>
      </div>
    </>
  );
}
