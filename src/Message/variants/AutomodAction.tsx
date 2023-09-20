import React from "react";
import type { APIMessage } from "discord-api-types/v10";
import * as Styles from "../style/message";
import MessageAuthor, { AutomodAuthor } from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import { Trans, useTranslation } from "react-i18next";
import { ChannelMention } from "../../markdown/render/elements/mentions";
import { useConfig } from "../../core/ConfigContext";

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
    return null;
  }

  const keywordMatchedContent = automodInfoEmbed.fields.find(
    (field) => field.name === "keyword_matched_content"
  )?.value;

  if (keywordMatchedContent === undefined) {
    return null;
  }

  const messageContent = automodInfoEmbed.description.split(
    keywordMatchedContent
  );

  const matches = automodInfoEmbed.description.match(keywordMatchedContent);

  return (
    <Styles.Message>
      <Styles.MessageHeaderBase>
        <AutomodAuthor isAvatarAnimated={isHovered} />
        <Styles.AutomodHeaderText>
          <Trans
            i18nKey="AutomodAction.flaggedMessage"
            components={{
              Channel: <ChannelMention channelId={message.channel_id} />,
            }}
            t={t}
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
      </Styles.AutomodMessageInQuestion>
    </Styles.Message>
  );
}

export default AutomodAction;
