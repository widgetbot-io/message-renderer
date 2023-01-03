/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: MessageUpdated
// ====================================================

export interface MessageUpdated_messageUpdate_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
}

export interface MessageUpdated_messageUpdate_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MessageUpdated_messageUpdate_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MessageUpdated_messageUpdate_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MessageUpdated_messageUpdate_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_author {
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

export interface MessageUpdated_messageUpdate_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MessageUpdated_messageUpdate_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MessageUpdated_messageUpdate_referencedMessage_embeds_author | null;
  fields: MessageUpdated_messageUpdate_referencedMessage_embeds_fields[] | null;
  image: MessageUpdated_messageUpdate_referencedMessage_embeds_image | null;
  provider: MessageUpdated_messageUpdate_referencedMessage_embeds_provider | null;
  footer: MessageUpdated_messageUpdate_referencedMessage_embeds_footer | null;
  thumbnail: MessageUpdated_messageUpdate_referencedMessage_embeds_thumbnail | null;
  video: MessageUpdated_messageUpdate_referencedMessage_embeds_video | null;
}

export interface MessageUpdated_messageUpdate_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MessageUpdated_messageUpdate_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MessageUpdated_messageUpdate_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MessageUpdated_messageUpdate_referencedMessage_interaction_user;
}

export interface MessageUpdated_messageUpdate_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MessageUpdated_messageUpdate_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MessageUpdated_messageUpdate_referencedMessage_author;
  attachments: MessageUpdated_messageUpdate_referencedMessage_attachments[];
  stickers: MessageUpdated_messageUpdate_referencedMessage_stickers[];
  reactions: MessageUpdated_messageUpdate_referencedMessage_reactions[] | null;
  messageReference: MessageUpdated_messageUpdate_referencedMessage_messageReference | null;
  embeds: MessageUpdated_messageUpdate_referencedMessage_embeds[];
  mentions: MessageUpdated_messageUpdate_referencedMessage_mentions[];
  interaction: MessageUpdated_messageUpdate_referencedMessage_interaction | null;
  thread: MessageUpdated_messageUpdate_referencedMessage_thread | null;
}

export interface MessageUpdated_messageUpdate_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MessageUpdated_messageUpdate_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MessageUpdated_messageUpdate_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MessageUpdated_messageUpdate_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MessageUpdated_messageUpdate_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MessageUpdated_messageUpdate_embeds_author | null;
  fields: MessageUpdated_messageUpdate_embeds_fields[] | null;
  image: MessageUpdated_messageUpdate_embeds_image | null;
  provider: MessageUpdated_messageUpdate_embeds_provider | null;
  footer: MessageUpdated_messageUpdate_embeds_footer | null;
  thumbnail: MessageUpdated_messageUpdate_embeds_thumbnail | null;
  video: MessageUpdated_messageUpdate_embeds_video | null;
}

export interface MessageUpdated_messageUpdate_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MessageUpdated_messageUpdate_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MessageUpdated_messageUpdate_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MessageUpdated_messageUpdate_interaction_user;
}

export interface MessageUpdated_messageUpdate_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MessageUpdated_messageUpdate {
  __typename: "UpdatedMessage";
  id: string;
  content: string | null;
  type: MessageType | null;
  flags: number | null;
  createdAt: any | null;
  editedAt: any | null;
  author: MessageUpdated_messageUpdate_author | null;
  attachments: MessageUpdated_messageUpdate_attachments[] | null;
  stickers: MessageUpdated_messageUpdate_stickers[] | null;
  reactions: MessageUpdated_messageUpdate_reactions[] | null;
  messageReference: MessageUpdated_messageUpdate_messageReference | null;
  referencedMessage: MessageUpdated_messageUpdate_referencedMessage | null;
  embeds: MessageUpdated_messageUpdate_embeds[] | null;
  mentions: MessageUpdated_messageUpdate_mentions[] | null;
  interaction: MessageUpdated_messageUpdate_interaction | null;
  thread: MessageUpdated_messageUpdate_thread | null;
}

export interface MessageUpdated {
  messageUpdate: MessageUpdated_messageUpdate | null;
}

export interface MessageUpdatedVariables {
  channel: string;
  guild: string;
  threadId?: string | null;
}
