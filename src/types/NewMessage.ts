/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: NewMessage
// ====================================================

export interface NewMessage_message_author {
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

export interface NewMessage_message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface NewMessage_message_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface NewMessage_message_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface NewMessage_message_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewMessage_message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface NewMessage_message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewMessage_message_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface NewMessage_message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessage_message_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface NewMessage_message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewMessage_message_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewMessage_message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: NewMessage_message_embeds_author | null;
  fields: NewMessage_message_embeds_fields[] | null;
  image: NewMessage_message_embeds_image | null;
  provider: NewMessage_message_embeds_provider | null;
  footer: NewMessage_message_embeds_footer | null;
  thumbnail: NewMessage_message_embeds_thumbnail | null;
  video: NewMessage_message_embeds_video | null;
}

export interface NewMessage_message_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface NewMessage_message_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface NewMessage_message_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: NewMessage_message_interaction_user;
}

export interface NewMessage_message_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface NewMessage_message_referencedMessage_author {
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

export interface NewMessage_message_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface NewMessage_message_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface NewMessage_message_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface NewMessage_message_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewMessage_message_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface NewMessage_message_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewMessage_message_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface NewMessage_message_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessage_message_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface NewMessage_message_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewMessage_message_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface NewMessage_message_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: NewMessage_message_referencedMessage_embeds_author | null;
  fields: NewMessage_message_referencedMessage_embeds_fields[] | null;
  image: NewMessage_message_referencedMessage_embeds_image | null;
  provider: NewMessage_message_referencedMessage_embeds_provider | null;
  footer: NewMessage_message_referencedMessage_embeds_footer | null;
  thumbnail: NewMessage_message_referencedMessage_embeds_thumbnail | null;
  video: NewMessage_message_referencedMessage_embeds_video | null;
}

export interface NewMessage_message_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface NewMessage_message_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface NewMessage_message_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: NewMessage_message_referencedMessage_interaction_user;
}

export interface NewMessage_message_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface NewMessage_message_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: NewMessage_message_referencedMessage_author;
  attachments: NewMessage_message_referencedMessage_attachments[];
  stickers: NewMessage_message_referencedMessage_stickers[];
  reactions: NewMessage_message_referencedMessage_reactions[] | null;
  messageReference: NewMessage_message_referencedMessage_messageReference | null;
  embeds: NewMessage_message_referencedMessage_embeds[];
  mentions: NewMessage_message_referencedMessage_mentions[];
  interaction: NewMessage_message_referencedMessage_interaction | null;
  thread: NewMessage_message_referencedMessage_thread | null;
}

export interface NewMessage_message {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: NewMessage_message_author;
  attachments: NewMessage_message_attachments[];
  stickers: NewMessage_message_stickers[];
  reactions: NewMessage_message_reactions[] | null;
  messageReference: NewMessage_message_messageReference | null;
  embeds: NewMessage_message_embeds[];
  mentions: NewMessage_message_mentions[];
  interaction: NewMessage_message_interaction | null;
  thread: NewMessage_message_thread | null;
  referencedMessage: NewMessage_message_referencedMessage | null;
}

export interface NewMessage {
  message: NewMessage_message | null;
}

export interface NewMessageVariables {
  channels?: string[] | null;
  guild: string;
  threadId?: string | null;
}
