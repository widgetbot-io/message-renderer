import { APIMessage } from "discord-api-types/v10";
import ActionRow from "./ActionRow";
import React from "react";
import * as Styles from "./style";

interface ComponentsProps {
  components: APIMessage["components"];
  message: APIMessage;
}

function Components({ components, message }: ComponentsProps) {
  return (
    <Styles.Components>
      {components.map((actionRow, index) => (
        <ActionRow actionRow={actionRow} message={message} key={index} />
      ))}
    </Styles.Components>
  );
}

export default Components;
