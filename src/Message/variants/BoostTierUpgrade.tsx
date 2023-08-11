import MessageAuthor from "../MessageAuthor";
import React, { useMemo } from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage, Snowflake } from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface BoostTierUpgradeProps {
  createdAt: APIMessage["timestamp"];
  content: string;
  channelId: Snowflake;
  type: MessageType;
  author: APIMessage["author"];
}

function BoostTierUpgrade({
  createdAt,
  content,
  channelId,
  type,
  author,
}: BoostTierUpgradeProps) {
  const { resolveChannel, resolveGuild } = useConfig();
  const channel = resolveChannel(channelId);
  const guild =
    channel !== null && "guild_id" in channel && channel.guild_id !== undefined
      ? resolveGuild(channel.guild_id)
      : null;

  const guildName =
    guild !== null ? guild.name ?? "Unknown Guild" : "Unknown Guild";

  const newLevel = useMemo(() => {
    switch (type) {
      case MessageType.GuildBoostTier1:
        return 1;
      case MessageType.GuildBoostTier2:
        return 2;
      case MessageType.GuildBoostTier3:
        return 3;
      default:
        return -1;
    }
  }, [type]);

  // todo: guildNameHere
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={author} guildId={guild?.id} onlyShowUsername />{" "}
        just boosted the server <strong>{content}</strong> time
        {content === "1" ? "" : "s"}! {guildName} has achieved{" "}
        <strong>Level {newLevel}!</strong>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={createdAt} />
    </Styles.SystemMessage>
  );
}

export default BoostTierUpgrade;
