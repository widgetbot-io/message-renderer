import { APIChannel, APIUser, ChannelType } from "discord-api-types/v10";

export const testUser: APIUser = {
  id: "132819036282159104",
  username: "johnythecarrot",
  global_name: "JohnyTheCarrot",
  avatar: "3a30ffeeeb354950804d77ded94162d3",
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
