import {
  SeeThreadButtonBase,
  ThreadButtonBase,
  ThreadButtonContainerBase,
  ThreadButtonNameBase,
  ThreadButtonTopLineBase,
} from "@root/Content/elements";
import { Message_thread } from "@types";
import { ThreadSpineBase } from "@root/Message/elements";
import { MessageType } from "@root/types/globalTypes";
import React from "react";

interface ThreadButtonProps {
  messageType: MessageType;
  messageId: string;
  messageContent: string;
  hasReply: boolean;
  thread: Message_thread;
}

function ThreadButton(props: ThreadButtonProps) {
  // todo: open thread callback specified by lib user

  return (
    <ThreadButtonContainerBase>
      <ThreadSpineBase
        messageType={props.messageType}
        hasReply={props.hasReply}
      />
      <ThreadButtonBase>
        <ThreadButtonTopLineBase>
          <ThreadButtonNameBase>{props.thread.name}</ThreadButtonNameBase>
          <SeeThreadButtonBase /* onClick={openThread} */>
            See Thread ›
          </SeeThreadButtonBase>
        </ThreadButtonTopLineBase>
      </ThreadButtonBase>
    </ThreadButtonContainerBase>
  );
}

export default ThreadButton;
