import { createStitches } from "@stitches/react";

export const { styled, theme, globalCss, keyframes, css } = createStitches({
  theme: {
    colors: {
      primary10: "rgba(255, 255, 255, 0.1)",
      primary20: "rgba(255, 255, 255, 0.2)",
      primary50: "rgba(255, 255, 255, 0.5)",
      primary80: "rgba(255, 255, 255, 0.8)",
      primary100: "rgba(255, 255, 255, 1.0)",
      accent: "#5865f2",
      background: "#36393f",
      messageHover: "rgba(0, 0, 0, .05)",
      link: "#00b0f4",
      mentioned: "rgba(250, 166, 26, 0.1)",
      mentionedHover: "rgba(250, 168, 26, 0.08)",
      tooltipBackground: "#18191c",
      tooltipForeground: "#dcddde",
    },
  },
});
