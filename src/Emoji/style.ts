import { commonComponentId, styled } from "../Stitches/stitches.config";

export const emojiCss = {
  objectFit: "contain",
  "-webkit-user-drag": "none",
  width: "1.375em",
  height: "1.375em",
  verticalAlign: "middle",
  margin: 0,

  variants: {
    enlarged: {
      true: {
        width: 48,
        height: 48,
        margin: "3px 1px",
        verticalAlign: "bottom",
      },
    },
  },
};

export const Emoji = styled.withConfig({
  displayName: "emoji",
  componentId: commonComponentId,
})("img", emojiCss);
