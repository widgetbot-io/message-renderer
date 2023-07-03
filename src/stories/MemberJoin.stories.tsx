import { MessageGroup } from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "./Wrapper";
import { MessageType } from "discord-api-types/v10";
import { testUser } from "./commonTestData";

export default {
  title: "Message Types/Member Join",
  component: MessageGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [Wrapper],
} as ComponentMeta<typeof MessageGroup>;

// eslint-disable-next-line func-style
const Template: ComponentStory<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const MemberJoin = Template.bind({});
MemberJoin.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.UserJoin,
      author: testUser,
    },
  ],
};
