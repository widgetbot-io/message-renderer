import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React, { useMemo } from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";
import type { ChatMessage } from "../../types";

interface StageMessageProps {
  createdAt: ChatMessage["timestamp"];
  channelId: ChatMessage["channel_id"];
  author: ChatMessage["author"];
  content: string;
  type: MessageType;
}

/**
 * The stage lifecycle system messages Discord posts into a stage channel's own
 * text chat. One component for all five (as BoostTierUpgrade does for the boost
 * tiers) since they differ only in wording — the topic rides in `content` for
 * start/end/topic-change, and is absent for the speaker ones.
 */
function StageMessage({
  createdAt,
  channelId,
  author,
  content,
  type,
}: StageMessageProps) {
  const { t } = useTranslation();

  const { resolveChannel } = useConfig();
  const channel = resolveChannel(channelId);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  const i18nKey = useMemo(() => {
    switch (type) {
      case MessageType.StageEnd:
        return "StageEnd.content";
      case MessageType.StageSpeaker:
        return "StageSpeaker.content";
      case MessageType.StageRaiseHand:
        return "StageRaiseHand.content";
      case MessageType.StageTopic:
        return "StageTopic.content";
      default:
        return "StageStart.content";
    }
  }, [type]);

  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconStageChannel"
      />
      <Styles.SystemMessageContent fullColor>
        <Trans
          i18nKey={i18nKey}
          values={{
            topic: content,
          }}
          components={{
            Author: (
              <MessageAuthor
                author={author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
          }}
          t={t}
        />
      </Styles.SystemMessageContent>
      <LargeTimestamp timestamp={createdAt} />
    </Styles.SystemMessage>
  );
}

export default StageMessage;
