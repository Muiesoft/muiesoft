import { moneyRepository } from "@/adapters/demo/money";
import { MoneyClient } from "@/components/money/money-client";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Unde-s banii?",
  description:
    "Contracte și plafoane din surse publice (ADR, SEAP, Scoreboard UE). Fiecare cifră cu provenance.",
  path: "/bani",
});

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function BaniPage({ searchParams }: Props) {
  const params = await searchParams;
  const raw = params.q;
  const initialQuery = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const contracts = await moneyRepository.getContracts();
  return (
    <>
      <PageHero
        feature="money"
        title="Cât a costat căcatul ăsta?"
        subtitle="Contracte publice cu surse. Anomalie ≠ vinovăție. Fără cifre inventate."
      />
      <MoneyClient contracts={contracts} initialQuery={initialQuery} />
    </>
  );
}
