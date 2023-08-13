import MessageAuthor from "../MessageAuthor";
import React from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface ChannelPinnedMessageProps {
  author: APIMessage["author"];
  createdAt: APIMessage["timestamp"];
  channelId: APIMessage["channel_id"];
}

function ChannelPinnedMessage(props: ChannelPinnedMessageProps) {
  const { t } = useTranslation();

  const { openPinnedMessagesOnClick, resolveChannel } = useConfig();

  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconPin"
      />
      <Styles.SystemMessageContent>
        <Trans
          i18nKey="ChannelPinnedMessage.content"
          components={{
            Author: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
            OpenPinnedMessage: (
              <Styles.SystemMessageLink
                onClick={() => {
                  if (channel) openPinnedMessagesOnClick?.(channel);
                }}
              />
            ),
          }}
          t={t}
        >
          {
            "<Author/> pinned a message to this channel. See all <OpenPinnedMessage>pinned messages</OpenPinnedMessage>."
          }
        </Trans>
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default ChannelPinnedMessage;
