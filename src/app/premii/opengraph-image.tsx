import { ImageResponse } from "next/og";

export const alt = "Premiile Muiesoft · Pula de Plumb";
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
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1.05,
            }}
          >
            PULA DE PLUMB
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#c6ff00",
              marginTop: 16,
              textTransform: "uppercase",
            }}
          >
            PENTRU EXCELENȚĂ DIGITALĂ
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
