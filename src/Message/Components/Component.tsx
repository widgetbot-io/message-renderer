import type {
  APIMessage,
  APIMessageActionRowComponent,
} from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import ButtonComponent from "./ButtonComponent";
import React from "react";

interface ComponentProps {
  component: APIMessageActionRowComponent;
  message: APIMessage;
}

function Component({ component, message }: ComponentProps) {
  switch (component.type) {
    case ComponentType.Button:
      // @ts-expect-error TS2322 Type error not applicable (tl;dr: button emoji is not optional)
      return <ButtonComponent button={component} message={message} />;
    default:
      return null;
  }
}

export default Component;
