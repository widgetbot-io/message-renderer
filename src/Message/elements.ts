import styled from "../ThemeContext";
import { Twemoji } from "@root/Emoji/style";
import { css } from "react-emotion";
import { memo } from "react";

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
