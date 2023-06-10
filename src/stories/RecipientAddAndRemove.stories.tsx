import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { testUser } from "./commonTestData";
import Wrapper from "./Wrapper";
import { MessageType } from "discord-api-types/v10";

export default {
  title: "Message Types/Recipient Add or Remove",
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

export const Add = Template.bind({});
Add.args = {
  messages: [
    {
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.RecipientAdd,
      author: testUser,
      mentions: [
        {
          id: "543225764036870167",
          username: "WidgetBot",
          display_name: null,
          avatar: "0459349547dc5b988b0ad1cd8583a05f",
          avatar_decoration: null,
          discriminator: "0142",
          public_flags: 65536,
          bot: true,
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
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.RecipientRemove,
      author: testUser,
      mentions: [
        {
          id: "543225764036870167",
          username: "WidgetBot",
          display_name: null,
          avatar: "0459349547dc5b988b0ad1cd8583a05f",
          avatar_decoration: null,
          discriminator: "0142",
          public_flags: 65536,
          bot: true,
        },
      ],
    },
  ],
};
