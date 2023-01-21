import { css, styled, theme } from "@root/Stitches/stitches.config";
import play from "@images/discordAssets/play.svg";

export const Embed = styled(
  "article",
  "embed",
  css({
    padding: 16,
    paddingLeft: 12,
    borderLeftWidth: 4,
    borderLeftStyle: "solid",
    borderLeftColor: theme.colors.backgroundTertiary,
    borderRadius: 3,
    backgroundColor: theme.colors.backgroundSecondary,
    width: "fit-content",
    gap: 8,
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
    gap: 16,

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
    gap: 8,
  })
);

export const Provider = styled(
  "div",
  "embed-provider",
  css({
    fontSize: 12,
    color: theme.colors.interactiveNormal,
  })
);

export const Author = styled(
  "div",
  "embed-author",
  css({
    fontSize: 14,
    fontWeight: 600,
    display: "inline-grid",
    gridTemplateColumns: "auto 1fr",
    alignItems: "center",
    gap: 8,
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
    },
  })
);

export const Title = styled(
  "div",
  "embed-title",
  css({
    fontSize: 16,
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
    fontSize: 14,
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
    marginTop: 4,
    gap: 8,
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
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 600,
    color: theme.colors.primaryOpacity100,
  })
);

export const FieldValue = styled(
  "div",
  "embed-field-value",
  css({
    fontSize: 14,
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
          marginTop: 8,
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
    gap: 4,
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
    fontSize: 12,
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
    marginRight: 8,
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

    "&::after": {
      content: "",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 40,
      height: 40,
      transform: "translate(-50%, -50%)",
      backgroundImage: `url(${play})`,
      backgroundSize: "12px 12px",
      backgroundPosition: "center",
      backgroundColor: theme.colors.transparentBlack,
      backgroundRepeat: "no-repeat",
      pointerEvents: "none",
      borderRadius: "100%",
    },
  })
);
