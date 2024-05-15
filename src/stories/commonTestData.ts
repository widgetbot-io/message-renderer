import type { APIChannel, APIUser } from "discord-api-types/v10";
import { ChannelType } from "discord-api-types/v10";

export const testUser: APIUser = {
  id: "132819036282159104",
  username: "johnythecarrot",
  global_name: "JohnyTheCarrot",
  avatar: "a_8eccef95181a9e5de97a5382452412ec",
  discriminator: "0001",
  public_flags: 4457220,
};

export const testTextChannel: APIChannel = {
  name: "test-channel",
  position: 9,
  id: "4321",
  guild_id: "613425648685547541",
  type: ChannelType.GuildText,
};

export const testVoiceChannel: APIChannel = {
  name: "Test Voice",
  position: 10,
  id: "5555",
  guild_id: "613425648685547541",
  type: ChannelType.GuildVoice,
};
