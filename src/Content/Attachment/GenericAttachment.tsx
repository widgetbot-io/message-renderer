import { Attachment } from "@root/Content/Attachment/elements";
import { AttachmentProps } from "@root/Content/Attachment/index";

import downloadIcon from "@images/discordAssets/download-icon.svg";
import { filesize } from "filesize";
import * as React from "react";

interface GenericAttachmentProps extends AttachmentProps {
  // If undefined, we will fall back to the unknown icon
  // icon?: string;
  children?: React.ReactNode;
}

function GenericAttachment(props: GenericAttachmentProps) {
  return (
    <Attachment.ContainerBase
      // icon={props.icon ?? unknown}
      hasChildren={props.children !== undefined}
    >
      <Attachment.MetaBase>
        <Attachment.FileNameBase
          rel="noreferrer noopener"
          target="_blank"
          href={props.attachment.url}
        >
          {props.attachment.filename}
        </Attachment.FileNameBase>
        <Attachment.FileSizeBase>
          {filesize(props.attachment.size, { base: 2 }) as string}
        </Attachment.FileSizeBase>
      </Attachment.MetaBase>
      <Attachment.DownloadIconBase
        rel="noreferrer noopener"
        target="_blank"
        href={props.attachment.url}
      >
        <img src={downloadIcon} alt="download" />
      </Attachment.DownloadIconBase>
      {props.children && (
        <Attachment.ExtraUserInterfaceBase>
          {props.children}
        </Attachment.ExtraUserInterfaceBase>
      )}
    </Attachment.ContainerBase>
  );
}

export default GenericAttachment;
