import React, { memo } from "react";
import Content from "../../Content";
import * as Styles from "../style/message";
import type {
  APIMessageInteraction,
  APIMessageSnapshot,
  Snowflake,
} from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import moment from "moment";

interface ForwardInfoProps {
  channelId: Snowflake;
  messageId?: Snowflake;
  messageSnapshot: APIMessageSnapshot["message"];
  mentioned?: boolean;
  interaction: APIMessageInteraction | undefined;
  isContextMenuInteraction?: boolean;
}

export const ForwardInfo = memo((props: ForwardInfoProps) => {
  const { resolveChannel, forwardedMessageChannelOnClick } = useConfig();

  const channel = resolveChannel(props.channelId);

  return (
    <Styles.ForwardInfo>
      <Styles.ForwardSpine />

      <Styles.ForwardBody>
        <Styles.ForwardHeader>
          <Styles.ForwardIcon width={16} height={16} svg="IconForward" />

          <Styles.Forwarded>Forwarded</Styles.Forwarded>
        </Styles.ForwardHeader>

        <Content message={props.messageSnapshot} />

        {channel ? (
          <Styles.ForwardFooter
            onClick={() => {
              forwardedMessageChannelOnClick?.(
                channel.id,
                props.messageId
              );
            }}
          >
            #{channel.name}
            
            {props.messageSnapshot.timestamp ? (
              <>
                {" • "}

                {moment(props.messageSnapshot.timestamp).calendar()}
              </>
            ) : null}
          </Styles.ForwardFooter>
        ) : null}
      </Styles.ForwardBody>
    </Styles.ForwardInfo>
  );
});

ForwardInfo.displayName = "ForwardInfo";
