import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import NormalMessage from "./NormalMessage";
import LargeTimestamp from "../LargeTimestamp";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface ThreadStarterMessageProps {
  createdAt: DiscordMessage["timestamp"];
  referencedMessage: DiscordMessage | null | undefined;
}

function ThreadStarterMessage({
  createdAt,
  referencedMessage,
}: ThreadStarterMessageProps) {
  const { t } = useTranslation();

  if (referencedMessage !== null && referencedMessage !== undefined) {
    return (
      <NormalMessage
        message={referencedMessage}
        noThreadButton
        isFirstMessage
      />
    );
  }

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconThreadCreated"
      />
      <Styles.SystemMessageContent>
        <Trans i18nKey="ThreadStarterMessage.content" t={t} />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={createdAt} />
    </Styles.SystemMessage>
  );
}

export default ThreadStarterMessage;
