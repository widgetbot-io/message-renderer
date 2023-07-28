import type { ReactElement} from "react";
import { createContext, useContext } from "react";
import type {
  APIChannel,
  APIGuild,
  APIGuildMember,
  APIMessage,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import type { SvgConfig } from "./svgs";
import type { Tag } from "../ChatTag/style";

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
  currentUser(): APIUser | null;
  seeThreadOnClick?(messageId: Snowflake, thread: APIChannel): void;
  userMentionOnClick?(user: APIUser): void;
  roleMentionOnClick?(role: APIRole): void;
  channelMentionOnClick?(channel: APIChannel): void;
  messageComponentButtonOnClick?(message: APIMessage, customId: string): void;
  chatBadge?({ user, TagWrapper }: ChatBadgeProps): ReactElement | null;
  themeOverrideClassName?: string;
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
