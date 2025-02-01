import React, { memo } from "react";
import Content from "../Content";
import * as Styles from "./style/message";
import type {
  APIMessageSnapshot,
  Snowflake,
} from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";
import moment from "moment";

interface MessageForwardProps {
  channelId: Snowflake;
  messageId: Snowflake;
  messageSnapshot: APIMessageSnapshot["message"];
}

const MessageForward = memo((props: MessageForwardProps) => {
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

export default MessageForward

MessageForward.displayName = "ForwardInfo";
