import ActionRow from "./ActionRow";
import React from "react";
import * as Styles from "./style";
import type { ChatMessage } from "../../types";
import type { APIMessageSnapshotFields } from "discord-api-types/v10";

interface ComponentsProps {
  components: ChatMessage["components"];
  message: ChatMessage | APIMessageSnapshotFields;
}

function Components({ components, message }: ComponentsProps) {
  if (!components) return null;

  return (
    <Styles.Components>
      {components.map((actionRow, index) => (
        <ActionRow actionRow={actionRow} message={message} key={index} />
      ))}
    </Styles.Components>
  );
}

export default Components;
