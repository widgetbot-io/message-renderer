import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import NormalMessage from "./NormalMessage";
import LargeTimestamp from "../LargeTimestamp";
import { Trans, useTranslation } from "react-i18next";

interface ThreadStarterMessageProps {
  createdAt: APIMessage["timestamp"];
  referencedMessage: APIMessage | null | undefined;
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
        <Trans i18nKey="ThreadStarterMessage.content" t={t}>
          Sorry, we couldn{"'"}t load the first message in this thread
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={createdAt} />
    </Styles.SystemMessage>
  );
}

export default ThreadStarterMessage;
