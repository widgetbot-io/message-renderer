import { IconsBase, SystemMessageContentBase } from "../elements";
import * as AuthorStyles from "../style/author";
import { Message_author, Message_mentions } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import { SystemMessageBase } from "@root/Message/style/message";

interface RecipientRemoveProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

function RecipientRemove(props: RecipientRemoveProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Remove />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> removed{" "}
        <AuthorStyles.Username>{props.target.name}</AuthorStyles.Username> from
        the thread.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default RecipientRemove;
