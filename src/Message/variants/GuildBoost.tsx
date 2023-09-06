import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage } from "discord-api-types/v10";

interface GuildBoostProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  content: string;
}

function GuildBoost(props: GuildBoostProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername /> just
        boosted the server
        {props.content !== "" && (
          <>
            {" "}
            <strong>{props.content}</strong> times
          </>
        )}
        !
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildBoost;
