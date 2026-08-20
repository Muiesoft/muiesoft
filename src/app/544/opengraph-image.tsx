import { ImageResponse } from "next/og";

export const alt = "Dă cu 544 · Legea 544/2001";
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
              fontSize: 56,
              fontWeight: 700,
            }}
          >
            Cere informații
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#f2c14e",
              marginTop: 24,
            }}
          >
            Legea 544/2001
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
