import type { ReactNode } from "react";
import React from "react";
import { globalCss, css, theme } from "./Stitches/stitches.config";
import {
  tooltipAnimDurationMs,
  tooltipAnimPrefix,
  tooltipPrefix,
} from "./Tooltip";
import { hljsTheme } from "./markdown/render/elements/code/hljs";
import type { Config, PartialSvgConfig } from "./core/ConfigContext";
import { ConfigContext } from "./core/ConfigContext";

type MessageRendererProviderProps<SvgConfig extends PartialSvgConfig> = {
  children: ({ themeClass }: { themeClass: string }) => ReactNode;
} & Config<SvgConfig>;

const globalStyles = globalCss({
  [`.${tooltipPrefix}`]: {
    width: "fit-content",
    zIndex: 1070,
    display: "block",
    pointerEvents: "none",
    transformOrigin: "50% 50%",
    fontFamily: theme.fonts.main,
    transition: `scale ${tooltipAnimDurationMs}ms ease-out, opacity ${tooltipAnimDurationMs}ms ease-out`,
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
  [`.${tooltipAnimPrefix}-enter, .${tooltipAnimPrefix}-appear`]: {
    scale: 0.9,
    opacity: 0,
  },
  [`.${tooltipAnimPrefix}-enter-active, .${tooltipAnimPrefix}-appear-active`]: {
    scale: 1,
    opacity: 1,
  },
  [`.${tooltipAnimPrefix}-leave`]: {
    scale: 1,
    opacity: 1,
  },
  [`.${tooltipAnimPrefix}-leave-active`]: {
    scale: 0.9,
    opacity: 0,
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
  [`.${tooltipPrefix}-placement-right`]: {
    padding: "0 5px 0 9px",

    [`.${tooltipPrefix}-arrow`]: {
      left: 4,
      marginTop: -5,
      borderWidth: "5px 5px 5px 0",
      borderRightColor: theme.colors.tooltipBackground,
    },
  },
  [`.${tooltipPrefix}-placement-left`]: {
    padding: "0 9px 0 5px",

    [`.${tooltipPrefix}-arrow`]: {
      right: 4,
      marginTop: -5,
      borderWidth: "5px 0 5px 5px",
      borderLeftColor: theme.colors.tooltipBackground,
    },
  },
  [`.${tooltipPrefix}-placement-top, .${tooltipPrefix}-placement-bottom`]: {
    [`.${tooltipPrefix}-arrow`]: {
      left: "50%",
    },
  },
  [`.${tooltipPrefix}-placement-right, .${tooltipPrefix}-placement-left`]: {
    [`.${tooltipPrefix}-arrow`]: {
      top: "50%",
    },
  },
});

const extraCss = css({
  fontFamily: theme.fonts.main,
  // backgroundColor: theme.colors.background, // todo: this is only for testing!
});

function MessageRendererProvider<TConfig extends PartialSvgConfig>({
  children,
  ...config
}: MessageRendererProviderProps<TConfig>) {
  globalStyles();
  hljsTheme();

  return (
    <ConfigContext.Provider
      value={config as unknown as Config<PartialSvgConfig>}
    >
      {children({
        themeClass: `${theme} ${extraCss} ${
          config.themeOverrideClassName ?? ""
        }`,
      })}
    </ConfigContext.Provider>
  );
}

export default MessageRendererProvider;
