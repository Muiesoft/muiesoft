import { ImageResponse } from "next/og";
import romaniaMap from "@/data/registry/romania-map.json";
import { registryServices } from "@/data/registry/services";
import type { InstitutionStatus } from "@/domain/institution";

export const alt = "Harta Națională a Muielii Digitale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const severityOrder: InstitutionStatus[] = [
  "broken",
  "degraded",
  "physical-required",
  "unknown",
  "operational",
];

const fillByStatus: Record<InstitutionStatus, string> = {
  operational: "rgba(87, 227, 137, 0.5)",
  degraded: "rgba(255, 176, 0, 0.5)",
  broken: "rgba(255, 59, 48, 0.55)",
  "physical-required": "rgba(157, 154, 145, 0.4)",
  unknown: "rgba(245, 243, 236, 0.12)",
};

export default function OpenGraphImage() {
  const byCounty = new Map<string, InstitutionStatus[]>();
  for (const service of registryServices) {
    if (!service.county || service.county === "Național") continue;
    byCounty.set(service.county, [
      ...(byCounty.get(service.county) ?? []),
      service.status,
    ]);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050505",
          color: "#f5f3ec",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 480,
            paddingRight: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              color: "#9d9a91",
              textTransform: "uppercase",
            }}
          >
            MUIESOFT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Harta Națională a Muielii Digitale
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#c6ff00",
                marginTop: 20,
              }}
            >
              Portaluri publice reale, pe județe.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#9d9a91",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            muiesoft.ro/harta
          </div>
        </div>
        <svg
          viewBox={romaniaMap.viewBox}
          width={624}
          height={534}
          style={{ margin: "auto" }}
        >
          {romaniaMap.counties.map((county) => {
            const statuses = byCounty.get(county.name);
            const worst = statuses
              ? severityOrder.find((status) => statuses.includes(status))
              : undefined;
            return (
              <path
                key={county.id}
                d={county.d}
                fill={worst ? fillByStatus[worst] : "#0c0c0c"}
                stroke="#292929"
                strokeWidth={1.5}
              />
            );
          })}
        </svg>
      </div>
    ),
    { ...size },
  );
}
