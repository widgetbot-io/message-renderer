import * as Styles from "./style";
import type { ComponentProps } from "react";
import React from "react";
import { useConfig } from "../../core/ConfigContext";
import type { APIEmbedImage } from "discord-api-types/v10";
import useSize from "src/Content/Attachment/useSize";

interface Props extends ComponentProps<typeof Styles.Image> {
  embedImage: APIEmbedImage;
  width?: number;
  height?: number;
}

// Not to be confused with ImageEmbed, this is images that are embedded in embeds
function EmbeddedImage({ width, height, embedImage, ...rest }: Props) {
  const { embedImageOnClick } = useConfig();

  const { width: widthEmbed, height: heightEmbed } = useSize(
    width ?? 1,
    height ?? 1
  );

  const actualWidth = widthEmbed ?? width;
  const actualHeight = heightEmbed ?? height;

  return (
    <Styles.Image
      {...rest}
      src={embedImage.proxy_url ?? embedImage.url}
      clickable={embedImageOnClick !== undefined}
      onClick={() => embedImageOnClick?.(embedImage)}
      width={actualWidth}
      height={actualHeight}
    />
  );
}

export default EmbeddedImage;
