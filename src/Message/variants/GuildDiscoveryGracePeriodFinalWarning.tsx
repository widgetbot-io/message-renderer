import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface GuildDiscoveryGracePeriodFinalWarningProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryGracePeriodFinalWarning(
  props: GuildDiscoveryGracePeriodFinalWarningProps
) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconWarning"
      />
      <Styles.SystemMessageContent>
        This server has failed Discovery activity requirements for 3 weeks. If
        this server fails for 1 more week, it will be removed from Discovery.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryGracePeriodFinalWarning;
