import React, { ReactNode } from "react";
import {
  globalCss,
  keyframes,
  css,
  theme,
} from "@root/Stitches/stitches.config";
import { tooltipPrefix } from "@root/Tooltip";
import { hljsTheme } from "@root/markdown/render/elements/code/hljs";

type MessageRendererProviderProps = {
  children: ({ themeClass }: { themeClass: string }) => ReactNode;
};

const rcToolTipZoomIn = keyframes({
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
});

const rcToolTipZoomOut = keyframes({
  from: {
    opacity: 1,
    scale: 1,
  },
  to: {
    opacity: 0,
    scale: 0,
  },
});

// todo: finish
const globalStyles = globalCss({
  // emotion snitch
  [`[class^="css-"]`]: {
    backgroundColor: "red",
    outline: "2px solid red",
  },

  [`.${tooltipPrefix}`]: {
    position: "absolute",
    zIndex: 1070,
    display: "block",
    pointerEvents: "none",
    transformOrigin: "50% 50%",
  },
  [`.${tooltipPrefix}-zoom-enter, .${tooltipPrefix}-zoom-leave`]: {
    display: "block",
  },
  [`.${tooltipPrefix}-hidden`]: {
    display: "none",
  },
  [`.${tooltipPrefix}-arrow`]: {
    marginBottom: -5,
    position: "absolute",
    width: 0,
    height: 0,
    borderColor: "transparent",
    borderStyle: "solid",
  },
  [`.${tooltipPrefix}-inner`]: {
    padding: "8px 12px",
    color: theme.colors.tooltipForeground,
    backgroundColor: theme.colors.tooltipBackground,
    textAlign: "left",
    textDecoration: "none",
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 500,
    marginBottom: -5,
  },
  [`.${tooltipPrefix}-zoom-enter, .${tooltipPrefix}-zoom-appear`]: {
    opacity: 0,
    animationDuration: "0.3s",
    animationFillMode: "both",
    animationTimingFunction: "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    animationPlayState: "paused",
  },
  [`.${tooltipPrefix}-zoom-enter-active, .${tooltipPrefix}-zoom-appear-active`]:
    {
      animationName: rcToolTipZoomIn.toString(),
      animationPlayState: "running",
    },
  [`.${tooltipPrefix}-zoom-leave`]: {
    animationDuration: "0.3s",
    animationFillMode: "both",
    animationTimingFunction: "cubic-bezier(0.6, -0.3, 0.74, 0.05)",
    animationPlayState: "paused",
  },
  [`.${tooltipPrefix}-zoom-leave-active`]: {
    animationName: rcToolTipZoomOut.toString(),
    animationPlayState: "running",
  },
  [`.${tooltipPrefix}-placement-top`]: {
    padding: "5px 0 9px 0",

    [`.${tooltipPrefix}-arrow`]: {
      bottom: 4,
      marginLeft: -5,
      borderWidth: "5px 5px 0",
      borderTopColor: theme.colors.tooltipBackground,
    },
  },
  [`.${tooltipPrefix}-placement-bottom`]: {
    padding: "9px 0 5px 0",

    [`.${tooltipPrefix}-arrow`]: {
      top: 4,
      marginLeft: -5,
      borderWidth: "0 5px 5px",
      borderBottomColor: theme.colors.tooltipBackground,
    },
  },
  [`.${tooltipPrefix}-placement-top, .${tooltipPrefix}-placement-bottom`]: {
    [`.${tooltipPrefix}-arrow`]: {
      left: "50%",
    },
  },
});

const extraCss = css({
  fontFamily: "Open Sans, sans-serif",
  backgroundColor: theme.colors.background, // todo: this is only for testing!
});

function MessageRendererProvider({ children }: MessageRendererProviderProps) {
  globalStyles();
  hljsTheme();

  return <>{children({ themeClass: `${theme} ${extraCss}` })}</>;
}

export default MessageRendererProvider;
