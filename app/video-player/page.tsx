"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { getVideoMetadata } from "@remotion/media-utils";
import { MainComposition } from "../../remotion/MainComposition";
import Link from "next/link";

const FPS = 30;
const OVERLAP_FRAMES = 8;

export default function VideoPlayerPage() {
  const [durations, setDurations] = useState<{
    v1: number;
    v2: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDurations() {
      try {
        const [meta1, meta2] = await Promise.all([
          getVideoMetadata("/video1.mp4"),
          getVideoMetadata("/video2.mp4"),
        ]);
        setDurations({
          v1: Math.round(meta1.durationInSeconds * FPS),
          v2: Math.round(meta2.durationInSeconds * FPS),
        });
      } catch (e) {
        console.error(e);
        // Fallback: usar valores estimados
        setDurations({ v1: 150, v2: 300 });
        setError("Usando duración estimada");
      }
    }
    loadDurations();
  }, []);

  if (!durations) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 48,
              height: 48,
              border: "4px solid #f59e0b",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              color: "#9ca3af",
              fontFamily: "Arial, sans-serif",
              fontSize: 16,
              letterSpacing: 2,
            }}
          >
            Cargando videos...
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  const totalFrames = durations.v1 + durations.v2 - OVERLAP_FRAMES;

  const props = {
    description: "Camisas Deportivas de Alta CALIDAD",
    contactName: "Carolina Vallejo",
    contactNumber: "3114612022",
    video1DurationFrames: durations.v1,
    video2DurationFrames: durations.v2,
    overlapFrames: OVERLAP_FRAMES,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto Condensed', Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 900,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: 4,
            margin: "0 0 8px 0",
          }}
        >
          📽️ Video Promocional
        </h1>
        <p
          style={{
            color: "#9ca3af",
            margin: 0,
            fontSize: 15,
            letterSpacing: 2,
          }}
        >
          Camisas Deportivas de Alta Calidad
        </p>
        {error && (
          <p style={{ color: "#f59e0b", fontSize: 12, marginTop: 6 }}>
            ⚠️ {error}
          </p>
        )}
      </div>

      {/* Player */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          boxShadow:
            "0 0 60px rgba(245,158,11,0.25), 0 0 120px rgba(0,0,0,0.8)",
          border: "1px solid rgba(245,158,11,0.2)",
        }}
      >
        <Player
          component={MainComposition}
          inputProps={props}
          durationInFrames={totalFrames}
          fps={FPS}
          compositionWidth={1080}
          compositionHeight={1920}
          style={{
            width: 340,
            height: 604,
          }}
          controls
          loop
          autoPlay
        />
      </div>

      {/* Duración info */}
      <div
        style={{
          marginTop: 16,
          color: "#4b5563",
          fontSize: 12,
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Video 1: {(durations.v1 / FPS).toFixed(1)}s &nbsp;|&nbsp; Video 2:{" "}
        {(durations.v2 / FPS).toFixed(1)}s &nbsp;|&nbsp; Total:{" "}
        {(totalFrames / FPS).toFixed(1)}s
      </div>

      {/* Contact */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 28px",
          borderRadius: 50,
          backgroundColor: "rgba(37,211,102,0.1)",
          border: "1px solid rgba(37,211,102,0.3)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#25d366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span
          style={{
            color: "#25d366",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          3114612022 - Carolina Vallejo
        </span>
      </div>

      {/* Back */}
      <Link
        href="/"
        style={{
          marginTop: 20,
          color: "#6b7280",
          textDecoration: "none",
          fontSize: 13,
          letterSpacing: 1,
        }}
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
