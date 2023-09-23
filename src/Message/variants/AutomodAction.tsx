import React from "react";
import type { APIMessage, APIReaction, Snowflake } from "discord-api-types/v10";
import * as Styles from "../style/message";
import MessageAuthor, { AutomodAuthor } from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import { Trans, useTranslation } from "react-i18next";
import { ChannelMention } from "../../markdown/render/elements/mentions";
import { useConfig } from "../../core/ConfigContext";
import { error } from "../../utils/error";
import { MessageAccessories } from "../../Content";
import Reactions from "../Reactions";

type QuarantineUserAction =
  | "quarantine_user"
  | "block_profile_update"
  | "block_guest_join"
  | undefined;

type QuarantineEvent =
  | "nickname_update"
  | "nickname_reset"
  | "username_update"
  | "message_send"
  | "guild_join"
  | undefined;

type VoiceChannelStatusOutcome = "blocked" | "flagged" | undefined;

interface AutomodHeaderProps {
  isMessageBlocked: boolean;
  profileAction: QuarantineUserAction;
  quarantineEvent: QuarantineEvent;
  voiceChannelStatusOutcome: VoiceChannelStatusOutcome;
  channelId: Snowflake | undefined;
}

function AutomodHeader({
  isMessageBlocked,
  profileAction,
  quarantineEvent,
  voiceChannelStatusOutcome,
  channelId,
}: AutomodHeaderProps) {
  const { t } = useTranslation();

  switch (profileAction) {
    case "quarantine_user":
      return t("AutomodAction.quarantine_user", {
        event: t(`AutomodAction.profile_event.${quarantineEvent}`),
      });
    case "block_profile_update":
      return t("AutomodAction.block_profile_update", {
        event: t(`AutomodAction.profile_event.${quarantineEvent}`),
      });
    case "block_guest_join":
      return t("AutomodAction.block_guest_join", {
        event: t(`AutomodAction.profile_event.guild_join`),
      });
  }

  if (!channelId) {
    error("AutomodAction: Channel ID is undefined");
    return null;
  }

  switch (voiceChannelStatusOutcome) {
    case "blocked":
      return (
        <Trans
          i18nKey="AutomodAction.voice_channel_status_blocked"
          components={{
            Channel: <ChannelMention channelId={channelId} />,
          }}
          t={t}
        />
      );
    case "flagged":
      return (
        <Trans
          i18nKey="AutomodAction.voice_channel_status_flagged"
          components={{
            Channel: <ChannelMention channelId={channelId} />,
          }}
          t={t}
        />
      );
  }

  if (isMessageBlocked)
    return (
      <Trans
        i18nKey="AutomodAction.blocked_message"
        components={{
          Channel: <ChannelMention channelId={channelId} />,
        }}
        t={t}
      />
    );

  return (
    <Trans
      i18nKey="AutomodAction.flagged_message"
      components={{
        Channel: <ChannelMention channelId={channelId} />,
      }}
      t={t}
    />
  );
}

function hasReactions(
  reactions: Array<APIReaction> | undefined
): reactions is Array<APIReaction> {
  return reactions !== undefined && reactions.length > 0;
}

interface AutomodActionProps {
  message: APIMessage;
  isHovered?: boolean;
}

