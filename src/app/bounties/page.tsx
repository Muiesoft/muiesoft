import { BountiesClient } from "@/components/awards/bounties-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bounties",
  description: "Nu comenta. Pune bounty. Crowdfunding comunitar pentru rezultate concrete.",
  path: "/bounties",
});

export default function BountiesPage() {
  return (
    <>
      <PageHero
        feature="bounties"
        title="Nu comenta. Pune bounty."
        subtitle="Ținte reale, finanțare zero. Crowdfunding-ul nu e deschis."
      />
      <BountiesClient />
    </>
  );
}
