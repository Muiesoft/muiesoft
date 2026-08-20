import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Bounties",
  description:
    "Crowdfunding-ul nu e deschis. Niciun ban procesat. Dacă vrei să construiești, deschide un PR.",
  path: "/bounties",
});

export default function BountiesPage() {
  return (
    <>
      <PageHero
        feature="bounties"
        title="Bounties"
        subtitle="Listă de probleme pe care am vrea să le finanțăm. Până acum: €0. Crowdfunding-ul nu e deschis."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <p className="max-w-2xl text-lg text-muted">
          Nu afișăm premii de zero euro ca pe un magazin. Când există bani de
          urmărit, apar aici și în ledger.
        </p>
        <p className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contribuie#developer"
            className="font-mono text-xs text-acid uppercase hover:underline"
          >
            Contribuie ca developer
          </Link>
          <Link
            href="/transparenta"
            className="font-mono text-xs text-acid uppercase hover:underline"
          >
            Transparență
          </Link>
        </p>
        <p className="mt-8 font-mono text-xs text-muted">
          Contact:{" "}
          <a className="text-acid underline" href={`mailto:${siteConfig.contact}`}>
            {siteConfig.contact}
          </a>
        </p>
      </div>
    </>
  );
}
