import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface GuildDiscoveryGracePeriodFinalWarningProps {
  createdAt: DiscordMessage["timestamp"];
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
        <Trans i18nKey="GuildDiscoveryGracePeriodFinalWarning.content" t={t} />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryGracePeriodFinalWarning;
