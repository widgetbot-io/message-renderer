import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { MessageType } from "discord-api-types/v10";
import { testUser } from "./commonTestData";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Discovery Notices",
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

export const Requalified: StoryFn<typeof MessageGroup> = Template.bind({});
Requalified.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildDiscoveryRequalified,
      content: "",
      author: testUser,
      channel_id: "4321",
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

export const InitialWarning: StoryFn<typeof MessageGroup> = Template.bind({});
InitialWarning.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildDiscoveryGracePeriodInitialWarning,
      content: "",
      author: testUser,
      channel_id: "4321",
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

export const FinalWarning: StoryFn<typeof MessageGroup> = Template.bind({});
FinalWarning.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildDiscoveryGracePeriodFinalWarning,
      content: "",
      author: testUser,
      channel_id: "4321",
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

export const Disqualified: StoryFn<typeof MessageGroup> = Template.bind({});
Disqualified.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildDiscoveryDisqualified,
      content: "",
      author: testUser,
      channel_id: "4321",
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
