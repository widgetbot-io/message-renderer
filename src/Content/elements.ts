import styled from "react-emotion";

export const ReplyIconBase = styled("img")<Record<string, unknown>>`
  margin-left: 0.25rem;
  width: 20px;
  height: 20px;
`;

export const ContentContainerBase = styled("div")<Record<string, unknown>>`
  color: ${(props) => props.theme.colors._primary.fade(0.2).string()};
  font-weight: 400;

  &[data-is-reply-content="true"] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 1 auto;

    .codeblock {
      display: inline;
      padding: 2px;
      font-size: 12px;
    }
  }
`;

export const ReplyAccessoryText = styled("span")<Record<string, unknown>>`
  font-style: italic;
`;

export const ContentMessageTooltipBase = styled("div")<Record<string, unknown>>`
  max-width: 60vw;
`;

export const LottieStickerWrapper = styled("span")<Record<string, unknown>>`
  width: fit-content;
`;

export const StickerTooltipBase = styled("span")<Record<string, unknown>>`
  display: flex;
  align-items: center;
  white-space: break-spaces;
`;

export const StickerTooltipIconBase = styled("img")<Record<string, unknown>>`
  margin-right: 0.25rem;
`;

export const ThreadButtonContainerBase = styled("div")<Record<string, unknown>>`
  margin-top: 4px;
  width: 100%;
  display: block;
`;

export const ThreadButtonHeight = 34;

export const ThreadButtonBase = styled("div")<Record<string, unknown>>`
  width: fit-content;
  padding: 8px;
  height: ${ThreadButtonHeight}px;
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme.colors._background.darken(0.2).string()};
`;

export const ThreadButtonTopLineBase = styled("div")<Record<string, unknown>>`
  display: flex;
  font-size: 14px;
  font-weight: 600;
`;

export const ThreadButtonNameBase = styled("span")<Record<string, unknown>>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SeeThreadButtonBase = styled("div")<Record<string, unknown>>`
  margin-left: 8px;
  color: #00aff4;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
