import { AttachmentProps } from "@root/Content/Attachment/index";

import downloadIcon from "@images/discordAssets/download-icon.svg";
import { filesize } from "filesize";
import * as Styles from "./style";
import * as React from "react";
import { useMemo } from "react";
import SvgFromUrl from "@root/SvgFromUrl";

import SvgFileAudio from "@images/discordAssets/file-audio.svg";
import SvgSketch from "@images/discordAssets/file-sketch.svg";
import SvgFileArchive from "@images/discordAssets/file-archive.svg";
import SvgFileUnknown from "@images/discordAssets/file-unknown.svg";
import SvgAe from "@images/discordAssets/file-ae.svg";
import SvgAi from "@images/discordAssets/file-ai.svg";
import SvgAcrobat from "@images/discordAssets/file-acrobat.svg";
import SvgCode from "@images/discordAssets/file-code.svg";
import SvgDocument from "@images/discordAssets/file-document.svg";
import SvgSpreadsheet from "@images/discordAssets/file-spreadsheet.svg";
import SvgWebCode from "@images/discordAssets/file-webcode.svg";

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
  const icon = useMemo(() => {
    switch (props.icon ?? "unknown") {
      case "archive":
        return SvgFileArchive;
      case "audio":
        return SvgFileAudio;
      case "sketch":
        return SvgSketch;
      case "acrobat":
        return SvgAcrobat;
      case "ae":
        return SvgAe;
      case "ai":
        return SvgAi;
      case "code":
        return SvgCode;
      case "document":
        return SvgDocument;
      case "spreadsheet":
        return SvgSpreadsheet;
      case "webcode":
        return SvgWebCode;
      default:
        return SvgFileUnknown;
    }
  }, [props.icon]);

  return (
    <Styles.AttachmentContainer
      stitchesProps={{
        withoutChildren: props.children === undefined,
      }}
    >
      <SvgFromUrl href={icon} width={30} height={40} />
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
        <SvgFromUrl href={downloadIcon} width={24} height={24} />
      </Styles.DownloadIcon>
      {props.children && (
        <Styles.ExtraUserInterface>{props.children}</Styles.ExtraUserInterface>
      )}
    </Styles.AttachmentContainer>
  );
}

export default GenericAttachment;
