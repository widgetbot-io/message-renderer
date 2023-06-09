import * as Styles from "../../Content/style";
import * as MessageStyles from "../../Message/style/message";
import React from "react";
import { APIChannel, MessageType } from "discord-api-types/v10";

interface ThreadButtonProps {
  messageType: MessageType;
  messageId: string;
  messageContent: string;
  hasReply: boolean;
  thread: APIChannel;
}

function ThreadButton(props: ThreadButtonProps) {
  // todo: open thread callback specified by lib user

  return (
    <Styles.ThreadButtonContainer>
      <MessageStyles.ThreadSpine
        hasReply={props.hasReply}
        fromThreadCreatedType={props.messageType === MessageType.ThreadCreated}
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
