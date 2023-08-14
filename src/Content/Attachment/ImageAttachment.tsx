import useSize from "./useSize";
import React from "react";
import * as Styles from "./style";
import type { APIAttachment } from "discord-api-types/v10";
import { t } from "i18next";

interface ImageAttachmentProps {
  attachment: APIAttachment;
}

function ImageAttachment(props: ImageAttachmentProps) {
  if (!props.attachment.width || !props.attachment.height) {
    // todo: dev mode only
    console.error(
      "ImageAttachment: attachment has no width or height",
      props.attachment
    );
    return null;
  }

  const { width, height } = useSize(
    props.attachment.width,
    props.attachment.height
  );

  return (
    <Styles.ImageAttachment
      src={props.attachment.url}
      width={width}
      height={height}
      placeholder={
        <Styles.LazyImagePlaceholder style={{ width, height }}>
          {t("loading")}
        </Styles.LazyImagePlaceholder>
      }
    />
  );
}

export default ImageAttachment;
