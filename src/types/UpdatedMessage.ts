/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: UpdatedMessage
// ====================================================

export interface UpdatedMessage_author {
  __typename: "User";
  avatarUrl: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
  roles: string[] | null;
}

export interface UpdatedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface UpdatedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface UpdatedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface UpdatedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface UpdatedMessage_referencedMessage_author {
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

export interface UpdatedMessage_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface UpdatedMessage_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface UpdatedMessage_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface UpdatedMessage_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface UpdatedMessage_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface UpdatedMessage_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface UpdatedMessage_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface UpdatedMessage_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessage_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface UpdatedMessage_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface UpdatedMessage_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface UpdatedMessage_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: UpdatedMessage_referencedMessage_embeds_author | null;
  fields: UpdatedMessage_referencedMessage_embeds_fields[] | null;
  image: UpdatedMessage_referencedMessage_embeds_image | null;
  provider: UpdatedMessage_referencedMessage_embeds_provider | null;
  footer: UpdatedMessage_referencedMessage_embeds_footer | null;
  thumbnail: UpdatedMessage_referencedMessage_embeds_thumbnail | null;
  video: UpdatedMessage_referencedMessage_embeds_video | null;
}

export interface UpdatedMessage_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface UpdatedMessage_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface UpdatedMessage_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: UpdatedMessage_referencedMessage_interaction_user;
}

export interface UpdatedMessage_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface UpdatedMessage_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: UpdatedMessage_referencedMessage_author;
  attachments: UpdatedMessage_referencedMessage_attachments[];
  stickers: UpdatedMessage_referencedMessage_stickers[];
  reactions: UpdatedMessage_referencedMessage_reactions[] | null;
  messageReference: UpdatedMessage_referencedMessage_messageReference | null;
  embeds: UpdatedMessage_referencedMessage_embeds[];
  mentions: UpdatedMessage_referencedMessage_mentions[];
  interaction: UpdatedMessage_referencedMessage_interaction | null;
  thread: UpdatedMessage_referencedMessage_thread | null;
}

export interface UpdatedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface UpdatedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface UpdatedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface UpdatedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface UpdatedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface UpdatedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface UpdatedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: UpdatedMessage_embeds_author | null;
  fields: UpdatedMessage_embeds_fields[] | null;
  image: UpdatedMessage_embeds_image | null;
  provider: UpdatedMessage_embeds_provider | null;
  footer: UpdatedMessage_embeds_footer | null;
  thumbnail: UpdatedMessage_embeds_thumbnail | null;
  video: UpdatedMessage_embeds_video | null;
}

export interface UpdatedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface UpdatedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface UpdatedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: UpdatedMessage_interaction_user;
}

export interface UpdatedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface UpdatedMessage {
  __typename: "UpdatedMessage";
  id: string;
  content: string | null;
  type: MessageType | null;
  flags: number | null;
  createdAt: any | null;
  editedAt: any | null;
  author: UpdatedMessage_author | null;
  attachments: UpdatedMessage_attachments[] | null;
  stickers: UpdatedMessage_stickers[] | null;
  reactions: UpdatedMessage_reactions[] | null;
  messageReference: UpdatedMessage_messageReference | null;
  referencedMessage: UpdatedMessage_referencedMessage | null;
  embeds: UpdatedMessage_embeds[] | null;
  mentions: UpdatedMessage_mentions[] | null;
  interaction: UpdatedMessage_interaction | null;
  thread: UpdatedMessage_thread | null;
}
