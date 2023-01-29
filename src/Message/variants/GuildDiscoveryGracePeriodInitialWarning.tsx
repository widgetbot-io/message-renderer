import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface GuildDiscoveryGracePeriodInitialWarningProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryGracePeriodInitialWarning(
  props: GuildDiscoveryGracePeriodInitialWarningProps
) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconWarning"
      />
      <Styles.SystemMessageContent>
        This server has failed Discovery activity requirements for 1 week. If
        this server fails for 4 weeks in a row, it will be automatically removed
        from Discovery.
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryGracePeriodInitialWarning;
