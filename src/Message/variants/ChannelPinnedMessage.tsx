import MessageAuthor from "../MessageAuthor";
import React, { useCallback } from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage } from "discord-api-types/v10";

interface ChannelPinnedMessageProps {
  author: APIMessage["author"];
  createdAt: APIMessage["timestamp"];
}

function ChannelPinnedMessage(props: ChannelPinnedMessageProps) {
  const openPinnedMessage = useCallback(
    // todo: implement ?
    () => {},
    []
  );

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconPin"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername /> pinned a
        message to this channel. See all{" "}
        <Styles.SystemMessageLink onClick={openPinnedMessage}>
          pinned messages
        </Styles.SystemMessageLink>
        .
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default ChannelPinnedMessage;
