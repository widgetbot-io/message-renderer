import styled, { css } from "@utils/emotion";

import EmojiParser from ".";

interface Props {
  enlarged?: boolean;
}

const emoji = (enlarged: boolean) => css`
  object-fit: contain;
  -webkit-user-drag: none;

  ${enlarged
    ? css`
        height: 3rem;
        width: 3rem;
        margin: 3px 1px;
        vertical-align: bottom;
      `
    : css`
        width: 22px;
        height: 22px;
        vertical-align: -0.4em;
        margin: 0;
      `};
`;

export const Emoji = styled("img")<Props & Record<string, unknown>>`
  ${({ enlarged }) => emoji(enlarged)};
`;

export const Twemoji = styled(EmojiParser)<Record<string, unknown>>`
  ${emoji(false)};

  &.enlarged {
    ${emoji(true)};
  }
`;
