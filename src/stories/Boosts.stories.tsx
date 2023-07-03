import { MessageGroup } from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

export default {
  title: "Message Types/Boosts",
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

export const Boost = Template.bind({});
Boost.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoost,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
    },
  ],
};

export const BoostToTier1 = Template.bind({});
BoostToTier1.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier1,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
    },
  ],
};

export const BoostToTier2 = Template.bind({});
BoostToTier2.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier2,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
    },
  ],
};

export const BoostToTier3 = Template.bind({});
BoostToTier3.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.GuildBoostTier3,
      author: testUser,
      content: "",
      channel_id: "697138785317814292",
    },
  ],
};
