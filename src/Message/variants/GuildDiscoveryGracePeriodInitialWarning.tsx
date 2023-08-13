import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { Trans, useTranslation } from "react-i18next";

interface GuildDiscoveryGracePeriodInitialWarningProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryGracePeriodInitialWarning(
  props: GuildDiscoveryGracePeriodInitialWarningProps
) {
  const { t } = useTranslation();

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconWarning"
      />
      <Styles.SystemMessageContent>
        <Trans i18nKey="GuildDiscoveryGracePeriodInitialWarning.content" t={t}>
          This server has failed Discovery activity requirements for 1 week. If
          this server fails for 4 weeks in a row, it will be automatically
          removed from Discovery.
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryGracePeriodInitialWarning;
