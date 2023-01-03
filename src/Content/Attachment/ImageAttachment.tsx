import { Message_attachments } from "@types";
import useSize from "@root/Content/Attachment/useSize";
import { ImageAttachmentBase } from "@root/Content/Attachment/elements";
import React from "react";

interface ImageAttachmentProps {
  attachment: Message_attachments;
}

function ImageAttachment(props: ImageAttachmentProps) {
  const { width, height } = useSize(
    props.attachment.width,
    props.attachment.height
  );

  return (
    <img
      src={props.attachment.url}
      width={width}
      height={height}
      className={ImageAttachmentBase}
    />
  );
}

export default ImageAttachment;
