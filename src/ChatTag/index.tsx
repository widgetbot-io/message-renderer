import Tooltip from "../Tooltip";
import React from "react";
import * as Styles from "./style";
import type { APIUser } from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";

// todo: support custom
const verified = (
  <Tooltip placement="top" overlay="Verified Bot">
    <Styles.VerifiedBot
      aria-label="Verified Bot"
      aria-hidden="false"
      width="16"
      height="16"
      viewBox="0 0 16 15.2"
    >
      <path
        d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
        fill="currentColor"
      />
    </Styles.VerifiedBot>
  </Tooltip>
);

interface TagProps {
  author: APIUser;
  crossPost: boolean;
  referenceGuild: string | undefined;
}

// todo: support custom
function ChatTag({ author, crossPost, referenceGuild }: TagProps) {
  const { chatBadge: ChatBadge } = useConfig();

  if (ChatBadge !== undefined) {
    const chatBadgeResult = ChatBadge({ user: author, TagWrapper: Styles.Tag });
    if (chatBadgeResult !== null) return chatBadgeResult;
  }

  if (!author.bot) return null;

  if (author.system || referenceGuild === "667560445975986187")
    return (
      <Styles.Tag className="verified system">{verified} SYSTEM</Styles.Tag>
    );

  if (crossPost) return <Styles.Tag className="server">SERVER</Styles.Tag>;

  if (author.flags !== undefined && author.flags & (1 << 16))
    return <Styles.Tag className="verified bot">{verified} BOT</Styles.Tag>;

  return <Styles.Tag className="bot">BOT</Styles.Tag>;
}

export default ChatTag;