function AutomodAction({ message, isHovered }: AutomodActionProps) {
  const { t } = useTranslation();

  const { resolveChannel } = useConfig();
  const channel = resolveChannel(message.channel_id);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

  const [automodInfoEmbed] = message.embeds;

  if (
    automodInfoEmbed.fields === undefined ||
    automodInfoEmbed.description === undefined
  ) {
    error("AutomodAction: Embed fields and/or description is undefined");
    return null;
  }

  const keyword = automodInfoEmbed.fields.find(
    (field) => field.name === "keyword"
  )?.value;

  const rule = automodInfoEmbed.fields.find(
    (field) => field.name === "rule_name"
  )?.value;

  const keywordMatchedContent = automodInfoEmbed.fields.find(
    (field) => field.name === "keyword_matched_content"
  )?.value;

  const channelId = automodInfoEmbed.fields.find(
    (field) => field.name === "channel_id"
  )?.value;

  const voiceChannelStatusOutcome = automodInfoEmbed.fields.find(
    (field) => field.name === "voice_channel_status_outcome"
  )?.value as VoiceChannelStatusOutcome;

  if (keyword === undefined) {
    error("AutomodAction: Keyword is undefined");
    return null;
  }

  if (rule === undefined) {
    error("AutomodAction: Rule is undefined");
    return null;
  }

  if (keywordMatchedContent === undefined) {
    error("AutomodAction: Keyword matched content is undefined");
    return null;
  }

  const timeoutDuration = automodInfoEmbed.fields.find(
    (field) => field.name === "timeout_duration"
  )?.value;

  const messageContent = automodInfoEmbed.description.split(
    keywordMatchedContent
  );

  const matches = automodInfoEmbed.description.match(keywordMatchedContent);

  const profileAction = automodInfoEmbed.fields.find(
    (field) => field.name === "quarantine_user_action"
  )?.value as QuarantineUserAction;

  const quarantineEvent = automodInfoEmbed.fields.find(
    (field) => field.name === "quarantine_event"
  )?.value as QuarantineEvent;

  const flaggedMessageId = automodInfoEmbed.fields.find(
    (field) => field.name === "flagged_message_id"
  );

  const isBlockedOrFlagged = profileAction === undefined;
  const isBlocked = isBlockedOrFlagged && flaggedMessageId === undefined;

  const messageHasReactions = hasReactions(message.reactions);

  return (
    <Styles.Message>
      <Styles.MessageHeaderBase>
        <AutomodAuthor isAvatarAnimated={isHovered} />
        <Styles.AutomodHeaderText>
          <AutomodHeader
            isMessageBlocked={isBlocked}
            profileAction={profileAction}
            quarantineEvent={quarantineEvent}
            voiceChannelStatusOutcome={voiceChannelStatusOutcome}
            channelId={channelId}
          />
        </Styles.AutomodHeaderText>
        <LargeTimestamp timestamp={message.timestamp} />
      </Styles.MessageHeaderBase>
      <Styles.AutomodMessageInQuestion>
        <MessageAuthor
          author={message.author}
          isAvatarAnimated={isHovered}
          crossPost={false}
          referenceGuild={undefined}
          guildId={guildId}
        />
        <Styles.AutomodMessageContent>
          {messageContent.map((content, index) => (
            <>
              <span key={`content-${index}`}>{content}</span>
              {index < messageContent.length - 1 && (
                <Styles.AutomodFlaggedKeyword key={`match-${index}`}>
                  {matches?.[index]}
                </Styles.AutomodFlaggedKeyword>
              )}
            </>
          ))}
        </Styles.AutomodMessageContent>
        <Styles.AutomodMatchInfoContainer>
          <Styles.AutomodMatchInfo>
            {t("AutomodAction.info.keyword", { keyword })}
          </Styles.AutomodMatchInfo>
          <Styles.AutomodMatchInfo>
            {t("AutomodAction.info.rule", { rule })}
          </Styles.AutomodMatchInfo>
          {timeoutDuration && (
            <Styles.AutomodMatchInfo>
              {t("AutomodAction.info.timeout", { timeout: timeoutDuration })}
            </Styles.AutomodMatchInfo>
          )}
        </Styles.AutomodMatchInfoContainer>
      </Styles.AutomodMessageInQuestion>
      <MessageAccessories active={messageHasReactions}>
        {/* Message.reactions cannot be undefined because messageHasReactions is only true if message.reactions is not undefined or empty. */}
        {/* The children of MessageAccessories don't get added to the DOM unless active is true, so if messageHasReactions is false, Reactions won't get evaluated. */}
        <Reactions reactions={message.reactions as Array<APIReaction>} />
      </MessageAccessories>
    </Styles.Message>
  );
}

export default AutomodAction;
