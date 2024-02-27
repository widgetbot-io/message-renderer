import "./i18n";
import type { CSSProperties } from "react";
import React from "react";
import Message from "./Message";
import { commonComponentId, styled } from "./Stitches/stitches.config";
import * as MessageAuthorStyles from "./Message/style/author";
import type { ChatMessage } from "./types";

export interface MessageProps {
  messages: ChatMessage[];
  style?: CSSProperties;
  showButtons?: boolean;
  thread: boolean;
}

const MessageGroupStyle = styled.withConfig({
  displayName: "message-group",
  componentId: commonComponentId,
})("div", {
  [`&:hover ${MessageAuthorStyles.AnimatedAvatarTrigger}[data-is-animated='true']`]:
    {
      [`& ${MessageAuthorStyles.Avatar}`]: {
        display: "none",
      },
      [`& ${MessageAuthorStyles.AnimatedAvatar}`]: {
        display: "unset",
      },
    },
});

export function MessageGroup(props: MessageProps) {
  const [firstMessage, ...otherMessages] = props.messages;

  return (
    <MessageGroupStyle style={props.style}>
      <Message
        isFirstMessage={true}
        message={firstMessage}
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
    </MessageGroupStyle>
  );
}

export { default as Message } from "./Message";
export { default as MessageRendererProvider } from "./MessageRendererProvider";
export { LinkMarkdown } from "./markdown/render";
