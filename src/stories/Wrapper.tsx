import { MessageRendererProvider } from "../index";
import React from "react";

// SVGs
import SvgFileAudio from "../assets/storybookOnlyAssets/file-audio.svg";
import SvgSketch from "../assets/storybookOnlyAssets/file-sketch.svg";
import SvgFileArchive from "../assets/storybookOnlyAssets/file-archive.svg";
import SvgFileUnknown from "../assets/storybookOnlyAssets/file-unknown.svg";
import SvgAe from "../assets/storybookOnlyAssets/file-ae.svg";
import SvgAi from "../assets/storybookOnlyAssets/file-ai.svg";
import SvgAcrobat from "../assets/storybookOnlyAssets/file-acrobat.svg";
import SvgCode from "../assets/storybookOnlyAssets/file-code.svg";
import SvgDocument from "../assets/storybookOnlyAssets/file-document.svg";
import SvgSpreadsheet from "../assets/storybookOnlyAssets/file-spreadsheet.svg";
import SvgWebCode from "../assets/storybookOnlyAssets/file-webcode.svg";

import SvgIconAdd from "../assets/storybookOnlyAssets/icon-add.svg";
import SvgIconRemove from "../assets/storybookOnlyAssets/icon-remove.svg";
import SvgWarning from "../assets/storybookOnlyAssets/icon-warning.svg";
import SvgIconDownload from "../assets/storybookOnlyAssets/icon-download.svg";
import SvgIconCheckmark from "../assets/storybookOnlyAssets/icon-checkmark.svg";
import SvgIconCross from "../assets/storybookOnlyAssets/icon-cross.svg";
import SvgIconPin from "../assets/storybookOnlyAssets/icon-pin.svg";
import SvgIconPencil from "../assets/storybookOnlyAssets/icon-pencil.svg";
import SvgIconBoost from "../assets/storybookOnlyAssets/icon-boost.svg";
import SvgIconThreadCreated from "../assets/storybookOnlyAssets/icon-thread-created.svg";
import SvgIconId from "../assets/storybookOnlyAssets/icon-id.svg";
import SvgIconSticker from "../assets/storybookOnlyAssets/icon-sticker.svg";
import SvgIconCommand from "../assets/storybookOnlyAssets/icon-command.svg";
import SvgIconAttachment from "../assets/storybookOnlyAssets/icon-attachment.svg";
import SvgIconDanger from "../assets/storybookOnlyAssets/icon-danger.svg";
import SvgIconPause from "../assets/storybookOnlyAssets/icon-pause.svg";
import SvgIconFullscreen from "../assets/storybookOnlyAssets/icon-fullscreen.svg";
import SvgIconPlay from "../assets/storybookOnlyAssets/icon-play.svg";
import SvgIconUnknownReply from "../assets/storybookOnlyAssets/icon-unknown-reply.svg";

import SvgMiscDiscordImageFailure from "../assets/storybookOnlyAssets/misc-discord-image-failure.svg";
import { APIMessage } from "discord-api-types/v10";
import { MessageButtonListOption } from "../Message/MessageContainer";

const svgUrls = {
  FileAudio: SvgFileAudio,
  FileSketch: SvgSketch,
  FileArchive: SvgFileArchive,
  FileUnknown: SvgFileUnknown,
  FileAe: SvgAe,
  FileAi: SvgAi,
  FileAcrobat: SvgAcrobat,
  FileCode: SvgCode,
  FileDocument: SvgDocument,
  FileSpreadsheet: SvgSpreadsheet,
  FileWebCode: SvgWebCode,

  IconAdd: SvgIconAdd,
  IconRemove: SvgIconRemove,
  IconDownload: SvgIconDownload,
  IconWarning: SvgWarning,
  IconCheckmark: SvgIconCheckmark,
  IconCross: SvgIconCross,
  IconPin: SvgIconPin,
  IconPencil: SvgIconPencil,
  IconBoost: SvgIconBoost,
  IconThreadCreated: SvgIconThreadCreated,
  IconId: SvgIconId,
  IconSticker: SvgIconSticker,
  IconCommand: SvgIconCommand,
  IconAttachment: SvgIconAttachment,
  IconDanger: SvgIconDanger,
  IconPause: SvgIconPause,
  IconFullscreen: SvgIconFullscreen,
  IconPlay: SvgIconPlay,
  IconUnknownReply: SvgIconUnknownReply,
  MiscDiscordImageFailure: SvgMiscDiscordImageFailure,
};

function getButtons(
  message: APIMessage
): MessageButtonListOption<typeof svgUrls>[] {
  return [
    {
      icon: "IconId",
      onClick: () => navigator.clipboard.writeText(message.id),
      actionDescription: "Copy Message ID",
    },
  ];
}

function Wrapper(Story) {
  return (
    <MessageRendererProvider svgUrls={svgUrls} messageButtons={getButtons}>
      {({ themeClass }) => <div className={themeClass}>{Story()}</div>}
    </MessageRendererProvider>
  );
}

export default Wrapper;
