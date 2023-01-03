import { MessageContainerStyle } from "@root/Message/elements";
import { ReactNode } from "react";
import Tooltip from "rc-tooltip";
import React from "react";

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
    <MessageContainerStyle.Base>
      <MessageContainerStyle.Buttons className="buttons">
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
    </MessageContainerStyle.Base>
  );
}

export default MessageContainer;
