import * as AuthorStyles from "../style/author";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface RecipientRemoveProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  target: APIMessage["mentions"][0];
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
        <AuthorStyles.Username>{props.target.username}</AuthorStyles.Username>{" "}
        from the thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientRemove;
