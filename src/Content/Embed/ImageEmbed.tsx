import React from "react";
import type { APIEmbed } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";
import EmbeddedImage from "./EmbeddedImage";
import { error } from "../../utils/error";

export interface GifVEmbedProps {
  embed: APIEmbed;
}

function ImageEmbed({ embed }: GifVEmbedProps) {
  const size = useSize(
    embed.thumbnail?.width ?? 1,
    embed.thumbnail?.height ?? 1
  );

  if (!("thumbnail" in embed) || !embed.thumbnail) {
    error("ImageEmbed: embed.thumbnail is null");
    return null;
  }

  return <EmbeddedImage embedImage={embed.thumbnail} {...size} />;
}

export default ImageEmbed;
