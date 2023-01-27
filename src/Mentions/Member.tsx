import { Message_author, Message_mentions } from "@types";
import React from "react";
interface Props {
  id: string;
  className?: string;
  children: (member: Partial<Message_author>) => any;
  data?: Message_mentions;
}
const Member = ({ id, children, className, data }: Props) => (
  <span id={id} className={className}>
    {children({
      __typename: "User",
      name: data?.name || id,
      color: 0x0000ff,
      id,
    })}
  </span>
);

export default Member;
