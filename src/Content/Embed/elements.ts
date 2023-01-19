import styled, { css } from "react-emotion";
import play from "@images/discordAssets/play.svg";

export const MediaEmbedBase = css`
  border-radius: 3px;
  cursor: pointer;
`;

export namespace EmbedStyle {
  interface ImagesProps {
    amount: number;
  }

  export const Images = styled("div")<ImagesProps & Record<string, unknown>>`
    display: grid;
    gap: 4px;
    border-radius: 3px;
    overflow: hidden;

    ${(props) =>
      props.amount === 2 &&
      css`
        grid-template-columns: 1fr 1fr;
      `}

    ${(props) =>
      props.amount === 3 &&
      css`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: calc((300px - 4px) / 2) calc((300px - 4px) / 2);

        & > *:first-child {
          grid-row: span 2;
        }
      `}
    
    ${(props) =>
      props.amount === 4 &&
      css`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: calc((300px - 4px) / 2) calc((300px - 4px) / 2);
      `}
    
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `;

  export const MultiImageImageContainer = styled("div")<
    Record<string, unknown>
  >`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export const Footer = styled("div")<Record<string, unknown>>`
    font-size: 12px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors._primary.darken(0.1).string()};
  `;

  export const FooterIcon = styled("img")<Record<string, unknown>>`
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  `;
}

export const VideoIframe = styled("iframe")<Record<string, unknown>>`
  border-radius: 3px;
  border: none;
`;

export const VideoThumbnail = styled("div")<
  { src: string } & Record<string, unknown>
>`
  border-radius: 3px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    background-position: center;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    border-radius: 100%;
    pointer-events: none;
    background-image: url(${play});
  }
`;
