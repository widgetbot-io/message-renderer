import type { APISectionComponent } from "discord-api-types/v10";
import Component from "./Component";
import React from "react";
import * as Styles from "./style";
import type { ChatMessage } from "../../types";

interface SectionComponentProps {
  section: APISectionComponent;
  message: ChatMessage;
}

function SectionComponent({ section, message }: SectionComponentProps) {
  return (
    <Styles.Section>
      <Styles.SectionContent>
        {section.components.map((component, index) => (
          <Component component={component} message={message} key={index} />
        ))}
      </Styles.SectionContent>
      <Styles.SectionAccessory>
        <Component component={section.accessory} message={message} />
      </Styles.SectionAccessory>
    </Styles.Section>
  );
}

export default SectionComponent;
