import ActionRow from "./ActionRow";
import React from "react";
import * as Styles from "./style";
import type { ChatMessage } from "../../types";

interface ComponentsProps {
  components: ChatMessage["components"];
  message: ChatMessage;
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
