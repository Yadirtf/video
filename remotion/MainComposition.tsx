import { AbsoluteFill, Sequence } from "remotion";
import { VideoScene1 } from "./VideoScene1";
import { VideoScene2 } from "./VideoScene2";

export interface MainCompositionProps extends Record<string, unknown> {
  description: string;
  contactName: string;
  contactNumber: string;
  video1DurationFrames: number;
  video2DurationFrames: number;
  overlapFrames: number;
}

export const MainComposition: React.FC<MainCompositionProps> = ({
  description,
  contactName,
  contactNumber,
  video1DurationFrames,
  video2DurationFrames,
  overlapFrames,
}) => {
  // Video 2 starts where video 1 ends minus the overlap
  const video2StartFrame = video1DurationFrames - overlapFrames;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Scene 1 */}
      <Sequence from={0} durationInFrames={video1DurationFrames}>
        <VideoScene1 description={description} />
      </Sequence>

      {/* Scene 2 — starts slightly overlapping scene 1 */}
      <Sequence from={video2StartFrame} durationInFrames={video2DurationFrames}>
        <VideoScene2
          contactName={contactName}
          contactNumber={contactNumber}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
