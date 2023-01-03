import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Color from "color";
import { Message } from "../../dist/esm/index.js";
import { ThemeProvider } from "emotion-theming";

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
      <>{Story()}</>
    </ThemeProvider>
  );
}

export default {
  title: "Examples/Message Types",
  component: Message,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [Wrapper],
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  isFirstMessage: true,
  message: {
    id: "1013056935886590032",
    channelId: "993210446096105522",
    content:
      "this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```",
    type: "Default",
    flags: 0,
    createdAt: 1661601995203,
    editedAt: null,
    isGuest: false,
    author: {
      avatarUrl:
        "https://cdn.discordapp.com/avatars/398690824721924107/aa710e791ef95cec9bf23350cabfcd1f.webp",
      bot: true,
      discrim: "2249",
      id: "398690824721924107",
      flags: 65536,
      name: "AdvaithBot",
      roles: ["859803268372758550"],
      system: false,
      isWebhook: false,
      __typename: "User",
      color: 0,
    },
    attachments: [],
    stickers: [],
    reactions: null,
    messageReference: null,
    embeds: [
      {
        title: "title ~~(did you know you can have markdown here too?)~~",
        description:
          "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
        url: "https://discordapp.com",
        timestamp: "2022-08-27T12:05:51.251Z",
        color: 4994011,
        type: "Rich",
        author: {
          url: "https://discordapp.com",
          name: "author name",
          proxyIconUrl:
            "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          __typename: "EmbedAuthor",
        },
        fields: [
          {
            value: "some of these properties have certain limits...",
            name: "🤔",
            inline: false,
            __typename: "EmbedField",
          },
          {
            value: "try exceeding some of them!",
            name: "😱",
            inline: false,
            __typename: "EmbedField",
          },
          {
            value:
              "an informative error should show up, and this view will remain as-is until all issues are fixed",
            name: "🙄",
            inline: false,
            __typename: "EmbedField",
          },
          {
            value: "these last two",
            name: ":thonkang:",
            inline: true,
            __typename: "EmbedField",
          },
          {
            value: "are inline fields",
            name: ":thonkang:",
            inline: true,
            __typename: "EmbedField",
          },
        ],
        image: {
          url: "https://cdn.discordapp.com/embed/avatars/0.png",
          proxyUrl:
            "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          width: 256,
          height: 256,
          __typename: "EmbedImage",
        },
        provider: null,
        footer: {
          proxyIconUrl:
            "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          text: "footer text",
          __typename: "EmbedFooter",
        },
        thumbnail: {
          height: 256,
          width: 256,
          url: "https://cdn.discordapp.com/embed/avatars/0.png",
          proxyUrl:
            "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          __typename: "EmbedThumbnail",
        },
        video: null,
        __typename: "Embed",
      },
    ],
    mentions: [],
    interaction: null,
    thread: null,
    __typename: "Message",
    referencedMessage: null,
  },
};
