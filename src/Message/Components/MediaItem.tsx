import type { APIUnfurledMediaItem } from "discord-api-types/v10";
import useSize from "../../Content/Attachment/useSize";
import React from "react";
import * as Styles from "./style";
import { t } from "i18next";

interface MediaItemProps {
  media: APIUnfurledMediaItem;
  description?: string | null;
}

function MediaItem({ media, description }: MediaItemProps) {
  const hasDimensions =
    typeof media.width === "number" && typeof media.height === "number";
  const { width, height } = useSize(
    media.width ?? 0,
    media.height ?? 0,
    !hasDimensions
  );

  if (media.content_type?.startsWith("video/")) {
    return (
      <Styles.MediaVideo
        src={media.url}
        width={width}
        height={height}
        controls
      />
    );
  }

  return (
    <Styles.MediaImage
      src={media.url}
      alt={description ?? undefined}
      width={width}
      height={height}
      draggable={false}
      placeholder={
        <Styles.LazyImagePlaceholder style={{ width, height }}>
          {t("loading")}
        </Styles.LazyImagePlaceholder>
      }
    />
  );
}

export default MediaItem;
