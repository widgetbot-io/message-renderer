import styled from "../ThemeContext";
import { Twemoji } from "@root/Emoji/style";
import { css } from "react-emotion";
import { memo } from "react";
import add from "@images/discordAssets/e06a573355c490f7ce6e3125ac01db81.svg";
import remove from "@images/discordAssets/f772d3d7eddcf3c84f710c10999479f0.svg";
import warning from "@images/discordAssets/warning.svg";
import cross from "@images/discordAssets/c7078943fc392e7dede27a20e6cfdcfb.svg";
import pin from "@images/discordAssets/5da4cdab01d4d89c593c48c62ae0d937.svg";
import checkmark from "@images/discordAssets/86b5987e685f72352730d56690393fc8.svg";
import threadNameChanged from "@images/discordAssets/1688a01d0e6f27bead9ae6ca9e51dd32.svg";
import threadCreated from "@images/discordAssets/thread-created.svg";
import boost from "@images/discordAssets/boost.svg";

/*
==============================================================

  Message

==============================================================
 */

export const DeferredMessage = styled("div")<Record<string, unknown>>`
  font-size: 14px;
`;

export const FailedInteraction = styled(DeferredMessage)<
  Record<string, unknown>
>`
  display: flex;
  padding-top: 4px;
  align-items: center;
  gap: 8px;
  color: #ed4245;
`;

const typingIndicatorDuration = "1.2s";

export const TypingIndicator = styled("svg")<Record<string, unknown>>`
  @keyframes typing {
    0% {
      transform: scale(0.9);
      opacity: 0.3;
    }
    25% {
      transform: scale(1);
      opacity: 1;
    }
    50%,
    100% {
      transform: scale(0.9);
      opacity: 0.3;
    }
  }

  color: ${({ theme }) => theme.colors._primary.string()};

  .typing-1,
  .typing-2,
  .typing-3 {
    animation: typing ${typingIndicatorDuration} infinite;
  }

  .typing-1 {
    transform-origin: 3.5px center;
    animation-delay: 0.1s;
  }
  .typing-2 {
    transform-origin: 12.25px center;
    animation-delay: 0.2s;
  }
  .typing-3 {
    transform-origin: 21px center;
    animation-delay: 0.3s;
  }
`;

export const SystemMessageContentBase = styled("span")<
  { fullPrimary?: boolean } & Record<string, unknown>
>`
  ${({ fullPrimary, theme }) =>
    fullPrimary
      ? css`
          color: ${theme.colors._primary.string()};
        `
      : css`
          &,
          & strong {
            color: ${theme.colors._primary.darken(0.4).string()};
          }
        `}
`;

interface SystemMessageLinkBaseProps {
  cursor?: string;
}
export const SystemMessageLinkBase = memo(styled(
  "span"
)<SystemMessageLinkBaseProps>`
  color: ${({ theme }) => theme.colors._primary.string()};

  &:hover {
    cursor: ${({ cursor }) => (cursor !== undefined ? cursor : "pointer")};
    text-decoration: underline;
  }
`);

export namespace SlashCommandBase {
  export const Base = styled("span")<Record<string, unknown>>`
    color: ${({ theme }) => theme.colors._primary.fade(1 - 0.64).string()};
    font-size: 14px;
    user-select: none;
  `;

  export const Command = styled("span")<Record<string, unknown>>`
    color: #00aff4;
  `;
}

export const UnknownReplyIcon = styled("div")<Record<string, unknown>>`
  background-color: #202225;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  margin-right: 0.25rem;
`;

export const UnknownReplyText = styled(SlashCommandBase.Base)<
  Record<string, unknown>
>`
  font-style: italic;
`;

export namespace IconsBase {
  interface IconBaseProps {
    centerVertically?: boolean;
  }

  const IconBase = styled("div")<IconBaseProps & Record<string, unknown>>`
    position: absolute;
    left: 0;
    // We're using centerVertically !== false because if centerVertically is undefined, it'll be true.
    top: ${({ centerVertically }) =>
      centerVertically !== false ? "50%" : "0"};
    transform: ${({ centerVertically }) =>
      centerVertically !== false ? "translateY(-50%)" : "translateY(0)"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px;
    width: 72px;
    height: 16px;
  `;

  export const Add = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${add}");
  `);

  export const Remove = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${remove}");
  `);

  export const Warning = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${warning}");
  `);

  export const Pinned = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${pin}");
  `);

  export const Cross = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${cross}");
  `);

  export const ThreadCreated = memo(styled(IconBase)<Record<string, unknown>>`
    margin-top: 6px;
    background-image: url("${threadCreated}");
  `);

  export const Boost = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${boost}");
  `);

  export const Checkmark = memo(styled(IconBase)<Record<string, unknown>>`
    background-image: url("${checkmark}");
  `);

  export const ThreadNameChanged = memo(styled(IconBase)<
    Record<string, unknown>
  >`
    background-image: url("${threadNameChanged}");
  `);
}

/*
==============================================================

  Role Icon

==============================================================
 */

export const RoleIconBase = styled("img")<Record<string, unknown>>`
  margin-left: 0.25rem;
  width: 20px;
  height: 20px;
`;

export const UnicodeEmojiBase = styled(Twemoji)<Record<string, unknown>>`
  margin-left: 0.25rem;
  width: 20px;
  height: 20px;
`;
