import { Message_author } from "@types";
import {
  IconsBase,
  SystemMessageLinkBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "../elements";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";

interface ChannelFollowAddProps {
  content: string;
  author: Message_author;
  createdAt: number;
}

function ChannelFollowAdd(props: ChannelFollowAddProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Add />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> has
        added{" "}
        <SystemMessageLinkBase cursor="not-allowed">
          {props.content}
        </SystemMessageLinkBase>{" "}
        to this channel. It's most important updates will show up here.
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageContentBase>
    </SystemMessageBase>
  );
}

export default ChannelFollowAdd;
