import {
  commonComponentId,
  keyframes,
  styled,
  theme,
} from "../Stitches/stitches.config";
import { CodeBlock } from "../markdown/render/elements/code/style";
import SvgFromUrl from "../SvgFromUrl";
import { Heading } from "../markdown/render/elements";

export const MessageContent = styled.withConfig({
  displayName: "message-content",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity20,
  whiteSpace: "break-spaces",
  fontSize: theme.fontSizes.l,
  variants: {
    isOptimistic: {
      true: {
        opacity: 0.5,
      },
    },
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

        [`${Heading}`]: {
          display: "inline",
          fontSize: "100%",
        },
      },
    },
  },
});

export const ContentMessageTooltip = styled.withConfig({
  displayName: "content-message-tooltip",
  componentId: commonComponentId,
})("div", {
  maxWidth: "60vw",
});

export const ContentContainer = styled.withConfig({
  displayName: "content-container",
  componentId: commonComponentId,
})("div", {
  color: theme.colors.primaryOpacity80,
  fontWeight: 400,
  lineHeight: "1.375rem",

  variants: {
    didFailToSend: {
      true: {
        color: theme.colors.danger,
      },
    },
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
});

export const ReplyAccessoryText = styled.withConfig({
  displayName: "content-reply-acessory-text",
  componentId: commonComponentId,
})("span", "span", {
  fontStyle: "italic",
});

export const MessageAccessories = styled.withConfig({
  displayName: "message-accessories",
  componentId: commonComponentId,
})("div", {
  display: "grid",
  paddingTop: theme.space.small,
  paddingBottom: theme.space.small,
  gridAutoFlow: "row",
  gridRowGap: `${theme.space.small}`,
  gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
});

export const DeferredContent = styled.withConfig({
  displayName: "deferred-content",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  color: theme.colors.primaryOpacity80,
});

export const Edited = styled.withConfig({
  displayName: "edited",
  componentId: commonComponentId,
})("span", {
  fontSize: theme.fontSizes.xs,
  marginLeft: theme.space.small,
  whiteSpace: "nowrap",
  color: theme.colors.textMuted,
});

export const ThreadButtonContainer = styled.withConfig({
  displayName: "thread-button-container",
  componentId: commonComponentId,
})("div", {
  marginTop: theme.space.small,
  width: "100%",
  display: "block",
});

export const ThreadButton = styled.withConfig({
  displayName: "thread-button",
  componentId: commonComponentId,
})("div", {
  boxSizing: "border-box",
  width: "fit-content",
  padding: theme.space.large,
  height: theme.sizes.threadButton,
  borderRadius: 4,
  backgroundColor: theme.colors.backgroundSecondary,
});

export const ThreadButtonTopLine = styled.withConfig({
  displayName: "thread-button-top-line",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  fontSize: theme.fontSizes.m,
  fontWeight: 600,
});

export const ThreadButtonName = styled.withConfig({
  displayName: "thread-button-name",
  componentId: commonComponentId,
})("span", {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: theme.colors.primaryOpacity100,
});

export const SeeThreadButton = styled.withConfig({
  displayName: "see-thread-button",
  componentId: commonComponentId,
})("div", {
  marginLeft: theme.space.large,
  color: theme.colors.link,
  whiteSpace: "nowrap",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const ReplyIcon = styled.withConfig({
  displayName: "reply-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  marginLeft: theme.space.small,
  width: 20,
  height: 20,
  color: theme.colors.primaryOpacity100,
});

export const StickerTooltipIcon = styled.withConfig({
  displayName: "sticker-tooltip-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  marginRight: theme.space.small,
});

export const LottieStickerWrapper = styled.withConfig({
  displayName: "lottie-sticker-wrapper",
  componentId: commonComponentId,
})("span", {
  width: "fit-content",
});

export const StickerTooltip = styled.withConfig({
  displayName: "sticker-tooltip",
  componentId: commonComponentId,
})("span", {
  display: "flex",
  alignItems: "center",
  whiteSpace: "break-spaces",
});

export const Sticker = styled.withConfig({
  displayName: "sticker",
  componentId: commonComponentId,
})("img", {
  objectFit: "contain",
});

export const FailedInteraction = styled.withConfig({
  displayName: "failed-interaction",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  color: theme.colors.danger,
  display: "flex",
  alignItems: "center",
  gap: theme.space.large,
});

export const TypingIndicator = styled.withConfig({
  displayName: "typing-indicator",
  componentId: commonComponentId,
})("svg", {
  color: theme.colors.primaryOpacity100,
});

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

export const TypingIndicatorCircle1 = styled.withConfig({
  displayName: "typing-indicator-circle-1",
  componentId: commonComponentId,
})("circle", {
  ...typingIndicatorCircleCommon,
  transformOrigin: "3.5px center",
  animationDelay: "0.1s",
});

export const TypingIndicatorCircle2 = styled.withConfig({
  displayName: "typing-indicator-circle-2",
  componentId: commonComponentId,
})("circle", {
  ...typingIndicatorCircleCommon,
  transformOrigin: "12.25px center",
  animationDelay: "0.2s",
});

export const TypingIndicatorCircle3 = styled.withConfig({
  displayName: "typing-indicator-circle-3",
  componentId: commonComponentId,
})("circle", {
  ...typingIndicatorCircleCommon,
  transformOrigin: "21px center",
  animationDelay: "0.3s",
});
