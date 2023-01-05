import { Message_thread } from "@types";
import {
  IconsBase,
  SystemMessageContentBase,
  SystemMessageLinkBase,
} from "@root/Message/elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import MessageAuthor from "@root/Message/MessageAuthor";
import ThreadButton from "@root/Content/Thread/ThreadButton";
import { Message_author, Message_messageReference } from "@types";
import React from "react";
import { MessageType } from "@root/types/globalTypes";
import { SystemMessageBase } from "@root/Message/style/message";

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
      <SystemMessageBase>
        <SystemMessageContentBase>
          <IconsBase.ThreadCreated centerVertically={false} />
          <MessageAuthor author={props.author} onlyShowUsername={true} />{" "}
          started a thread:{" "}
          <SystemMessageLinkBase /* onClick={openThread} */>
            {props.messageContent}
          </SystemMessageLinkBase>
        </SystemMessageContentBase>
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageBase>
    );

  return (
    <SystemMessageBase>
      <SystemMessageContentBase>
        <IconsBase.ThreadCreated centerVertically={false} />
        <MessageAuthor author={props.author} onlyShowUsername={true} /> started
        a thread:{" "}
        <SystemMessageLinkBase /* onClick={openThread} */>
          {props.thread.name}
        </SystemMessageLinkBase>
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
      <ThreadButton
        thread={props.thread}
        messageId={props.messageId}
        messageContent={props.messageContent}
        messageType={MessageType.ThreadCreated}
        hasReply={false}
      />
    </SystemMessageBase>
  );
}

export default ThreadCreated;
