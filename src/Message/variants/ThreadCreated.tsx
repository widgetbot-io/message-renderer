import { Message_thread } from "@types";
import { SystemMessageLinkBase } from "@root/Message/elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import MessageAuthor from "@root/Message/MessageAuthor";
import ThreadButton from "@root/Content/Thread/ThreadButton";
import { Message_author, Message_messageReference } from "@types";
import React from "react";
import { MessageType } from "@root/types/globalTypes";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface ThreadCreatedProps {
  createdAt: number;
  thread: Message_thread;
  author: Message_author;
  messageReference: Message_messageReference;
  messageId: string;
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
          <SystemMessageLinkBase /* onClick={openThread} */>
            {props.messageContent}
          </SystemMessageLinkBase>
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
        <SystemMessageLinkBase /* onClick={openThread} */>
          {props.thread.name}
        </SystemMessageLinkBase>
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
