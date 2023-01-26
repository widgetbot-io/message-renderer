import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { filesize } from "filesize";
import useSize from "@root/Content/Attachment/useSize";
import { Message_attachments, Message_embeds } from "@types";
import * as Styles from "./style";
import Tooltip from "@root/Tooltip";
import SvgFromUrl from "@root/SvgFromUrl";

interface VideoAttachmentProps {
  attachmentOrEmbed:
    | Message_attachments
    | Message_embeds
    | {
        url: string;
        width: number;
        height: number;
      };
}

function VideoAttachment(props: VideoAttachmentProps) {
  const [hasPlayedOnceBefore, setHasPlayedOnceBefore] = useState(false);
  const [paused, setPaused] = useState(true);
  const [showPlayOrPauseAnimation, setShowPlayOrPauseAnimation] =
    useState(false);
  const [durationPlayed, setDurationPlayed] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);

  const videoRef = useRef(null);
  const attachmentRef = useRef(null);

  const durationPlayedHumanized = useMemo(() => {
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

  const playVideo = () => {
    const video = videoRef.current;

    if (video === null) return;

    if (video.paused) video.play();
    else video.pause();
  };

  const updatePauseState = useCallback((pauseState: boolean) => {
    setPaused(pauseState);
    setShowPlayOrPauseAnimation(true);
    setTimeout(
      () => setShowPlayOrPauseAnimation(false),
      Styles.PlayOrPauseAnimationDuration
    );
  }, []);

  const { width: extractedWidth, height: extractedHeight } =
    "width" in props.attachmentOrEmbed
      ? props.attachmentOrEmbed
      : props.attachmentOrEmbed.video;

  const { width, height } = useSize(
    extractedWidth,
    extractedHeight,
    isFullscreen
  );

  const fullScreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const seekVideo = (e, overrideSeeking?: boolean) => {
    if (videoRef.current === null || (!isSeeking && !overrideSeeking)) return;

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const duration = videoRef.current?.duration;
    if (duration === undefined) return;

    videoRef.current.currentTime = (x / rect.width) * duration;
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", fullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", fullScreenChange);
    };
  }, []);

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
                  (videoRef.current?.currentTime / videoRef.current?.duration) *
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
                if (document.fullscreenElement === null)
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
