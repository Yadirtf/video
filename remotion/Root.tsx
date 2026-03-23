import { Composition } from "remotion";
import { MainComposition, type MainCompositionProps } from "./MainComposition";

// Durations must be calculated based on actual video lengths.
// video1.mp4 ≈ short clip, video2.mp4 ≈ longer clip.
// We'll set them dynamically via input props or fixed defaults here.
// Default: 30fps, video1 = 5s (150f), video2 = 10s (300f), overlap = 8f
// Total = 150 + 300 - 8 = 442 frames

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainComposition"
        component={MainComposition}
        durationInFrames={442}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          description: "Camisas Deportivas de Alta CALIDAD",
          contactName: "Carolina Vallejo",
          contactNumber: "3114612022",
          video1DurationFrames: 150,
          video2DurationFrames: 300,
          overlapFrames: 8,
        }}
      />
    </>
  );
};
