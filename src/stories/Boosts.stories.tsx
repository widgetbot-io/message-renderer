import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Boosts",
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

export const Boost: StoryFn<typeof MessageGroup> = Template.bind({});
Boost.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoost,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
      edited_timestamp: null,
      tts: false,
      mention_everyone: false,
      mentions: [],
      mention_roles: [],
      attachments: [],
      embeds: [],
      pinned: false,
    },
  ],
};

export const BoostToTier1: StoryFn<typeof MessageGroup> = Template.bind({});
BoostToTier1.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier1,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
      edited_timestamp: null,
      tts: false,
      mention_everyone: false,
      mentions: [],
      mention_roles: [],
      attachments: [],
      embeds: [],
      pinned: false,
    },
  ],
};

export const BoostToTier2: StoryFn<typeof MessageGroup> = Template.bind({});
BoostToTier2.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier2,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
      edited_timestamp: null,
      tts: false,
      mention_everyone: false,
      mentions: [],
      mention_roles: [],
      attachments: [],
      embeds: [],
      pinned: false,
    },
  ],
};

export const BoostToTier3: StoryFn<typeof MessageGroup> = Template.bind({});
BoostToTier3.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier3,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
      edited_timestamp: null,
      tts: false,
      mention_everyone: false,
      mentions: [],
      mention_roles: [],
      attachments: [],
      embeds: [],
      pinned: false,
    },
  ],
};
