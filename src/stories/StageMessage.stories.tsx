import { MessageGroup } from "../index";
import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Wrapper from "./Wrapper";
import { testUser } from "./commonTestData";
import { MessageType } from "discord-api-types/v10";

const meta: Meta<typeof MessageGroup> = {
  title: "Message Types/Stage",
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

const baseMessage = {
  author: testUser,
  mentions: [],
  channel_id: "4321",
  edited_timestamp: null,
  tts: false,
  mention_everyone: false,
  mention_roles: [],
  attachments: [],
  embeds: [],
  pinned: false,
} as const;

// Discord carries the stage topic in `content` for start/end/topic changes.
export const StageStart: StoryFn<typeof MessageGroup> = Template.bind({});
StageStart.args = {
  messages: [
    {
      ...baseMessage,
      id: "1",
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      type: MessageType.StageStart,
      content: "Community Q&A",
    },
  ],
};

export const StageEnd: StoryFn<typeof MessageGroup> = Template.bind({});
StageEnd.args = {
  messages: [
    {
      ...baseMessage,
      id: "2",
      timestamp: "2023-01-29T14:02:41.365000+00:00",
      type: MessageType.StageEnd,
      content: "Community Q&A",
    },
  ],
};

export const StageTopic: StoryFn<typeof MessageGroup> = Template.bind({});
StageTopic.args = {
  messages: [
    {
      ...baseMessage,
      id: "3",
      timestamp: "2023-01-29T13:31:02.365000+00:00",
      type: MessageType.StageTopic,
      content: "Roadmap questions",
    },
  ],
};

// Speaker events carry no topic.
export const StageSpeaker: StoryFn<typeof MessageGroup> = Template.bind({});
StageSpeaker.args = {
  messages: [
    {
      ...baseMessage,
      id: "4",
      timestamp: "2023-01-29T13:22:55.365000+00:00",
      type: MessageType.StageSpeaker,
      content: "",
    },
  ],
};

export const StageRaiseHand: StoryFn<typeof MessageGroup> = Template.bind({});
StageRaiseHand.args = {
  messages: [
    {
      ...baseMessage,
      id: "5",
      timestamp: "2023-01-29T13:21:10.365000+00:00",
      type: MessageType.StageRaiseHand,
      content: "",
    },
  ],
};
