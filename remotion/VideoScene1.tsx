import {
  AbsoluteFill,
  Video,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
  staticFile,
} from "remotion";

export interface Scene1Props {
  description: string;
}

export const VideoScene1: React.FC<Scene1Props> = ({ description }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Overlay aparece a los 0.5s
  const overlayEntry = spring({
    frame: frame - Math.round(fps * 0.5),
    fps,
    config: { damping: 12, stiffness: 80, mass: 0.8 },
    durationInFrames: Math.round(fps * 1.2),
  });

  // Efecto shimmer cada 3 segundos
  const shimmerCycle = (frame % (fps * 3)) / (fps * 3);
  const shimmerOpacity =
    shimmerCycle < 0.15 ? shimmerCycle / 0.15 : shimmerCycle < 0.3 ? 1 - (shimmerCycle - 0.15) / 0.15 : 0;
  const shimmerX = interpolate(shimmerCycle, [0, 0.3], [-100, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.ease,
  });

  // Salida suave al final
  const fadeOut = interpolate(
    frame,
    [durationInFrames - Math.round(fps * 0.4), durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Video principal */}
      <Video
        src={staticFile("video1.mp4")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Gradiente inferior */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)",
          opacity: overlayEntry * fadeOut,
        }}
      />

      {/* Overlay de texto */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 60,
          opacity: overlayEntry * fadeOut,
        }}
      >
        {/* Línea decorativa */}
        <div
          style={{
            width: interpolate(overlayEntry, [0, 1], [0, 220]),
            height: 3,
            background: "linear-gradient(90deg, #f59e0b, #ef4444)",
            borderRadius: 99,
            marginBottom: 18,
          }}
        />

        {/* Descripción principal */}
        <div
          style={{
            fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif",
            fontSize: 52,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
            lineHeight: 1.1,
            position: "relative",
            overflow: "hidden",
            padding: "0 20px",
            transform: `translateY(${interpolate(overlayEntry, [0, 1], [30, 0])}px)`,
          }}
        >
          {description}

          {/* Shimmer effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: shimmerX,
              width: 80,
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              opacity: shimmerOpacity,
              pointerEvents: "none",
              transform: "skewX(-20deg)",
            }}
          />
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontFamily: "'Roboto Condensed', Arial, sans-serif",
            fontSize: 26,
            color: "#f59e0b",
            fontWeight: 700,
            letterSpacing: 6,
            marginTop: 10,
            textTransform: "uppercase",
            opacity: interpolate(overlayEntry, [0, 1], [0, 0.9]),
          }}
        >
          ★ EXCLUSIVA ★
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
