import { procedureRepository } from "@/adapters/demo/procedures";
import { RezolvaPageClient } from "@/components/home/rezolva-page-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rezolvă · ghiduri administrative cu surse",
  description:
    "Ghiduri practice pentru SRL, PFA, SPV ANAF, taxe, amenzi și date deschise: pași, documente, termene și instituții, cu surse oficiale.",
  path: "/rezolva",
});

export default async function RezolvaPage() {
  const procedures = await procedureRepository.getProcedures();

  return (
    <>
      <PageHero
        feature="rezolva"
        title="Rezolvă-mi dracu problema."
        subtitle="Spui ce vrei să faci. Pași, documente, termene și instituții, cu link către sursele oficiale. Ghid orientativ, nu consultanță."
      />
      <RezolvaPageClient procedures={procedures} />
    </>
  );
}
