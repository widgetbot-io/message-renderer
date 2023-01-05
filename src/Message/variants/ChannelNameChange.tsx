import { Message_author } from "@types";
import { IconsBase, SystemMessageContentBase } from "../elements";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import { SystemMessageBase } from "@root/Message/style/message";

interface ChannelNameChangeProps {
  content: string;
  createdAt: number;
  author: Message_author;
}

function ChannelNameChange(props: ChannelNameChangeProps) {
  return (
    <SystemMessageBase>
      <IconsBase.ThreadNameChanged />
      <SystemMessageContentBase fullPrimary>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> changed
        the channel name: <strong>{props.content}</strong>
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default ChannelNameChange;
