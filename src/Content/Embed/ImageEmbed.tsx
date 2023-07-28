import * as Styles from "./style";
import React from "react";
import type { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.thumbnail.width, embed.thumbnail.height);

  return (
    <Styles.MediaEmbed
      src={embed.thumbnail.proxy_url}
      // originalUrl={embed.thumbnail.url}
      width={size.width}
      height={size.height}
    />
  );
}

export default ImageEmbed;
