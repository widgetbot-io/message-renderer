import Moment from "moment/moment";
import { LargeTimestampBase } from "@root/Message/elements";
import Tooltip from "rc-tooltip";
import React, { memo } from "react";

function LargeTimestamp({ timestamp }: { timestamp: number }) {
  return (
    <Tooltip
      placement="top"
      overlay={Moment(timestamp).format("LLLL")}
      mouseEnterDelay={1}
    >
      <LargeTimestampBase dateTime={timestamp.toString()}>
        {Moment(timestamp).calendar()}
      </LargeTimestampBase>
    </Tooltip>
  );
}

export default memo(LargeTimestamp);
