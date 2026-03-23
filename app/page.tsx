import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camisas Deportivas de Alta Calidad - Video Promocional",
  description:
    "Video promocional de camisas deportivas de alta gama. Contacto: 3114612022 - Carolina Vallejo",
};

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto Condensed', Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 700,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #f59e0b, #ef4444)",
            borderRadius: 99,
            padding: "6px 20px",
            fontSize: 13,
            fontWeight: 700,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 24,
          }}
        >
          ★ Colección Premium ★
        </div>

        <h1
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: 3,
            lineHeight: 1.05,
            margin: "0 0 16px 0",
          }}
        >
          Camisas Deportivas
        </h1>

        <p
          style={{
            fontSize: 26,
            color: "#f59e0b",
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          DE ALTA CALIDAD
        </p>
      </div>

      {/* CTA Card */}
      <Link
        href="/video-player"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          padding: "40px 60px",
          borderRadius: 24,
          background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))",
          border: "1px solid rgba(245,158,11,0.35)",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 0 40px rgba(245,158,11,0.15)",
          cursor: "pointer",
          marginBottom: 50,
        }}
      >
        <div style={{ fontSize: 64 }}>▶️</div>
        <span
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Ver Video Promocional
        </span>
        <span
          style={{
            fontSize: 15,
            color: "#9ca3af",
            letterSpacing: 2,
          }}
        >
          Reproducir en el navegador
        </span>
      </Link>

      {/* Contact */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "18px 36px",
          borderRadius: 50,
          backgroundColor: "rgba(37,211,102,0.1)",
          border: "1px solid rgba(37,211,102,0.3)",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#25d366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span
          style={{
            color: "#25d366",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          3114612022 - Carolina Vallejo
        </span>
      </div>

      <p
        style={{
          marginTop: 20,
          color: "#4b5563",
          fontSize: 13,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Pedidos exclusivamente por mensaje directo
      </p>
    </div>
  );
}
