import { Message_author } from "@types";
import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "@root/Message/elements";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";

interface UserPremiumGuildSubscriptionProps {
  createdAt: number;
  author: Message_author;
  content: string;
}

function UserPremiumGuildSubscription(
  props: UserPremiumGuildSubscriptionProps
) {
  return (
    <SystemMessageBase>
      <IconsBase.Boost />
      <SystemMessageContentBase>
        <MessageAuthor author={props.author} onlyShowUsername={true} /> just
        boosted the server
        {props.content !== "" && (
          <>
            <strong>{props.content}</strong> times
          </>
        )}
        !
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default UserPremiumGuildSubscription;
