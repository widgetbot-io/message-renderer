import LargeTimestamp from "../LargeTimestamp";
import MessageAuthor from "../MessageAuthor";
import ThreadButton from "../../Content/Thread/ThreadButton";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { APIMessage, MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface ThreadCreatedProps {
  createdAt: APIMessage["timestamp"];
  thread: APIMessage["thread"];
  author: APIMessage["author"];
  messageReference: APIMessage["message_reference"];
  messageId: APIMessage["id"];
  messageContent: string;
}

function ThreadCreated(props: ThreadCreatedProps) {
  const { seeThreadOnClick } = useConfig();

  function openThread() {
    if (props.thread) seeThreadOnClick?.(props.messageId, props.thread);
  }

  if (props.thread === null)
    return (
      <Styles.SystemMessage>
        <Styles.SystemMessageContent>
          <Styles.ThreadCreatedIcon
            width={SystemMessageIconSize}
            height={SystemMessageIconSize}
            svg="IconThreadCreated"
          />
          <MessageAuthor author={props.author} onlyShowUsername /> started a
          thread:{" "}
          <Styles.SystemMessageLink onClick={openThread}>
            {props.messageContent}
          </Styles.SystemMessageLink>
        </Styles.SystemMessageContent>
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessage>
    );

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageContent>
        <Styles.ThreadCreatedIcon
          width={SystemMessageIconSize}
          height={SystemMessageIconSize}
          svg="IconThreadCreated"
        />
        <MessageAuthor author={props.author} onlyShowUsername /> started a
        thread:{" "}
        <Styles.SystemMessageLink onClick={openThread}>
          {props.thread?.name ?? "Unknown thread"}
        </Styles.SystemMessageLink>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
      <ThreadButton
        thread={props.thread}
        messageId={props.messageId}
        messageContent={props.messageContent}
        messageType={MessageType.ThreadCreated}
        hasReply={false}
      />
    </Styles.SystemMessage>
  );
}

export default ThreadCreated;
