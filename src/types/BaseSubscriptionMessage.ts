/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: BaseSubscriptionMessage
// ====================================================

export interface BaseSubscriptionMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
  system: boolean;
  isWebhook: boolean;
}

export interface BaseSubscriptionMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface BaseSubscriptionMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface BaseSubscriptionMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface BaseSubscriptionMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface BaseSubscriptionMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface BaseSubscriptionMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface BaseSubscriptionMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface BaseSubscriptionMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface BaseSubscriptionMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface BaseSubscriptionMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface BaseSubscriptionMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface BaseSubscriptionMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: BaseSubscriptionMessage_embeds_author | null;
  fields: BaseSubscriptionMessage_embeds_fields[] | null;
  image: BaseSubscriptionMessage_embeds_image | null;
  provider: BaseSubscriptionMessage_embeds_provider | null;
  footer: BaseSubscriptionMessage_embeds_footer | null;
  thumbnail: BaseSubscriptionMessage_embeds_thumbnail | null;
  video: BaseSubscriptionMessage_embeds_video | null;
}

export interface BaseSubscriptionMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface BaseSubscriptionMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface BaseSubscriptionMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: BaseSubscriptionMessage_interaction_user;
}

export interface BaseSubscriptionMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface BaseSubscriptionMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: BaseSubscriptionMessage_author;
  attachments: BaseSubscriptionMessage_attachments[];
  stickers: BaseSubscriptionMessage_stickers[];
  reactions: BaseSubscriptionMessage_reactions[] | null;
  messageReference: BaseSubscriptionMessage_messageReference | null;
  embeds: BaseSubscriptionMessage_embeds[];
  mentions: BaseSubscriptionMessage_mentions[];
  interaction: BaseSubscriptionMessage_interaction | null;
  thread: BaseSubscriptionMessage_thread | null;
}
