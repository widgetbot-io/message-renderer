/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChannelHeader
// ====================================================

export interface ChannelHeader_channel_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  topic: string | null;
}

export interface ChannelHeader_channel_AnnouncementChannel {
  __typename: "AnnouncementChannel";
  name: string;
  id: string;
  topic: string | null;
}

export type ChannelHeader_channel = ChannelHeader_channel_TextChannel | ChannelHeader_channel_AnnouncementChannel;

export interface ChannelHeader {
  channel: ChannelHeader_channel;
}

export interface ChannelHeaderVariables {
  channel: string;
}
