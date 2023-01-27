import { createContext, useContext } from "react";

// SVGs
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

import SvgIconAdd from "@images/discordAssets/icon-add.svg";
import SvgIconRemove from "@images/discordAssets/icon-remove.svg";
import SvgWarning from "@images/discordAssets/icon-warning.svg";
import SvgIconDownload from "@images/discordAssets/icon-download.svg";
import SvgIconCheckmark from "@images/discordAssets/icon-checkmark.svg";
import SvgIconCross from "@images/discordAssets/icon-cross.svg";
import SvgIconPin from "@images/discordAssets/icon-pin.svg";
import SvgIconPencil from "@images/discordAssets/icon-pencil.svg";
import SvgIconBoost from "@images/discordAssets/icon-boost.svg";
import SvgIconThreadCreated from "@images/discordAssets/icon-thread-created.svg";
import SvgIconId from "@images/discordAssets/icon-id.svg";
import SvgIconSticker from "@images/discordAssets/icon-sticker.svg";
import SvgIconCommand from "@images/discordAssets/icon-command.svg";
import SvgIconAttachment from "@images/discordAssets/icon-attachment.svg";
import SvgIconDanger from "@images/discordAssets/icon-danger.svg";
import SvgIconPause from "@images/discordAssets/icon-pause.svg";
import SvgIconFullscreen from "@images/discordAssets/icon-fullscreen.svg";
import SvgIconPlay from "@images/discordAssets/icon-play.svg";
import SvgIconUnknownReply from "@images/discordAssets/icon-unknown-reply.svg";

import SvgMiscDiscordImageFailure from "@images/discordAssets/misc-discord-image-failure.svg";

export type Svg =
  | "FileArchive"
  | "FileAudio"
  | "FileSketch"
  | "FileAcrobat"
  | "FileAe"
  | "FileAi"
  | "FileCode"
  | "FileDocument"
  | "FileSpreadsheet"
  | "FileWebCode"
  | "FileUnknown"
  | "IconDownload"
  | "IconAdd"
  | "IconRemove"
  | "IconWarning"
  | "IconCheckmark"
  | "IconPin"
  | "IconPencil"
  | "IconBoost"
  | "IconThreadCreated"
  | "IconId"
  | "IconSticker"
  | "IconCommand"
  | "IconAttachment"
  | "IconDanger"
  | "IconPause"
  | "IconFullscreen"
  | "IconPlay"
  | "IconCross"
  | "IconUnknownReply"
  | "MiscDiscordImageFailure";

export const SvgContext = createContext({});

const defaultSvgUrls: Record<Svg, string> = {
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

export function getSvgUrl(svg: Svg): string {
  const svgUrls = useContext(SvgContext);

  return svgUrls?.[svg] ?? defaultSvgUrls[svg] ?? svg;
}
