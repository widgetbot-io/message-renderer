/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_author {
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
  color: number;
}

export interface SendMessage_sendMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface SendMessage_sendMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface SendMessage_sendMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface SendMessage_sendMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface SendMessage_sendMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface SendMessage_sendMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface SendMessage_sendMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface SendMessage_sendMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface SendMessage_sendMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface SendMessage_sendMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface SendMessage_sendMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface SendMessage_sendMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: SendMessage_sendMessage_embeds_author | null;
  fields: SendMessage_sendMessage_embeds_fields[] | null;
  image: SendMessage_sendMessage_embeds_image | null;
  provider: SendMessage_sendMessage_embeds_provider | null;
  footer: SendMessage_sendMessage_embeds_footer | null;
  thumbnail: SendMessage_sendMessage_embeds_thumbnail | null;
  video: SendMessage_sendMessage_embeds_video | null;
}

export interface SendMessage_sendMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface SendMessage_sendMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface SendMessage_sendMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: SendMessage_sendMessage_interaction_user;
}

export interface SendMessage_sendMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface SendMessage_sendMessage_referencedMessage_author {
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
  color: number;
}

export interface SendMessage_sendMessage_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface SendMessage_sendMessage_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface SendMessage_sendMessage_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface SendMessage_sendMessage_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: SendMessage_sendMessage_referencedMessage_embeds_author | null;
  fields: SendMessage_sendMessage_referencedMessage_embeds_fields[] | null;
  image: SendMessage_sendMessage_referencedMessage_embeds_image | null;
  provider: SendMessage_sendMessage_referencedMessage_embeds_provider | null;
  footer: SendMessage_sendMessage_referencedMessage_embeds_footer | null;
  thumbnail: SendMessage_sendMessage_referencedMessage_embeds_thumbnail | null;
  video: SendMessage_sendMessage_referencedMessage_embeds_video | null;
}

export interface SendMessage_sendMessage_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface SendMessage_sendMessage_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface SendMessage_sendMessage_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: SendMessage_sendMessage_referencedMessage_interaction_user;
}

export interface SendMessage_sendMessage_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface SendMessage_sendMessage_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: SendMessage_sendMessage_referencedMessage_author;
  attachments: SendMessage_sendMessage_referencedMessage_attachments[];
  stickers: SendMessage_sendMessage_referencedMessage_stickers[];
  reactions: SendMessage_sendMessage_referencedMessage_reactions[] | null;
  messageReference: SendMessage_sendMessage_referencedMessage_messageReference | null;
  embeds: SendMessage_sendMessage_referencedMessage_embeds[];
  mentions: SendMessage_sendMessage_referencedMessage_mentions[];
  interaction: SendMessage_sendMessage_referencedMessage_interaction | null;
  thread: SendMessage_sendMessage_referencedMessage_thread | null;
}

export interface SendMessage_sendMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: SendMessage_sendMessage_author;
  attachments: SendMessage_sendMessage_attachments[];
  stickers: SendMessage_sendMessage_stickers[];
  reactions: SendMessage_sendMessage_reactions[] | null;
  messageReference: SendMessage_sendMessage_messageReference | null;
  embeds: SendMessage_sendMessage_embeds[];
  mentions: SendMessage_sendMessage_mentions[];
  interaction: SendMessage_sendMessage_interaction | null;
  thread: SendMessage_sendMessage_thread | null;
  referencedMessage: SendMessage_sendMessage_referencedMessage | null;
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage;
}

export interface SendMessageVariables {
  channel: string;
  content: string;
  thread?: string | null;
  fileData?: string | null;
  fileName?: string | null;
  fileAlt?: string | null;
}
