import useSize from "./useSize";
import React from "react";
import * as Styles from "./style";
import { APIAttachment } from "discord-api-types/v10";

interface ImageAttachmentProps {
  attachment: APIAttachment;
}

function ImageAttachment(props: ImageAttachmentProps) {
  const { width, height } = useSize(
    props.attachment.width,
    props.attachment.height
  );

  return (
    <Styles.ImageAttachment
      src={props.attachment.url}
      width={width}
      height={height}
    />
  );
}

export default ImageAttachment;
