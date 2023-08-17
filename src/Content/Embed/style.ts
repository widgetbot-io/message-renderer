import {
  styled,
  theme,
  commonComponentId,
} from "../../Stitches/stitches.config";
import SvgFromUrl from "../../SvgFromUrl";

export const Embed = styled.withConfig({
  displayName: "embed",
  componentId: commonComponentId,
})("article", {
  padding: theme.space.xxl,
  paddingLeft: theme.space.xl,
  borderLeftWidth: 4,
  borderLeftStyle: "solid",
  borderLeftColor: theme.colors.backgroundTertiary,
  borderRadius: 3,
  backgroundColor: theme.colors.backgroundSecondary,
  width: "fit-content",
  gap: theme.space.large,
  display: "flex",
  flexDirection: "column",
  maxWidth: 520,

  variants: {
    thin: {
      true: {
        maxWidth: 432,
      },
    },
  },
});

export const ContentAndThumbnail = styled.withConfig({
  displayName: "embed-content-and-thumbnail",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  gap: theme.space.xxl,

  variants: {
    hasLargeThumbnail: {
      true: {
        flexDirection: "column",
        maxWidth: 432,
      },
    },
  },
});

export const Content = styled.withConfig({
  displayName: "embed-content",
  componentId: commonComponentId,
})("div", {
  display: "grid",
  gap: theme.space.large,
});

export const Provider = styled.withConfig({
  displayName: "embed-provider",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.s,
  color: theme.colors.interactiveNormal,
});

export const Author = styled.withConfig({
  displayName: "embed-author",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  fontWeight: 600,
  display: "inline-grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  gap: theme.space.large,
  color: theme.colors.primaryOpacity100,
});

export const AuthorIcon = styled.withConfig({
  displayName: "embed-author-icon",
  componentId: commonComponentId,
})("img", {
  width: 24,
  height: 24,
  borderRadius: "100%",
});

export const AuthorName = styled.withConfig({
  displayName: "embed-author-name",
  componentId: commonComponentId,
})("span", {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "inline-block",

  color: theme.colors.primaryOpacity100,

  a: {
    color: theme.colors.primaryOpacity100,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const Title = styled.withConfig({
  displayName: "embed-title",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.l,
  fontWeight: 600,
  color: theme.colors.primaryOpacity100,

  variants: {
    link: {
      true: {
        cursor: "pointer",
        textDecoration: "none",
        color: theme.colors.link,

        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
});

export const Description = styled.withConfig({
  displayName: "embed-description",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  whiteSpace: "pre-wrap",
  color: theme.colors.interactiveNormal,
});

export const Fields = styled.withConfig({
  displayName: "embed-fields",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: theme.space.small,
  gap: theme.space.large,
});

export const Field = styled.withConfig({
  displayName: "embed-field",
  componentId: commonComponentId,
})("div", {
  flex: 0,
  maxWidth: 506,
  flexBasis: "100%",
  variants: {
    inline: {
      true: {
        width: "fit-content",
        flexBasis: "30%",
      },
    },
  },
});

export const FieldName = styled.withConfig({
  displayName: "embed-field-name",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  marginBottom: theme.space.small,
  fontWeight: 600,
  color: theme.colors.primaryOpacity100,
});

export const FieldValue = styled.withConfig({
  displayName: "embed-field-value",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  fontWeight: 400,
  whiteSpace: "pre-wrap",
  color: theme.colors.interactiveNormal,
});

export const Image = styled.withConfig({
  displayName: "embed-field-image",
  componentId: commonComponentId,
})("img", {
  borderRadius: 3,

  variants: {
    clickable: {
      true: {
        cursor: "pointer",
      },
    },
    withMargin: {
      true: {
        marginTop: theme.space.large,
      },
    },
  },
});

export const Images = styled.withConfig({
  displayName: "embed-field-images",
  componentId: commonComponentId,
})("div", {
  display: "grid",
  gap: theme.space.small,
  borderRadius: 3,
  overflow: "hidden",

  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  variants: {
    nImages: {
      1: {},
      2: {
        gridTemplateColumns: "1fr 1fr",
      },
      3: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "calc((300px - 4px) / 2) calc((300px - 4px) / 2)",
        "& > *:first-child": {
          gridRow: "span 2",
        },
      },
      4: {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "calc((300px - 4px) / 2) calc((300px - 4px) / 2)",
      },
    },
  },
});

export const ImageGridImageContainer = styled.withConfig({
  displayName: "embed-image-grid-image-container",
  componentId: commonComponentId,
})("div", {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Footer = styled.withConfig({
  displayName: "embed-footer",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.s,
  display: "flex",
  alignItems: "center",
  color: theme.colors.interactiveNormal,
});

export const FooterIcon = styled.withConfig({
  displayName: "embed-footer-icon",
  componentId: commonComponentId,
})("img", {
  borderRadius: "100%",
  width: 20,
  height: 20,
  marginRight: theme.space.large,
});

export const MediaEmbed = styled.withConfig({
  displayName: "media-embed",
  componentId: commonComponentId,
})("img", {
  borderRadius: 3,
  cursor: "pointer",
});

export const VideoIframe = styled.withConfig({
  displayName: "video-iframe",
  componentId: commonComponentId,
})("iframe", {
  border: "none",
  borderRadius: 3,
});

export const VideoThumbnail = styled.withConfig({
  displayName: "video-thumbnail",
  componentId: commonComponentId,
})("div", {
  borderRadius: 3,
  backgroundSize: "cover",
  position: "relative",
  cursor: "pointer",
});

export const VideoThumbnailPlayButtonContainer = styled.withConfig({
  displayName: "video-thumbnail-play-button-container",
  componentId: commonComponentId,
})("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 40,
  height: 40,
  translate: "-50% -50%",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.transparentBlack,
});

export const VideoThumbnailPlayButton = styled.withConfig({
  displayName: "video-thumbnail-play-button",
  componentId: commonComponentId,
})(SvgFromUrl, {
  opacity: 0.6,

  "&:hover": {
    opacity: 1,
  },
});
