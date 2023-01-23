import { ReactNode } from "react";
import Tooltip from "@root/Tooltip";
import React from "react";
import { MessageContainerStyle } from "@root/Message/style/message";

export interface MessageButtonListOption {
  onClick: () => void;
  icon: string;
  actionDescription: string;
}

interface MessageContainerProps {
  buttons: MessageButtonListOption[];
  children: ReactNode;
}

function MessageContainer(props: MessageContainerProps) {
  return (
    <MessageContainerStyle.MessageContainer>
      <MessageContainerStyle.Buttons>
        {props.buttons.map((option) => (
          <Tooltip
            overlay={option.actionDescription}
            placement="top"
            key={option.actionDescription}
          >
            <MessageContainerStyle.Button onClick={option.onClick}>
              <img
                src={option.icon}
                alt={option.actionDescription}
                width={20}
              />
            </MessageContainerStyle.Button>
          </Tooltip>
        ))}
      </MessageContainerStyle.Buttons>
      {props.children}
    </MessageContainerStyle.MessageContainer>
  );
}

export default MessageContainer;
