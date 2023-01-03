import {
  IconsBase,
  SystemMessageLinkBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "../elements";
import { Message_author } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import React, { useCallback } from "react";
import LargeTimestamp from "@root/Message/LargeTimestamp";

interface ChannelPinnedMessageProps {
  author: Message_author;
  createdAt: number;
}

function ChannelPinnedMessage(props: ChannelPinnedMessageProps) {
  const openPinnedMessage = useCallback(
    // todo: implement ?
    () => {},
    []
  );

  return (
    <SystemMessageBase>
      <IconsBase.Pinned />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> pinned a
        message to this channel. See all{" "}
        <SystemMessageLinkBase onClick={openPinnedMessage}>
          pinned messages
        </SystemMessageLinkBase>
        .
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageContentBase>
    </SystemMessageBase>
  );
}

export default ChannelPinnedMessage;
