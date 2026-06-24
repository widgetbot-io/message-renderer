import type { APIMediaGalleryComponent } from "discord-api-types/v10";
import MediaItem from "./MediaItem";
import React from "react";
import Spoiler from "./Spoiler";
import * as Styles from "./style";

interface MediaGalleryComponentProps {
  mediaGallery: APIMediaGalleryComponent;
}

function MediaGalleryComponent({ mediaGallery }: MediaGalleryComponentProps) {
  return (
    <Styles.MediaGallery>
      {mediaGallery.items.map((item, index) => {
        const media = (
          <MediaItem media={item.media} description={item.description} />
        );

        return (
          <Styles.MediaGalleryItem key={index}>
            {item.spoiler ? <Spoiler>{media}</Spoiler> : media}
          </Styles.MediaGalleryItem>
        );
      })}
    </Styles.MediaGallery>
  );
}

export default MediaGalleryComponent;
