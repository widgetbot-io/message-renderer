/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channels
// ====================================================

export interface Channels_guild_channels_TextChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  position: number;
  category: Channels_guild_channels_TextChannel_category | null;
  canSend: boolean;
  nsfw: boolean;
}

export interface Channels_guild_channels_AnnouncementChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels_AnnouncementChannel {
  __typename: "AnnouncementChannel";
  name: string;
  id: string;
  position: number;
  category: Channels_guild_channels_AnnouncementChannel_category | null;
  canSend: boolean;
  nsfw: boolean;
}

export interface Channels_guild_channels_VoiceChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels_VoiceChannel {
  __typename: "VoiceChannel";
  name: string;
  id: string;
  position: number;
  category: Channels_guild_channels_VoiceChannel_category | null;
  canSend: boolean;
  nsfw: boolean;
}

export type Channels_guild_channels = Channels_guild_channels_TextChannel | Channels_guild_channels_AnnouncementChannel | Channels_guild_channels_VoiceChannel;

export interface Channels_guild {
  __typename: "Guild";
  channels: Channels_guild_channels[];
}

export interface Channels {
  guild: Channels_guild;
}

export interface ChannelsVariables {
  guild: string;
}
