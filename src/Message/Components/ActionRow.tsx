import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
} from "discord-api-types/v10";
import * as Styles from "./style";
import React from "react";
import Component from "./Component";

interface ActionRowProps {
  actionRow: APIActionRowComponent<APIMessageActionRowComponent>;
}

function ActionRow({ actionRow }: ActionRowProps) {
  return (
    <Styles.ActionRow>
      {actionRow.components.map((component, index) => (
        <Component component={component} key={index} />
      ))}
    </Styles.ActionRow>
  );
}

export default ActionRow;
