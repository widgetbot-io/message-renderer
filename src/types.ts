import type { APIMessage } from "discord-api-types/v10";

export interface DiscordMessage extends APIMessage {
  optimistic?: boolean;
}
