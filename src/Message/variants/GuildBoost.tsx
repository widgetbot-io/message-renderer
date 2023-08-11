import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface GuildBoostProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  content: string;
  channelId: APIMessage["channel_id"];
}

function GuildBoost(props: GuildBoostProps) {
  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor
          author={props.author}
          guildId={guildId}
          onlyShowUsername
        />{" "}
        just boosted the server
        {props.content !== "" && (
          <>
            {" "}
            <strong>{props.content}</strong> times
          </>
        )}
        !
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildBoost;
