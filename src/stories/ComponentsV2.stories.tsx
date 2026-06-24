import { MessageGroup } from "../index";
import React from "react";
import type { APIMessage } from "discord-api-types/v10";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Normal/Components V2",
  component: MessageGroup,
  parameters: {
    layout: "centered",
  },
  decorators: [Wrapper],
};

export default meta;

function message(components: APIMessage["components"], content = ""): APIMessage {
  return {
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
    content,
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
    components,
  };
}

// eslint-disable-next-line func-style
const Template: StoryFn<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const Container: StoryFn<typeof MessageGroup> = Template.bind({});
Container.args = {
  messages: [
    message([
      {
        type: 17,
        accent_color: 0x5865f2,
        components: [
          {
            type: 10,
            content:
              "# Components V2\nA **container** groups related content together with an optional accent colour.",
          },
          { type: 14, divider: true, spacing: 1 },
          {
            type: 9,
            components: [
              {
                type: 10,
                content:
                  "A **section** pairs text content with an accessory on the right.",
              },
            ],
            accessory: {
              type: 11,
              media: {
                url: "https://picsum.photos/seed/widgetbot-thumb/160/160",
                width: 160,
                height: 160,
              },
            },
          },
          {
            type: 1,
            components: [
              { type: 2, style: 1, label: "Primary", custom_id: "primary" },
              { type: 2, style: 5, label: "Open", url: "https://widgetbot.io" },
            ],
          },
        ],
      },
    ]),
  ],
};

export const TextDisplay: StoryFn<typeof MessageGroup> = Template.bind({});
TextDisplay.args = {
  messages: [
    message([
      {
        type: 10,
        content:
          "# Text display\nText displays render **markdown**, including lists:\n- One\n- Two\n- Three",
      },
      { type: 10, content: "Each text display is its own block." },
    ]),
  ],
};

export const Section: StoryFn<typeof MessageGroup> = Template.bind({});
Section.args = {
  messages: [
    message([
      {
        type: 9,
        components: [{ type: 10, content: "A section with a thumbnail accessory." }],
        accessory: {
          type: 11,
          media: {
            url: "https://picsum.photos/seed/widgetbot-section/160/160",
            width: 160,
            height: 160,
          },
        },
      },
      {
        type: 9,
        components: [{ type: 10, content: "A section with a button accessory." }],
        accessory: {
          type: 2,
          style: 1,
          label: "Click me",
          custom_id: "section-button",
        },
      },
    ]),
  ],
};

export const MediaGallery: StoryFn<typeof MessageGroup> = Template.bind({});
MediaGallery.args = {
  messages: [
    message([
      {
        type: 12,
        items: [
          {
            media: {
              url: "https://picsum.photos/seed/widgetbot-1/300/200",
              width: 300,
              height: 200,
            },
            description: "First image",
          },
          {
            media: {
              url: "https://picsum.photos/seed/widgetbot-2/300/200",
              width: 300,
              height: 200,
            },
          },
          {
            media: {
              url: "https://picsum.photos/seed/widgetbot-3/300/200",
              width: 300,
              height: 200,
            },
            spoiler: true,
          },
        ],
      },
    ]),
  ],
};

export const File: StoryFn<typeof MessageGroup> = Template.bind({});
File.args = {
  messages: [
    message([
      {
        type: 13,
        file: { url: "https://example.com/manual.pdf" },
        name: "manual.pdf",
        size: 1048576,
      },
    ]),
  ],
};

export const Separators: StoryFn<typeof MessageGroup> = Template.bind({});
Separators.args = {
  messages: [
    message([
      { type: 10, content: "Above a small divider." },
      { type: 14, divider: true, spacing: 1 },
      { type: 10, content: "Between dividers." },
      { type: 14, divider: true, spacing: 2 },
      { type: 10, content: "Below a large divider, above invisible spacing." },
      { type: 14, divider: false, spacing: 2 },
      { type: 10, content: "After spacing without a divider." },
    ]),
  ],
};
