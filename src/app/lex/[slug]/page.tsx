import { notFound } from "next/navigation";
import { legalRepository } from "@/adapters/demo/legal";
import { LawDetail } from "@/components/lex/law-detail";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const laws = await legalRepository.getLaws();
  return laws.map((law) => ({ slug: law.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const law = await legalRepository.getLaw(slug);
  if (!law) {
    return buildMetadata({
      title: "MuieLex · document negăsit",
      path: `/lex/${slug}`,
    });
  }
  return buildMetadata({
    title: `${law.title} · MuieLex`,
    description: "Document demonstrativ MuieLex. Nu este act normativ real.",
    path: `/lex/${slug}`,
  });
}

export default async function LawPage({ params }: Props) {
  const { slug } = await params;
  const law = await legalRepository.getLaw(slug);
  if (!law) notFound();
  return <LawDetail law={law} />;
}
