import Moment from "moment/moment";
import * as Styles from "./style/message";
import Tooltip from "../Tooltip";
import React, { memo } from "react";

function LargeTimestamp({ timestamp }: { timestamp: string }) {
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
