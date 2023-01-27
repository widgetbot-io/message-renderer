import { css, styled, theme } from "@root/Stitches/stitches.config";
import SvgFromUrl from "@root/SvgFromUrl";

export const Embed = styled(
  "article",
  "embed",
  css({
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
  })
);

export const ContentAndThumbnail = styled(
  "div",
  "embed-content-and-thumbnail",
  css({
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
  })
);

export const Content = styled(
  "div",
  "embed-content",
  css({
    display: "grid",
    gap: theme.space.large,
  })
);

export const Provider = styled(
  "div",
  "embed-provider",
  css({
    fontSize: theme.fontSizes.s,
    color: theme.colors.interactiveNormal,
  })
);

export const Author = styled(
  "div",
  "embed-author",
  css({
    fontSize: theme.fontSizes.m,
    fontWeight: 600,
    display: "inline-grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    gap: theme.space.large,
    color: theme.colors.primaryOpacity100,
  })
);

export const AuthorIcon = styled(
  "img",
  "embed-author-icon",
  css({
    width: 24,
    height: 24,
    borderRadius: "100%",
  })
);

export const AuthorName = styled(
  "span",
  "embed-author-name",
  css({
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
  })
);

export const Title = styled(
  "div",
  "embed-title",
  css({
    fontSize: theme.fontSizes.l,
    fontWeight: 600,

    color: theme.colors.link,

    variants: {
      link: {
        true: {
          cursor: "pointer",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  })
);

export const Description = styled(
  "div",
  "embed-description",
  css({
    fontSize: theme.fontSizes.m,
    whiteSpace: "pre-wrap",
    color: theme.colors.interactiveNormal,
  })
);

export const Fields = styled(
  "div",
  "embed-fields",
  css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: theme.space.small,
    gap: theme.space.large,
  })
);

export const Field = styled(
  "div",
  "embed-field",
  css({
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
  })
);

export const FieldName = styled(
  "div",
  "embed-field-name",
  css({
    fontSize: theme.fontSizes.m,
    marginBottom: theme.space.small,
    fontWeight: 600,
    color: theme.colors.primaryOpacity100,
  })
);

export const FieldValue = styled(
  "div",
  "embed-field-value",
  css({
    fontSize: theme.fontSizes.m,
    fontWeight: 400,
    whiteSpace: "pre-wrap",
    color: theme.colors.interactiveNormal,
  })
);

export const Image = styled(
  "img",
  "embed-field-image",
  css({
    borderRadius: 3,
    cursor: "pointer",

    variants: {
      withMargin: {
        true: {
          marginTop: theme.space.large,
        },
      },
    },
  })
);

export const Images = styled(
  "div",
  "embed-field-images",
  css({
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
  })
);

export const ImageGridImageContainer = styled(
  "div",
  "embed-image-grid-image-container",
  css({
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const Footer = styled(
  "div",
  "embed-footer",
  css({
    fontSize: theme.fontSizes.s,
    display: "flex",
    alignItems: "center",
    color: theme.colors.interactiveNormal,
  })
);

export const FooterIcon = styled(
  "img",
  "embed-footer-icon",
  css({
    borderRadius: "100%",
    width: 20,
    height: 20,
    marginRight: theme.space.large,
  })
);

export const MediaEmbed = styled(
  "img",
  "media-embed",
  css({
    borderRadius: 3,
    cursor: "pointer",
  })
);

export const VideoIframe = styled(
  "iframe",
  "video-iframe",
  css({
    border: "none",
    borderRadius: 3,
  })
);

export const VideoThumbnail = styled(
  "div",
  "video-thumbnail",
  css({
    borderRadius: 3,
    backgroundSize: "cover",
    position: "relative",
    cursor: "pointer",
  })
);

export const VideoThumbnailPlayButtonContainer = styled(
  "div",
  "video-thumbnail-play-button-container",
  css({
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
  })
);

export const VideoThumbnailPlayButton = styled(
  SvgFromUrl,
  "video-thumbnail-play-button",
  css({
    opacity: 0.6,

    "&:hover": {
      opacity: 1,
    },
  })
);
