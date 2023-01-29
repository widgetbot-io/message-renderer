import MessageGroup from "../index";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageFlags } from "discord-api-types/v10";

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
      type: 20,
      content: "This server has no custom CSS set.",
      channel_id: "993105555042357268",
      author: {
        id: "565479321247154186",
        username: "WidgetBot Staging",
        display_name: null,
        avatar: "06f657fdc0a5bcbac7776c461d60bdc7",
        avatar_decoration: null,
        discriminator: "1493",
        public_flags: 0,
        bot: true,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-27T14:49:23.740000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      application_id: "565479321247154186",
      interaction: {
        id: "1068543250232770560",
        type: 2,
        name: "css view",
        user: testUser,
      },
      webhook_id: "565479321247154186",
    },
  ],
};

export const FailedInteraction = Template.bind({});
FailedInteraction.args = {
  messages: [
    {
      id: "1068543251537203210",
      type: 20,
      content: "This server has no custom CSS set.",
      channel_id: "993105555042357268",
      author: {
        id: "565479321247154186",
        username: "WidgetBot Staging",
        display_name: null,
        avatar: "06f657fdc0a5bcbac7776c461d60bdc7",
        avatar_decoration: null,
        discriminator: "1493",
        public_flags: 0,
        bot: true,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-27T14:49:23.740000+00:00",
      edited_timestamp: null,
      flags: MessageFlags.Loading,
      components: [],
      application_id: "565479321247154186",
      interaction: {
        id: "1068543250232770560",
        type: 2,
        name: "css view",
        user: testUser,
      },
      webhook_id: "565479321247154186",
    },
  ],
};

export const PendingInteraction = Template.bind({});
PendingInteraction.args = {
  messages: [
    {
      id: "1068543251537203210",
      type: 20,
      content: "This server has no custom CSS set.",
      channel_id: "993105555042357268",
      author: {
        id: "565479321247154186",
        username: "WidgetBot Staging",
        display_name: null,
        avatar: "06f657fdc0a5bcbac7776c461d60bdc7",
        avatar_decoration: null,
        discriminator: "1493",
        public_flags: 0,
        bot: true,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: new Date().toISOString(),
      edited_timestamp: null,
      flags: MessageFlags.Loading,
      components: [],
      application_id: "565479321247154186",
      interaction: {
        id: "1068543250232770560",
        type: 2,
        name: "will turn into failed interaction after 15m",
        user: testUser,
      },
      webhook_id: "565479321247154186",
    },
  ],
};
