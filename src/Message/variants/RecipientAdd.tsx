import * as AuthorStyles from "../style/author";
import { Message_author, Message_mentions } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface RecipientAddProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

// todo: check if this also applies to group chats, and support those as well.
function RecipientAdd(props: RecipientAddProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> added{" "}
        <AuthorStyles.Username>{props.target.name}</AuthorStyles.Username> to
        the thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientAdd;
