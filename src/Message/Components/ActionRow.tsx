import type {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  APIMessageSnapshotFields,
} from "discord-api-types/v10";
import * as Styles from "./style";
import React from "react";
import Component from "./Component";
import type { ChatMessage } from "../../types";

interface ActionRowProps {
  actionRow: APIActionRowComponent<APIMessageActionRowComponent>;
  message: ChatMessage | APIMessageSnapshotFields;
}

function ActionRow({ actionRow, message }: ActionRowProps) {
  return (
    <Styles.ActionRow>
      {actionRow.components.map((component, index) => (
        <Component component={component} message={message} key={index} />
      ))}
    </Styles.ActionRow>
  );
}

export default ActionRow;
