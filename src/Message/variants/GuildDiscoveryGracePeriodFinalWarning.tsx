import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { Trans, useTranslation } from "react-i18next";

interface GuildDiscoveryGracePeriodFinalWarningProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryGracePeriodFinalWarning(
  props: GuildDiscoveryGracePeriodFinalWarningProps
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
        <Trans i18nKey="GuildDiscoveryGracePeriodFinalWarning.content" t={t}>
          This server has failed Discovery activity requirements for 3 weeks. If
          this server fails for 1 more week, it will be removed from Discovery.
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryGracePeriodFinalWarning;
