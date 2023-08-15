import * as Styles from "./style";
import React from "react";
import type { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";
import EmbedImage from "./EmbedImage";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

// Not to be confused with EmbedImage, this is an embed image. Not an image embedded in an embed.
function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(
    embed.thumbnail?.width ?? 1,
    embed.thumbnail?.height ?? 1
  );

  if (!("thumbnail" in embed) || !embed.thumbnail) {
    console.error("ImageEmbed: embed.thumbnail is null");
    return null;
  }

  return <EmbedImage embedImage={embed.thumbnail} {...size} />;
}

export default ImageEmbed;
