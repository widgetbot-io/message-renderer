import { Message_author } from "@types";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface UserPremiumGuildSubscriptionProps {
  createdAt: number;
  author: Message_author;
  content: string;
}

function UserPremiumGuildSubscription(
  props: UserPremiumGuildSubscriptionProps
) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> just
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

export default UserPremiumGuildSubscription;
