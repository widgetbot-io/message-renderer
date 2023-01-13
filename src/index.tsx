import React, { CSSProperties, useState } from "react";
import * as Styles from "./style";
import Message from "@root/Message";
import { Message as MessageData } from "@types";

interface MessageProps {
  messages: MessageData[];
  style?: CSSProperties;
  showButtons?: boolean;
  thread: boolean;
}

function MessageGroup(props: MessageProps) {
  const [firstMessage, ...otherMessages] = props.messages;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Styles.MessageGroup
      style={{
        ...props.style,
        marginTop: 0, // todo: temporary
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Message
        isFirstMessage={true}
        message={firstMessage}
        isHovered={isHovered}
        showButtons={props.showButtons ?? true}
        thread={props.thread}
      />
      {otherMessages.map((message) => (
        <Message
          key={message.id}
          message={message}
          showButtons={props.showButtons ?? true}
          thread={props.thread}
        />
      ))}
    </Styles.MessageGroup>
  );
}

export { default as Message } from "./Message";
export { default as MessageRendererProvider } from "./MessageRendererProvider";
export default MessageGroup;
