import * as AuthorStyles from "../style/author";
import { Message_author, Message_mentions } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface RecipientRemoveProps {
  createdAt: number;
  author: Message_author;
  target: Message_mentions;
}

function RecipientRemove(props: RecipientRemoveProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconRemove"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> removed{" "}
        <AuthorStyles.Username>{props.target.name}</AuthorStyles.Username> from
        the thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientRemove;
