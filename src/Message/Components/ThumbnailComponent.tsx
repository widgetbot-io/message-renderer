import type { APIThumbnailComponent } from "discord-api-types/v10";
import MediaItem from "./MediaItem";
import React from "react";
import Spoiler from "./Spoiler";
import * as Styles from "./style";

interface ThumbnailComponentProps {
  thumbnail: APIThumbnailComponent;
}

function ThumbnailComponent({ thumbnail }: ThumbnailComponentProps) {
  const media = (
    <MediaItem media={thumbnail.media} description={thumbnail.description} />
  );

  return (
    <Styles.Thumbnail>
      {thumbnail.spoiler ? <Spoiler>{media}</Spoiler> : media}
    </Styles.Thumbnail>
  );
}

export default ThumbnailComponent;
