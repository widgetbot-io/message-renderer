import { MessageRendererProvider } from "../index";
import React from "react";

// SVGs
import SvgFileAudio from "../assets/storybookOnlyAssets/file-audio.svg";
import SvgSketch from "../assets/storybookOnlyAssets/file-sketch.svg";
import SvgFileArchive from "../assets/storybookOnlyAssets/file-archive.svg";
import SvgFileUnknown from "../assets/storybookOnlyAssets/file-unknown.svg";
import SvgAe from "../assets/storybookOnlyAssets/file-ae.svg";
import SvgAi from "../assets/storybookOnlyAssets/file-ai.svg";
import SvgAcrobat from "../assets/storybookOnlyAssets/file-acrobat.svg";
import SvgCode from "../assets/storybookOnlyAssets/file-code.svg";
import SvgDocument from "../assets/storybookOnlyAssets/file-document.svg";
import SvgSpreadsheet from "../assets/storybookOnlyAssets/file-spreadsheet.svg";
import SvgWebCode from "../assets/storybookOnlyAssets/file-webcode.svg";

import SvgIconAdd from "../assets/storybookOnlyAssets/icon-add.svg";
import SvgIconRemove from "../assets/storybookOnlyAssets/icon-remove.svg";
import SvgWarning from "../assets/storybookOnlyAssets/icon-warning.svg";
import SvgIconDownload from "../assets/storybookOnlyAssets/icon-download.svg";
import SvgIconCheckmark from "../assets/storybookOnlyAssets/icon-checkmark.svg";
import SvgIconCross from "../assets/storybookOnlyAssets/icon-cross.svg";
import SvgIconPin from "../assets/storybookOnlyAssets/icon-pin.svg";
import SvgIconPencil from "../assets/storybookOnlyAssets/icon-pencil.svg";
import SvgIconBoost from "../assets/storybookOnlyAssets/icon-boost.svg";
import SvgIconThreadCreated from "../assets/storybookOnlyAssets/icon-thread-created.svg";
import SvgIconId from "../assets/storybookOnlyAssets/icon-id.svg";
import SvgIconSticker from "../assets/storybookOnlyAssets/icon-sticker.svg";
import SvgIconCommand from "../assets/storybookOnlyAssets/icon-command.svg";
import SvgIconAttachment from "../assets/storybookOnlyAssets/icon-attachment.svg";
import SvgIconDanger from "../assets/storybookOnlyAssets/icon-danger.svg";
import SvgIconPause from "../assets/storybookOnlyAssets/icon-pause.svg";
import SvgIconFullscreen from "../assets/storybookOnlyAssets/icon-fullscreen.svg";
import SvgIconPlay from "../assets/storybookOnlyAssets/icon-play.svg";
import SvgIconTextChannel from "../assets/storybookOnlyAssets/icon-text-channel.svg";
import SvgIconVoiceChannel from "../assets/storybookOnlyAssets/icon-voice-channel.svg";
import SvgIconStageChannel from "../assets/storybookOnlyAssets/icon-stage-channel.svg";
import SvgIconLinkExternal from "../assets/storybookOnlyAssets/icon-link-external.svg";
import SvgIconUnknownReply from "../assets/storybookOnlyAssets/icon-unknown-reply.svg";

import ggSansNormal400 from "../assets/storybookOnlyAssets/gg-sans-normal-400.woff2";
import ggSansNormal500 from "../assets/storybookOnlyAssets/gg-sans-normal-500.woff2";
import ggSansNormal600 from "../assets/storybookOnlyAssets/gg-sans-normal-600.woff2";
import ggSansNormal700 from "../assets/storybookOnlyAssets/gg-sans-normal-700.woff2";
import ggSansNormal800 from "../assets/storybookOnlyAssets/gg-sans-normal-800.woff2";

import ggSansItalic400 from "../assets/storybookOnlyAssets/gg-sans-italic-400.woff2";
import ggSansItalic500 from "../assets/storybookOnlyAssets/gg-sans-italic-500.woff2";
import ggSansItalic600 from "../assets/storybookOnlyAssets/gg-sans-italic-600.woff2";
import ggSansItalic700 from "../assets/storybookOnlyAssets/gg-sans-italic-700.woff2";
import ggSansItalic800 from "../assets/storybookOnlyAssets/gg-sans-italic-800.woff2";

import automodAvatarStill from "../assets/storybookOnlyAssets/automod-avatar.png";
import automodAvatarAnimated from "../assets/storybookOnlyAssets/automod-avatar.gif";

