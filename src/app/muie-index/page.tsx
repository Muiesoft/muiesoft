import { institutionRepository } from "@/adapters/demo/institution";
import { MuieIndexClient } from "@/components/index/muie-index-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Muie Index · portaluri publice din România",
  description:
    "Catalog și evaluări pentru portalurile publice din România: disponibilitate, UX, accesibilitate. Estimările sunt etichetate; snapshot-urile Lighthouse apar pe profiluri.",
  path: "/muie-index",
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
        title="MUIEINDEX"
        subtitle={
          <>
            <p>Uzabilitate, interoperabilitate, eficiență: pe scoruri etichetate.</p>
            <p className="mt-4 text-foreground">
              Nu inventăm uptime.
              <br />
              Până la probe automate, scorurile sunt estimări de utilizatori.
            </p>
          </>
        }
      />
      <MuieIndexClient ranking={ranking} initialTab={tab} />
    </>
  );
}
