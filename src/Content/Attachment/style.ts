import { css, keyframes, styled, theme } from "@root/Stitches/stitches.config";
import SvgPause from "@images/discordAssets/pause.svg";
import SvgPlay from "@images/discordAssets/play.svg";
import SvgFullscreen from "@images/discordAssets/fullscreen.svg";

export const ImageAttachment = styled(
  "img",
  "image-attachment",
  css({
    cursor: "pointer",
  })
);

export const VideoAttachmentContainer = styled(
  "div",
  "video-attachment-container",
  css({
    borderRadius: 3,
    overflow: "hidden",
    maxWidth: "min(400px, 100%)",
    backgroundColor: theme.colors.backgroundTertiary,
    cursor: "pointer",
    position: "relative",
    display: "flex",
  })
);

export const VideoAttachment = styled(
  "video",
  "video-attachment",
  css({
    outline: "none",
    cursor: "pointer",

    "&[width]": {
      maxWidth: "min(400px, 100%)",
    },

    "&:not([width])": {
      position: "fixed",
      width: "100%",
      height: "100%",
    },
  })
);

export const VideoAttachmentOverlay = styled(
  "div",
  "video-attachment-overlay",
  css({
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    color: theme.colors.primaryOpacity100,

    $$overlayMetaDataTranslateY: "-100%",
    $$overlayControlsTranslateY: "100%",

    "&[data-paused='true']": {
      $$overlayMetaDataTranslateY: "0 !important",
    },

    "&:hover": {
      $$overlayMetaDataTranslateY: 0,
      $$overlayControlsTranslateY: 0,
    },

    "&[data-paused='true'][data-played-once='true']": {
      $$overlayControlsTranslateY: 0,
    },

    "&[data-played-once='false']": {
      $$overlayControlsTranslateY: "100%",
    },
  })
);

export const VideoAttachmentOverlayControl = styled(
  "div",
  "video-attachment-overlay-control",
  css({
    flex: "1 0",
  })
);

const stateChange = keyframes({
  from: {
    backgroundColor: theme.colors.transparentBlack,
    scale: 1.5,
  },
  to: {
    scale: 2.5,
  },
});

export const PlayOrPauseAnimationDuration = 400;

export const PlayOrPauseButtonAnimation = styled(
  "div",
  "play-or-pause-button-animation",
  css({
    position: "absolute",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    width: 40,
    height: 40,
    borderRadius: "100%",
    padding: theme.space.xl,
    pointerEvents: "none",
    boxSizing: "border-box",

    backgroundPosition: "center",
    backgroundSize: 12,
    backgroundRepeat: "no-repeat",

    "&[data-has-played-before='true']": {
      animation: `${stateChange} ${PlayOrPauseAnimationDuration}ms ease-in-out`,
    },

    "&[data-has-played-before='false']": {
      backgroundColor: theme.colors.transparentBlack,
    },

    "&[data-has-played-before='false'], &[data-paused='false']": {
      backgroundImage: `url(${SvgPlay})`,
    },

    "&[data-has-played-before='true'][data-paused='true']": {
      backgroundImage: `url(${SvgPause})`,
    },
  })
);

export const VideoMetadata = styled(
  "div",
  "video-metadata",
  css({
    padding: theme.space.xl,
    transition: "translate 0.1s ease-in-out",
    translate: "0 $$overlayMetaDataTranslateY",

    backgroundImage: `linear-gradient(0deg, transparent, ${theme.colors.transparentBlack})`,
  })
);

export const VideoMetadataTitle = styled(
  "div",
  "video-metadata-title",
  css({
    fontSize: theme.fontSizes.l,
    fontWeight: 500,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  })
);

export const VideoMetadataFilesize = styled(
  "div",
  "video-metadata-filesize",
  css({
    fontWeight: 500,
    fontSize: theme.fontSizes.s,
    opacity: 0.7,
  })
);

export const VideoControls = styled(
  "div",
  "video-controls",
  css({
    position: "absolute",
    display: "flex",
    bottom: 0,
    width: "100%",
    padding: theme.space.large,
    paddingTop: theme.space.medium,
    paddingBottom: theme.space.medium,
    gap: theme.space.large,
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: theme.colors.transparentBlack,

    transition: "translate 0.1s ease-in-out",
    translate: "0 $$overlayControlsTranslateY",
  })
);

