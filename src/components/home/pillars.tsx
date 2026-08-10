import Link from "next/link";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";

const pillars = [
  {
    n: "01",
    title: "Observăm",
    body: "MuieIndex + Harta.",
    href: "/muie-index",
  },
  {
    n: "02",
    title: "Înțelegem",
    body: "MuieLex.",
    href: "/lex",
  },
  {
    n: "03",
    title: "Rezolvăm",
    body: "Rezolvă-mi dracu problema.",
    href: "/rezolva",
  },
  {
    n: "04",
    title: "Urmărim",
    body: "Unde-s banii + 544.",
    href: "/bani",
  },
];

export function Pillars() {
  return (
    <Section className="bg-surface">
      <SectionLabel>CE CONSTRUIM</SectionLabel>
      <SectionHeading>Patru piloni. Zero PowerPoint.</SectionHeading>
      <p className="mt-6 font-mono text-sm text-muted">
        Rant → issue → benchmark → specification → implementation → pull
        request.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {pillars.map((p) => (
          <Link
            key={p.n}
            href={p.href}
            className="group border border-border bg-background p-6 transition-colors hover:border-acid"
          >
            <p className="font-mono text-xs text-muted">{p.n}</p>
            <h3 className="font-display mt-3 text-3xl font-bold uppercase group-hover:text-acid">
              {p.title}
            </h3>
            <p className="mt-2 text-muted">{p.body}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
