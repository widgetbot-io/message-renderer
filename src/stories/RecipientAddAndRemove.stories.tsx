import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MentionType, MessageType } from "../types/globalTypes";
import { testUser } from "./commonTestData";
import Wrapper from "./Wrapper";

export default {
  title: "Message Types/Recipient Add or Remove",
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

export const Add = Template.bind({});
Add.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.RecipientAdd,
      author: testUser,
      mentions: [
        {
          id: "2",
          type: MentionType.Member,
          name: "Gort",
        },
      ],
    },
  ],
};

export const Remove = Template.bind({});
Remove.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.RecipientRemove,
      author: testUser,
      mentions: [
        {
          id: "2",
          type: MentionType.Member,
          name: "Gort",
        },
      ],
    },
  ],
};
