import { MessageGroup } from "../index";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Pinned Message",
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

export const PinnedMessage: StoryFn<typeof MessageGroup> = Template.bind({});
PinnedMessage.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.ChannelPinnedMessage,
      author: testUser,
      content: "",
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
