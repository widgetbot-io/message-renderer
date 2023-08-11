import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
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
        <MessageAuthor author={props.author} onlyShowUsername /> removed{" "}
        <MessageAuthor author={props.target} onlyShowUsername /> from the
        thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientRemove;
