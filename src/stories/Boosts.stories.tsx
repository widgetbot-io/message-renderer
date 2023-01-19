import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MessageType } from "../types/globalTypes";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";

export default {
  title: "Message Types/Boosts",
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

export const Boost = Template.bind({});
Boost.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.UserPremiumGuildSubscription,
      author: testUser,
      content: "",
    },
  ],
};

export const BoostToTier1 = Template.bind({});
BoostToTier1.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.UserPremiumGuildTier1,
      author: testUser,
      content: "2",
    },
  ],
};

export const BoostToTier2 = Template.bind({});
BoostToTier2.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.UserPremiumGuildTier2,
      author: testUser,
      content: "2",
    },
  ],
};

export const BoostToTier3 = Template.bind({});
BoostToTier3.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.UserPremiumGuildTier3,
      author: testUser,
      content: "2",
    },
  ],
};
