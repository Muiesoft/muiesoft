import Link from "next/link";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { missionVerbs } from "@/config/mission";

export function Mission() {
  return (
    <Section>
      <SectionLabel>Misiune</SectionLabel>
      <SectionHeading>
        Facem birocrația digitală măsurabilă, inteligibilă și, unde se poate,
        inutilă.
      </SectionHeading>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Creștem conștientizarea incompetenței și a risipei. Construim unelte
        gratuite care fac soluțiile actuale să arate ca ceea ce sunt.
      </p>
      <p className="mt-4 max-w-2xl text-foreground">
        Fără date inventate. Fără acuzații fără dovezi.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {missionVerbs.map((item) => (
          <li key={item.title} className="border border-border p-5">
            <h3 className="font-display text-2xl">
              <Link href={item.href} className="hover:text-acid">
                {item.title}
              </Link>
            </h3>
            <p className="mt-3 text-muted">{item.body}</p>
            <p className="mt-4 flex flex-wrap gap-3 font-mono text-xs uppercase">
              <Link href={item.href} className="text-acid hover:underline">
                {item.cta}
              </Link>
              {"secondaryHref" in item ? (
                <Link
                  href={item.secondaryHref}
                  className="text-muted hover:text-acid hover:underline"
                >
                  {item.secondaryCta}
                </Link>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
