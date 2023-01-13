import { ThemeProvider } from "emotion-theming";
import MessageGroup, { MessageRendererProvider } from "../index";
import React from "react";
import Color from "color";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MessageType } from "../types/globalTypes";

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
  title: "Message Types/Discovery Notices",
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

export const Requalified = Template.bind({});
Requalified.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.GuildDiscoveryRequalified,
      author: null,
    },
  ],
};

export const InitialWarning = Template.bind({});
InitialWarning.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.GuildDiscoveryGracePeriodInitialWarning,
      author: null,
    },
  ],
};

export const FinalWarning = Template.bind({});
FinalWarning.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.GuildDiscoveryGracePeriodFinalWarning,
      author: null,
    },
  ],
};

export const Disqualified = Template.bind({});
Disqualified.args = {
  messages: [
    {
      id: "1",
      createdAt: 1668713007904,
      type: MessageType.GuildDiscoveryDisqualified,
      author: null,
    },
  ],
};
