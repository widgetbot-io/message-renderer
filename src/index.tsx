import type { CSSProperties } from "react";
import React, { useState } from "react";
import Message from "./Message";
import type { APIMessage } from "discord-api-types/v10";

export interface MessageProps {
  messages: APIMessage[];
  style?: CSSProperties;
  showButtons?: boolean;
  thread: boolean;
}

export function MessageGroup(props: MessageProps) {
  const [firstMessage, ...otherMessages] = props.messages;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="message-group"
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
    </div>
  );
}

export { default as Message } from "./Message";
export { default as MessageRendererProvider } from "./MessageRendererProvider";
