import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Normal/Message Components",
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

export const Buttons: StoryFn<typeof MessageGroup> = Template.bind({});
Buttons.args = {
  messages: [
    {
      type: 0,
      tts: false,
      timestamp: "2021-05-19T02:12:51.710000+00:00",
      pinned: false,
      mentions: [],
      mention_roles: [],
      mention_everyone: false,
      id: "844397162624450620",
      flags: 0,
      embeds: [],
      edited_timestamp: null,
      content: "This is a message with components.",
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Primary",
              style: 1,
              custom_id: "primary",
            },
            {
              type: 2,
              custom_id: "secondary",
              style: 2,
              label: "Secondary",
            },
          ],
        },
        {
          type: 1,
          components: [
            {
              type: 2,
              custom_id: "success",
              style: 3,
              label: "Success",
            },
            {
              type: 2,
              custom_id: "danger",
              style: 4,
              label: "Danger",
            },
            {
              type: 2,
              style: 5,
              emoji: {
                id: "635146447666413608",
                name: "catblushMUSIC",
              },
              label: "Epic Song",
              url: "https://youtu.be/BZFJU5zr_jc",
            },
          ],
        },
      ],
      channel_id: "697138785317814292",
      author: {
        username: "mason",
        global_name: "Mason",
        public_flags: 4325445,
        id: "53908232506183680",
        discriminator: "0",
        avatar: "a_d5efa99b3eeaa7dd43acca82f5692432",
      },
      attachments: [],
    },
  ],
};
