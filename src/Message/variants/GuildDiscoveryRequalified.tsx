import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";

interface GuildDiscoveryRequalifiedProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryRequalified(props: GuildDiscoveryRequalifiedProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconCheckmark"
      />
      <Styles.SystemMessageContent>
        This server is eligible for Server Discovery again and has been
        automatically relisted!
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryRequalified;
