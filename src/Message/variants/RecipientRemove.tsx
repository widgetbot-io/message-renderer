import * as AuthorStyles from "../style/author";
import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage } from "discord-api-types/v10";
import getDisplayName from "../../utils/getDisplayName";

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
        <AuthorStyles.Username>
          {getDisplayName(props.target)}
        </AuthorStyles.Username>{" "}
        from the thread.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default RecipientRemove;
