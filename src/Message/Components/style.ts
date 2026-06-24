import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ExternalLink from "../../ExternalLink";

export const Components = styled.withConfig({
  displayName: "message-components",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
});

export const ButtonComponent = styled.withConfig({
  displayName: "button-component",
  componentId: commonComponentId,
})("button", {
  padding: `${theme.space.xs} ${theme.space.xxl}`,
  cursor: "pointer",
  fontWeight: 500,
  fontSize: theme.fontSizes.m,
  lineHeight: "16px",
  border: "none",
  borderRadius: 3,
  color: theme.colors.primaryOpacity100,
  display: "block",
  transition: "background-color .17s ease",
  textDecoration: "none",
  fontFamily: theme.fonts.main,
  height: 32,
  boxSizing: "border-box",

  variants: {
    buttonStyle: {
      primary: {
        backgroundColor: theme.colors.buttonPrimaryBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonPrimaryHoverBackground,
        },
      },
      secondary: {
        backgroundColor: theme.colors.buttonSecondaryBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonSecondaryHoverBackground,
        },
      },
      danger: {
        backgroundColor: theme.colors.buttonDangerBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonDangerHoverBackground,
        },
      },
      success: {
        backgroundColor: theme.colors.buttonSuccessBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonSuccessHoverBackground,
        },
      },
    },
  },
});

export const ButtonComponentContent = styled.withConfig({
  displayName: "button-component-content",
  componentId: commonComponentId,
})("span", {
  verticalAlign: "middle",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.space.medium,
  height: "100%",
  userSelect: "none",
});

export const ActionRow = styled.withConfig({
  displayName: "action-row",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  gap: theme.space.large,
});

export const TextDisplay = styled.withConfig({
  displayName: "text-display",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  lineHeight: "1.375rem",
  color: theme.colors.primaryOpacity100,
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
});

export const Separator = styled.withConfig({
  displayName: "separator",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  alignItems: "center",

  variants: {
    spacing: {
      small: {
        paddingBlock: theme.space.large,
      },
      large: {
        paddingBlock: theme.space.xl,
      },
    },
    divider: {
      true: {
        "&::before": {
          content: '""',
          width: "100%",
          height: 1,
          backgroundColor: theme.colors.primaryOpacity10,
        },
      },
      false: {},
    },
  },
});

export const Section = styled.withConfig({
  displayName: "section",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.space.xl,
});

export const SectionContent = styled.withConfig({
  displayName: "section-content",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
  flex: 1,
  minWidth: 0,
});

export const SectionAccessory = styled.withConfig({
  displayName: "section-accessory",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexShrink: 0,
});

export const Container = styled.withConfig({
  displayName: "container",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
  padding: theme.space.xl,
  borderRadius: 8,
  backgroundColor: theme.colors.backgroundSecondary,
  maxWidth: 520,
  boxSizing: "border-box",

  variants: {
    hasAccent: {
      true: {
        borderLeftStyle: "solid",
        borderLeftWidth: 4,
      },
      false: {},
    },
  },
});

export const Thumbnail = styled.withConfig({
  displayName: "thumbnail",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexShrink: 0,
  maxWidth: 120,
});

export const MediaGallery = styled.withConfig({
  displayName: "media-gallery",
  componentId: commonComponentId,
})("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: theme.space.small,
  maxWidth: 400,
});

export const MediaGalleryItem = styled.withConfig({
  displayName: "media-gallery-item",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  overflow: "hidden",
  borderRadius: 8,
});

export const MediaImage = styled.withConfig({
  displayName: "media-image",
  componentId: commonComponentId,
})(LazyLoadImage, {
  maxWidth: "100%",
  height: "auto",
  display: "block",
  borderRadius: 8,
});

export const MediaVideo = styled.withConfig({
  displayName: "media-video",
  componentId: commonComponentId,
})("video", {
  maxWidth: "100%",
  height: "auto",
  display: "block",
  borderRadius: 8,
  outline: "none",
});

export const LazyImagePlaceholder = styled.withConfig({
  displayName: "lazy-image-placeholder",
  componentId: commonComponentId,
})("div", {
  backgroundColor: theme.colors.lazyImageBackground,
  color: theme.colors.primaryOpacity100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  height: "auto",
});

export const Spoiler = styled.withConfig({
  displayName: "spoiler",
  componentId: commonComponentId,
})("div", {
  overflow: "hidden",
  position: "relative",
  width: "fit-content",
  height: "fit-content",
  borderRadius: 8,

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
});

export const FileContainer = styled.withConfig({
  displayName: "file-component",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  alignItems: "center",
  gap: theme.space.large,
  backgroundColor: theme.colors.backgroundSecondary,
  padding: 10,
  border: `1px solid ${theme.colors.attachmentBorder}`,
  borderRadius: 8,
  width: "fit-content",
  maxWidth: "100%",
  boxSizing: "border-box",
});

export const FileMetadata = styled.withConfig({
  displayName: "file-metadata",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
});

export const FileName = styled.withConfig({
  displayName: "file-name",
  componentId: commonComponentId,
})(ExternalLink, {
  color: theme.colors.link,
  maxWidth: "40vw",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const FileSize = styled.withConfig({
  displayName: "file-size",
  componentId: commonComponentId,
})("span", {
  fontSize: theme.fontSizes.s,
  color: theme.colors.primaryDark,
});

export const FileDownload = styled.withConfig({
  displayName: "file-download",
  componentId: commonComponentId,
})(ExternalLink, {
  opacity: 0.8,
  marginLeft: "auto",
  color: theme.colors.primaryOpacity100,
  display: "flex",

  "&:hover": {
    opacity: 1,
  },
});
