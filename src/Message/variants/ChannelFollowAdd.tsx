import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface ChannelFollowAddProps {
  content: string;
  author: APIMessage["author"];
  createdAt: APIMessage["timestamp"];
}

function ChannelFollowAdd(props: ChannelFollowAddProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> has
        added{" "}
        <Styles.SystemMessageLink>{props.content}</Styles.SystemMessageLink> to
        this channel. It's most important updates will show up here.
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default ChannelFollowAdd;
