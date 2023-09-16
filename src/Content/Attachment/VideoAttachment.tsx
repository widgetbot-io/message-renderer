import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { filesize } from "filesize";
import useSize from "./useSize";
import * as Styles from "./style";
import Tooltip from "../../Tooltip";
import SvgFromUrl from "../../SvgFromUrl";
import type { APIAttachment, APIEmbed } from "discord-api-types/v10";
import { error } from "../../utils/error";

export type Attachment = APIAttachment & { width: number; height: number };
type Embed = APIEmbed & {
  width: number;
  height: number;
  video: Required<APIEmbed["video"]>;
};

interface VideoAttachmentProps {
  attachmentOrEmbed:
    | Attachment
    | Embed
    | {
        url: string;
        width: number;
        height: number;
      };
}

function checkWhetherVideoEmbed(
  attachmentOrEmbed: VideoAttachmentProps["attachmentOrEmbed"]
): attachmentOrEmbed is Embed {
  return "video" in attachmentOrEmbed;
}

function isValidEmbedVideo(
  embedVideo: APIEmbed["video"] | null
): embedVideo is Exclude<APIEmbed["video"], null | undefined> {
  return embedVideo !== null;
}

function VideoAttachment(props: VideoAttachmentProps) {
  const [hasPlayedOnceBefore, setHasPlayedOnceBefore] = useState(false);
  const [paused, setPaused] = useState(true);
  const [showPlayOrPauseAnimation, setShowPlayOrPauseAnimation] =
    useState(false);
  const [durationPlayed, setDurationPlayed] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const attachmentRef = useRef<HTMLDivElement>(null);

  const durationPlayedHumanized = useMemo(() => {
    if (videoRef.current === null) return "0:00/0:00";

    const minutesPassed = Math.floor(videoRef.current?.currentTime / 60);
    const secondsPassedRaw = Math.floor(videoRef.current?.currentTime % 60);
    const secondsPassed =
      secondsPassedRaw < 10 ? `0${secondsPassedRaw}` : secondsPassedRaw;

    const minutesTotal = Math.floor(videoRef.current?.duration / 60);
    const secondsTotalRaw = Math.floor(videoRef.current?.duration % 60);
    const secondsTotal =
      secondsTotalRaw < 10 ? `0${secondsTotalRaw}` : secondsTotalRaw;

    return `${minutesPassed}:${secondsPassed}/${minutesTotal}:${secondsTotal}`;
  }, [durationPlayed, videoRef.current]);

  function playVideo() {
    const video = videoRef.current;

    if (video === null) return;

    if (video.paused) void video.play();
    else video.pause();
  }

  const updatePauseState = useCallback((pauseState: boolean) => {
    setPaused(pauseState);
    setShowPlayOrPauseAnimation(true);
    setTimeout(
      () => setShowPlayOrPauseAnimation(false),
      Styles.PlayOrPauseAnimationDuration
    );
  }, []);

  if (
    checkWhetherVideoEmbed(props.attachmentOrEmbed) &&
    !isValidEmbedVideo(props.attachmentOrEmbed)
  ) {
    error("Video embed has no video property", props.attachmentOrEmbed);
    return null;
  }

  const { width: extractedWidth, height: extractedHeight } =
    checkWhetherVideoEmbed(props.attachmentOrEmbed)
      ? (props.attachmentOrEmbed.video as Exclude<
          Embed["video"],
          null | undefined
        >)
      : props.attachmentOrEmbed;

  function fullScreenChange() {
    setIsFullscreen(document.fullscreenElement !== null);
  }
  function seekVideo(
    e: React.MouseEvent<HTMLDivElement>,
    overrideSeeking?: boolean
  ) {
    if (videoRef.current === null || (!isSeeking && !overrideSeeking)) return;
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const duration = videoRef.current?.duration;

    if (duration === undefined) return;
    videoRef.current.currentTime = (x / rect.width) * duration;
  }
  useEffect(() => {
    document.addEventListener("fullscreenchange", fullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", fullScreenChange);
    };
  }, []);

  const { width, height } = useSize(
    extractedWidth,
    extractedHeight,
    isFullscreen
  );

  if (width === undefined || height === undefined) return null;

  return (
    <Styles.VideoAttachmentContainer
      style={{ width, height }}
      ref={attachmentRef}
    >
      <Styles.VideoAttachment
        preload="metadata"
        src={props.attachmentOrEmbed.url}
        height={height}
        width={width}
        ref={videoRef}
        onPause={() => updatePauseState(true)}
        onPlay={() => {
          updatePauseState(false);
          setHasPlayedOnceBefore(true);
        }}
        onTimeUpdate={({ timeStamp }) => setDurationPlayed(timeStamp)}
      />
      <Styles.VideoAttachmentOverlay
        data-paused={paused}
        data-played-once={hasPlayedOnceBefore}
      >
        {(showPlayOrPauseAnimation || !hasPlayedOnceBefore) && (
          <Styles.PlayOrPauseButtonAnimation
            data-paused={paused}
            data-has-played-before={hasPlayedOnceBefore}
          >
            <SvgFromUrl
              width={12}
              height={12}
              svg={paused ? "IconPlay" : "IconPause"}
            />
          </Styles.PlayOrPauseButtonAnimation>
        )}
        {"filename" in props.attachmentOrEmbed && (
          <Styles.VideoMetadata>
            <Styles.VideoMetadataTitle>
              {props.attachmentOrEmbed.filename}
            </Styles.VideoMetadataTitle>
            <Styles.VideoMetadataFilesize>
              {filesize(props.attachmentOrEmbed.size, { base: 2 }) as string}
            </Styles.VideoMetadataFilesize>
          </Styles.VideoMetadata>
        )}
        <Styles.VideoAttachmentOverlayControl onClick={playVideo} />
        <Styles.VideoControls>
          <Styles.VideoControlButton
            width={14}
            height={14}
            svg={paused ? "IconPlay" : "IconPause"}
            onClick={playVideo}
          />
          {width > 200 && (
            <Styles.VideoControlsTime>
              {durationPlayedHumanized}
            </Styles.VideoControlsTime>
          )}
          <Styles.ProgressBar
            onMouseMove={seekVideo}
            onClick={(e) => seekVideo(e, true)}
            onMouseDown={() => setIsSeeking(true)}
            onMouseUp={() => setIsSeeking(false)}
          >
            <Styles.ProgressBarFill
              style={{
                width:
                  ((videoRef.current?.currentTime ?? 0) /
                    (videoRef.current?.duration ?? 1)) *
                    100 +
                  "%",
              }}
            />
          </Styles.ProgressBar>
          <Tooltip placement="top" overlay="Full Screen">
            <Styles.VideoControlButton
              width={14}
              height={14}
              svg="IconFullscreen"
              onClick={() => {
                if (
                  attachmentRef.current !== null &&
                  document.fullscreenElement === null
                )
                  attachmentRef.current?.requestFullscreen();
                else void document.exitFullscreen();
              }}
            />
          </Tooltip>
        </Styles.VideoControls>
      </Styles.VideoAttachmentOverlay>
    </Styles.VideoAttachmentContainer>
  );
}

export default VideoAttachment;
