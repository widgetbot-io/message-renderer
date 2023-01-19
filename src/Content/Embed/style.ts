import { css, styled, theme } from "@root/Stitches/stitches.config";

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
