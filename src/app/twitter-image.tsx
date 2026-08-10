import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Muiesoft · Civic-tech pentru o Românie transparentă";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/logo-512.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <img src={logoSrc} width={96} height={96} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 8,
              color: "#9d9a91",
              textTransform: "uppercase",
            }}
          >
            MUIESOFT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 0.95,
            textTransform: "uppercase",
            maxWidth: 980,
          }}
        >
          Civic-tech pentru o Românie transparentă
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c6ff00" }}>
          muiesoft.ro
        </div>
      </div>
    ),
    { ...size },
  );
}
