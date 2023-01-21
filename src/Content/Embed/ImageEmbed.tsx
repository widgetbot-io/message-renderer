import useSize from "@root/Content/Attachment/useSize";
import { Message_embeds } from "@types";
import * as Styles from "./style";
import React from "react";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.thumbnail.width, embed.thumbnail.height);

  return (
    <Styles.MediaEmbed
      src={embed.thumbnail.proxyUrl}
      // originalUrl={embed.thumbnail.url}
      width={size.width}
      height={size.height}
    />
  );
}

export default ImageEmbed;
