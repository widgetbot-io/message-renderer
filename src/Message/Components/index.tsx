import { APIMessage } from "discord-api-types/v10";
import ActionRow from "./ActionRow";
import React from "react";
import * as Styles from "./style";

interface ComponentsProps {
  components: APIMessage["components"];
}

function Components({ components }: ComponentsProps) {
  return (
    <Styles.Components>
      {components.map((actionRow, index) => (
        <ActionRow actionRow={actionRow} key={index} />
      ))}
    </Styles.Components>
  );
}

export default Components;
