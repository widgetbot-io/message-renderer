import LargeTimestamp from "@root/Message/LargeTimestamp";
import MessageAuthor from "@root/Message/MessageAuthor";
import ThreadButton from "@root/Content/Thread/ThreadButton";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage, MessageType } from "discord-api-types/v10";

interface ThreadCreatedProps {
  createdAt: APIMessage["timestamp"];
  thread: APIMessage["thread"];
  author: APIMessage["author"];
  messageReference: APIMessage["message_reference"];
  messageId: APIMessage["id"];
  messageContent: string;
}

function ThreadCreated(props: ThreadCreatedProps) {
  // todo: make work
  // const openThread = useCallback(() => generalStore.setActiveThread({
  //   id: props.messageReference.channelId,
  //   name: props.messageContent,
  //   messageCount: 0,
  //   archivedAt: null,
  //   locked: false
  // }), [props.messageId, props.messageContent]);

  if (props.thread === null)
    return (
      <Styles.SystemMessage>
        <Styles.SystemMessageContent>
          <Styles.ThreadCreatedIcon
            width={SystemMessageIconSize}
            height={SystemMessageIconSize}
            svg="IconThreadCreated"
          />
          <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
          started a thread:{" "}
          <Styles.SystemMessageLink /* onClick={openThread} */>
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
        <MessageAuthor author={props.author} onlyShowUsername={true} /> started
        a thread:{" "}
        <Styles.SystemMessageLink /* onClick={openThread} */>
          {props.thread.name}
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
