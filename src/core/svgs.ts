import { useContext } from "react";

import SvgMissingAsset from "@images/missing-asset.svg";
import {ConfigContext} from "./ConfigContext";

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
  | "IconUnknownReply"
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
  IconUnknownReply: SvgMissingAsset,
  MiscDiscordImageFailure: SvgMissingAsset,
};

export function getSvgUrl(svg: Svg): string {
  const { svgUrls } = useContext(ConfigContext);

  return svgUrls?.[svg] ?? defaultSvgUrls[svg] ?? svg;
}
