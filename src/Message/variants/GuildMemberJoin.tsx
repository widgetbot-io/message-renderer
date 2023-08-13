import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage, Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface GuildMemberJoinProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  channelId: APIMessage["channel_id"];
}

function joinMessage(
  createdAt: APIMessage["timestamp"],
  author: APIMessage["author"],
  guildId: Snowflake | undefined | null
): JSX.Element {
  function Member() {
    return <MessageAuthor author={author} guildId={guildId} onlyShowUsername />;
  }

  const { t } = useTranslation();

  const messages = [
    <Trans
      i18nKey="joinMessages.0"
      key="GuildMemberJoin.joinMessage.0"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> joined the party."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.1"
      key="GuildMemberJoin.joinMessage.1"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> is here."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.2"
      key="GuildMemberJoin.joinMessage.2"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Welcome, <Member/>. We hope you brought pizza."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.3"
      key="GuildMemberJoin.joinMessage.3"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"A wild <Member/> appeared."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.4"
      key="GuildMemberJoin.joinMessage.4"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> just landed."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.5"
      key="GuildMemberJoin.joinMessage.5"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> just slid into the server."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.6"
      key="GuildMemberJoin.joinMessage.6"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> just showed up!"}
    </Trans>,
    <Trans
      i18nKey="joinMessages.7"
      key="GuildMemberJoin.joinMessage.7"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Welcome <Member/>. Say hi!"}
    </Trans>,
    <Trans
      i18nKey="joinMessages.8"
      key="GuildMemberJoin.joinMessage.8"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"<Member/> hopped into the server."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.9"
      key="GuildMemberJoin.joinMessage.9"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Everyone welcome <Member/>!"}
    </Trans>,
    <Trans
      i18nKey="joinMessages.10"
      key="GuildMemberJoin.joinMessage.10"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Glad you're here, <Member/>."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.11"
      key="GuildMemberJoin.joinMessage.11"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Good to see you, <Member/>."}
    </Trans>,
    <Trans
      i18nKey="joinMessages.12"
      key="GuildMemberJoin.joinMessage.12"
      t={t}
      components={{ Member: <Member /> }}
    >
      {"Yay you made it, <Member/>!"}
    </Trans>,
  ];

  return messages[Number(new Date(createdAt)) % messages.length];
}

function GuildMemberJoin(props: GuildMemberJoinProps) {
  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        {joinMessage(props.createdAt, props.author, guildId)}
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default GuildMemberJoin;
