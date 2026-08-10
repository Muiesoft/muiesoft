"use client";

import romaniaMap from "@/data/registry/romania-map.json";
import type { Institution, InstitutionStatus } from "@/domain/institution";
import { hartaStatusMeta } from "@/lib/harta-status";
import { cn } from "@/lib/utils";

const severityOrder: InstitutionStatus[] = [
  "broken",
  "degraded",
  "physical-required",
  "unknown",
  "operational",
];

const fillByStatus: Record<InstitutionStatus, string> = {
  operational: "fill-success/40 hover:fill-success/60",
  degraded: "fill-warning/40 hover:fill-warning/60",
  broken: "fill-danger/45 hover:fill-danger/65",
  "physical-required": "fill-muted/35 hover:fill-muted/50",
  unknown: "fill-foreground/10 hover:fill-foreground/20",
};

export function HartaRomania({
  services,
  selected,
  onSelect,
}: {
  services: Institution[];
  selected: string;
  onSelect: (county: string) => void;
}) {
  const byCounty = new Map<string, Institution[]>();
  for (const service of services) {
    if (!service.county || service.county === "Național") continue;
    byCounty.set(service.county, [
      ...(byCounty.get(service.county) ?? []),
      service,
    ]);
  }

  return (
    <figure className="border border-border bg-surface p-4 md:p-6">
      <svg
        viewBox={romaniaMap.viewBox}
        role="group"
        aria-label="Harta județelor României: județele colorate au portaluri locale în registry"
        className="w-full"
      >
        {romaniaMap.counties.map((county) => {
          const local = byCounty.get(county.name) ?? [];
          const worst = severityOrder.find((status) =>
            local.some((service) => service.status === status),
          );
          const isSelected = selected === county.name;
          const label = worst
            ? `${county.name}: ${local.length} ${local.length === 1 ? "portal" : "portaluri"} · ${hartaStatusMeta[worst].label}`
            : `${county.name}: fără portaluri locale în registry, încă`;
          return (
            <path
              key={county.id}
              d={county.d}
              tabIndex={local.length > 0 ? 0 : -1}
              role={local.length > 0 ? "button" : undefined}
              aria-label={label}
              aria-pressed={local.length > 0 ? isSelected : undefined}
              onClick={
                local.length > 0
                  ? () => onSelect(isSelected ? "toate" : county.name)
                  : undefined
              }
              onKeyDown={
                local.length > 0
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect(isSelected ? "toate" : county.name);
                      }
                    }
                  : undefined
              }
              className={cn(
                "stroke-border transition-[fill] duration-150 focus:outline-none",
                worst ? fillByStatus[worst] : "fill-background",
                local.length > 0 && "cursor-pointer focus-visible:stroke-acid",
                isSelected && "stroke-acid",
              )}
              strokeWidth={isSelected ? 3 : 1}
            >
              <title>{label}</title>
            </path>
          );
        })}
      </svg>
      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-muted uppercase">
        <span>
          Click pe un județ colorat = filtru. Portalurile naționale nu stau pe
          hartă: stau pe capul tuturor.
        </span>
        <span>Contur: Natural Earth · domeniu public</span>
      </figcaption>
    </figure>
  );
}
