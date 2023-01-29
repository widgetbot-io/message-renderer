import VideoAttachment from "@root/Content/Attachment/VideoAttachment";
import React, { memo, useState } from "react";
import ImageAttachment from "@root/Content/Attachment/ImageAttachment";
import GenericAttachment from "@root/Content/Attachment/GenericAttachment";
import * as Styles from "./style";

import { APIAttachment } from "discord-api-types/v10";

export interface AttachmentProps {
  attachment: APIAttachment;
}

function AttachmentBase(props: AttachmentProps) {
  if (props.attachment.width && props.attachment.height) {
    if (/\.(?:mp4|webm|mov)$/.test(props.attachment.filename))
      return <VideoAttachment attachmentOrEmbed={props.attachment} />;

    return <ImageAttachment attachment={props.attachment} />;
  }

  // TODO: try to avoid the same component being reused with just a different icon

  if (/\.(?:mp3|ogg|wav|flac)$/.test(props.attachment.filename))
    return (
      <GenericAttachment attachment={props.attachment} icon="audio">
        <Styles.AttachmentAudioControls controls src={props.attachment.url} />
      </GenericAttachment>
    );

  if (/\.sketch$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon="sketch" />;

  if (/\.pdf$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon="acrobat" />;

  if (/\.ae$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon="ae" />;

  if (/\.ai$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon="ai" />;

  if (/\.(?:rar|zip|7z|tar|tar\.gz)$/.test(props.attachment.filename))
    return <GenericAttachment attachment={props.attachment} icon="archive" />;

  if (
    /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/.test(
      props.attachment.filename
    )
  )
    return <GenericAttachment attachment={props.attachment} icon="code" />;

  if (
    /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/.test(
      props.attachment.filename
    )
  )
    return <GenericAttachment attachment={props.attachment} icon="document" />;

  if (/\.(?:xls|xlsx|numbers|csv)$/.test(props.attachment.filename))
    return (
      <GenericAttachment attachment={props.attachment} icon="spreadsheet" />
    );

  if (
    /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/.test(
      props.attachment.filename
    )
  )
    return <GenericAttachment attachment={props.attachment} icon="webcode" />;

  return <GenericAttachment attachment={props.attachment} icon="unknown" />;
}

function AttachmentContainer(props: AttachmentProps) {
  const [showSpoiler, setShowSpoiler] = useState(false);

  if (props.attachment.filename.startsWith("SPOILER_"))
    return (
      <Styles.Spoiler
        data-show={showSpoiler}
        onClick={() => setShowSpoiler(true)}
      >
        <AttachmentBase attachment={props.attachment} />
      </Styles.Spoiler>
    );

  return <AttachmentBase attachment={props.attachment} />;
}

function Attachment(props: AttachmentProps) {
  return <AttachmentContainer attachment={props.attachment} />;
}

export default memo(Attachment);
