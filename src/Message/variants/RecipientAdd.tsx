import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import getDisplayName from "../../utils/getDisplayName";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface RecipientAddProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
  target: APIMessage["mentions"][0];
  channelId: APIMessage["channel_id"];
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
