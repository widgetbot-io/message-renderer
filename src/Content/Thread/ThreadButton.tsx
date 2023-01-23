import { Message_thread } from "@types";
import { MessageType } from "@root/types/globalTypes";
import * as Styles from "@root/Content/style";
import * as MessageStyles from "@root/Message/style/message";
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
    <Styles.ThreadButtonContainer>
      <MessageStyles.ThreadSpine
        stitchesProps={{
          hasReply: props.hasReply,
          fromThreadCreatedType:
            props.messageType === MessageType.ThreadCreated,
        }}
      />
      <Styles.ThreadButton>
        <Styles.ThreadButtonTopLine>
          <Styles.ThreadButtonName>{props.thread.name}</Styles.ThreadButtonName>
          <Styles.SeeThreadButton /* onClick={openThread} */>
            See Thread ›
          </Styles.SeeThreadButton>
        </Styles.ThreadButtonTopLine>
      </Styles.ThreadButton>
    </Styles.ThreadButtonContainer>
  );
}

export default ThreadButton;
