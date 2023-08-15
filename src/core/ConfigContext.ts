import type { ReactElement } from "react";
import { createContext, useContext } from "react";
import type {
  APIChannel,
  APIEmbedImage,
  APIGuild,
  APIGuildMember,
  APIMessage,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import type { SvgConfig } from "./svgs";
import type { Tag } from "../ChatTag/style";
import type { APIAttachment } from "discord-api-types/v10";

export type PartialSvgConfig = Partial<SvgConfig>;

export interface MessageButtonListOption<SC extends PartialSvgConfig> {
  onClick: () => void;
  icon: keyof SC;
  actionDescription: string;
}

export interface ChatBadgeProps {
  user: APIUser;
  TagWrapper: typeof Tag;
}

export type Config<SvgConfig extends PartialSvgConfig> = {
  svgUrls?: SvgConfig;
  messageButtons(message: APIMessage): MessageButtonListOption<SvgConfig>[];
  resolveRole(id: Snowflake): APIRole | null;
  resolveChannel(id: Snowflake): APIChannel | null;
  resolveMember(id: Snowflake, guildId: Snowflake): APIGuildMember | null;
  resolveGuild(id: Snowflake): APIGuild | null;
  resolveUser(id: Snowflake): APIUser | null;
  chatBadge?({ user, TagWrapper }: ChatBadgeProps): ReactElement | null;
  themeOverrideClassName?: string;

  // Click handlers
  currentUser(): APIUser | null;
  seeThreadOnClick?(messageId: Snowflake, thread: APIChannel): void;
  userOnClick?(user: APIUser): void;
  roleMentionOnClick?(role: APIRole): void;
  channelMentionOnClick?(channel: APIChannel): void;
  openPinnedMessagesOnClick?(channel: APIChannel): void;
  messageComponentButtonOnClick?(message: APIMessage, customId: string): void;
  attachmentImageOnClick?(image: APIAttachment): void;
  embedImageOnClick?(image: APIEmbedImage): void;
};

export const ConfigContext = createContext<Config<PartialSvgConfig>>({
  messageButtons: () => [],
  resolveRole: () => null,
  resolveUser: () => null,
  resolveChannel: () => null,
  resolveMember: () => null,
  resolveGuild: () => null,
  currentUser: () => null,
});

export function useConfig() {
  return useContext(ConfigContext);
}
