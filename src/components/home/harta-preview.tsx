import Link from "next/link";
import { FeatureStatus } from "@/components/shared/feature-status";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section";
import { registryServices } from "@/data/registry/services";
import {
  getHartaStatus,
  hartaStatusMeta,
  hartaStatusOrder,
} from "@/lib/harta-status";

export function HartaPreview() {
  return (
    <Section className="bg-surface">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <SectionLabel className="mb-0">HARTA</SectionLabel>
        <FeatureStatus feature="harta" />
      </div>
      <SectionHeading>Harta Națională a Muielii Digitale</SectionHeading>
      <p className="mt-4 max-w-2xl text-muted">
        {registryServices.length} portaluri din registry. Statusul e etichetă de
        catalog, nu probe live.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
        {registryServices.map((service) => {
          const meta = getHartaStatus(service.status);
          return (
            <Link
              key={service.id}
              href="/harta"
              className={`border p-3 font-mono text-[10px] tracking-wider uppercase transition-colors hover:border-acid md:min-h-24 ${meta.tileClass}`}
            >
              {service.name}
              <br />
              {meta.shortLabel}
            </Link>
          );
        })}
      </div>
      <ul className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase">
        {hartaStatusOrder.map((s) => (
          <li key={s} className={hartaStatusMeta[s].stampClass}>
            ● {hartaStatusMeta[s].label}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href="/harta">Deschide harta</Button>
      </div>
    </Section>
  );
}
