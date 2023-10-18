import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface GuildBoostProps {
  createdAt: DiscordMessage["timestamp"];
  author: DiscordMessage["author"];
  content: string;
  channelId: DiscordMessage["channel_id"];
}

function GuildBoost(props: GuildBoostProps) {
  const { t } = useTranslation();

  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  const count = props.content === "" ? 1 : parseInt(props.content);

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconBoost"
      />
      <Styles.SystemMessageContent>
        <Trans
          i18nKey="GuildBoost.content"
          count={count}
          components={{
            Author: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
          }}
          t={t}
        />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildBoost;
