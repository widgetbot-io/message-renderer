import { createContext, useContext } from "react";
import type {
  APIChannel,
  APIGuildMember,
  APIMessage,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import type { SvgConfig } from "./svgs";

export type PartialSvgConfig = Partial<SvgConfig>;

export interface MessageButtonListOption<SC extends PartialSvgConfig> {
  onClick: () => void;
  icon: keyof SC;
  actionDescription: string;
}

export type Config<SvgConfig extends PartialSvgConfig> = {
  svgUrls?: SvgConfig;
  messageButtons(message: APIMessage): MessageButtonListOption<SvgConfig>[];
  resolveRole(id: Snowflake): APIRole | null;
  resolveChannel(id: Snowflake): APIChannel | null;
  resolveMember(id: Snowflake, guildId: Snowflake): APIGuildMember | null;
  resolveUser(id: Snowflake): APIUser | null;
  currentUser(): APIUser | null;
};

export const ConfigContext = createContext<Config<PartialSvgConfig>>({
  messageButtons: () => [],
  resolveRole: () => null,
  resolveUser: () => null,
  resolveChannel: () => null,
  resolveMember: () => null,
  currentUser: () => null,
});

export function useConfig() {
  return useContext(ConfigContext);
}
