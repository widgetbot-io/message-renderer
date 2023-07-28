import LargeTimestamp from "../LargeTimestamp";
import MessageAuthor from "../MessageAuthor";
import ThreadButton from "../../Content/Thread/ThreadButton";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";

interface ThreadCreatedProps {
  createdAt: APIMessage["timestamp"];
  thread: Exclude<APIMessage["thread"], undefined>;
  author: APIMessage["author"];
  messageReference: APIMessage["message_reference"];
  messageId: APIMessage["id"];
  channelId: APIMessage["channel_id"];
  messageContent: string;
}

function ThreadCreated(props: ThreadCreatedProps) {
  // todo: make work
  // const openThread = useCallback(() => generalStore.setActiveThread({
  //   id: props.messageReference.channelId,
  //   name: props.messageContent,
  //   messageCount: 0,
  //   archivedAt: null,
  //   locked: false
  // }), [props.messageId, props.messageContent]);

  const { resolveChannel } = useConfig();
  const channel = resolveChannel(props.channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  if (props.thread === null)
    return (
      <Styles.SystemMessage>
        <Styles.SystemMessageContent>
          <Styles.ThreadCreatedIcon
            width={SystemMessageIconSize}
            height={SystemMessageIconSize}
            svg="IconThreadCreated"
          />
          <MessageAuthor
            author={props.author}
            guildId={guildId}
            onlyShowUsername
          />{" "}
          started a thread:{" "}
          <Styles.SystemMessageLink /* onClick={openThread} */>
            {props.messageContent}
          </Styles.SystemMessageLink>
        </Styles.SystemMessageContent>
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessage>
    );

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageContent>
        <Styles.ThreadCreatedIcon
          width={SystemMessageIconSize}
          height={SystemMessageIconSize}
          svg="IconThreadCreated"
        />
        <MessageAuthor
          author={props.author}
          guildId={guildId}
          onlyShowUsername
        />{" "}
        started a thread:{" "}
        <Styles.SystemMessageLink /* onClick={openThread} */>
          {props.thread.name}
        </Styles.SystemMessageLink>
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={props.createdAt} />
      <ThreadButton
        thread={props.thread}
        messageId={props.messageId}
        messageContent={props.messageContent}
        messageType={MessageType.ThreadCreated}
        hasReply={false}
      />
    </Styles.SystemMessage>
  );
}

export default ThreadCreated;
