import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Thatha Ennai - Ayurvedic Pain Reliever";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E3D1A 0%, #2D5A27 50%, #3D7A35 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: "bold", marginBottom: 16 }}>
          Thatha Ennai
        </div>
        <div style={{ fontSize: 28, color: "#D4A574", marginBottom: 8 }}>
          Ayurvedic Pain Reliever
        </div>
        <div style={{ fontSize: 20, opacity: 0.9 }}>
          100% Herbal • 30+ Siddha Ingredients • Made in India
        </div>
      </div>
    ),
    { ...size }
  );
}
