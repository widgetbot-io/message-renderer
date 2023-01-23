import styled from "../../ThemeContext";
import { css } from "react-emotion";

// todo: button icons! search for "background-image"

export const ImageAttachmentBase = css`
  cursor: pointer;
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
