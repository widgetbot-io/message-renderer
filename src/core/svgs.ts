import { useContext } from "react";

const SvgMissingAsset =
  "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' id='svg'%3E%3Cg clip-path='url(%23clip0_604_44)'%3E%3Crect width='64' height='64' rx='6' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H32V32H0V0ZM64 32V64H32V32H64Z' fill='%23DC3ADF'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_604_44'%3E%3Crect width='64' height='64' rx='6' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A";
import { ConfigContext } from "./ConfigContext";

export type SvgConfig = Record<Svg, string>;

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
  | "IconForward"
  | "IconUnknownReply"
  | "IconTextChannel"
  | "IconVoiceChannel"
  | "IconStageChannel"
  | "IconForumChannel"
  | "IconLinkExternal"
  | "MiscDiscordImageFailure"
  | `Custom${string}`;

const defaultSvgUrls: Record<Svg, string> = {
  FileAudio: SvgMissingAsset,
  FileSketch: SvgMissingAsset,
  FileArchive: SvgMissingAsset,
  FileUnknown: SvgMissingAsset,
  FileAe: SvgMissingAsset,
  FileAi: SvgMissingAsset,
  FileAcrobat: SvgMissingAsset,
  FileCode: SvgMissingAsset,
  FileDocument: SvgMissingAsset,
  FileSpreadsheet: SvgMissingAsset,
  FileWebCode: SvgMissingAsset,

  IconAdd: SvgMissingAsset,
  IconRemove: SvgMissingAsset,
  IconDownload: SvgMissingAsset,
  IconWarning: SvgMissingAsset,
  IconCheckmark: SvgMissingAsset,
  IconCross: SvgMissingAsset,
  IconPin: SvgMissingAsset,
  IconPencil: SvgMissingAsset,
  IconBoost: SvgMissingAsset,
  IconThreadCreated: SvgMissingAsset,
  IconId: SvgMissingAsset,
  IconSticker: SvgMissingAsset,
  IconCommand: SvgMissingAsset,
  IconAttachment: SvgMissingAsset,
  IconDanger: SvgMissingAsset,
  IconPause: SvgMissingAsset,
  IconFullscreen: SvgMissingAsset,
  IconPlay: SvgMissingAsset,
  IconTextChannel: SvgMissingAsset,
  IconVoiceChannel: SvgMissingAsset,
  IconForward: SvgMissingAsset,
  IconUnknownReply: SvgMissingAsset,
  IconStageChannel: SvgMissingAsset,
  IconForumChannel: SvgMissingAsset,
  MiscDiscordImageFailure: SvgMissingAsset,
  IconLinkExternal: SvgMissingAsset,
};

export function getSvgUrl(svg: Svg): string {
  const { svgUrls } = useContext(ConfigContext);

  return svgUrls?.[svg] ?? defaultSvgUrls[svg] ?? svg;
}
