import { ImageResponse } from "next/og";
import { getLighthouseSnapshot } from "@/data/registry/lighthouse-snapshots";
import { registryServices } from "@/data/registry/services";
import { getProbe, probeSummary, verdictMeta } from "@/lib/probes";

export const alt = "Scorecard Muie Index";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toneColor = {
  success: "#57e389",
  warning: "#ffb000",
  danger: "#ff3b30",
} as const;

export function generateStaticParams() {
  return registryServices.map((i) => ({ slug: i.slug }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const institution = registryServices.find((i) => i.slug === slug);
  const lighthouse = getLighthouseSnapshot(slug);
  const probe = getProbe(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f3ec",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9d9a91",
          }}
        >
          <div style={{ display: "flex" }}>MUIESOFT · MUIE INDEX</div>
          <div style={{ display: "flex" }}>
            {institution?.scoreKind === "measured"
              ? "MĂSURAT"
              : "ESTIMARE UTILIZATORI"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            {institution?.name ?? slug}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 26,
              color: "#9d9a91",
            }}
          >
            {institution
              ? `${institution.category} · ${institution.county ?? "Național"}`
              : ""}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 48,
              marginTop: 40,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 22, color: "#9d9a91" }}>
                MUIE SCORE
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 110,
                  fontWeight: 800,
                  color: "#c6ff00",
                  lineHeight: 1,
                }}
              >
                {institution?.score?.total ?? "n/a"}
              </div>
            </div>
            {lighthouse
              ? (
                  [
                    ["PERF", lighthouse.scores.performance],
                    ["A11Y", lighthouse.scores.accessibility],
                    ["BEST", lighthouse.scores.bestPractices],
                    ["SEO", lighthouse.scores.seo],
                  ] as const
                ).map(([label, value]) => (
                  <div
                    key={label}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      style={{ display: "flex", fontSize: 20, color: "#9d9a91" }}
                    >
                      {label}
                    </div>
                    <div
                      style={{ display: "flex", fontSize: 54, fontWeight: 700 }}
                    >
                      {value}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9d9a91",
          }}
        >
          <div style={{ display: "flex" }}>
            {probe ? (
              <div style={{ display: "flex", gap: 10 }}>
                <div
                  style={{
                    display: "flex",
                    color: toneColor[verdictMeta[probe.verdict].tone],
                  }}
                >
                  ●
                </div>
                <div style={{ display: "flex" }}>
                  probă HTTP: {probeSummary(probe)} ·{" "}
                  {probe.checkedAt.slice(0, 10)}
                </div>
              </div>
            ) : null}
          </div>
          <div style={{ display: "flex" }}>muiesoft.ro</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
