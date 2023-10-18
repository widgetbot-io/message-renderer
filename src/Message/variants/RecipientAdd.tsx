import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import getDisplayName from "../../utils/getDisplayName";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface RecipientAddProps {
  createdAt: DiscordMessage["timestamp"];
  author: DiscordMessage["author"];
  target: DiscordMessage["mentions"][0];
  channelId: DiscordMessage["channel_id"];
}

// todo: check if this also applies to group chats, and support those as well.
function RecipientAdd(props: RecipientAddProps) {
  const { t } = useTranslation();
  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        <Trans
          i18nKey="RecipientAdd.content"
          values={{
            displayName: getDisplayName(props.target),
          }}
          components={{
            Author: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
            Target: (
              <MessageAuthor
                author={props.target}
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

export default RecipientAdd;
