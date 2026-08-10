import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { demoAwards } from "@/data/demo/awards";

function AwardStatus({
  status,
  laureate,
}: {
  status: "awarded" | "unawarded";
  laureate?: string;
}) {
  if (status === "awarded" && laureate) {
    return (
      <p className="mt-4 font-mono text-xs tracking-wider text-acid uppercase">
        Laureat · {laureate}
      </p>
    );
  }
  return (
    <p className="mt-4 font-mono text-xs tracking-wider text-muted uppercase">
      Neacordat încă
    </p>
  );
}

export function AwardsPreview() {
  const originals = demoAwards.slice(0, 8);
  const [plumb, ...rest] = originals;

  return (
    <Section>
      <SectionLabel>PREMIILE MUIESOFT</SectionLabel>
      <SectionHeading>Excelență în administrația futută.</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Distincții pentru tipologii de eșec (și, rar, de competență). Laureatul
        apare doar când există caz documentat cu surse.
      </p>

      <article className="mt-10 border border-acid/50 bg-acid/5 p-6 md:p-10">
        <p className="font-mono text-xs tracking-[0.16em] text-acid uppercase">
          Premiul 01 · Cap de afiș
        </p>
        <h3 className="font-display mt-4 text-4xl leading-[0.95] font-bold uppercase md:text-6xl">
          {plumb.name}
        </h3>
        <p className="mt-6 max-w-2xl text-lg text-foreground/90">
          {plumb.description}
        </p>
        <AwardStatus status={plumb.status} laureate={plumb.laureate} />
        {plumb.citation ? (
          <p className="mt-3 max-w-2xl text-sm text-muted">{plumb.citation}</p>
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

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {rest.map((award, index) => (
          <article
            key={award.id}
            className="border border-border bg-surface p-6 md:p-8"
            style={{
              transform: index % 2 === 0 ? "rotate(-0.4deg)" : "rotate(0.4deg)",
            }}
          >
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              Premiul {String(index + 2).padStart(2, "0")}
            </p>
            <h3 className="font-display mt-3 text-2xl leading-tight uppercase md:text-3xl">
              {award.name}
            </h3>
            <p className="mt-4 text-sm text-muted">{award.description}</p>
            <AwardStatus status={award.status} laureate={award.laureate} />
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Button href="/premii">Vezi toate premiile</Button>
      </div>
    </Section>
  );
}
