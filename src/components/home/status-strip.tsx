import Link from "next/link";
import { registryServices } from "@/data/registry/services";
import { probeData, probeTimestamp } from "@/lib/probes";

export function StatusStrip() {
  const ok = registryServices.filter((s) => s.status === "operational").length;
  const degraded = registryServices.filter((s) => s.status === "degraded").length;
  const physical = registryServices.filter(
    (s) => s.status === "physical-required",
  ).length;
  const total = registryServices.length;
  const withHttp = probeData.results.filter(
    (r) => r.verdict === "ok" || r.verdict === "blocked",
  ).length;

  return (
    <section className="border-b border-border bg-surface px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-mono text-xs tracking-[0.16em] text-acid uppercase">
              Status registry
            </h2>
            <p className="mt-2 font-mono text-sm tracking-wide uppercase">
              {total} portaluri în catalog
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-6 md:gap-10">
            <div>
              <dt className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Operaționale
              </dt>
              <dd className="mt-1 font-mono text-2xl text-success">{ok}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Degradate
              </dt>
              <dd className="mt-1 font-mono text-2xl text-warning">{degraded}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Cu ghișeu
              </dt>
              <dd className="mt-1 font-mono text-2xl text-danger">{physical}</dd>
            </div>
          </dl>
        </div>
        <p className="font-mono text-xs leading-relaxed text-muted">
          Stare catalog pe UX tipic · monitorizare HTTP zilnică · ultima rundă:{" "}
          {withHttp}/{probeData.results.length} au răspuns ·{" "}
          {probeTimestamp(probeData.generatedAt)} ·{" "}
          <Link href="/muie-index" className="text-acid hover:underline">
            Muie Index
          </Link>
          {" · "}
          <Link href="/status" className="text-acid hover:underline">
            STATUS
          </Link>
          {" · "}
          <Link href="/feed.xml" className="text-acid hover:underline">
            RSS
          </Link>
          {" · "}
          <Link href="/api" className="text-acid hover:underline">
            API
          </Link>
        </p>
      </div>
    </section>
  );
}
