import Tooltip from "../Tooltip";
import React from "react";
import * as Styles from "./style";
import type { APIUser } from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";
import { useTranslation } from "react-i18next";

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

function isVerifiedBot(flags?: number) {
  const FLAG_VERIFIED = 1 << 16;

  return flags !== undefined && (flags & FLAG_VERIFIED) !== 0;
}

interface TagProps {
  author: APIUser;
  crossPost: boolean;
  referenceGuild: string | undefined;
}

function ChatTag({ author, crossPost, referenceGuild }: TagProps) {
  const { t } = useTranslation();

  const { chatBadge: ChatBadge } = useConfig();

  if (ChatBadge !== undefined) {
    const chatBadgeResult = ChatBadge({ user: author, TagWrapper: Styles.Tag });
    if (chatBadgeResult !== null) return chatBadgeResult;
  }

  if (!author.bot) return null;

  if (author.system || referenceGuild === "667560445975986187")
    return (
      <Styles.Tag className="verified system">
        {verified} {t("chatTag.system")}
      </Styles.Tag>
    );

  if (crossPost)
    return <Styles.Tag className="server">{t("chatTag.server")}</Styles.Tag>;

  if (isVerifiedBot(author.flags))
    return (
      <Styles.Tag className="verified bot">
        {verified} {t("chatTag.bot")}
      </Styles.Tag>
    );

  return <Styles.Tag className="bot">{t("chatTag.bot")}</Styles.Tag>;
}

export default ChatTag;
