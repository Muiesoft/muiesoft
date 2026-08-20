import { institutionRepository } from "@/adapters/demo/institution";
import { MuieIndexClient } from "@/components/index/muie-index-client";
import { PageHero } from "@/components/shared/page-hero";
import { brandCopy } from "@/config/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Muie Index · portaluri publice din România",
  description:
    "Scor mare = mai multă coadă. Catalog de frecare pentru portalurile publice din România. Estimările sunt etichetate; probele HTTP și Lighthouse apar pe profiluri.",
  path: "/muie-index",
  ogImage: "/muie-index/opengraph-image",
});

type Props = {
  searchParams: Promise<{ tab?: string | string[] }>;
};

export default async function MuieIndexPage({ searchParams }: Props) {
  const ranking = await institutionRepository.getRanking();
  const params = await searchParams;
  const tab = Array.isArray(params.tab) ? params.tab[0] : params.tab;

  return (
    <>
      <PageHero
        feature="muieIndex"
        title="Muie Index"
        subtitle={
          <>
            <p>
              M.U.I.E. e {brandCopy.acronym}. Indicele e de frecare: 100 e
              ghișeul etern, 0 e timpul înapoi.
            </p>
            <p className="mt-4 text-foreground">
              Scor mare înseamnă mai multă coadă pentru tine. Nu e NPS. Nu e
              popularitate.
            </p>
          </>
        }
      />
      <MuieIndexClient ranking={ranking} initialTab={tab} />
    </>
  );
}
