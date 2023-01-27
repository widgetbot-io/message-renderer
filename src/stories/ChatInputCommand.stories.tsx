import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";

export default {
  title: "Message Types/Chat Input Command",
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

export const ChatInputCommand = Template.bind({});
ChatInputCommand.args = {
  messages: [
    {
      id: "1068543251537203210",
      channelId: "993105555042357268",
      content: "This server has no custom CSS set.",
      type: "ChatInputCommand",
      flags: 0,
      createdAt: 1674830963740,
      editedAt: null,
      isGuest: false,
      author: testUser,
      attachments: [],
      stickers: [],
      reactions: null,
      messageReference: null,
      embeds: [],
      mentions: [],
      interaction: {
        name: "css view",
        user: {
          id: testUser.id,
          username: testUser.name,
          discriminator: testUser.discrim,
          avatarUrl: testUser.avatarUrl,
          __typename: "Author",
        },
        __typename: "MessageInteraction",
      },
      thread: null,
      __typename: "Message",
      referencedMessage: null,
    },
  ],
};

export const FailedInteraction = Template.bind({});
FailedInteraction.args = {
  messages: [
    {
      id: "1001570097229475912",
      channelId: "995987494615121991",
      content: "amogus",
      type: "MessageInteraction",
      flags: 1 << 7,
      createdAt: 1658863319452,
      editedAt: null,
      isGuest: false,
      author: testUser,
      attachments: [],
      stickers: [],
      reactions: null,
      messageReference: null,
      embeds: [],
      mentions: [],
      interaction: null,
      thread: null,
      __typename: "Message",
      referencedMessage: null,
    },
  ],
};

export const PendingInteraction = Template.bind({});
PendingInteraction.args = {
  messages: [
    {
      id: "1001570097229475912",
      channelId: "995987494615121991",
      content: "amogus",
      type: "MessageInteraction",
      flags: 1 << 7,
      createdAt: Date.now(),
      editedAt: null,
      isGuest: false,
      author: { ...testUser, name: "Expires After 15m" },
      attachments: [],
      stickers: [],
      reactions: null,
      messageReference: null,
      embeds: [],
      mentions: [],
      interaction: null,
      thread: null,
      __typename: "Message",
      referencedMessage: null,
    },
  ],
};
