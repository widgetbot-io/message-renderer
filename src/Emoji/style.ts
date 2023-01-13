import EmojiParser from ".";
import { css, styled } from "@root/Stitches/stitches.config";

export const emojiCss = css({
  objectFit: "contain",
  "-webkit-user-drag": "none",
  width: 22,
  height: 22,
  verticalAlign: "-0.4em",
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
});

export const Emoji = styled("img", "emoji", emojiCss);

export const Twemoji = styled(EmojiParser, "twemoji", emojiCss);
