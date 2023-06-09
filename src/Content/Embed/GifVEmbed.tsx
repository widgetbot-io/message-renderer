import * as Styles from "./style";
import React from "react";
import { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

function GifVEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.video.width, embed.video.height);

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
