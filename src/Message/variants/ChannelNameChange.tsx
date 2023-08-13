import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface ChannelNameChangeProps {
  content: string;
  createdAt: APIMessage["timestamp"];
  channelId: APIMessage["channel_id"];
  author: APIMessage["author"];
}

function ChannelNameChange(props: ChannelNameChangeProps) {
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
        svg="IconPencil"
      />
      <Styles.SystemMessageContent fullColor>
        <Trans
          i18nKey="ChannelNameChange.content"
          values={{
            content: props.content,
          }}
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
          {"<Author/> changed the channel name: <strong>{{content}}</strong>"}
        </Trans>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
    </Styles.SystemMessage>
  );
}

export default ChannelNameChange;
