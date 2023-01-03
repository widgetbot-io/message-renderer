import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "@root/Message/elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";

interface GuildDiscoveryGracePeriodFinalWarningProps {
  createdAt: number;
}

function GuildDiscoveryGracePeriodFinalWarning(
  props: GuildDiscoveryGracePeriodFinalWarningProps
) {
  return (
    <SystemMessageBase>
      <IconsBase.Warning />
      <SystemMessageContentBase>
        This server has failed Discovery activity requirements for 3 weeks. If
        this server fails for 1 more week, it will be removed from Discovery.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryGracePeriodFinalWarning;
