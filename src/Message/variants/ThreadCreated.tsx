import LargeTimestamp from "../LargeTimestamp";
import MessageAuthor from "../MessageAuthor";
import ThreadButton from "../../Content/Thread/ThreadButton";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import type { DiscordMessage } from "../../types";

interface ThreadCreatedProps {
  createdAt: DiscordMessage["timestamp"];
  thread: Exclude<DiscordMessage["thread"], undefined>;
  author: DiscordMessage["author"];
  messageReference: DiscordMessage["message_reference"];
  messageId: DiscordMessage["id"];
  channelId: DiscordMessage["channel_id"];
  messageContent: string;
}

function ThreadCreated(props: ThreadCreatedProps) {
  const { seeThreadOnClick } = useConfig();

  const { t } = useTranslation();

  function openThread() {
    if (props.thread) seeThreadOnClick?.(props.messageId, props.thread);
  }

  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageContent>
        <Styles.ThreadCreatedIcon
          width={SystemMessageIconSize}
          height={SystemMessageIconSize}
          svg="IconThreadCreated"
        />
        <Trans
          i18nKey="ThreadCreated.content"
          values={{
            threadName:
              props.thread !== undefined
                ? props.thread.name
                : props.messageContent,
          }}
          components={{
            Author: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
            OpenThreadLink: <Styles.SystemMessageLink onClick={openThread} />,
          }}
          t={t}
        />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
      {props.thread !== undefined && (
        <ThreadButton
          thread={props.thread}
          messageId={props.messageId}
          messageContent={props.messageContent}
          messageType={MessageType.ThreadCreated}
          hasReply={false}
        />
      )}
    </Styles.SystemMessage>
  );
}

export default ThreadCreated;
