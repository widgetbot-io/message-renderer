import * as Styles from "./style";
import React from "react";
import type { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(
    embed.thumbnail?.width ?? 1,
    embed.thumbnail?.height ?? 1
  );

  if (!("thumbnail" in embed) || !embed.thumbnail) {
    console.error("ImageEmbed: embed.thumbnail is null");
    return null;
  }

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
