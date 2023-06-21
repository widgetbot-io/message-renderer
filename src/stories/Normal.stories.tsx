import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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

// eslint-disable-next-line func-style
const Template: ComponentStory<typeof MessageGroup> = (args) => (
  <MessageGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  messages: [
    {
      id: "1101622366137749574",
      type: 0,
      content:
        'Small update on expanded markdown <:Kermit:865566651017068554>\nWe had to roll it back yesterday to patch some issues. We will most likely be bringing it back ~~sometime next week.~~ soon <:KermitTPose:814341617234083871> \n\nHave a good, markdown-less weekend! <:KermitCloutGlasses:874106679321571428>\n\nAnimal fact of the week: a group of rhino is called a "crash" 🦏',
      channel_id: "697138785317814292",
      author: {
        id: "933123872641921044",
        username: "therealjethro",
        global_name: "Jeff",
        avatar: "e4d8c186d8900eed2ace6aed5cefe1c0",
        discriminator: "0",
        public_flags: 4604871,
        avatar_decoration: "0f19f304614f253d56257ce1bbfcf357",
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-04-28T21:33:59.241000+00:00",
      edited_timestamp: "2023-05-04T16:50:42.356000+00:00",
      flags: 1,
      components: [],
      reactions: [
        {
          emoji: {
            id: "1100159330264813638",
            name: "frog_nae_nae",
            animated: true,
          },
          count: 241,
          count_details: {
            burst: 0,
            normal: 241,
          },
          burst_colors: [],
          me_burst: false,
          me: false,
          burst_count: 0,
        },
        {
          emoji: {
            id: null,
            name: "🦏",
          },
          count: 272,
          count_details: {
            burst: 0,
            normal: 272,
          },
          burst_colors: [],
          me_burst: false,
          me: true,
          burst_count: 0,
        },
      ],
    },
  ],
};

export const Reactions = Template.bind({});
Reactions.args = {
  messages: [
    {
      "id": "1119332977688715364",
      "type": 0,
      "content": "Congrats to Town Hall for winning the DDevs vs. Town Hall Birthday Activities Tournament! We'll get them next time, DDevs! GGWP everyone. <:ddev_professional:1091569367340286032> \n\n*Shoutout to the Tourney Bot team for helping us run the tournament!* <:Poker_Heart:1037861714722562139> \n\nWe hope you enjoyed celebrating <:sparkle_blurple:1085312148818903150>**Discord's 8th Birthday**<:sparkle_blurple:1085312148818903150> with us! <:Birthday_MallowCelebrate:1107724424351846430>",
      "channel_id": "613427779723067411",
      "author": {
        "id": "1025477315054030931",
        "username": "emilieatwork",
        "global_name": "emilie",
        "avatar": "62be4e79009cf707711cb62a6c1365fb",
        "discriminator": "0",
        "public_flags": 4194561,
        "avatar_decoration": "v3_a_898d52a79941712fd34b9218e0d80837"
      },
      "attachments": [],
      "embeds": [],
      "mentions": [],
      "mention_roles": [],
      "pinned": false,
      "mention_everyone": false,
      "tts": false,
      "timestamp": "2023-06-16T18:29:38.082000+00:00",
      "edited_timestamp": null,
      "flags": 0,
      "components": [],
      "reactions": [
        {
          "emoji": {
            "id": "1107789264135139509",
            "name": "controller"
          },
          "count": 55,
          "count_details": {
            "burst": 0,
            "normal": 55
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1107789265645080716",
            "name": "letter"
          },
          "count": 38,
          "count_details": {
            "burst": 0,
            "normal": 38
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1091569367340286032",
            "name": "ddev_professional"
          },
          "count": 42,
          "count_details": {
            "burst": 0,
            "normal": 42
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1037861714722562139",
            "name": "Poker_Heart"
          },
          "count": 36,
          "count_details": {
            "burst": 0,
            "normal": 36
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1107724424351846430",
            "name": "Birthday_MallowCelebrate"
          },
          "count": 37,
          "count_details": {
            "burst": 0,
            "normal": 37
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1107724343397580900",
            "name": "Birthday_CakeSmash"
          },
          "count": 34,
          "count_details": {
            "burst": 0,
            "normal": 34
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1106993761948553287",
            "name": "Birthday_Cake"
          },
          "count": 36,
          "count_details": {
            "burst": 0,
            "normal": 36
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1107724391715979294",
            "name": "Birthday_WumpusCake"
          },
          "count": 32,
          "count_details": {
            "burst": 0,
            "normal": 32
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        },
        {
          "emoji": {
            "id": "1106993985525923951",
            "name": "Birthday_Star"
          },
          "count": 32,
          "count_details": {
            "burst": 0,
            "normal": 32
          },
          "burst_colors": [],
          "me_burst": false,
          "me": false,
          "burst_count": 0
        }
      ]
    },
  ],
};

export const Mentions = Template.bind({});
Mentions.args = {
  messages: [
    {
      id: "1101622366137749574",
      type: 0,
      content:
        "User ping: <@132819036282159104>\nText channel mention: <#697138785317814292>\nVoice channel mention: <#1234>\nStage channel mention: <#1337>\nRole ping: <@&613426354628722689>\nUnknown channel mention: <#404>\nUnknown user mention: <@404>\nUnknown role mention: <@&404>",
      channel_id: "697138785317814292",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [testUser],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-04-28T21:33:59.241000+00:00",
      edited_timestamp: "2023-05-04T16:50:42.356000+00:00",
      flags: 1,
      components: [],
      reactions: [],
    },
  ],
};

export const CodeBlock = Template.bind({});
CodeBlock.args = {
  messages: [
    {
      id: "1069241535809454201",
      type: 0,
      content:
        '```tsx\nexport const CodeBlock = styled.withConfig({ displayName: "code" })(\n  "md-code-block",\n  css({\n    display: "block",\n    overflowX: "auto",\n    borderRadius: 4,\n    fontSize: theme.fontSizes.m,\n    lineHeight: "1.125rem",\n    textIndent: 0,\n    whiteSpace: "pre-wrap",\n    backgroundColor: theme.colors.backgroundSecondary,\n    border: `1px solid ${theme.colors.backgroundTertiary}`,\n    marginTop: theme.space.medium,\n    padding: ".5em",\n    fontFamily: fonts,\n  })\n });\n```',
      channel_id: "993105555042357268",
      author: {
        id: "132819036282159104",
        username: "mrquine",
        global_name: "Mr. Quine",
        avatar: "3a30ffeeeb354950804d77ded94162d3",
        avatar_decoration: null,
        discriminator: "0001",
        public_flags: 4457220,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:04:07.684000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069241535033245696",
      referenced_message: null,
    },
  ],
};

export const Embed = Template.bind({});
Embed.args = {
  messages: [
    {
      id: "1013056935886590032",
      type: 0,
      content:
        "this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```",
      channel_id: "993210446096105522",
      author: {
        id: "398690824721924107",
        username: "AdvaithBot",
        global_name: null,
        avatar: "aa710e791ef95cec9bf23350cabfcd1f",
        avatar_decoration: null,
        discriminator: "2249",
        public_flags: 65536,
        bot: true,
      },
      attachments: [],
      embeds: [
        {
          type: "rich",
          url: "https://discordapp.com",
          title: "title ~~(did you know you can have markdown here too?)~~",
          description:
            "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
          color: 4994011,
          timestamp: "2022-08-27T12:05:51.251000+00:00",
          fields: [
            {
              name: "🤔",
              value: "some of these properties have certain limits...",
              inline: false,
            },
            {
              name: "😱",
              value: "try exceeding some of them!",
              inline: false,
            },
            {
              name: "🙄",
              value:
                "an informative error should show up, and this view will remain as-is until all issues are fixed",
              inline: false,
            },
            {
              name: ":thonkang:",
              value: "these last two",
              inline: true,
            },
            {
              name: ":thonkang:",
              value: "are inline fields",
              inline: true,
            },
          ],
          author: {
            name: "author name",
            url: "https://discordapp.com",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_icon_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          },
          image: {
            url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
            width: 256,
            height: 256,
          },
          thumbnail: {
            url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
            width: 256,
            height: 256,
          },
          footer: {
            text: "footer text",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
            proxy_icon_url:
              "https://images-ext-2.discordapp.net/external/2dZVVL6feMSM7lxfFkKVW__LToSOzmToSEmocJV5vcA/https/cdn.discordapp.com/embed/avatars/0.png",
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-08-27T12:06:35.203000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const TwitterEmbed = Template.bind({});
TwitterEmbed.args = {
  messages: [
    {
      id: "1012082119129968660",
      type: 0,
      content: "https://twitter.com/advaithj1/status/1562328510605103104",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [
        {
          type: "rich",
          url: "https://twitter.com/advaithj1/status/1562328510605103104",
          description: "Profile Themes",
          color: 1942002,
          timestamp: "2022-08-24T06:38:38.245000+00:00",
          fields: [
            {
              name: "Likes",
              value: "105",
              inline: true,
            },
          ],
          author: {
            name: "advaith (@advaithj1)",
            url: "https://twitter.com/advaithj1",
            icon_url:
              "https://pbs.twimg.com/profile_images/1488212832952860672/SchxNzvk_400x400.png",
            proxy_icon_url:
              "https://images-ext-2.discordapp.net/external/UfNOTOu9QvauHStfQYflM5eWeQCIddYVqxdbJ2hu3Z8/https/pbs.twimg.com/profile_images/1488212832952860672/SchxNzvk_400x400.png",
          },
          image: {
            url: "https://pbs.twimg.com/media/Fa6BI4KVsAE44S6.jpg",
            proxy_url:
              "https://images-ext-1.discordapp.net/external/PVgGmJIfGcm5i_j25Lys24gOcJRu85rDjutVg3k55hs/https/pbs.twimg.com/media/Fa6BI4KVsAE44S6.jpg",
            width: 1200,
            height: 803,
          },
          footer: {
            text: "Twitter",
            icon_url:
              "https://abs.twimg.com/icons/apple-touch-icon-192x192.png",
            proxy_icon_url:
              "https://images-ext-1.discordapp.net/external/bXJWV2Y_F3XSra_kEqIYXAAsI3m1meckfLhYuWzxIfI/https/abs.twimg.com/icons/apple-touch-icon-192x192.png",
          },
        },
        {
          type: "rich",
          url: "https://twitter.com/advaithj1/status/1562328510605103104",
          image: {
            url: "https://pbs.twimg.com/media/Fa6BLnjVUAEF6pJ.jpg",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/8U7wHZr0BHTpFBRny8S_FCR32WymkS9XbYYtz0eijMQ/https/pbs.twimg.com/media/Fa6BLnjVUAEF6pJ.jpg",
            width: 1200,
            height: 783,
          },
        },
        {
          type: "rich",
          url: "https://twitter.com/advaithj1/status/1562328510605103104",
          image: {
            url: "https://pbs.twimg.com/media/Fa6BORPUYAAf9_R.jpg",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/wNNQNSNIWmMlV0y6tlxNLEM6khXiv3NvVSmgOnnbSW0/https/pbs.twimg.com/media/Fa6BORPUYAAf9_R.jpg",
            width: 1199,
            height: 791,
          },
        },
        {
          type: "rich",
          url: "https://twitter.com/advaithj1/status/1562328510605103104",
          image: {
            url: "https://pbs.twimg.com/media/Fa6BRZtUYAAgwnW.jpg",
            proxy_url:
              "https://images-ext-2.discordapp.net/external/kA2KdPReJxwMtreQlUIPrQTuwVDWk0CK08cYiJmzNH8/https/pbs.twimg.com/media/Fa6BRZtUYAAgwnW.jpg",
            width: 1200,
            height: 790,
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: true,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-08-24T19:33:00.777000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      application_id: "565479321247154186",
      webhook_id: "993585352776364044",
      hit: true,
    },
  ],
};

export const MultipleEmbeds = Template.bind({});
MultipleEmbeds.args = {
  messages: [
    {
      id: "1042934458803822693",
      type: 0,
      content: "",
      channel_id: "838078338299461632",
      author: {
        id: "235088799074484224",
        username: "Rythm",
        global_name: null,
        avatar: "9b29bfc497a70b6cc85bb2087936f8fd",
        discriminator: "3722",
        public_flags: 65536,
        bot: true,
        avatar_decoration: null,
      },
      attachments: [],
      embeds: [
        {
          type: "rich",
          title: "Rythm Newsletter #1 - The Return :rocket:",
          description:
            "🎙️ *tap tap*... Is this thing on?\n\nFirst off: This is an official newsletter from the Rythm team! If you’re receiving this, you subscribed to our newsletter a while back. Thanks for that! \n\nWe appreciate your support as this newsletter is the best way to stay up to date with what we’re doing (as well as our [Discord Server](https://widgetbot.io/)).",
          color: 15780562,
        },
        {
          type: "rich",
          title: "We're coming back :tada:",
          description:
            "That’s right baby, this newsletter marks the beginning of the comeback of Rythm!",
          color: 13865104,
          fields: [
            {
              name: "Our mission",
              value:
                "Over the last year, we've been working incredibly hard with one goal in mind: connecting people through music. \n\nFrom late-night gaming sessions, to studying with friends, or even just something as simple as spicing up a normal hangout... Rythm existed to bring the experience of music to all of your gatherings. Now we're bringing that back, with a vision that will revolutionize how we listen to music.",
              inline: false,
            },
            {
              name: "Join us  <:DiscordLight:1042615683017605212>",
              value:
                "As we gear up to our big launch over the next couple of months, we've got a ton of events scheduled for you to join in on. We’re doing a ton of cool stuff, like showing off what it’s like to work at Rythm, giving you sneak peeks into what we've been working on, hosting AMAs with our team, doing some game nights with all of you, hosting giveaways, and more!\n\n:link: **[Cick here to join our Discord](https://widgetbot.io/)**",
              inline: false,
            },
            {
              name: "Our beta program <:verified:1042615858217893908>",
              value:
                "We're kicking off our beta early next year, and are looking for people to help us test the brand new Rythm! We're currently taking in applications and will slowly open things up as we get closer to our launch. [Click here to sign up!](https://widgetbot.io/)",
              inline: false,
            },
            {
              name: "Sneak Peek <:eyess:1042616171054235749>",
              value:
                "Here's a sneak peek into the brand new Rythm, we'll be posting more of these on our [Discord](https://widgetbot.io/) <:NepSmug:1042616153794678804>",
              inline: false,
            },
          ],
          image: {
            url: "https://cdn.discordapp.com/attachments/268445232478027776/1041517082816286850/teaser_screenshot.png",
            proxy_url:
              "https://media.discordapp.net/attachments/268445232478027776/1041517082816286850/teaser_screenshot.png",
            width: 1676,
            height: 492,
          },
        },
        {
          type: "rich",
          title: "A brand new way to discover music :musical_note:",
          description:
            "We've recently launched a new project: **a community themed around music discovery.**\n\nAs music lovers, we're constantly on the lookout for both new music and ways to find new music. We wanted to create a place where everyone can find something to listen to.\n\nIn our community, you can find new music on a daily basis from all genres, curated by our incredible discovery team. This includes new hits, underground bangers, and much more. We'll also be running a lot of fun events you can participate in such as guess the song, club battles, and artist AMAs. \n\n:link: **[Click here to join our music discovery community](https://widgetbot.io/)**",
          color: 15301499,
        },
        {
          type: "rich",
          title: "More about us :wave:",
          color: 14639487,
          fields: [
            {
              name: "Once a hobby, now a full-time team",
              value:
                "That’s right, there’s a full-time team behind the bot that you know and love. We’ve grown a lot in the past year! We look forward to letting some of our newest additions take the spotlight in the coming months.",
              inline: false,
            },
            {
              name: "What's next?",
              value:
                "We hope this first newsletter gets you all excited for what's to come! Thanks a bunch for subscribing. We've got a **ton** of stuff we can't wait to share, so tune in for the next newsletter that'll go out around New Year's Day!",
              inline: false,
            },
            {
              name: "Thank you everyone for sticking with us, from the entire team here at Rythm :heart:",
              value: "​",
              inline: false,
            },
          ],
          image: {
            url: "https://cdn.discordapp.com/attachments/989565356957909022/1042513768699154543/team-gif.gif",
            proxy_url:
              "https://media.discordapp.net/attachments/989565356957909022/1042513768699154543/team-gif.gif",
            width: 660,
            height: 410,
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-11-17T22:49:11.764000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "Join our Discord",
              url: "https://widgetbot.io/",
            },
            {
              type: 2,
              style: 5,
              label: "Signup to Beta",
              url: "https://widgetbot.io/",
            },
            {
              type: 2,
              custom_id: "newsletter-unsubscribe",
              style: 2,
              label: "Unsubscribe 😔",
            },
          ],
        },
      ],
      reactions: [
        {
          emoji: {
            id: null,
            name: "❤️",
          },
          count: 1,
          count_details: {
            burst: 0,
            normal: 1,
          },
          burst_colors: [],
          me_burst: false,
          me: false,
          burst_count: 0,
        },
      ],
    },
  ],
};

export const YouTubeEmbed = Template.bind({});
YouTubeEmbed.args = {
  messages: [
    {
      id: "1065588769463484496",
      type: 0,
      content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [
        {
          type: "video",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          description:
            "The official video for “Never Gonna Give You Up” by Rick Astley\nTaken from the album ‘Whenever You Need Somebody’ – deluxe 2CD and digital deluxe out 6th May 2022 Pre-order here – https://RickAstley.lnk.to/WYNS2022ID\n\n“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s nat...",
          color: 16711680,
          author: {
            name: "Rick Astley",
            url: "https://www.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
          },
          provider: {
            name: "YouTube",
            url: "https://www.youtube.com",
          },
          thumbnail: {
            url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            proxy_url:
              "https://images-ext-1.discordapp.net/external/l-AFI3CsQVpcpSDYFtsDvDKag46BJ-uaQ9BTcU2JPC8/https/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
          video: {
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            width: 1280,
            height: 720,
          },
        },
      ],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-19T11:09:20.322000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ],
};

export const ImageAttachment = Template.bind({});
ImageAttachment.args = {
  messages: [
    {
      id: "1069242905643982868",
      type: 0,
      content: "",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069242905430077470",
          filename: "Screenshot_from_2023-01-29_14-09-10.png",
          size: 22875,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069242905430077470/Screenshot_from_2023-01-29_14-09-10.png",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069242905430077470/Screenshot_from_2023-01-29_14-09-10.png",
          width: 640,
          height: 360,
          content_type: "image/png",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:09:34.278000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242903978573824",
      referenced_message: null,
    },
  ],
};

export const ZipAttachment = Template.bind({});
ZipAttachment.args = {
  messages: [
    {
      id: "1069242192301924403",
      type: 0,
      content: "",
      channel_id: "993105555042357268",
      author: testUser,
      attachments: [
        {
          id: "1069242191983153273",
          filename: "ZipFile.zip",
          size: 2666805,
          url: "",
          proxy_url: "",
          content_type: "application/zip",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:06:44.204000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242183749468160",
      referenced_message: null,
    },
  ],
};

export const AudioAttachment = Template.bind({});
AudioAttachment.args = {
  messages: [
    {
      id: "1069242654442930237",
      type: 0,
      content: "",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069242654166089728",
          filename: "bruh-sound-effect-2.mp3",
          size: 39008,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069242654166089728/bruh-sound-effect-2.mp3",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069242654166089728/bruh-sound-effect-2.mp3",
          content_type: "audio/mpeg",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:08:34.387000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069242653268246528",
      referenced_message: null,
    },
  ],
};

export const Sticker = Template.bind({});
Sticker.args = {
  messages: [
    {
      id: "996737868657590322",
      type: 0,
      content: "schmoob",
      channel_id: "995987494615121991",
      author: testUser,
      attachments: [
        {
          id: "996737867860680724",
          filename: "VirtualBoxVM_edSVtI2r8v.png",
          size: 98228,
          url: "https://cdn.discordapp.com/attachments/995987494615121991/996737867860680724/VirtualBoxVM_edSVtI2r8v.png",
          proxy_url:
            "https://media.discordapp.net/attachments/995987494615121991/996737867860680724/VirtualBoxVM_edSVtI2r8v.png",
          width: 1152,
          height: 864,
          content_type: "image/png",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2022-07-13T11:20:26.382000+00:00",
      edited_timestamp: null,
      flags: 32,
      components: [],
      thread: {
        id: "996737868657590322",
        guild_id: "1",
        parent_id: "995987494615121991",
        owner_id: "132819036282159104",
        type: 11,
        name: "schmoob",
        last_message_id: "996737904120447066",
        thread_metadata: {
          archived: true,
          archive_timestamp: "2022-07-14T11:24:22.265000+00:00",
          auto_archive_duration: 1440,
          locked: false,
          create_timestamp: "2022-07-13T11:20:34.477000+00:00",
        },
        message_count: 1,
        member_count: 1,
        rate_limit_per_user: 0,
        flags: 0,
        total_message_sent: 1,
        member_ids_preview: ["132819036282159104"],
      },
      sticker_items: [
        {
          id: "903238292470898688",
          format_type: 1,
          name: "hmmmm",
        },
      ],
    },
  ],
};

export const VideoAttachment = Template.bind({});
VideoAttachment.args = {
  messages: [
    {
      id: "1069243404887806074",
      type: 0,
      content:
        "Look random `@widgetbot/message-renderer` user, I made a little Discord for the GameBoy!",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [
        {
          id: "1069243404585799680",
          filename: "bgb64_SkdwI3got6.mp4",
          size: 772258,
          url: "https://cdn.discordapp.com/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
          proxy_url:
            "https://media.discordapp.net/attachments/993210446096105522/1069243404585799680/bgb64_SkdwI3got6.mp4",
          width: 960,
          height: 864,
          content_type: "video/mp4",
        },
      ],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:11:33.307000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069243401242673152",
      referenced_message: null,
    },
  ],
};

export const Reply = Template.bind({});
Reply.args = {
  messages: [
    {
      id: "1101275906716213339",
      type: 19,
      content:
        "Small update: We needed to roll this back ~~for 24 hours~~ to patch some security issues. It'll be back real soon. Update: we don't want to re-roll it out on a friday afternoon, so thisll be back next week.",
      channel_id: "697138785317814292",
      author: {
        id: "933123872641921044",
        username: "therealjethro",
        global_name: "Jeff",
        avatar: "e4d8c186d8900eed2ace6aed5cefe1c0",
        discriminator: "0",
        public_flags: 4604871,
        avatar_decoration: "0f19f304614f253d56257ce1bbfcf357",
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-04-27T22:37:16.878000+00:00",
      edited_timestamp: "2023-04-28T21:00:43.827000+00:00",
      flags: 0,
      components: [],
      message_reference: {
        channel_id: "697138785317814292",
        guild_id: "613425648685547541",
        message_id: "1101188115344920607",
      },
      reactions: [
        {
          emoji: {
            id: null,
            name: "👍",
          },
          count: 234,
          count_details: {
            burst: 0,
            normal: 234,
          },
          burst_colors: [],
          me_burst: false,
          me: false,
          burst_count: 0,
        },
        {
          emoji: {
            id: "1085363933579329656",
            name: "App_Broom",
          },
          count: 185,
          count_details: {
            burst: 0,
            normal: 185,
          },
          burst_colors: [],
          me_burst: false,
          me: false,
          burst_count: 0,
        },
      ],
      referenced_message: {
        id: "1101188115344920607",
        type: 0,
        content:
          "# Hey DDevs! <:KermitSmile:798808491590156349> \n\nToday we are launching 🚀  **expanded markdown** (lists, headers, and masked links) to 100% of all guilds and users.\n\nYou can read more about it here [Support Article](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)\n\nNot just users but also Apps/Bots/Webhooks 🤖  can take advantage of this new functionality!\n\nAs always, everything we do is a work in progress. We are still open to feedback and bug info, and we welcome you to provide both. <:KermitDab:803138503935524864>",
        channel_id: "697138785317814292",
        author: {
          id: "933123872641921044",
          username: "therealjethro",
          global_name: "Jeff",
          avatar: "e4d8c186d8900eed2ace6aed5cefe1c0",
          discriminator: "0",
          public_flags: 4604871,
          avatar_decoration: "0f19f304614f253d56257ce1bbfcf357",
        },
        attachments: [],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "2023-04-27T16:48:25.784000+00:00",
        edited_timestamp: null,
        flags: 5,
        components: [],
      },
    },
  ],
};

export const UnknownReply = Template.bind({});
UnknownReply.args = {
  messages: [
    {
      id: "1069245334510915584",
      type: 19,
      content: "Wow, how insightful. This message changed my life.",
      channel_id: "993210446096105522",
      author: testUser,
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T13:19:13.365000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069245333344616448",
      referenced_message: null,
    },
  ],
};

export const CodeBlockReply = Template.bind({});
CodeBlockReply.args = {
  messages: [
    {
      id: "1069261084990648400",
      type: 19,
      content: "hemlo",
      channel_id: "993105555042357268",
      author: {
        id: "132819036282159104",
        username: "johnythecarrot",
        global_name: "JohnyTheCarrot",
        avatar: "3a30ffeeeb354950804d77ded94162d3",
        discriminator: "0001",
        public_flags: 4457220,
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2023-01-29T14:21:48.572000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      nonce: "1069261084294119424",
      message_reference: {
        channel_id: "993105555042357268",
        guild_id: "1",
        message_id: "1069241535809454201",
      },
      referenced_message: {
        id: "1069241535809454201",
        type: 0,
        content:
          '```tsx\nexport const CodeBlock = styled.withConfig({ displayName: \n  "code")(\n  "md-code-block",\n  css({\n    display: "block",\n    overflowX: "auto",\n    borderRadius: 4,\n    fontSize: theme.fontSizes.m,\n    lineHeight: "1.125rem",\n    textIndent: 0,\n    whiteSpace: "pre-wrap",\n    backgroundColor: theme.colors.backgroundSecondary,\n    border: `1px solid ${theme.colors.backgroundTertiary}`,\n    marginTop: theme.space.medium,\n    padding: ".5em",\n    fontFamily: fonts,\n  })\n });\n```',
        channel_id: "993105555042357268",
        author: {
          id: "132819036282159104",
          username: "johnythecarrot",
          global_name: "JohnyTheCarrot",
          avatar: "3a30ffeeeb354950804d77ded94162d3",
          avatar_decoration: null,
          discriminator: "0001",
          public_flags: 4457220,
        },
        attachments: [],
        embeds: [],
        mentions: [],
        mention_roles: [],
        pinned: false,
        mention_everyone: false,
        tts: false,
        timestamp: "2023-01-29T13:04:07.684000+00:00",
        edited_timestamp: null,
        flags: 0,
        components: [],
      },
    },
  ],
};
