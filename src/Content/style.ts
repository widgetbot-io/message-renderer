import { css, styled, theme } from "@root/Stitches/stitches.config";

export const Base = styled(
  "span",
  "message-content",
  css({
    color: theme.colors.primaryOpacity20,
    whiteSpace: "break-spaces",
    fontSize: theme.fontSizes.l,
    variants: {
      isReplyContent: {
        true: {
          fontSize: theme.fontSizes.m,
          opacity: 0.64,
          cursor: "pointer",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "flex",
          maxWidth: "calc(100% - 72px)",
          alignItems: "center",

          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
  })
);

export const ContentMessageTooltip = styled(
  "div",
  "content-message-tooltip",
  css({
    maxWidth: "60vw",
  })
);

export const ContentContainer = styled(
  "div",
  "content-container",
  css({
    color: theme.colors.primaryOpacity80,
    fontWeight: 400,
    lineHeight: "1.375rem",

    variants: {
      isReplyContent: {
        true: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          flex: "0 1 auto",
          pointerEvents: "none",

          // todo: use stitches class!
          ".codeblock": {
            display: "inline",
            padding: theme.space.xs,
            fontSize: theme.fontSizes.s,
          },
        },
      },
    },
  })
);

export const ReplyAccessoryText = styled(
  "span",
  "content-reply-acessory-text",
  css("span", {
    fontStyle: "italic",
  })
);

export const MessageAccessories = styled(
  "div",
  "message-accessories",
  css({
    display: "grid",
    paddingTop: theme.space.small,
    paddingBottom: theme.space.small,
    gridAutoFlow: "row",
    gridRowGap: theme.space.small,
    gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
  })
);

export const DeferredContent = styled(
  "div",
  "deferred-content",
  css({
    fontSize: theme.fontSizes.m,
  })
);

export const Edited = styled(
  "span",
  "edited",
  css({
    fontSize: theme.fontSizes.xs,
    marginLeft: theme.space.small,
    whiteSpace: "nowrap",
    color: theme.colors.textMuted,
  })
);
