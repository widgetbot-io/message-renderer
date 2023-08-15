import * as Styles from "./style";
import type { ComponentProps } from "react";
import React from "react";
import { useConfig } from "../../core/ConfigContext";
import type { APIEmbedImage } from "discord-api-types/v10";

interface Props extends ComponentProps<typeof Styles.Image> {
  embedImage: APIEmbedImage;
  width?: number;
  height?: number;
}

// Not to be confused with ImageEmbed, this is images that are embedded in embeds
function EmbedImage({ width, height, embedImage, ...rest }: Props) {
  const { embedImageOnClick } = useConfig();

  return (
    <Styles.Image
      {...rest}
      src={embedImage.proxy_url ?? embedImage.url}
      clickable={embedImageOnClick !== undefined}
      onClick={() => embedImageOnClick?.(embedImage)}
      width={width}
      height={height}
    />
  );
}

export default EmbedImage;
