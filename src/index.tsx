import React, { CSSProperties, useState } from "react";
import { MessageGroupBase } from "@root/elements";
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
    <MessageGroupBase
      style={props.style}
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
    </MessageGroupBase>
  );
}

export { default as Message } from "./Message";
export { default as MessageRendererProvider } from "./MessageRendererProvider";
export default MessageGroup;
