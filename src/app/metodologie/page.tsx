import { MethodologyBody } from "@/components/index/methodology-body";
import { JsonLdBlock, datasetJsonLd } from "@/components/seo/json-ld-block";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Metodologie · Muie Index",
  description:
    "Muie Score e indice de frecare. Scor mare = mai multă coadă. Trei straturi: estimare, probe HTTP și Lighthouse, măsurătoare viitoare.",
  path: "/metodologie",
});

export default function MetodologiePage() {
  return (
    <>
      <JsonLdBlock
        data={datasetJsonLd({
          name: "Muie Index · metodologie",
          description:
            "Indice de frecare pentru portaluri publice din România. Estimările sunt etichetate.",
          path: "/metodologie",
        })}
      />
      <PageHero
        title="Metodologie"
        subtitle={
          <p className="font-display text-2xl text-foreground md:text-3xl">
            Cum citim frecarea. Fără vanity uptime.
          </p>
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <MethodologyBody />
        <p className="mt-10">
          <Link
            href="/muie-index"
            className="font-mono text-xs text-acid uppercase hover:underline"
          >
            ← Clasamentul Muie Index
          </Link>
        </p>
        <p className="mt-4 font-mono text-xs text-muted">{siteConfig.url}</p>
      </div>
    </>
  );
}
