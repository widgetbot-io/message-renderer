import useSize from "@root/Content/Attachment/useSize";
import { MediaEmbedBase } from "@root/Content/Embed/elements";
import { Message_embeds } from "@types";
import React from "react";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function GifVEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.video.width, embed.video.height);

  return (
    <video
      className={MediaEmbedBase}
      src={embed.video.proxyUrl ?? embed.video.url}
      width={size.width}
      height={size.height}
      autoPlay
      muted
      loop
    />
  );
}

export default GifVEmbed;
