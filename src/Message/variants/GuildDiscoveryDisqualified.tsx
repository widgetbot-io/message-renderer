import {
  IconsBase,
  SystemMessageBase,
  SystemMessageContentBase,
} from "../elements";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";

interface GuildDiscoveryDisqualifiedProps {
  createdAt: number;
}

function GuildDiscoveryDisqualified(props: GuildDiscoveryDisqualifiedProps) {
  return (
    <SystemMessageBase>
      <IconsBase.Cross />
      <SystemMessageContentBase>
        This server has been removed from Server Discovery because it no longer
        passes all the requirements.
      </SystemMessageContentBase>
      <LargeTimestamp timestamp={props.createdAt} />
    </SystemMessageBase>
  );
}

export default GuildDiscoveryDisqualified;
