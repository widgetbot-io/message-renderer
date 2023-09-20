import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testTextChannel, testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Automod Action",
  component: MessageGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [Wrapper],
};

export default meta;

// eslint-disable-next-line func-style
const Template: StoryFn<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const MessageFlagged: StoryFn<typeof MessageGroup> = Template.bind({});
MessageFlagged.args = {
  messages: [
    {
      id: "1113247879935569990",
      type: MessageType.AutoModerationAction,
      content: "",
      channel_id: testTextChannel.id,
      author: testUser,
      attachments: [],
      embeds: [
        {
          // @ts-expect-error TS2322
          type: "auto_moderation_message",
          description: "I asked",
          fields: [
            {
              name: "rule_name",
              value: "finding who asked",
              inline: false,
            },
            {
              name: "channel_id",
              value: testTextChannel.id,
              inline: false,
            },
            {
              name: "keyword",
              value: "asked",
              inline: false,
            },
            {
              name: "keyword_matched_content",
              value: "asked",
              inline: false,
            },
            {
              name: "flagged_message_id",
              value: "1136391893580791838",
              inline: false,
            },
          ],
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-05-30T23:29:37.722000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const MessageBlocked: StoryFn<typeof MessageGroup> = Template.bind({});
MessageBlocked.args = {
  messages: [
    {
      id: "1113247879935569990",
      type: MessageType.AutoModerationAction,
      content: "",
      channel_id: testTextChannel.id,
      author: testUser,
      attachments: [],
      embeds: [
        {
          // @ts-expect-error TS2322
          type: "auto_moderation_message",
          description:
            "Look at [this](<https://www.youtube.com/watch?v=dQw4w9WgXcQ>) cool video!",
          fields: [
            {
              name: "rule_name",
              value: "no rickroll >:(",
              inline: false,
            },
            {
              name: "channel_id",
              value: testTextChannel.id,
              inline: false,
            },
            {
              name: "keyword",
              value: "dQw4w9WgXcQ",
              inline: false,
            },
            {
              name: "keyword_matched_content",
              value: "dQw4w9WgXcQ",
              inline: false,
            },
          ],
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-05-30T23:29:37.722000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const UsernameUpdatedQuarantined: StoryFn<typeof MessageGroup> =
  Template.bind({});
UsernameUpdatedQuarantined.args = {
  messages: [
    {
      id: "1150444352443797624",
      type: MessageType.AutoModerationAction,
      content: "",
      channel_id: testTextChannel.id,
      author: testUser,
      attachments: [],
      embeds: [
        {
          // @ts-expect-error TS2322
          type: "auto_moderation_message",
          description: "Rawr XD",
          fields: [
            {
              name: "rule_name",
              value: "no cringe",
              inline: false,
            },
            {
              name: "keyword",
              value: "rawr",
              inline: false,
            },
            {
              name: "keyword_matched_content",
              value: "Rawr",
              inline: false,
            },
            {
              name: "quarantine_user",
              value: "display_name",
              inline: false,
            },
            {
              name: "quarantine_event",
              value: "username_update",
              inline: false,
            },
            {
              name: "quarantine_user_action",
              value: "quarantine_user",
              inline: false,
            },
          ],
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-09-10T14:55:07.845000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      reactions: [
        {
          emoji: {
            id: null,
            name: "✅",
          },
          count: 2,
          me: false,
        },
        {
          emoji: {
            id: null,
            name: "❌",
          },
          count: 1,
          me: false,
        },
      ],
    },
  ],
};

export const UserJoinedQuarantined: StoryFn<typeof MessageGroup> =
  Template.bind({});
UserJoinedQuarantined.args = {
  messages: [
    {
      id: "1150543723134976060",
      type: MessageType.AutoModerationAction,
      content: "",
      channel_id: testTextChannel.id,
      author: testUser,
      attachments: [],
      embeds: [
        {
          // @ts-expect-error TS2322
          type: "auto_moderation_message",
          description: "sussy amogus",
          fields: [
            {
              name: "rule_name",
              value: "no sussies",
              inline: false,
            },
            {
              name: "keyword",
              value: "amogus",
              inline: false,
            },
            {
              name: "keyword_matched_content",
              value: "amogus",
              inline: false,
            },
            {
              name: "quarantine_user",
              value: "display_name",
              inline: false,
            },
            {
              name: "quarantine_event",
              value: "guild_join",
              inline: false,
            },
            {
              name: "quarantine_user_action",
              value: "quarantine_user",
              inline: false,
            },
          ],
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-09-10T21:29:59.664000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      reactions: [
        {
          emoji: {
            id: null,
            name: "✅",
          },
          count: 1,
          me: false,
        },
        {
          emoji: {
            id: null,
            name: "❌",
          },
          count: 1,
          me: false,
        },
      ],
    },
  ],
};
