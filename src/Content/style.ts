import { styled, theme } from "@root/Stitches/stitches.config";

export const Base = styled("span", {
  color: theme.colors.primary20,
  whiteSpace: "break-spaces",
  fontSize: 16,
  variants: {
    isReplyContent: {
      true: {
        fontSize: 14,
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
});

export const ContentMessageTooltip = styled("div", {
  maxWidth: "60vw",
});

export const ContentContainer = styled("div", {
  color: theme.colors.primary80,
  fontWeight: 400,

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
          padding: 2,
          fontSize: 12,
        },
      },
    },
  },
});

export const ReplyAccessoryText = styled("span", {
  fontStyle: "italic",
});

export const MessageAccessories = styled("div", {
  display: "grid",
  paddingTop: 4,
  paddingBottom: 4,
  gridAutoFlow: "row",
  gridRowGap: 4,
  gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
});

export const DeferredContent = styled("div", {
  fontSize: 14,
});
