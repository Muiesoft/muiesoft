import { procedureRepository } from "@/adapters/demo/procedures";
import { EditorialPreview } from "@/components/home/editorial-preview";
import { FinalCta } from "@/components/home/final-cta";
import { HomeHero } from "@/components/home/hero";
import { IncidentsPulse } from "@/components/home/incidents-pulse";
import { Mission } from "@/components/home/mission";
import { MuieIndexPreview } from "@/components/home/muie-index-preview";
import { RezolvaPreview } from "@/components/home/rezolva-preview";
import { StatusStrip } from "@/components/home/status-strip";

export default async function HomePage() {
  const procedures = await procedureRepository.getProcedures();

  return (
    <>
      <HomeHero />
      <StatusStrip />
      <Mission />
      <IncidentsPulse />
      <MuieIndexPreview />
      <RezolvaPreview procedures={procedures} />
      <EditorialPreview />
      <FinalCta />
    </>
  );
}
