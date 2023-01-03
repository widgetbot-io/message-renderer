import { cx } from "emotion";
import Tooltip from "rc-tooltip";
import Emoji from "@root/Emoji";

import { Message_mentions } from "@types";
import React from "react";

interface Props {
  id: string;
  className?: string;
  children: (channel: { name: string; id: string; category: string }) => any;
  data?: Message_mentions;
}

// const getChannel = (id: string) => (generalStore.guild?.channels || generalStore.channels.flatMap(ctg => ctg.channels))?.find(c => c.id === id)
// todo: implement
const getChannel = (id: string) => undefined;

const Channel = ({ id, children, className, data }: Props) => (
  <Tooltip
    placement="top"
    overlay={<Emoji>{getChannel(id)?.category?.name}</Emoji>}
    mouseLeaveDelay={0}
    trigger={getChannel(id)?.category ? ["hover"] : []}
  >
    <span id={id} className={cx("channel-link", className)}>
      {children({
        name: data?.name || getChannel(id)?.name || "deleted-channel",
        id: id,
        category: "category && category.name",
      })}
    </span>
  </Tooltip>
);

export default Channel;
