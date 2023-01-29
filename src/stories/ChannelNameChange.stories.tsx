import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

export default {
  title: "Message Types/Channel Name Change",
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

export const ChannelNameChange = Template.bind({});
ChannelNameChange.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.ChannelNameChange,
      author: testUser,
      content: "The Boys",
    },
  ],
};
