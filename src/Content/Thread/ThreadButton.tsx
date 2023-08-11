import * as Styles from "../../Content/style";
import * as MessageStyles from "../../Message/style/message";
import React from "react";
import type { APIChannel } from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface ThreadButtonProps {
  messageType: MessageType;
  messageId: string;
  messageContent: string;
  hasReply: boolean;
  thread: APIChannel;
}

function ThreadButton(props: ThreadButtonProps) {
  const { seeThreadOnClick } = useConfig();

  return (
    <Styles.ThreadButtonContainer>
      <MessageStyles.ThreadSpine
        hasReply={props.hasReply}
        fromThreadCreatedType={props.messageType === MessageType.ThreadCreated}
      />
      <Styles.ThreadButton>
        <Styles.ThreadButtonTopLine>
          <Styles.ThreadButtonName>{props.thread.name}</Styles.ThreadButtonName>
          <Styles.SeeThreadButton
            onClick={() => seeThreadOnClick?.(props.messageId, props.thread)}
            role="button"
          >
            See Thread ›
          </Styles.SeeThreadButton>
        </Styles.ThreadButtonTopLine>
      </Styles.ThreadButton>
    </Styles.ThreadButtonContainer>
  );
}

export default ThreadButton;
