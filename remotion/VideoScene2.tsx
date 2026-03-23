import {
  AbsoluteFill,
  Video,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  staticFile,
} from "remotion";

export interface Scene2Props {
  contactName: string;
  contactNumber: string;
}

export const VideoScene2: React.FC<Scene2Props> = ({
  contactName,
  contactNumber,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // CTA aparece en los últimos 90 frames (3 segundos)
  const ctaStartFrame = durationInFrames - 90;
  const ctaFrame = Math.max(0, frame - ctaStartFrame);

  // "Escríbenos" aparece primero con spring
  const escribenosSpring = spring({
    frame: ctaFrame,
    fps,
    config: { damping: 10, stiffness: 100, mass: 0.6 },
    durationInFrames: 40,
  });

  // Número aparece después de "Escríbenos"
  const numberSpring = spring({
    frame: ctaFrame - 20,
    fps,
    config: { damping: 12, stiffness: 80, mass: 0.8 },
    durationInFrames: 40,
  });

  // Nombre aparece al final
  const nameSpring = spring({
    frame: ctaFrame - 35,
    fps,
    config: { damping: 14, stiffness: 70, mass: 0.9 },
    durationInFrames: 35,
  });

  // Pulso del ícono WhatsApp
  const waPulse = 1 + Math.sin(frame * 0.2) * 0.06 * (ctaFrame > 10 ? 1 : 0);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Video 2 se reproduce normal */}
      <Video
        src={staticFile("video2.mp4")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Gradiente inferior para CTA */}
      {ctaFrame > 0 && (
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, transparent 75%)",
            opacity: interpolate(ctaFrame, [0, 20], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        />
      )}

      {/* CTA Container */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 70,
          gap: 0,
        }}
      >
        {/* "¡Escríbenos!" */}
        <div
          style={{
            fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif",
            fontSize: 58,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 3,
            opacity: escribenosSpring,
            transform: `scale(${interpolate(escribenosSpring, [0, 1], [0.5, 1])}) translateY(${interpolate(escribenosSpring, [0, 1], [40, 0])}px)`,
            marginBottom: 10,
          }}
        >
          ✍️ ¡Escríbenos!
        </div>

        {/* Línea separadora */}
        <div
          style={{
            width: interpolate(numberSpring, [0, 1], [0, 280]),
            height: 2,
            background: "linear-gradient(90deg, #25d366, #128c7e)",
            marginBottom: 18,
          }}
        />

        {/* Ícono WhatsApp + Número */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 18,
            opacity: numberSpring,
            transform: `translateY(${interpolate(numberSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          {/* WhatsApp icon */}
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#25d366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${waPulse})`,
              boxShadow: "0 0 20px rgba(37,211,102,0.6)",
            }}
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Número */}
          <div
            style={{
              fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif",
              fontSize: 54,
              fontWeight: 900,
              color: "#25d366",
              letterSpacing: 2,
              textShadow: "0 0 20px rgba(37,211,102,0.5)",
            }}
          >
            {contactNumber}
          </div>
        </div>

        {/* Nombre de contacto */}
        <div
          style={{
            fontFamily: "'Roboto Condensed', Arial, sans-serif",
            fontSize: 28,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: 4,
            marginTop: 12,
            textTransform: "uppercase",
            opacity: nameSpring * 0.9,
            transform: `translateY(${interpolate(nameSpring, [0, 1], [15, 0])}px)`,
          }}
        >
          {contactName}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
