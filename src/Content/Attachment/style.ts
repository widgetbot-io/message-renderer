import {
  commonComponentId,
  keyframes,
  styled,
  theme,
} from "../../Stitches/stitches.config";
import SvgFromUrl from "../../SvgFromUrl";

export const ImageAttachment = styled.withConfig({
  displayName: "image-attachment",
  componentId: commonComponentId,
})(
  "img",
  {
    cursor: "pointer",
    maxWidth: "100%",
  }
);

export const VideoAttachmentContainer = styled.withConfig({
  displayName: "video-attachment-container",
  componentId: commonComponentId,
})(
  "div",
  {
    borderRadius: 3,
    overflow: "hidden",
    maxWidth: "min(400px, 100%)",
    backgroundColor: theme.colors.backgroundTertiary,
    cursor: "pointer",
    position: "relative",
    display: "flex",
  }
);

export const VideoAttachment = styled.withConfig({
  displayName: "video-attachment",
  componentId: commonComponentId,
})(
  "video",
  {
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
  }
);

export const VideoAttachmentOverlay = styled.withConfig({
  displayName: "video-attachment-overlay",
  componentId: commonComponentId,
})(
  "div",
  {
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
  }
);

export const VideoAttachmentOverlayControl = styled.withConfig({
  displayName: "video-attachment-overlay-control",
  componentId: commonComponentId,
})(
  "div",
  {
    flex: "1 0",
  }
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

export const PlayOrPauseButtonAnimation = styled.withConfig({
  displayName: "play-or-pause-button-animation",
  componentId: commonComponentId,
})(
  "div",
  {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&[data-has-played-before='true']": {
      animation: `${stateChange} ${PlayOrPauseAnimationDuration}ms ease-in-out`,
    },

    "&[data-has-played-before='false']": {
      backgroundColor: theme.colors.transparentBlack,
    },
  }
);

export const VideoMetadata = styled.withConfig({
  displayName: "video-metadata",
  componentId: commonComponentId,
})(
  "div",
  {
    padding: theme.space.xl,
    transition: "translate 0.1s ease-in-out",
    translate: "0 $$overlayMetaDataTranslateY",

    backgroundImage: `linear-gradient(0deg, transparent, ${theme.colors.transparentBlack})`,
  }
);

export const VideoMetadataTitle = styled.withConfig({
  displayName: "video-metadata-title",
  componentId: commonComponentId,
})(
  "div",
  {
    fontSize: theme.fontSizes.l,
    fontWeight: 500,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  }
);

export const VideoMetadataFilesize = styled.withConfig({
  displayName: "video-metadata-filesize",
  componentId: commonComponentId,
})(
  "div",
  {
    fontWeight: 500,
    fontSize: theme.fontSizes.s,
    opacity: 0.7,
  }
);

export const VideoControls = styled.withConfig({
  displayName: "video-controls",
  componentId: commonComponentId,
})(
  "div",
  {
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
  }
);

export const VideoControlsTime = styled.withConfig({
  displayName: "video-controls-time",
  componentId: commonComponentId,
})(
  "div",
  {
    fontSize: theme.fontSizes.s,
    fontFamily: "Consolas, monospace",
    userSelect: "none",
  }
);

export const VideoControlButton = styled.withConfig({
  displayName: "video-control-button",
  componentId: commonComponentId,
})(
  SvgFromUrl,
  {
    border: "none",
    background: "none",
    backgroundSize: "$$size $$size",
    transition: "opacity 0.1s ease-in-out",
    opacity: 0.6,
    cursor: "pointer",

    "&:hover": {
      opacity: 1,
    },
  }
);

export const ProgressBarFill = styled.withConfig({
  displayName: "progress-bar-fill",
  componentId: commonComponentId,
})(
  "div",
  {
    height: "100%",
    position: "relative",
    borderRadius: "$$borderRadius",
    pointerEvents: "none",
    backgroundColor: theme.colors.accent,
  }
);

export const ProgressBar = styled.withConfig({
  displayName: "progress-bar",
  componentId: commonComponentId,
})(
  "div",
  {
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
  }
);

export const Spoiler = styled.withConfig({
  displayName: "spoiler",
  componentId: commonComponentId,
})(
  "div",
  {
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
  }
);

export const AttachmentContainer = styled.withConfig({
  displayName: "attachment-container",
  componentId: commonComponentId,
})(
  "div",
  {
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
  }
);

export const AttachmentMetadata = styled.withConfig({
  displayName: "attachment-metadata",
  componentId: commonComponentId,
})(
  "div",
  {
    margin: `0 ${theme.space.large}`,
    display: "flex",
    flexDirection: "column",
  }
);

export const AttachmentFileName = styled.withConfig({
  displayName: "attachment-file-name",
  componentId: commonComponentId,
})(
  "a",
  {
    color: theme.colors.link,
    maxWidth: "40vw",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  }
);

export const AttachmentFileSize = styled.withConfig({
  displayName: "attachment-file-size",
  componentId: commonComponentId,
})(
  "span",
  {
    fontSize: theme.fontSizes.s,
    color: theme.colors.primaryDark,
  }
);

export const DownloadIcon = styled.withConfig({
  displayName: "attachment-download-icon",
  componentId: commonComponentId,
})(
  "a",
  {
    opacity: 0.8,
    marginLeft: "auto",
    color: theme.colors.primaryOpacity100,
    display: "flex",

    "&:hover": {
      opacity: 1,
    },
  }
);

export const ExtraUserInterface = styled.withConfig({
  displayName: "attachment-extra-ui",
  componentId: commonComponentId,
})(
  "div",
  {
    flexBasis: "100%",
    marginTop: theme.space.large,
    display: "flex",
  }
);

export const AttachmentAudioControls = styled.withConfig({
  displayName: "attachment-audio-controls",
  componentId: commonComponentId
})("audio",
  {
    flex: 1,
    height: 32,
    outline: "none",
    borderRadius: 3,
    maxWidth: "70vw",
  }
);
