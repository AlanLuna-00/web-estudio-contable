import { ImageResponse } from "next/og";

export const alt = "Estudio Contable Durante y Asociados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Estudio Contable Durante y Asociados
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 32,
            maxWidth: 700,
          }}
        >
          Contabilidad y asesoría fiscal para pymes, profesionales y
          emprendedores
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          estudioduranteyasociados.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
