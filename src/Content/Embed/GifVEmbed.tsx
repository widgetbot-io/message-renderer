import useSize from "@root/Content/Attachment/useSize";
import { Message_embeds } from "@types";
import * as Styles from "./style";
import React from "react";

export interface GifVEmbedProps {
  embed: Message_embeds;
}

function GifVEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(embed.video.width, embed.video.height);

  return (
    <Styles.MediaEmbed
      stitchesProps={{ as: "video" }}
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
