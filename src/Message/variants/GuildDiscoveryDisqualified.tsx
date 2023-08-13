import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { Trans, useTranslation } from "react-i18next";

interface GuildDiscoveryDisqualifiedProps {
  createdAt: APIMessage["timestamp"];
}

function GuildDiscoveryDisqualified(props: GuildDiscoveryDisqualifiedProps) {
  const { t } = useTranslation();

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconCross"
      />
      <Styles.SystemMessageContent>
        <Trans i18nKey="GuildDiscoveryDisqualified.content" t={t}>
          This server has been removed from Server Discovery because it no
          longer passes all the requirements.
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildDiscoveryDisqualified;
