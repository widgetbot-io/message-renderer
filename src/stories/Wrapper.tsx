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
import SvgIconUnknownReply from "../assets/storybookOnlyAssets/icon-unknown-reply.svg";

import SvgMiscDiscordImageFailure from "../assets/storybookOnlyAssets/misc-discord-image-failure.svg";
import type {
  APIChannel,
  APIGuildMember,
  APIMessage,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import { ChannelType } from "discord-api-types/v10";
import { MessageButtonListOption } from "../Message/MessageContainer";

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

function resolveRole(id: Snowflake): APIRole {
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
      icon: null,
      unicode_emoji: null,
    };

  console.log(`Unknown role ${id}`);
  return null;
}

function resolveChannel(id: Snowflake): APIChannel {
  if (id === "697138785317814292") {
    return {
      name: "api-announcements",
      position: 8,
      id: "697138785317814292",
      guild_id: "613425648685547541",
      type: ChannelType.GuildAnnouncement,
    };
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

function resolveMember(id: Snowflake): APIGuildMember {
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
        avatar: "e4d8c186d8900eed2ace6aed5cefe1c0",
        discriminator: "0",
        public_flags: 4604871,
      },
      mute: false,
      deaf: false,
    };
  }

  console.log(`Unknown member ${id}`);
  return null;
}

function resolveUser(userId: Snowflake): APIUser | null {
  if (userId === "132819036282159104") {
    return {
      id: "132819036282159104",
      username: "JohnyTheCarrot",
      avatar: "3a30ffeeeb354950804d77ded94162d3",
      discriminator: "0001",
      public_flags: 4457220,
    };
  }

  console.log(`Unknown user ${userId}`);
  return null;
}

function Wrapper(Story) {
  return (
    <MessageRendererProvider
      svgUrls={svgUrls}
      messageButtons={getButtons}
      resolveRole={resolveRole}
      resolveChannel={resolveChannel}
      resolveMember={resolveMember}
      resolveUser={resolveUser}
      currentUser={() => resolveUser("132819036282159104")}
      seeThreadOnClick={(messageId, thread) =>
        alert(`See Thread "${thread.name}" clicked on message ${messageId}`)
      }
      userMentionOnClick={(user) =>
        alert(`User "${user.username}" mention clicked!`)
      }
      roleMentionOnClick={(role) =>
        alert(`Role "${role.name}" mention clicked!`)
      }
      channelMentionOnClick={(channel) =>
        alert(`Channel "${channel.name}" mention clicked!`)
      }
    >
      {({ themeClass }) => <div className={themeClass}>{Story()}</div>}
    </MessageRendererProvider>
  );
}

export default Wrapper;
