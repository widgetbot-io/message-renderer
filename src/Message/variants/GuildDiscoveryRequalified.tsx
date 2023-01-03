import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "@root/Message/elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";

interface GuildDiscoveryRequalifiedProps {
  createdAt: number;
}

function GuildDiscoveryRequalified(props: GuildDiscoveryRequalifiedProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Checkmark />
      <SystemMessageContentBase>
        This server is eligible for Server Discovery again and has been
        automatically relisted!
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryRequalified;
