import { HartaClient } from "@/components/index/harta-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Harta portalurilor",
  description:
    "Digitalizarea României, văzută de oamenii care trebuie s-o folosească.",
  path: "/harta",
  ogImage: "/harta/opengraph-image",
});

export default function HartaPage() {
  return (
    <>
      <PageHero
        feature="harta"
        title="Harta portalurilor"
        subtitle="Digitalizarea României, văzută de oamenii care trebuie s-o folosească."
      />
      <HartaClient />
    </>
  );
}
