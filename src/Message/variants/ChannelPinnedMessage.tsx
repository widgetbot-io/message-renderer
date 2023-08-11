import MessageAuthor from "../MessageAuthor";
import React, { useMemo } from "react";
import LargeTimestamp from "../LargeTimestamp";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface ChannelPinnedMessageProps {
  author: APIMessage["author"];
  createdAt: APIMessage["timestamp"];
  channelId: APIMessage["channel_id"];
}

function ChannelPinnedMessage(props: ChannelPinnedMessageProps) {
  const { openPinnedMessagesOnClick, resolveChannel } = useConfig();

  const channel = useMemo(() => {
    if (!openPinnedMessagesOnClick) return undefined;

    return resolveChannel(props.channelId);
  }, [resolveChannel, props.channelId, openPinnedMessagesOnClick]);

  const { resolveChannel } = useConfig();
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
        <MessageAuthor
          author={props.author}
          guildId={guildId}
          onlyShowUsername
        />{" "}
        pinned a message to this channel. See all{" "}
        <Styles.SystemMessageLink
          onClick={() => {
            if (channel) openPinnedMessagesOnClick?.(channel);
          }}
        >
          pinned messages
        </Styles.SystemMessageLink>
        .
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default ChannelPinnedMessage;
