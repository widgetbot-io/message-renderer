import MessageAuthor from "../MessageAuthor";
import React, { useMemo } from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { Snowflake } from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface BoostTierUpgradeProps {
  createdAt: DiscordMessage["timestamp"];
  content: string;
  channelId: Snowflake;
  type: MessageType;
  author: DiscordMessage["author"];
}

function BoostTierUpgrade({
  createdAt,
  content,
  channelId,
  type,
  author,
}: BoostTierUpgradeProps) {
  const { t } = useTranslation();

  const { resolveChannel, resolveGuild } = useConfig();
  const channel = resolveChannel(channelId);
  const guild =
    channel !== null && "guild_id" in channel && channel.guild_id !== undefined
      ? resolveGuild(channel.guild_id)
      : null;

  const guildName =
    guild !== null
      ? guild.name ?? t("unknownEntities.guild")
      : t("unknownEntities.guild");

  const newLevel = useMemo(() => {
    switch (type) {
      case MessageType.GuildBoostTier1:
        return 1;
      case MessageType.GuildBoostTier2:
        return 2;
      case MessageType.GuildBoostTier3:
        return 3;
      default:
        return -1;
    }
  }, [type]);

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <Trans
          i18nKey="BoostTierUpgrade.content"
          count={content === "" ? 1 : parseInt(content)}
          values={{
            guildName,
            newLevel,
          }}
          components={{
            Author: (
              <MessageAuthor
                author={author}
                guildId={guild?.id}
                onlyShowUsername
              />
            ),
          }}
          t={t}
        />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={createdAt} />
    </Styles.SystemMessage>
  );
}

export default BoostTierUpgrade;
