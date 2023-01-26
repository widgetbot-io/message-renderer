import { Message_author } from "@types";
import { MessageType } from "@root/types/globalTypes";
import MessageAuthor from "@root/Message/MessageAuthor";
import React, { useMemo } from "react";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface UserPremiumGuildTier2Props {
  createdAt: number;
  content: string;
  type: MessageType;
  author: Message_author;
}

function UserPremiumGuildTierUpgrade(props: UserPremiumGuildTier2Props) {
  const newLevel = useMemo(() => {
    switch (props.type) {
      case MessageType.UserPremiumGuildTier1:
        return 1;
      case MessageType.UserPremiumGuildTier2:
        return 2;
      case MessageType.UserPremiumGuildTier3:
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
        <MessageAuthor author={props.author} onlyShowUsername={true} /> just
        boosted the server <strong>{props.content}</strong> time
        {props.content === "1" ? "" : "s"}! guildNameHere has achieved{" "}
        <strong>Level {newLevel}!</strong>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default UserPremiumGuildTierUpgrade;
