import Link from "next/link";
import { contestScoreMailto } from "@/lib/scoring";

export function TrustClose() {
  return (
    <div className="mt-12 border border-border p-6">
      <p className="font-display text-xl">Ai treabă, nu doar principii.</p>
      <div className="mt-4 flex flex-wrap gap-4">
        <a
          href={contestScoreMailto("Muie Index")}
          className="font-mono text-xs text-acid uppercase hover:underline"
        >
          Contestă un scor
        </a>
        <Link
          href="/contribuie#cetatean"
          className="font-mono text-xs text-acid uppercase hover:underline"
        >
          Propune un caz
        </Link>
      </div>
    </div>
  );
}
