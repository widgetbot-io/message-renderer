import { IconsBase, SystemMessageContentBase } from "../elements";
import * as AuthorStyles from "../style/author";
import { Message_author, Message_mentions } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import { SystemMessageBase } from "@root/Message/style/message";

interface RecipientAddProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

function RecipientAdd(props: RecipientAddProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Add />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> added{" "}
        <AuthorStyles.Username>{props.target.name}</AuthorStyles.Username> to
        the thread.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default RecipientAdd;
