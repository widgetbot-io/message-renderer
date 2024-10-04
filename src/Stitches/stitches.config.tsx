import { createStitches } from "@stitches/react";

export const prefix = "wb-msg";

const stitches = createStitches({
  prefix,
  theme: {
    colors: {
      primaryOpacity10: "rgba(255, 255, 255, 0.1)",
      primaryOpacity20: "rgba(255, 255, 255, 0.2)",
      primaryOpacity30: "rgba(255, 255, 255, 0.3)",
      primaryOpacity50: "rgba(255, 255, 255, 0.5)",
      primaryOpacity60: "rgba(255, 255, 255, 0.6)",
      primaryOpacity80: "rgba(255, 255, 255, 0.8)",
      primaryOpacity100: "rgba(255, 255, 255, 1.0)",
      primaryDark: "#72767d",
      systemMessageDark: "#999999",
      textMuted: "rgb(163, 166, 170)",
      interactiveNormal: "#dcddde",
      accent: "#5865f2",
      background: "#36393f",
      backgroundSecondary: "#2b2d31",
      backgroundTertiary: "#1e1f22",
      lazyImageBackground: "#2c2e32",
      messageHover: "rgba(0, 0, 0, .05)",
      link: "#00b0f4",
      mentioned: "rgba(250, 166, 26, 0.1)",
      mentionedHover: "rgba(250, 168, 26, 0.08)",
      mentionedBorder: "#faa81a",
      tooltipBackground: "#18191c",
      tooltipForeground: "#dcddde",
      transparentBlack: "rgba(0, 0, 0, 0.6)",
      blackSpoilerHover: "rgba(0, 0, 0, 0.9)",
      spines: "#4f545c",
      attachmentBorder: "rgba(27, 29, 32, 0.5)",
      danger: "#ed4245",
      mentionBackground: "rgba(88, 101, 242, 0.298)",
      mentionBackgroundHover: "#5865f2",
      mentionForeground: "#c9cdfb",
      buttonPrimaryBackground: "#5865f2",
      buttonPrimaryHoverBackground: "#4752c4",
      buttonSecondaryBackground: "#4e5058",
      buttonSecondaryHoverBackground: "#6d6f78",
      buttonDangerBackground: "#da373c",
      buttonDangerHoverBackground: "#a12828",
      buttonSuccessBackground: "#248046",
      buttonSuccessHoverBackground: "#1a6334",
      automodUsername: "#949CF7",
      automodMatchedWord: "rgba(240, 177, 50, 0.3)",
      automodMessageBackground: "rgb(43, 45, 49)",
      automodDot: "rgba(78, 80, 88, 0.48)",
    },
    fonts: {
      main: "Open Sans, sans-serif",
    },
    fontSizes: {
      xs: "10px",
      s: "12px",
      m: "14px",
      l: "16px",
      xl: "20px",
      xxl: "24px",
    },
    space: {
      xxs: "1px",
      xs: "2px",
      small: "4px",
      medium: "6px",
      large: "8px",
      xl: "12px",
      xxl: "16px",
    },
    sizes: {
      messageLeftPadding: "72px",
      threadButton: "34px",
      messageTypeIcon: "16px",
      embedThumbnail: "80px",
    },
    borderWidths: {
      spines: "2px",
    },
  },
});

export const commonComponentId = import.meta.env.DEV ? undefined : "wb";

export const { styled, theme, globalCss, keyframes, css } = stitches;
