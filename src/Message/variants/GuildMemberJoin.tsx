import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import { GuildMemberJoin as GuildMemberJoinI18n } from "../../i18n/locales/en/translation.json";
import type { DiscordMessage } from "../../types";

interface GuildMemberJoinProps {
  createdAt: DiscordMessage["timestamp"];
  author: DiscordMessage["author"];
  channelId: DiscordMessage["channel_id"];
}

function GuildMemberJoin(props: GuildMemberJoinProps) {
  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  const { t } = useTranslation();

  const numberOfJoinMessages = Object.keys(
    GuildMemberJoinI18n.joinMessage
  ).length;
  const joinMessageIndex =
    Number(new Date(props.createdAt)) % numberOfJoinMessages;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        <Trans
          i18nKey={`GuildMemberJoin.joinMessage.${joinMessageIndex}`}
          t={t}
          components={{
            Member: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
          }}
        />
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default GuildMemberJoin;
