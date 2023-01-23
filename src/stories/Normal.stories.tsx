import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Message, MessageRendererProvider } from "../../dist/esm/index.js";
import MessageGroup from "../index";
import { testUser } from "./commonTestData";
import Wrapper from "./Wrapper";

export default {
  title: "Message Types/Normal",
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

export const Basic = Template.bind({});
Basic.args = {
  messages: [
    {
      id: "1042882684902453278",
      channelId: "998637045327081502",
      content:
        '🔓 **__Upcoming Change for Command Permissions__** 🔐 \n\nBased on feedback, we\'re making some updates to permissions for application commands to simplify permission management and to make command permissions more closely resemble other permissions systems in Discord. Server admins can begin to opt-in to the command permission changes outlined in the change log on a per-server basis **starting on December 16, 2022**. However, changes will not be applied to all servers **until late January or early February**.\n\n> **📰 Change log: <http://discord.com/developers/docs/change-log#upcoming-application-command-permission-changes>**. This includes many more context and details about whether you\'ll be affected + how to update your app accordingly.\n\n> <:SystemMessageWarn:842172192401915971>﻿ Most apps will be unaffected by this change, but **if your app uses the `PUT /applications/<application_id>/guilds/<guild_id>/commands/<command_id>/permissions` endpoint, you may need to make updates.**\n\nThere are two main changes included:\n\n**1️⃣ The logic used to apply permission configurations to a user in a given context within Discord clients.**\nThe new command permissions configuration behavior allows command-level permissions, app-level permissions, and `default_member_permissions` to work together rather than independently.\n   - `default_member_permissions` acts as a “default” that a developer can set when creating or updating a command\n   - App-level permission configurations (typically set by admins) now act as the "base" configuration\n   - Command-level permission configurations (typically set by admins) now act as an “override” of the app-level\n\n**2️⃣ A new `APPLICATION_COMMAND_PERMISSIONS_V2` guild feature flag to indicate whether that guild is using the old permissions logic or the new (upcoming) logic.**\n\nAnd now....a flowchart to help understand and visualize *how* permissions configurations are used by Discord clients *(it\'s huge, so you might want to click "Open Original" to see all of it)*',
      type: "Default",
      flags: 2,
      createdAt: 1668713007904,
      editedAt: 1668737411977,
      isGuest: false,
      author: {
        avatarUrl: null,
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
      reactions: [
        {
          count: 15,
          emojiId: null,
          emojiName: "😎",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 4,
          emojiId: null,
          emojiName: "🇸",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 5,
          emojiId: null,
          emojiName: "🇺",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 4,
          emojiId: null,
          emojiName: "💰",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 3,
          emojiId: null,
          emojiName: "🇨🇭",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 11,
          emojiId: null,
          emojiName: "😍",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 15,
          emojiId: null,
          emojiName: "👍",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 1,
          emojiId: "366666199905337344",
          emojiName: "blobwave",
          animated: null,
          __typename: "Reaction",
        },
        {
          count: 3,
          emojiId: "746018234494484632",
          emojiName: "sparkles1",
          animated: true,
          __typename: "Reaction",
        },
        {
          count: 1,
          emojiId: "699118352727277658",
          emojiName: "boost",
          animated: null,
          __typename: "Reaction",
        },
      ],
      messageReference: {
        guildId: "613425648685547541",
        channelId: "697138785317814292",
        messageId: "1042878163170119741",
        __typename: "MessageReference",
      },
      embeds: [],
      mentions: [],
      interaction: null,
      thread: null,
      __typename: "Message",
      referencedMessage: null,
    },
  ],
};

export const CodeBlock = Template.bind({});
CodeBlock.args = {
  messages: [
    {
      id: "1060885271480115241",
      channelId: "993105555042357268",
      content:
        '```ts\nexport const CodeBlock = styled("code", {\n  display: "block",\n  overflowX: "auto",\n  borderRadius: 4,\n  fontSize: "0.875rem",\n  lineHeight: "1.125rem",\n  textIndent: 0,\n  whiteSpace: "pre-wrap",\n  backgroundColor: theme.colors.backgroundSecondary,\n  border: `1px solid ${theme.colors.backgroundTertiary}`,\n  marginTop: 6,\n  padding: ".5em",\n  fontFamily: fonts,\n});\n```',
      type: "Default",
      flags: 0,
      createdAt: 1673005159016,
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

export const Embed = Template.bind({});
Embed.args = {
  messages: [
    {
      id: "1060885271480115241",
      channelId: "993105555042357268",
      content: "",
      type: "Default",
      flags: 0,
      createdAt: 1673005159016,
      editedAt: null,
      isGuest: false,
      author: testUser,
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
  ],
};

export const YouTubeEmbed = Template.bind({});
YouTubeEmbed.args = {
  messages: [
    {
      id: "997882132233986079",
      channelId: "993210446096105522",
      content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      type: "Default",
      flags: 0,
      createdAt: 1657984040078,
      editedAt: null,
      isGuest: false,
      author: testUser,
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
  ],
};

export const Attachment = Template.bind({});
Attachment.args = {
  messages: [
    {
      id: "1042882684902453278",
      channelId: "998637045327081502",
      content: ":)",
      type: "Default",
      flags: 2,
      createdAt: 1668713007904,
      editedAt: 1668737411977,
      isGuest: false,
      author: testUser,
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
  ],
};

export const Sticker = Template.bind({});
Sticker.args = {
  messages: [
    {
      id: "996737868657590322",
      channelId: "995987494615121991",
      content: "schmoob",
      type: "Default",
      flags: 32,
      createdAt: 1657711226382,
      editedAt: null,
      isGuest: false,
      author: testUser,
      attachments: [
        {
          url: "https://cdn.discordapp.com/attachments/995987494615121991/996737867860680724/VirtualBoxVM_edSVtI2r8v.png",
          height: 864,
          width: 1152,
          filename: "VirtualBoxVM_edSVtI2r8v.png",
          size: 98228,
          __typename: "Attachment",
        },
      ],
      stickers: [
        {
          id: "903238292470898688",
          name: "hmmmm",
          formatType: "PNG",
          lottieData: null,
          __typename: "Sticker",
        },
      ],
      reactions: null,
      messageReference: null,
      embeds: [],
      mentions: [],
      interaction: null,
      thread: {
        id: "996737868657590322",
        name: "schmoob",
        archivedAt: 1657797862,
        locked: false,
        messageCount: 1,
        __typename: "Thread",
      },
      __typename: "Message",
      referencedMessage: null,
    },
  ],
};

export const Reply = Template.bind({});
Reply.args = {
  messages: [
    {
      id: "1001570097229475912",
      channelId: "995987494615121991",
      content: "amogus",
      type: "Reply",
      flags: 32,
      createdAt: 1658863319452,
      editedAt: null,
      isGuest: false,
      author: testUser,
      attachments: [],
      stickers: [],
      reactions: null,
      messageReference: {
        guildId: "859206873349881947",
        channelId: "995987494615121991",
        messageId: "996782353164804097",
        __typename: "MessageReference",
      },
      embeds: [],
      mentions: [],
      interaction: null,
      thread: {
        id: "1001570097229475912",
        name: "amogus",
        archivedAt: 1662403785,
        locked: false,
        messageCount: 2,
        __typename: "Thread",
      },
      __typename: "Message",
      referencedMessage: {
        id: "996782353164804097",
        channelId: "995987494615121991",
        content: "",
        type: "Default",
        flags: 0,
        createdAt: 1657721832315,
        editedAt: null,
        isGuest: false,
        author: {
          avatarUrl:
            "https://cdn.discordapp.com/avatars/132819036282159104/62adc3a5beed3193edc6a08b58a645cc.webp",
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
        attachments: [
          {
            url: "https://cdn.discordapp.com/attachments/995987494615121991/996782352594386944/msedge_Manr2DB334.png",
            height: 320,
            width: 663,
            filename: "msedge_Manr2DB334.png",
            size: 35384,
            __typename: "Attachment",
          },
        ],
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
  ],
};
