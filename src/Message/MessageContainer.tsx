import { ReactNode } from "react";
import Tooltip from "@root/Tooltip";
import React from "react";
import { MessageContainerStyle } from "@root/Message/style/message";
import SvgFromUrl from "@root/SvgFromUrl";
import { PartialSvgConfig } from "@root/core/ConfigContext";

export interface MessageButtonListOption<SC extends PartialSvgConfig> {
  onClick: () => void;
  icon: keyof SC
  actionDescription: string;
}

interface MessageContainerProps {
  buttons: MessageButtonListOption<PartialSvgConfig>[];
  children: ReactNode;
}

function MessageContainer(props: MessageContainerProps) {
  return (
    <MessageContainerStyle.MessageContainer>
      <MessageContainerStyle.Buttons>
        {props.buttons.map((option, index) => (
          <Tooltip
            overlay={option.actionDescription}
            placement="top"
            key={option.actionDescription}
          >
            <MessageContainerStyle.Button
              onClick={option.onClick}
              key={`button-${index}`}
            >
              <SvgFromUrl width={20} height={20} svg={option.icon} />
            </MessageContainerStyle.Button>
          </Tooltip>
        ))}
      </MessageContainerStyle.Buttons>
      {props.children}
    </MessageContainerStyle.MessageContainer>
  );
}

export default MessageContainer;
