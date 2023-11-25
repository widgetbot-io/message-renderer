import type { ReactElement, ReactNode } from "react";
import { createContext, useContext } from "react";
import type {
  APIChannel,
  APIEmbedImage,
  APIGuild,
  APIGuildMember,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import type { SvgConfig } from "./svgs";
import type { Tag } from "../ChatTag/style";
import type { APIAttachment } from "discord-api-types/v10";
import type { UserAvatar } from "../utils/getAvatar";
import type { ChatMessage } from "../types";

export type PartialSvgConfig = Partial<SvgConfig>;

export enum ContextMenuItemType {
  Separator,
  SubMenu,
  Item,
}

export interface Separator {
  type: ContextMenuItemType.Separator;
}

export interface SubMenu<SC extends PartialSvgConfig> {
  type: ContextMenuItemType.SubMenu;
  items: ContextMenuItem<SC>[];
}

export enum IconType {
  Svg,
  Url,
}

export interface MenuItem<SC extends PartialSvgConfig> {
  type: ContextMenuItemType.Item;
  icon:
    | {
        type: IconType.Svg;
        svg: keyof SC;
      }
    | {
        type: IconType.Url;
        url: string;
      };
  content: ReactNode;
  isDanger?: boolean;
}

export type ContextMenuItem<SC extends PartialSvgConfig> =
  | Separator
  | SubMenu<SC>
  | MenuItem<SC>;

export interface MessageButtonListOption<SC extends PartialSvgConfig> {
  onClick: () => void;
  icon: keyof SC;
  actionDescription: string;
}

export interface ChatBadgeProps {
  user: APIUser;
  TagWrapper: typeof Tag;
}

export enum MessageTypeResponse {
  InAppError,
  ConsoleError,
  None,
}

export type Config<SvgConfig extends PartialSvgConfig> = {
  svgUrls?: SvgConfig;
  automodAvatar: {
    still: string;
    animated: string;
  };
  messageButtons(message: ChatMessage): MessageButtonListOption<SvgConfig>[];
  messageContextMenuItems?(message: ChatMessage): ContextMenuItem<SvgConfig>[];
  resolveRole(id: Snowflake): APIRole | null;
  resolveChannel(id: Snowflake): APIChannel | null;
  resolveMember(user: APIUser, guildId: Snowflake): APIGuildMember | null;
  resolveGuild(id: Snowflake): APIGuild | null;
  resolveUser(id: Snowflake): APIUser | null;
  chatBadge?({ user, TagWrapper }: ChatBadgeProps): ReactElement | null;
  avatarUrlOverride?(user: APIUser): UserAvatar | null;
  themeOverrideClassName?: string;
  unknownMessageTypeResponse?: MessageTypeResponse;

  // Click handlers
  currentUser(): APIUser | null;
  seeThreadOnClick?(messageId: Snowflake, thread: APIChannel): void;
  userOnClick?(user: APIUser): void;
  roleMentionOnClick?(role: APIRole): void;
  channelMentionOnClick?(channel: APIChannel): void;
  openPinnedMessagesOnClick?(channel: APIChannel): void;
  messageComponentButtonOnClick?(message: ChatMessage, customId: string): void;
  attachmentImageOnClick?(image: APIAttachment): void;
  embedImageOnClick?(image: APIEmbedImage): void;
  externalLinkOpenRequested?(url: string): void;
};

export const ConfigContext = createContext<Config<PartialSvgConfig>>({
  messageButtons: () => [],
  resolveRole: () => null,
  resolveUser: () => null,
  resolveChannel: () => null,
  resolveMember: () => null,
  resolveGuild: () => null,
  currentUser: () => null,
  automodAvatar: {
    still: "",
    animated: "",
  },
});

export function useConfig() {
  return useContext(ConfigContext);
}
