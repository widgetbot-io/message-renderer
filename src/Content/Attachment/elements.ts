import styled from "../../ThemeContext";
import { css } from "react-emotion";

// todo: button icons! search for "background-image"

export const VideoAttachmentBase = css`
  &[width] {
    max-width: min(400px, 100%);
  }
  &:not([width]) {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  outline: none;
  cursor: pointer;
`;

export const ImageAttachmentBase = css`
  cursor: pointer;
`;

export const VideoAttachmentContainerBase = css`
  border-radius: 3px;
  overflow: hidden;
  max-width: min(400px, 100%);
  background-color: #202225;
  cursor: pointer;

  position: relative;
  display: flex;
`;

export namespace Attachment {
  interface ContainerBaseProps {
    // todo: attachment icons
    // icon: string;
    hasChildren: boolean;
  }

  export const ContainerBase = styled("div")<
    ContainerBaseProps & Record<string, unknown>
  >`
    display: flex;
    background-color: ${(props) =>
      props.theme.colors._background.darken(0.2).string()};
    padding: 10px;
    border: 1px solid
      ${(props) =>
        props.theme.colors._background.darken(0.5).fade(0.5).string()};
    border-radius: 3px;
    width: fit-content;
    flex-wrap: wrap;

    &:before {
      content: "";
      width: 24px;
      height: 32px;
      // todo: attachment icons
      // background-image: url($/{(props) => props.icon});
      background-size: 100% auto;
      background-repeat: no-repeat;
    }

    ${(props) =>
      !props.hasChildren &&
      css`
        align-items: center;
      `}
  `;

  export const MetaBase = styled("div")<Record<string, unknown>>`
    margin: 0 8px;
    display: flex;
    flex-direction: column;
  `;

  export const FileNameBase = styled("a")<Record<string, unknown>>`
    color: #00aff4 !important;
    max-width: 40vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  export const FileSizeBase = styled("span")<Record<string, unknown>>`
    color: #72767d;
    font-size: 12px;
  `;

  export const DownloadIconBase = styled("a")<Record<string, unknown>>`
    opacity: 0.8;
    margin-left: auto;

    &:hover {
      opacity: 1;
    }
  `;

  export const ExtraUserInterfaceBase = styled("div")<Record<string, unknown>>`
    flex-basis: 100%;
    margin-top: 8px;
    display: flex;
  `;

  export const AudioBase = styled("audio")<Record<string, unknown>>`
    flex: 1;
    height: 32px;
    outline: 0;
    border-radius: 3px;
    max-width: 70vw; ;
  `;
}

export const SpoilerBase = styled("div")<Record<string, unknown>>`
  overflow: hidden;
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;

  & > * {
    transition: filter 0.2s ease-in-out;

    filter: blur(44px);
  }

  &[data-show="true"] > * {
    filter: blur(0);
  }

  &[data-show="false"] {
    cursor: pointer;

    & > * {
      pointer-events: none;
    }

    &:after {
      content: "SPOILER";
      border-radius: 100px;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 8px 12px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-weight: 600;
      font-size: 15px;
    }

    &:hover:after {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export namespace VideoAttachmentOverlay {
  export const Base = styled("div")<Record<string, unknown>>`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    --overlayMetaDataTranslateY: -100%;
    --overlayControlsTranslateY: 100%;

    &[data-paused="true"] {
      --overlayMetaDataTranslateY: 0 !important;
    }

    &:hover {
      --overlayMetaDataTranslateY: 0;
      --overlayControlsTranslateY: 0;
    }

    &[data-paused="true"][data-played-once="true"] {
      --overlayControlsTranslateY: 0;
    }

    &[data-played-once="false"] {
      --overlayControlsTranslateY: 100%;
    }
  `;

  export const Control = styled("div")<Record<string, unknown>>`
    flex: 1 0;
  `;

  export const PlayOrPauseAnimationDuration = 400;

  export const PlayOrPauseButtonAnimation = styled("div")<
    Record<string, unknown>
  >`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 12px;
    pointer-events: none;

    @keyframes state-change {
      from {
        background-color: rgba(0, 0, 0, 0.6);
        transform: translate(-50%, -50%) scale(1.5);
      }

      to {
        transform: translate(-50%, -50%) scale(2.5);
      }
    }

    content: "";
    color: ${({ theme }) => theme.colors._primary.string()};
    background-position: center;
    background-size: 12px 12px;
    background-repeat: no-repeat;

    &[data-has-played-before="true"] {
      animation: state-change ${PlayOrPauseAnimationDuration}ms ease-in-out;
    }

    &[data-has-played-before="false"] {
      background-color: rgba(0, 0, 0, 0.6);
    }

    &[data-has-played-before="true"][data-paused="true"] {
      //background-image: url($/{pause});
    }

    &[data-has-played-before="false"],
    &[data-paused="false"] {
      //background-image: url($/{play});
    }
  `;

  export const MetadataBase = styled("div")<Record<string, unknown>>`
    padding: 12px;
    transition: transform 0.1s ease-in-out;
    transform: translateY(var(--overlayMetaDataTranslateY));

    background-image: linear-gradient(0, transparent, rgba(0, 0, 0, 0.7));
  `;

  export const MetadataTitleBase = styled("div")<Record<string, unknown>>`
    font-size: 16px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;

  export const MetadataFilesizeBase = styled("div")<Record<string, unknown>>`
    font-weight: 500;
    font-size: 12px;
    opacity: 0.7;

    color: ${(props) => props.theme.colors._primary.string()};
  `;

  export const VideoControlsBase = styled("div")<Record<string, unknown>>`
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 6px 8px;
    gap: 7px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    transition: transform 0.1s ease-in-out;
    transform: translateY(var(--overlayControlsTranslateY));
  `;

  export const VideoControlsTimeBase = styled("div")<Record<string, unknown>>`
    font-size: 12px;
    font-family: Consolas, monospace;
    user-select: none;
  `;

  export const ProgressBarBase = styled("div")<Record<string, unknown>>`
    height: 6px;
    border-radius: 80px;
    flex: 1 0;
    cursor: pointer;

    &:hover .progress-bar-fill:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      transform: translateX(50%) translateY(-50%);

      background-color: ${({ theme }) => theme.colors._accent.string()};
    }

    background-color: ${({ theme }) =>
      theme.colors._primary.fade(0.7).string()};
  `;

  export const ProgressBarFillBase = styled("div")<Record<string, unknown>>`
    height: 100%;
    transition: width 0.25s linear;
    position: relative;
    border-radius: 80px;
    pointer-events: none;

    background-color: ${({ theme }) => theme.colors._accent.string()};
  `;

  const ButtonBase = styled("div")<Record<string, unknown>>`
    height: 14px;
    width: 14px;

    background-size: 14px 14px;
    transition: opacity 0.1s ease-in-out;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `;

  export const PlayOrPauseButtonBase = styled(ButtonBase)<
    Record<string, unknown>
  >`
    &[data-paused="true"] {
      //background-image: url($/{play});
    }
    &[data-paused="false"] {
      //background-image: url($/{pause});
    }
  `;

  export const FullscreenButtonBase = styled(ButtonBase)<
    Record<string, unknown>
  >`
    //background-image: url($/{fullscreen});
  `;
}
