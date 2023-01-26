import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";

interface GuildDiscoveryRequalifiedProps {
  createdAt: number;
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
