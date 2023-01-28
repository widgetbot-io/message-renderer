import { css, keyframes, styled, theme } from "@root/Stitches/stitches.config";
import SvgFromUrl from "@root/SvgFromUrl";
import { CodeBlock } from "@root/markdown/render/elements/code/style";

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
          maxWidth: `calc(100% - ${theme.sizes.messageLeftPadding})`,
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
          maxWidth: "25vw",

          [`${CodeBlock}`]: {
            display: "inline",
            padding: theme.space.xs,
            fontSize: theme.fontSizes.s,
            whiteSpace: "nowrap",
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
    color: theme.colors.primaryOpacity80,
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

export const ThreadButtonContainer = styled(
  "div",
  "thread-button-container",
  css({
    marginTop: theme.space.small,
    width: "100%",
    display: "block",
  })
);

export const ThreadButton = styled(
  "div",
  "thread-button",
  css({
    boxSizing: "border-box",
    width: "fit-content",
    padding: theme.space.large,
    height: theme.sizes.threadButton,
    borderRadius: 4,
    backgroundColor: theme.colors.backgroundSecondary,
  })
);

export const ThreadButtonTopLine = styled(
  "div",
  "thread-button-top-line",
  css({
    display: "flex",
    fontSize: theme.fontSizes.m,
    fontWeight: 600,
  })
);

export const ThreadButtonName = styled(
  "span",
  "thread-button-name",
  css({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.colors.primaryOpacity100,
  })
);

export const SeeThreadButton = styled(
  "div",
  "see-thread-button",
  css({
    marginLeft: theme.space.large,
    color: theme.colors.link,
    whiteSpace: "nowrap",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
  })
);

export const ReplyIcon = styled(
  SvgFromUrl,
  "reply-icon",
  css({
    marginLeft: theme.space.small,
    width: 20,
    height: 20,
  })
);

export const StickerTooltipIcon = styled(
  SvgFromUrl,
  "sticker-tooltip-icon",
  css({
    marginRight: theme.space.small,
  })
);

export const LottieStickerWrapper = styled(
  "span",
  "lottie-sticker-wrapper",
  css({
    width: "fit-content",
  })
);

export const StickerTooltip = styled(
  "span",
  "sticker-tooltip",
  css({
    display: "flex",
    alignItems: "center",
    whiteSpace: "break-spaces",
  })
);

export const Sticker = styled(
  "img",
  "",
  css({
    objectFit: "contain",
  })
);

export const FailedInteraction = styled(
  "div",
  "failed-interaction",
  css({
    fontSize: theme.fontSizes.m,
    color: theme.colors.danger,
    display: "flex",
    alignItems: "center",
    gap: theme.space.large,
  })
);

export const TypingIndicator = styled(
  "svg",
  "typing-indicator",
  css({
    color: theme.colors.primaryOpacity100,
  })
);

const typingIndicatorKeyframes = keyframes({
  "0%": {
    scale: 0.9,
    opacity: 0.3,
  },
  "25%": {
    scale: 1,
    opacity: 1,
  },
  "50%, 100%": {
    scale: 0.9,
    opacity: 0.3,
  },
});

const typingIndicatorCircleCommon = {
  animationName: typingIndicatorKeyframes.toString(),
  animationIterationCount: "infinite",
  animationDuration: "1.2s",
};

export const TypingIndicatorCircle1 = styled(
  "circle",
  "typing-indicator-circle-1",
  css({
    ...typingIndicatorCircleCommon,
    transformOrigin: "3.5px center",
    animationDelay: "0.1s",
  })
);

export const TypingIndicatorCircle2 = styled(
  "circle",
  "typing-indicator-circle-2",
  css({
    ...typingIndicatorCircleCommon,
    transformOrigin: "12.25px center",
    animationDelay: "0.2s",
  })
);

export const TypingIndicatorCircle3 = styled(
  "circle",
  "typing-indicator-circle-3",
  css({
    ...typingIndicatorCircleCommon,
    transformOrigin: "21px center",
    animationDelay: "0.3s",
  })
);
