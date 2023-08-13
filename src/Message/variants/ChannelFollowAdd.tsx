import MessageAuthor from "../MessageAuthor";
import LargeTimestamp from "../LargeTimestamp";
import React from "react";
import * as Styles from "../style/message";
import { SystemMessageIconSize } from "../style/message";
import type { APIMessage } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import { Trans, useTranslation } from "react-i18next";

interface ChannelFollowAddProps {
  content: string;
  author: APIMessage["author"];
  channelId: APIMessage["channel_id"];
  createdAt: APIMessage["timestamp"];
}

function ChannelFollowAdd(props: ChannelFollowAddProps) {
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
          i18nKey="ChannelFollowAdd.content"
          values={{
            channelName: props.content,
          }}
          components={{
            Author: (
              <MessageAuthor
                author={props.author}
                guildId={guildId}
                onlyShowUsername
              />
            ),
            ChannelName: <Styles.SystemMessageLink />,
          }}
          t={t}
        >
          {
            "<Author/> has added <ChannelName>{{channelName}}</ChannelName> to this channel. Its most important updates will show up here."
          }
        </Trans>
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default ChannelFollowAdd;
