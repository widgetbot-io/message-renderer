import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage } from "discord-api-types/v10";

interface RecipientAddProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  target: APIMessage["mentions"][0];
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
        <MessageAuthor author={props.author} onlyShowUsername /> added{" "}
        <MessageAuthor author={props.target} onlyShowUsername /> to the thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientAdd;
