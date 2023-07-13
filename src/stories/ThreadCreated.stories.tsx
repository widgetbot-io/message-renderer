import { MessageGroup } from "../index";
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testTextChannel, testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Thread Created",
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

export const ThreadCreated: StoryFn<typeof MessageGroup> = Template.bind({});
ThreadCreated.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.ThreadCreated,
      author: testUser,
      thread: testTextChannel,
      content: "",
      mentions: [],
      channel_id: "4321",
      edited_timestamp: null,
      tts: false,
      mention_everyone: false,
      mention_roles: [],
      attachments: [],
      embeds: [],
      pinned: false,
    },
  ],
};
