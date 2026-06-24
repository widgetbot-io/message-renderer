import type { APIContainerComponent } from "discord-api-types/v10";
import Component from "./Component";
import React from "react";
import Spoiler from "./Spoiler";
import * as Styles from "./style";
import { colorIntToRgba } from "../../utils/colorIntToCss";
import type { ChatMessage } from "../../types";

interface ContainerComponentProps {
  container: APIContainerComponent;
  message: ChatMessage;
}

function ContainerComponent({ container, message }: ContainerComponentProps) {
  const accentColor =
    container.accent_color === null ? undefined : container.accent_color;

  const content = (
    <Styles.Container
      hasAccent={accentColor !== undefined}
      style={
        accentColor === undefined
          ? undefined
          : { borderLeftColor: colorIntToRgba(accentColor) }
      }
    >
      {container.components.map((component, index) => (
        <Component component={component} message={message} key={index} />
      ))}
    </Styles.Container>
  );

  return container.spoiler ? <Spoiler>{content}</Spoiler> : content;
}

export default ContainerComponent;
