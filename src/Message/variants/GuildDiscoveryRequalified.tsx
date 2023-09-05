import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { Trans, useTranslation } from "react-i18next";

interface GuildDiscoveryRequalifiedProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryRequalified(props: GuildDiscoveryRequalifiedProps) {
  const { t } = useTranslation();

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconCheckmark"
      />
      <Styles.SystemMessageContent>
        <Trans i18nKey="GuildDiscoveryRequalified.content" t={t} />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryRequalified;
