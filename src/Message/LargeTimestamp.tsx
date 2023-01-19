import Moment from "moment/moment";
import * as Styles from "./style/message";
import Tooltip from "@root/Tooltip";
import React, { memo } from "react";

function LargeTimestamp({ timestamp }: { timestamp: number }) {
  return (
    <Tooltip
      placement="top"
      overlay={Moment(timestamp).format("LLLL")}
      mouseEnterDelay={1}
    >
      <Styles.LargeTimestamp dateTime={timestamp.toString()}>
        {Moment(timestamp).calendar()}
      </Styles.LargeTimestamp>
    </Tooltip>
  );
}

export default memo(LargeTimestamp);
