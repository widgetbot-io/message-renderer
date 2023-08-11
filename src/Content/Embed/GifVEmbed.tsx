import * as Styles from "./style";
import React from "react";
import type { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

function GifVEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.video?.width ?? 1, embed.video?.height ?? 1);

  if (!("video" in embed) || !embed.video) return null;

  return (
    <Styles.MediaEmbed
      as="video"
      src={embed.video.proxy_url ?? embed.video.url}
      width={size.width}
      height={size.height}
      autoPlay
      muted
      loop
    />
  );
}

export default GifVEmbed;
