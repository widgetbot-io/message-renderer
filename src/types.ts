import type { APIMessage } from "discord-api-types/v10";

export interface ChatMessage extends APIMessage {
  optimistic?: boolean;
}
