import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MessageType } from "../types/globalTypes";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";

export default {
  title: "Message Types/Channel Follow Add",
  component: MessageGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [Wrapper],
} as ComponentMeta<typeof MessageGroup>;

const Template: ComponentStory<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const ChannelFollowAdd = Template.bind({});
ChannelFollowAdd.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.ChannelFollowAdd,
      author: testUser,
      content: "Test",
    },
  ],
};
