import MessageAuthor from "../MessageAuthor";
import React, { useMemo } from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage, MessageType } from "discord-api-types/v10";

interface BoostTierUpgradeProps {
  createdAt: APIMessage["timestamp"];
  content: string;
  type: MessageType;
  author: APIMessage["author"];
}

function BoostTierUpgrade(props: BoostTierUpgradeProps) {
  const newLevel = useMemo(() => {
    switch (props.type) {
      case MessageType.GuildBoostTier1:
        return 1;
      case MessageType.GuildBoostTier2:
        return 2;
      case MessageType.GuildBoostTier3:
        return 3;
      default:
        return -1;
    }
  }, [props.type]);

  // todo: guildNameHere
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername /> just
        boosted the server <strong>{props.content}</strong> time
        {props.content === "1" ? "" : "s"}! guildNameHere has achieved{" "}
        <strong>Level {newLevel}!</strong>
        {/* todo: load guild name */}
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default BoostTierUpgrade;
