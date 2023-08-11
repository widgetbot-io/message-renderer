import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Thread Starter Message",
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

export const ValidMessage: StoryFn<typeof MessageGroup> = Template.bind({});
ValidMessage.args = {
  messages: [
    {
      id: "1134467731748565042",
      type: MessageType.ThreadStarterMessage,
      content: "",
      channel_id: "1134467717315964979",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-07-28T12:49:44.640000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      message_reference: {
        channel_id: "859164806593118273",
        message_id: "1134467717315964979",
        guild_id: "859164806593118269",
      },
      position: 0,
      referenced_message: {
        id: "1134467717315964979",
        type: 0,
        content: "test",
        channel_id: "859164806593118273",
        author: testUser,
        attachments: [],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "2023-07-28T12:49:41.199000+00:00",
        edited_timestamp: null,
        flags: 32,
        components: [],
        thread: {
          id: "1134467717315964979",
          type: 11,
          last_message_id: "1134467731748565042",
          flags: 0,
          guild_id: "859164806593118269",
          name: "test",
          parent_id: "859164806593118273",
          rate_limit_per_user: 0,
          bitrate: 64000,
          user_limit: 0,
          rtc_region: null,
          owner_id: "132819036282159104",
          thread_metadata: {
            archived: false,
            archive_timestamp: "2023-07-28T12:49:44.615000+00:00",
            auto_archive_duration: 4320,
            locked: false,
            create_timestamp: "2023-07-28T12:49:44.615000+00:00",
          },
          message_count: 0,
          member_count: 1,
          total_message_sent: 0,
        },
      },
    },
  ],
};

export const UnresolvedMessage: StoryFn<typeof MessageGroup> = Template.bind(
  {}
);
UnresolvedMessage.args = {
  messages: [
    {
      id: "1134467731748565042",
      type: MessageType.ThreadStarterMessage,
      content: "",
      channel_id: "1134467717315964979",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-07-28T12:49:44.640000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      message_reference: {
        channel_id: "859164806593118273",
        message_id: "1134467717315964979",
        guild_id: "859164806593118269",
      },
      position: 0,
      referenced_message: null,
    },
  ],
};
