import { AttachmentProps } from "@root/Content/Attachment/index";

import { filesize } from "filesize";
import * as Styles from "./style";
import * as React from "react";
import { useMemo } from "react";
import SvgFromUrl from "@root/SvgFromUrl";
import { Svg } from "@root/core/SvgContext";

interface GenericAttachmentProps extends AttachmentProps {
  // If undefined, we will fall back to the unknown icon
  icon?:
    | "archive"
    | "audio"
    | "sketch"
    | "acrobat"
    | "ae"
    | "ai"
    | "code"
    | "document"
    | "spreadsheet"
    | "webcode"
    | "unknown";
  children?: React.ReactNode;
}

function GenericAttachment(props: GenericAttachmentProps) {
  const icon: Svg = useMemo(() => {
    switch (props.icon ?? "unknown") {
      case "archive":
        return "FileArchive";
      case "audio":
        return "FileAudio";
      case "sketch":
        return "FileSketch";
      case "acrobat":
        return "FileAcrobat";
      case "ae":
        return "FileAe";
      case "ai":
        return "FileAi";
      case "code":
        return "FileCode";
      case "document":
        return "FileDocument";
      case "spreadsheet":
        return "FileSpreadsheet";
      case "webcode":
        return "FileWebCode";
      default:
        return "FileUnknown";
    }
  }, [props.icon]);

  return (
    <Styles.AttachmentContainer
      stitchesProps={{
        withoutChildren: props.children === undefined,
      }}
    >
      <SvgFromUrl svg={icon} width={30} height={40} />
      <Styles.AttachmentMetadata>
        <Styles.AttachmentFileName
          rel="noreferrer noopener"
          target="_blank"
          href={props.attachment.url}
        >
          {props.attachment.filename}
        </Styles.AttachmentFileName>
        <Styles.AttachmentFileSize>
          {filesize(props.attachment.size, { base: 2 }) as string}
        </Styles.AttachmentFileSize>
      </Styles.AttachmentMetadata>
      <Styles.DownloadIcon
        rel="noreferrer noopener"
        target="_blank"
        href={props.attachment.url}
      >
        <SvgFromUrl svg="IconDownload" width={24} height={24} />
      </Styles.DownloadIcon>
      {props.children && (
        <Styles.ExtraUserInterface>{props.children}</Styles.ExtraUserInterface>
      )}
    </Styles.AttachmentContainer>
  );
}

export default GenericAttachment;
