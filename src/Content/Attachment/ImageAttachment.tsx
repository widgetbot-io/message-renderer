import { Message_attachments } from "@types";
import useSize from "@root/Content/Attachment/useSize";
import React from "react";
import * as Styles from "./style";

interface ImageAttachmentProps {
  attachment: Message_attachments;
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
