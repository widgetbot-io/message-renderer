import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage } from "discord-api-types/v10";

interface ChannelNameChangeProps {
  content: string;
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
}

function ChannelNameChange(props: ChannelNameChangeProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconPencil"
      />
      <Styles.SystemMessageContent fullColor>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> changed
        the channel name: <strong>{props.content}</strong>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default ChannelNameChange;
