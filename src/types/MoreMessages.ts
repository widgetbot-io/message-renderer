/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MoreMessages
// ====================================================

export interface MoreMessages_channel_TextChannel_messageBunch_messages_author {
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

export interface MoreMessages_channel_TextChannel_messageBunch_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_author | null;
  fields: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_fields[] | null;
  image: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_image | null;
  provider: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_provider | null;
  footer: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_footer | null;
  thumbnail: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_thumbnail | null;
  video: MoreMessages_channel_TextChannel_messageBunch_messages_embeds_video | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_TextChannel_messageBunch_messages_interaction_user;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_author {
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

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_author | null;
  fields: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_fields[] | null;
  image: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_image | null;
  provider: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_provider | null;
  footer: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_footer | null;
  thumbnail: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_thumbnail | null;
  video: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds_video | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_interaction_user;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_author;
  attachments: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_attachments[];
  stickers: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_stickers[];
  reactions: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_reactions[] | null;
  messageReference: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_messageReference | null;
  embeds: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_embeds[];
  mentions: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_mentions[];
  interaction: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_interaction | null;
  thread: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage_thread | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_TextChannel_messageBunch_messages_author;
  attachments: MoreMessages_channel_TextChannel_messageBunch_messages_attachments[];
  stickers: MoreMessages_channel_TextChannel_messageBunch_messages_stickers[];
  reactions: MoreMessages_channel_TextChannel_messageBunch_messages_reactions[] | null;
  messageReference: MoreMessages_channel_TextChannel_messageBunch_messages_messageReference | null;
  embeds: MoreMessages_channel_TextChannel_messageBunch_messages_embeds[];
  mentions: MoreMessages_channel_TextChannel_messageBunch_messages_mentions[];
  interaction: MoreMessages_channel_TextChannel_messageBunch_messages_interaction | null;
  thread: MoreMessages_channel_TextChannel_messageBunch_messages_thread | null;
  referencedMessage: MoreMessages_channel_TextChannel_messageBunch_messages_referencedMessage | null;
}

export interface MoreMessages_channel_TextChannel_messageBunch {
  __typename: "MessageBunch";
  messages: MoreMessages_channel_TextChannel_messageBunch_messages[];
}

export interface MoreMessages_channel_TextChannel {
  __typename: "TextChannel";
  id: string;
  messageBunch: MoreMessages_channel_TextChannel_messageBunch;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_author {
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

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_author | null;
  fields: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_fields[] | null;
  image: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_image | null;
  provider: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_provider | null;
  footer: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_footer | null;
  thumbnail: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_thumbnail | null;
  video: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds_video | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_interaction_user;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_author {
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

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_author | null;
  fields: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_fields[] | null;
  image: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_image | null;
  provider: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_provider | null;
  footer: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_footer | null;
  thumbnail: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_thumbnail | null;
  video: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds_video | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_interaction_user;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_author;
  attachments: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_attachments[];
  stickers: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_stickers[];
  reactions: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_reactions[] | null;
  messageReference: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_messageReference | null;
  embeds: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_embeds[];
  mentions: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_mentions[];
  interaction: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_interaction | null;
  thread: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage_thread | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_author;
  attachments: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_attachments[];
  stickers: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_stickers[];
  reactions: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_reactions[] | null;
  messageReference: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_messageReference | null;
  embeds: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_embeds[];
  mentions: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_mentions[];
  interaction: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_interaction | null;
  thread: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_thread | null;
  referencedMessage: MoreMessages_channel_AnnouncementChannel_messageBunch_messages_referencedMessage | null;
}

export interface MoreMessages_channel_AnnouncementChannel_messageBunch {
  __typename: "MessageBunch";
  messages: MoreMessages_channel_AnnouncementChannel_messageBunch_messages[];
}

export interface MoreMessages_channel_AnnouncementChannel {
  __typename: "AnnouncementChannel";
  id: string;
  messageBunch: MoreMessages_channel_AnnouncementChannel_messageBunch;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_author {
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

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_author | null;
  fields: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_fields[] | null;
  image: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_image | null;
  provider: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_provider | null;
  footer: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_footer | null;
  thumbnail: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_thumbnail | null;
  video: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds_video | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_VoiceChannel_messageBunch_messages_interaction_user;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_author {
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

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiId: string | null;
  emojiName: string | null;
  animated: boolean | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  proxyIconUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  proxyUrl: string | null;
  width: number | null;
  height: number | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconUrl: string | null;
  text: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
  proxyUrl: string | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_author | null;
  fields: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_fields[] | null;
  image: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_image | null;
  provider: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_provider | null;
  footer: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_footer | null;
  thumbnail: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_thumbnail | null;
  video: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds_video | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatarUrl: string;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_interaction_user;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_thread {
  __typename: "Thread";
  id: string;
  name: string;
  archivedAt: any | null;
  locked: boolean;
  messageCount: number;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_author;
  attachments: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_attachments[];
  stickers: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_stickers[];
  reactions: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_reactions[] | null;
  messageReference: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_messageReference | null;
  embeds: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_embeds[];
  mentions: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_mentions[];
  interaction: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_interaction | null;
  thread: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage_thread | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch_messages {
  __typename: "Message";
  id: string;
  channelId: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: MoreMessages_channel_VoiceChannel_messageBunch_messages_author;
  attachments: MoreMessages_channel_VoiceChannel_messageBunch_messages_attachments[];
  stickers: MoreMessages_channel_VoiceChannel_messageBunch_messages_stickers[];
  reactions: MoreMessages_channel_VoiceChannel_messageBunch_messages_reactions[] | null;
  messageReference: MoreMessages_channel_VoiceChannel_messageBunch_messages_messageReference | null;
  embeds: MoreMessages_channel_VoiceChannel_messageBunch_messages_embeds[];
  mentions: MoreMessages_channel_VoiceChannel_messageBunch_messages_mentions[];
  interaction: MoreMessages_channel_VoiceChannel_messageBunch_messages_interaction | null;
  thread: MoreMessages_channel_VoiceChannel_messageBunch_messages_thread | null;
  referencedMessage: MoreMessages_channel_VoiceChannel_messageBunch_messages_referencedMessage | null;
}

export interface MoreMessages_channel_VoiceChannel_messageBunch {
  __typename: "MessageBunch";
  messages: MoreMessages_channel_VoiceChannel_messageBunch_messages[];
}

export interface MoreMessages_channel_VoiceChannel {
  __typename: "VoiceChannel";
  id: string;
  messageBunch: MoreMessages_channel_VoiceChannel_messageBunch;
}

export type MoreMessages_channel = MoreMessages_channel_TextChannel | MoreMessages_channel_AnnouncementChannel | MoreMessages_channel_VoiceChannel;

export interface MoreMessages {
  channel: MoreMessages_channel;
}

export interface MoreMessagesVariables {
  guild: string;
  channel: string;
  thread?: string | null;
  around?: string | null;
  before?: string | null;
  after?: string | null;
  limit?: number | null;
}
