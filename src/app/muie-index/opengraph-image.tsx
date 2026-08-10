import { ImageResponse } from "next/og";

export const alt = "Muie Index · Cine ne fute timpul?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          padding: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#9d9a91" }}>
          MUIESOFT
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            MUIE INDEX
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#c6ff00",
              marginTop: 24,
            }}
          >
            MERGE CA PULA
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#9d9a91" }}>
          muiesoft.ro
        </div>
      </div>
    ),
    { ...size },
  );
}
