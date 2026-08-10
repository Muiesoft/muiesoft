import { HartaClient } from "@/components/index/harta-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Harta Națională a Muielii Digitale",
  description:
    "Digitalizarea României, văzută de oamenii care trebuie s-o folosească.",
  path: "/harta",
});

export default function HartaPage() {
  return (
    <>
      <PageHero
        feature="harta"
        title="Harta Națională a Muielii Digitale"
        subtitle="Digitalizarea României, văzută de oamenii care trebuie s-o folosească."
      />
      <HartaClient />
    </>
  );
}
