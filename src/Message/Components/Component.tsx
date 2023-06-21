import {
  APIMessageActionRowComponent,
  ComponentType,
} from "discord-api-types/v10";
import ButtonComponent from "./ButtonComponent";
import React from "react";

interface ComponentProps {
  component: APIMessageActionRowComponent;
}

function Component({ component }: ComponentProps) {
  switch (component.type) {
    case ComponentType.Button:
      return <ButtonComponent button={component} />;
    default:
      return null;
  }
}

export default Component;