import SvgMiscDiscordImageFailure from "../assets/storybookOnlyAssets/misc-discord-image-failure.svg";
import type {
  APIChannel,
  APIGuild,
  APIGuildMember,
  APIMessage,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import { ChannelType, GuildNSFWLevel } from "discord-api-types/v10";
import { globalCss, prefix, styled, theme } from "../Stitches/stitches.config";
import getDisplayName from "../utils/getDisplayName";
import type {
  ChatBadgeProps,
  MessageButtonListOption,
} from "../core/ConfigContext";
import { testTextChannel } from "./commonTestData";
import type { Decorator } from "@storybook/react";

const svgUrls = {
  FileAudio: SvgFileAudio,
  FileSketch: SvgSketch,
  FileArchive: SvgFileArchive,
  FileUnknown: SvgFileUnknown,
  FileAe: SvgAe,
  FileAi: SvgAi,
  FileAcrobat: SvgAcrobat,
  FileCode: SvgCode,
  FileDocument: SvgDocument,
  FileSpreadsheet: SvgSpreadsheet,
  FileWebCode: SvgWebCode,

  IconAdd: SvgIconAdd,
  IconRemove: SvgIconRemove,
  IconDownload: SvgIconDownload,
  IconWarning: SvgWarning,
  IconCheckmark: SvgIconCheckmark,
  IconCross: SvgIconCross,
  IconPin: SvgIconPin,
  IconPencil: SvgIconPencil,
  IconBoost: SvgIconBoost,
  IconThreadCreated: SvgIconThreadCreated,
  IconId: SvgIconId,
  IconSticker: SvgIconSticker,
  IconCommand: SvgIconCommand,
  IconAttachment: SvgIconAttachment,
  IconDanger: SvgIconDanger,
  IconPause: SvgIconPause,
  IconFullscreen: SvgIconFullscreen,
  IconPlay: SvgIconPlay,
  IconUnknownReply: SvgIconUnknownReply,
  IconTextChannel: SvgIconTextChannel,
  IconVoiceChannel: SvgIconVoiceChannel,
  IconStageChannel: SvgIconStageChannel,
  IconLinkExternal: SvgIconLinkExternal,
  MiscDiscordImageFailure: SvgMiscDiscordImageFailure,
};

function getButtons(
  message: APIMessage
): MessageButtonListOption<typeof svgUrls>[] {
  return [
    {
      icon: "IconId",
      onClick: () => navigator.clipboard.writeText(message.id),
      actionDescription: "Copy Message ID",
    },
  ];
}

function resolveRole(id: Snowflake): APIRole | null {
  console.log("id", id);

  if (id === "613426354628722689")
    return {
      id: "613426354628722689",
      name: "Discord Staff",
      permissions: "12635227553527",
      mentionable: false,
      position: 33,
      color: 5793266,
      hoist: false,
      managed: false,
      tags: {},
      icon: "6b3d7f2ff245e627322355767b055d22",
      unicode_emoji: null,
      flags: 0,
    };

  console.log(`Unknown role ${id}`);
  return null;
}

function resolveChannel(id: Snowflake): APIChannel | null {
  if (id === "697138785317814292") {
    return {
      name: "api-announcements",
      position: 8,
      id: "697138785317814292",
      guild_id: "613425648685547541",
      type: ChannelType.GuildAnnouncement,
    };
  }

  if (id === testTextChannel.id) {
    return testTextChannel;
  }

  if (id === "1234") {
    return {
      name: "Voice Channel",
      position: 8,
      id: "1234",
      guild_id: "4321",
      type: ChannelType.GuildVoice,
    };
  }

  if (id === "1337") {
    return {
      name: "Stage Channel",
      position: 8,
      id: "1337",
      guild_id: "4321",
      type: ChannelType.GuildStageVoice,
    };
  }

  console.log(`Unknown channel ${id}`);
  return null;
}

function resolveMember({ id }: APIUser): APIGuildMember | null {
  if (id === "933123872641921044") {
    return {
      avatar: null,
      communication_disabled_until: null,
      flags: 10,
      joined_at: "2023-03-23T20:13:42.452000+00:00",
      nick: "Jethro",
      pending: false,
      premium_since: null,
      roles: ["613426354628722689"],
      user: {
        id: "933123872641921044",
        username: "therealjethro",
        global_name: "Jeff",
        avatar: "e4d8c186d8900eed2ace6aed5cefe1c0",
        discriminator: "0",
        public_flags: 4604871,
      },
      mute: false,
      deaf: false,
    };
  }

  if (id === "53908232506183680") {
    return {
      avatar: null,
      communication_disabled_until: null,
      flags: 0,
      joined_at: "2019-08-20T17:34:31.608000+00:00",
      nick: null,
      pending: false,
      premium_since: null,
      roles: ["613426354628722689"],
      user: {
        username: "mason",
        global_name: "Mason",
        public_flags: 4325445,
        id: "53908232506183680",
        discriminator: "0",
        avatar: "a_d5efa99b3eeaa7dd43acca82f5692432",
      },
      mute: false,
      deaf: false,
    };
  }

  console.log(`Unknown member ${id}`);
  return null;
}

function resolveGuild(): APIGuild | null {
  return {
    id: "197038439483310086",
    name: "Example Server",
    icon: "f64c482b807da4f539cff778d174971c",
    description: "The official place to report Discord Bugs!",
    splash: null,
    discovery_splash: null,
    features: [],
    emojis: [],
    banner: "9b6439a7de04f1d26af92f84ac9e1e4a",
    owner_id: "73193882359173120",
    application_id: null,
    region: "",
    afk_channel_id: null,
    afk_timeout: 300,
    system_channel_id: null,
    widget_enabled: true,
    widget_channel_id: null,
    verification_level: 3,
    roles: [],
    default_message_notifications: 1,
    mfa_level: 1,
    explicit_content_filter: 2,
    max_presences: 40000,
    max_members: 250000,
    vanity_url_code: "discord-testers",
    premium_tier: 3,
    premium_subscription_count: 33,
    system_channel_flags: 0,
    preferred_locale: "en-US",
    rules_channel_id: "441688182833020939",
    public_updates_channel_id: "281283303326089216",
    safety_alerts_channel_id: "281283303326089216",
    nsfw_level: GuildNSFWLevel.Safe,
    stickers: [],
    premium_progress_bar_enabled: false,
    hub_type: null,
  };
}

function resolveUser(userId: Snowflake): APIUser | null {
  if (userId === "132819036282159104") {
    return {
      id: "132819036282159104",
      username: "johnythecarrot",
      global_name: "JohnyTheCarrot",
      avatar: "3a30ffeeeb354950804d77ded94162d3",
      discriminator: "0001",
      public_flags: 4457220,
    };
  }

  console.log(`Unknown user ${userId}`);
  return null;
}

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "gg sans",
      fontStyle: "normal",
      fontWeight: 400,
      src: `url(${ggSansNormal400}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "normal",
      fontWeight: 500,
      src: `url(${ggSansNormal500}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "normal",
      fontWeight: 600,
      src: `url(${ggSansNormal600}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "normal",
      fontWeight: 700,
      src: `url(${ggSansNormal700}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "normal",
      fontWeight: 800,
      src: `url(${ggSansNormal800}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "italic",
      fontWeight: 400,
      src: `url(${ggSansItalic400}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "italic",
      fontWeight: 500,
      src: `url(${ggSansItalic500}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "italic",
      fontWeight: 600,
      src: `url(${ggSansItalic600}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "italic",
      fontWeight: 700,
      src: `url(${ggSansItalic700}) format('woff2')`,
    },
    {
      fontFamily: "gg sans",
      fontStyle: "italic",
      fontWeight: 800,
      src: `url(${ggSansItalic800}) format('woff2')`,
    },
  ],
});

const StorybookStyles = styled("div", {
  [`--${prefix}-fonts-main`]:
    '"gg sans","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
  fontFamily: theme.fonts.main,
  padding: 40,
});

// eslint-disable-next-line func-style
const Wrapper: Decorator = (Story) => {
  globalStyles();

  return (
    <MessageRendererProvider
      svgUrls={svgUrls}
      automodAvatar={{
        still: automodAvatarStill,
        animated: automodAvatarAnimated,
      }}
      messageButtons={getButtons}
      resolveRole={resolveRole}
      resolveChannel={resolveChannel}
      resolveMember={resolveMember}
      resolveGuild={resolveGuild}
      resolveUser={resolveUser}
      currentUser={() => resolveUser("132819036282159104")}
      seeThreadOnClick={(messageId, thread) =>
        alert(`See Thread "${thread.name}" clicked on message ${messageId}`)
      }
      userOnClick={(user) => alert(`User "${getDisplayName(user)}" clicked!`)}
      roleMentionOnClick={(role) =>
        alert(`Role "${role.name}" mention clicked!`)
      }
      channelMentionOnClick={(channel) =>
        alert(`Channel "${channel.name}" mention clicked!`)
      }
      messageComponentButtonOnClick={(message, customId) => {
        alert(
          `Button by custom id "${customId}" pressed on message ${message.id}!`
        );
      }}
      openPinnedMessagesOnClick={(channel) => {
        alert(`Open pinned messages clicked on channel ${channel.name}!`);
      }}
      chatBadge={({ user, TagWrapper }: ChatBadgeProps) => {
        if (user.id === "132819036282159104")
          return <TagWrapper>COOL</TagWrapper>;

        return null;
      }}
      attachmentImageOnClick={(image) => {
        alert(`Image attachment ${image.filename} clicked!`);
      }}
      embedImageOnClick={(embed) => {
        alert(`Embed image ${embed.url} clicked!`);
      }}
      externalLinkOpenRequested={(url) => {
        alert(`External link "${url}" requested!`);
      }}
      // avatarUrlOverride={(user) => {
      //   if (user.id === "132819036282159104")
      //     return "https://cdn.discordapp.com/emojis/698964060770926684.png";
      //
      //   return null;
      // }}
    >
      {({ themeClass }) => (
        <div className={themeClass}>
          <StorybookStyles>
            <Story />
          </StorybookStyles>
        </div>
      )}
    </MessageRendererProvider>
  );
};

export default Wrapper;
