import { IconsBase, SystemMessageContentBase } from "@root/Message/elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import { SystemMessageBase } from "@root/Message/style/message";

interface GuildDiscoveryGracePeriodInitialWarningProps {
  createdAt: number;
}

function GuildDiscoveryGracePeriodInitialWarning(
  props: GuildDiscoveryGracePeriodInitialWarningProps
) {
  return (
    <SystemMessageBase>
      <IconsBase.Warning />
      <SystemMessageContentBase>
        This server has failed Discovery activity requirements for 1 week. If
        this server fails for 4 weeks in a row, it will be automatically removed
        from Discovery.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryGracePeriodInitialWarning;
