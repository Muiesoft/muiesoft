import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { getFeaturedCase } from "@/data/editorial/cases";

export function EditorialPreview() {
  const featured = getFeaturedCase("merge-la-mine");

  return (
    <Section className="bg-surface">
      <SectionLabel>EDIȚIE</SectionLabel>
      <SectionHeading>Un caz. Cu surse.</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        Satira e shareable. Faptele trebuie să aibă provenance.
      </p>

      {featured ? (
        <Link
          href="/editie/merge-la-mine"
          className="mt-8 block border-t border-b border-acid/40 py-8 transition-colors hover:border-acid"
        >
          <p className="font-mono text-[10px] tracking-wider text-acid uppercase">
            Merge La Mine™ · featured
          </p>
          <h3 className="font-display mt-2 text-2xl md:text-3xl">
            {featured.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            {featured.summary.slice(0, 180)}…
          </p>
        </Link>
      ) : null}

      <div className="mt-8">
        <Button href="/editie" variant="secondary">
          Deschide ediția
        </Button>
      </div>
    </Section>
  );
}
