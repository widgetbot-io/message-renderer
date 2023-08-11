import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage, Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

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
  const member = (
    <MessageAuthor author={author} guildId={guildId} onlyShowUsername />
  );

  const messages = [
    <>{member} joined the party.</>,
    <>{member} is here.</>,
    <>Welcome, {member}. We hope you brought pizza.</>,
    <>A wild {member} appeared.</>,
    <>{member} just landed.</>,
    <>{member} just slid into the server.</>,
    <>{member} just showed up!</>,
    <>Welcome {member}. Say hi!</>,
    <>{member} hopped into the server.</>,
    <>Everyone welcome {member}!</>,
    <>
      Glad you{"'"}re here, {member}.
    </>,
    <>Good to see you, {member}.</>,
    <>Yay you made it, {member}!</>,
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
