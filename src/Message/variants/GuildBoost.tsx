import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface GuildBoostProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  content: string;
  channelId: APIMessage["channel_id"];
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
        >
          {
            "<Author/> just boosted the server <strong>{{ count }}</strong> times!"
          }
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default GuildBoost;
