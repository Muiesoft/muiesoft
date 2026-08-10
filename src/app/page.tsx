import { procedureRepository } from "@/adapters/demo/procedures";
import { AdoptMess } from "@/components/home/adopt";
import { ApiPreview } from "@/components/home/api-preview";
import { AwardsPreview } from "@/components/home/awards-preview";
import { BountiesPreview } from "@/components/home/bounties-preview";
import { FinalCta } from "@/components/home/final-cta";
import { Freedom544Preview } from "@/components/home/freedom544-preview";
import { EditorialPreview } from "@/components/home/editorial-preview";
import { HallCompetence } from "@/components/home/hall-competence";
import { HartaPreview } from "@/components/home/harta-preview";
import { HomeHero } from "@/components/home/hero";
import { Microfeatures } from "@/components/home/microfeatures";
import { Mission } from "@/components/home/mission";
import { MoneyPreview } from "@/components/home/money-preview";
import { MuieIndexPreview } from "@/components/home/muie-index-preview";
import { MuieLexPreview } from "@/components/home/muielex-preview";
import { NorthStar } from "@/components/home/north-star";
import { Pillars } from "@/components/home/pillars";
import { PrivacyInversion } from "@/components/home/privacy-inversion";
import { RezolvaPreview } from "@/components/home/rezolva-preview";
import { StatusStrip } from "@/components/home/status-strip";
import { TransparencyPreview } from "@/components/home/transparency-preview";

export default async function HomePage() {
  const procedures = await procedureRepository.getProcedures();

  return (
    <>
      <HomeHero />
      <StatusStrip />
      <Mission />
      <Pillars />
      <MuieIndexPreview />
      <HartaPreview />
      <RezolvaPreview procedures={procedures} />
      <MuieLexPreview />
      <MoneyPreview />
      <Freedom544Preview />
      <ApiPreview />
      <PrivacyInversion />
      <BountiesPreview />
      <AdoptMess />
      <HallCompetence />
      <AwardsPreview />
      <EditorialPreview />
      <TransparencyPreview />
      <NorthStar />
      <Microfeatures />
      <FinalCta />
    </>
  );
}
