import {
  VideoAttachmentBase,
  VideoAttachmentContainerBase,
  VideoAttachmentOverlay,
} from "@root/Content/Attachment/elements";
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
      VideoAttachmentOverlay.PlayOrPauseAnimationDuration
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
    <div
      className={VideoAttachmentContainerBase}
      style={{ width, height }}
      ref={attachmentRef}
    >
      <video
        className={VideoAttachmentBase}
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
      <VideoAttachmentOverlay.Base
        data-paused={paused}
        data-played-once={hasPlayedOnceBefore}
      >
        {(showPlayOrPauseAnimation || !hasPlayedOnceBefore) && (
          <VideoAttachmentOverlay.PlayOrPauseButtonAnimation
            data-paused={paused}
            data-has-played-before={hasPlayedOnceBefore}
          />
        )}
        {"filename" in props.attachmentOrEmbed && (
          <VideoAttachmentOverlay.MetadataBase>
            <VideoAttachmentOverlay.MetadataTitleBase>
              {props.attachmentOrEmbed.filename}
            </VideoAttachmentOverlay.MetadataTitleBase>
            <VideoAttachmentOverlay.MetadataFilesizeBase>
              {filesize(props.attachmentOrEmbed.size, { base: 2 }) as string}
            </VideoAttachmentOverlay.MetadataFilesizeBase>
          </VideoAttachmentOverlay.MetadataBase>
        )}
        <VideoAttachmentOverlay.Control onClick={playVideo} />
        <VideoAttachmentOverlay.VideoControlsBase>
          <VideoAttachmentOverlay.PlayOrPauseButtonBase
            data-paused={paused}
            onClick={playVideo}
          />
          {width > 200 && (
            <VideoAttachmentOverlay.VideoControlsTimeBase>
              {durationPlayedHumanized}
            </VideoAttachmentOverlay.VideoControlsTimeBase>
          )}
          <VideoAttachmentOverlay.ProgressBarBase
            onMouseMove={seekVideo}
            onClick={(e) => seekVideo(e, true)}
            onMouseDown={() => setIsSeeking(true)}
            onMouseUp={() => setIsSeeking(false)}
          >
            <VideoAttachmentOverlay.ProgressBarFillBase
              className="progress-bar-fill"
              style={{
                width:
                  (videoRef.current?.currentTime / videoRef.current?.duration) *
                    100 +
                  "%",
              }}
            />
          </VideoAttachmentOverlay.ProgressBarBase>
          <VideoAttachmentOverlay.FullscreenButtonBase
            onClick={() => {
              if (document.fullscreenElement === null)
                attachmentRef.current?.requestFullscreen();
              else document.exitFullscreen();
            }}
          />
        </VideoAttachmentOverlay.VideoControlsBase>
      </VideoAttachmentOverlay.Base>
    </div>
  );
}

export default VideoAttachment;
