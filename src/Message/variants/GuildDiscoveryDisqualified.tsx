import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface GuildDiscoveryDisqualifiedProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryDisqualified(props: GuildDiscoveryDisqualifiedProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconCross"
      />
      <Styles.SystemMessageContent>
        This server has been removed from Server Discovery because it no longer
        passes all the requirements.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryDisqualified;