export const VideoControlsTime = styled(
  "div",
  "video-controls-time",
  css({
    fontSize: theme.fontSizes.s,
    fontFamily: "Consolas, monospace",
    userSelect: "none",
  })
);

export const VideoControlButton = styled(
  "button",
  "video-control-button",
  css({
    $$size: "14px",

    width: "$$size",
    height: "$$size",
    border: "none",
    background: "none",
    backgroundSize: "$$size $$size",
    transition: "opacity 0.1s ease-in-out",
    opacity: 0.6,
    cursor: "pointer",

    "&:hover": {
      opacity: 1,
    },

    variants: {
      type: {
        playButton: {
          backgroundImage: `url(${SvgPlay})`,
        },
        pauseButton: {
          backgroundImage: `url(${SvgPause})`,
        },
        fullscreen: {
          backgroundImage: `url(${SvgFullscreen})`,
        },
      },
    },
  })
);

export const ProgressBarFill = styled(
  "div",
  "progress-bar-fill",
  css({
    height: "100%",
    position: "relative",
    borderRadius: "$$borderRadius",
    pointerEvents: "none",
    backgroundColor: theme.colors.accent,
  })
);

export const ProgressBar = styled(
  "div",
  "progress-bar",
  css({
    $$borderRadius: "80px",

    height: 6,
    borderRadius: "$$borderRadius",
    flex: "1 0",
    cursor: "pointer",
    backgroundColor: theme.colors.primaryOpacity30,

    [`&:hover ${ProgressBarFill}:after`]: {
      content: "",
      position: "absolute",
      right: 0,
      top: "50%",
      width: 12,
      height: 12,
      borderRadius: "100%",
      translate: "50% -50%",
      backgroundColor: theme.colors.accent,
    },
  })
);

export const Spoiler = styled(
  "div",
  "spoiler",
  css({
    overflow: "hidden",
    position: "relative",
    width: "fit-content",
    height: "fit-content",
    borderRadius: 3,

    "& > *": {
      transition: "filter 0.2s ease-in-out",
      filter: "blur(44px)",
    },

    "&[data-show='true'] > *": {
      filter: "blur(0)",
    },

    "&[data-show='false']": {
      cursor: "pointer",

      "& > *": {
        pointerEvents: "none",
      },

      "&:after": {
        content: "SPOILER",
        backgroundColor: theme.colors.transparentBlack,
        color: theme.colors.primaryOpacity100,
        borderRadius: 100,
        padding: `${theme.space.large} ${theme.space.xl}`,
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
        fontWeight: 600,
        fontSize: theme.fontSizes.l,
        letterSpacing: 0.5,
      },

      "&:hover:after": {
        backgroundColor: theme.colors.blackSpoilerHover,
      },
    },
  })
);

export const AttachmentContainer = styled(
  "div",
  "attachment-container",
  css({
    display: "flex",
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 10,
    border: `1px solid ${theme.colors.attachmentBorder}`,
    borderRadius: 3,
    width: "fit-content",
    flexWrap: "wrap",

    variants: {
      withoutChildren: {
        true: {
          alignItems: "center",
        },
      },
    },
  })
);

export const AttachmentMetadata = styled(
  "div",
  "attachment-metadata",
  css({
    margin: `0 ${theme.space.large}`,
    display: "flex",
    flexDirection: "column",
  })
);

export const AttachmentFileName = styled(
  "a",
  "attachment-file-name",
  css({
    color: theme.colors.link,
    maxWidth: "40vw",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  })
);

export const AttachmentFileSize = styled(
  "span",
  "attachment-file-size",
  css({
    fontSize: theme.fontSizes.s,
    color: theme.colors.primaryDark,
  })
);

export const DownloadIcon = styled(
  "a",
  "attachment-download-icon",
  css({
    opacity: 0.8,
    marginLeft: "auto",
    color: theme.colors.primaryOpacity100,
    display: "flex",

    "&:hover": {
      opacity: 1,
    },
  })
);

export const ExtraUserInterface = styled(
  "div",
  "attachment-extra-ui",
  css({
    flexBasis: "100%",
    marginTop: theme.space.large,
    display: "flex",
  })
);

export const AttachmentAudioControls = styled(
  "audio",
  "attachment-audio-controls",
  css({
    flex: 1,
    height: 32,
    outline: "none",
    borderRadius: 3,
    maxWidth: "70vw",
  })
);
