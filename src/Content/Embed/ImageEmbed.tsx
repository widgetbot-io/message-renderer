import useSize from "@root/Content/Attachment/useSize";
import { MediaEmbedBase } from "@root/Content/Embed/elements";
import { Message_embeds } from "@types";
import React from "react";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.thumbnail.width, embed.thumbnail.height);

  return (
    <img
      className={MediaEmbedBase}
      src={embed.thumbnail.proxyUrl}
      // originalUrl={embed.thumbnail.url}
      width={size.width}
      height={size.height}
    />
  );
}

export default ImageEmbed;
