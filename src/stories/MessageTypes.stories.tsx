import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Color from "color";
// import { Message, MessageRendererProvider } from "../../dist/esm/index.js";
import { ThemeProvider } from "emotion-theming";
import { Message, MessageRendererProvider } from "../index";

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
  title: "Message Types/Normal",
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

export const Basic = Template.bind({});
Basic.args = {
  isFirstMessage: true,
  showButtons: true,
  overrides: {
    userMentioned: false,
  },
  message: {
    id: "1040037702583730266",
    channelId: "998637045327081502",
    content:
      "🔞 **__Upcoming Change for Age-Restricted Commands__** 🔞\n\n**Next Wednesday, November 16**, we’re making updates to how age-restricted commands appear and are used in Discord. As some may know, commands have accepted an `nsfw` field in the API for some time, and we're ready to release the next part of that feature which will hide those commands from underage users on Discord. \n\n> ℹ️ Apps in the directory are unaffected—as a reminder, age-restricted content is not allowed in discoverable apps.\n\nIn line with Discord’s other policies on age-restricted content, here’s how commands marked `nsfw` will work. Users who are 18 or older can opt in to age-restricted commands by going to **User Settings** > **Privacy**, and enabling the age-restricted commands toggle (which will be turned off by default). \n\n- **In servers**, these commands will only be visible and usable within age-restricted (`nsfw`) channels\n- **In DMs**, these commands will be visible and usable if\n    - The user is 18 years or older\n    - They have turned on age-restricted commands within Discord settings\n- Age-restricted commands will not show as popular commands on app profiles\n\nYou can see some screenshots of how this will work in the thread attached to this message. In the future, we will also start automatically tagging commands as `nsfw` if they fall within our policy but are not properly flagged.\n\nWe really appreciate those of you who have been asking for this feature, and your commitment to helping us keep Discord safe <:pikaheartbig:639883910326779924> \n\n💡 Help Center article: https://support.discord.com/hc/en-us/articles/10123937946007\n❓ If you have questions, feel free to ask them in <#963510648917069899>",
    type: "Default",
    flags: 6,
    createdAt: 1668034711262,
    editedAt: null,
    isGuest: false,
    author: {
      avatarUrl:
        "https://cdn.discordapp.com/avatars/998882498719273090/bd8d3fcb2f0e01f163d1d36f1f61fe60.webp",
      bot: true,
      discrim: "0000",
      id: "998882498719273090",
      flags: null,
      name: "Discord Developers #api-announcements",
      roles: [],
      system: false,
      isWebhook: true,
      __typename: "User",
      color: 0,
    },
    attachments: [],
    stickers: [],
    reactions: null,
    messageReference: {
      guildId: "613425648685547541",
      channelId: "697138785317814292",
      messageId: "1040031507026284645",
      __typename: "MessageReference",
    },
    embeds: [],
    mentions: [],
    interaction: null,
    thread: null,
    __typename: "Message",
    referencedMessage: null,
  },
};

export const YouTubeEmbed = Template.bind({});
YouTubeEmbed.args = {
  isFirstMessage: true,
  message: {
    id: "997882132233986079",
    channelId: "993210446096105522",
    content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "Default",
    flags: 0,
    createdAt: 1657984040078,
    editedAt: null,
    isGuest: false,
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
    attachments: [],
    stickers: [],
    reactions: null,
    messageReference: null,
    embeds: [
      {
        title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
        description:
          "The official video for “Never Gonna Give You Up” by Rick Astley\nTaken from the album ‘Whenever You Need Somebody’ – deluxe 2CD and digital deluxe out 6th May 2022 Pre-order here – https://RickAstley.lnk.to/WYNS2022ID\n\n“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s nat...",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        timestamp: null,
        color: 16711680,
        type: "Video",
        author: {
          url: "https://www.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
          name: "Rick Astley",
          proxyIconUrl: null,
          __typename: "EmbedAuthor",
        },
        fields: null,
        image: null,
        provider: {
          name: "YouTube",
          url: "https://www.youtube.com",
          __typename: "EmbedProvider",
        },
        footer: null,
        thumbnail: {
          height: 720,
          width: 1280,
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          proxyUrl:
            "https://images-ext-1.discordapp.net/external/l-AFI3CsQVpcpSDYFtsDvDKag46BJ-uaQ9BTcU2JPC8/https/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          __typename: "EmbedThumbnail",
        },
        video: {
          height: 720,
          width: 1280,
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          proxyUrl: null,
          __typename: "EmbedVideo",
        },
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

export const Attachment = Template.bind({});
Attachment.args = {
  isFirstMessage: true,
  message: {
    id: "1042882684902453278",
    channelId: "998637045327081502",
    content: ":)",
    type: "Default",
    flags: 2,
    createdAt: 1668713007904,
    editedAt: 1668737411977,
    isGuest: false,
    author: {
      avatarUrl: null,
      bot: false,
      discrim: "0000",
      id: "1",
      flags: null,
      name: "Gort",
      roles: [],
      system: false,
      isWebhook: false,
      __typename: "User",
      color: 0,
    },
    attachments: [
      {
        url: "https://via.placeholder.com/1000x591.webp",
        height: 591,
        width: 1000,
        filename: "SPOILER_flowchart-for-new-permissions.png",
        size: 981134,
        __typename: "Attachment",
      },
    ],
    stickers: [],
    reactions: null,
    embeds: [],
    mentions: [],
    interaction: null,
    thread: null,
    __typename: "Message",
    referencedMessage: null,
  },
};

export const Reply = Template.bind({});
Reply.args = {
  isFirstMessage: true,
  message: {
    id: "1060142796708773898",
    channelId: "993105555042357268",
    content: "bababooey",
    type: "Reply",
    flags: 0,
    createdAt: 1672828139236,
    editedAt: null,
    isGuest: false,
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
    attachments: [],
    stickers: [],
    reactions: null,
    messageReference: {
      guildId: "1",
      channelId: "993105555042357268",
      messageId: "1027889767460909076",
      __typename: "MessageReference",
    },
    embeds: [],
    mentions: [],
    interaction: null,
    thread: null,
    __typename: "Message",
    referencedMessage: {
      id: "1027889767460909076",
      channelId: "993105555042357268",
      content: "ya same",
      type: "Default",
      flags: 0,
      createdAt: 1665138417831,
      editedAt: null,
      isGuest: false,
      author: {
        avatarUrl:
          "https://cdn.discordapp.com/avatars/132819036282159104/a_e857e4e72ad559a4941fe7ab807e8a86.webp",
        bot: false,
        discrim: "0001",
        id: "132819036282159104",
        flags: 4457220,
        name: "JohnyTheCarrot",
        system: false,
        isWebhook: false,
        __typename: "User",
        color: 3319955,
      },
      attachments: [],
      stickers: [],
      reactions: null,
      messageReference: null,
      embeds: [],
      mentions: [],
      interaction: null,
      thread: null,
      __typename: "Message",
    },
  },
};
