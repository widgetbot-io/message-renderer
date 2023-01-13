import { ThemeProvider } from "emotion-theming";
import MessageGroup, { MessageRendererProvider } from "../index";
import React from "react";
import Color from "color";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MentionType, MessageType } from "../types/globalTypes";

const theme = {
  __typename: "ThemeSettings",
  colors: {
    __typename: "ThemeColorSettings",
    primary: "#fff",
    accent: "#5865f2",
    background: "#36393f",
  },
  css: ``,
};

const themeContext = {
  readonly: false,
  guestMode: false,
  singleChannel: true,
  colors: {
    ...theme.colors,
    _primary: Color(theme.colors.primary),
    _background: Color(theme.colors.background),
    _accent: Color(theme.colors.accent),
  },
  loadedSettings: false,
};

function Wrapper(Story) {
  return (
    <ThemeProvider theme={themeContext}>
      <MessageRendererProvider>
        {({ themeClass }) => (
          <div className={themeClass} style={{ padding: 20 }}>
            {Story()}
          </div>
        )}
      </MessageRendererProvider>
    </ThemeProvider>
  );
}

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
      author: {
        avatarUrl:
          "https://cdn.discordapp.com/avatars/132819036282159104/a_e857e4e72ad559a4941fe7ab807e8a86.webp",
        bot: false,
        discrim: "0001",
        id: "132819036282159104",
        flags: 4457220,
        name: "JohnyTheCarrot",
        roles: ["859803268372758550"],
        system: false,
        isWebhook: false,
        __typename: "User",
        color: 0,
      },
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
      author: {
        avatarUrl:
          "https://cdn.discordapp.com/avatars/132819036282159104/a_e857e4e72ad559a4941fe7ab807e8a86.webp",
        bot: false,
        discrim: "0001",
        id: "132819036282159104",
        flags: 4457220,
        name: "JohnyTheCarrot",
        roles: ["859803268372758550"],
        system: false,
        isWebhook: false,
        __typename: "User",
        color: 0,
      },
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
