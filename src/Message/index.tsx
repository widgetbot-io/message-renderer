import NormalMessage from "./variants/NormalMessage";
import React, { memo } from "react";
import MessageContainer from "./MessageContainer";
import type { APIChannel } from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import GuildMemberJoin from "./variants/GuildMemberJoin";
import GuildDiscoveryRequalified from "./variants/GuildDiscoveryRequalified";
import GuildDiscoveryGracePeriodInitialWarning from "./variants/GuildDiscoveryGracePeriodInitialWarning";
import GuildDiscoveryGracePeriodFinalWarning from "./variants/GuildDiscoveryGracePeriodFinalWarning";
import GuildDiscoveryDisqualified from "./variants/GuildDiscoveryDisqualified";
import ChannelFollowAdd from "./variants/ChannelFollowAdd";
import ChannelNameChange from "./variants/ChannelNameChange";
import GuildBoost from "./variants/GuildBoost";
import BoostTierUpgrade from "./variants/BoostTierUpgrade";
import ChannelPinnedMessage from "./variants/ChannelPinnedMessage";
import RecipientAdd from "./variants/RecipientAdd";
import RecipientRemove from "./variants/RecipientRemove";
import ThreadCreated from "./variants/ThreadCreated";
import { MessageTypeResponse, useConfig } from "../core/ConfigContext";
import ThreadStarterMessage from "./variants/ThreadStarterMessage";
import AutomodAction from "./variants/AutomodAction";
import type { ChatMessage } from "../types";

export interface MessageProps {
  isFirstMessage?: boolean;
  message: ChatMessage;
  isHovered?: boolean;
  showButtons?: boolean;
  thread?: boolean;
  hideTimestamp?: boolean;
}

function MessageTypeSwitch(props: Omit<MessageProps, "showButtons">) {
  const { unknownMessageTypeResponse = MessageTypeResponse.ConsoleError } =
    useConfig();

  switch (props.message.type) {
    case MessageType.ChannelPinnedMessage:
      return (
        <ChannelPinnedMessage
          channelId={props.message.channel_id}
          createdAt={props.message.timestamp}
          author={props.message.author}
        />
      );
    case MessageType.UserJoin:
      return (
        <GuildMemberJoin
          createdAt={props.message.timestamp}
          author={props.message.author}
          channelId={props.message.channel_id}
        />
      );
    case MessageType.GuildDiscoveryRequalified:
      return <GuildDiscoveryRequalified createdAt={props.message.timestamp} />;
    case MessageType.GuildBoostTier1:
    case MessageType.GuildBoostTier2:
    case MessageType.GuildBoostTier3:
      return (
        <BoostTierUpgrade
          channelId={props.message.channel_id}
          content={props.message.content}
          createdAt={props.message.timestamp}
          author={props.message.author}
          type={props.message.type}
        />
      );
    case MessageType.GuildBoost:
      return (
        <GuildBoost
          createdAt={props.message.timestamp}
          author={props.message.author}
          content={props.message.content}
          channelId={props.message.channel_id}
        />
      );
    case MessageType.RecipientAdd:
      return (
        <RecipientAdd
          createdAt={props.message.timestamp}
          author={props.message.author}
          target={props.message.mentions[0]}
          channelId={props.message.channel_id}
        />
      );
    case MessageType.RecipientRemove:
      return (
        <RecipientRemove
          createdAt={props.message.timestamp}
          author={props.message.author}
          target={props.message.mentions[0]}
          channelId={props.message.channel_id}
        />
      );
    case MessageType.ChannelNameChange:
      return (
        <ChannelNameChange
          createdAt={props.message.timestamp}
          channelId={props.message.channel_id}
          author={props.message.author}
          content={props.message.content}
        />
      );
    case MessageType.ThreadCreated:
      return (
        <ThreadCreated
          createdAt={props.message.timestamp}
          thread={props.message.thread as APIChannel}
          author={props.message.author}
          messageId={props.message.id}
          channelId={props.message.channel_id}
          messageReference={props.message.message_reference}
          messageContent={props.message.content}
        />
      );
    case MessageType.Reply:
    case MessageType.Default:
    case MessageType.ChatInputCommand:
      return <NormalMessage {...props} />;
    case MessageType.ChannelFollowAdd:
      return (
        <ChannelFollowAdd
          createdAt={props.message.timestamp}
          author={props.message.author}
          content={props.message.content}
          channelId={props.message.channel_id}
        />
      );
    case MessageType.GuildDiscoveryGracePeriodInitialWarning:
      return (
        <GuildDiscoveryGracePeriodInitialWarning
          createdAt={props.message.timestamp}
        />
      );
    case MessageType.GuildDiscoveryGracePeriodFinalWarning:
      return (
        <GuildDiscoveryGracePeriodFinalWarning
          createdAt={props.message.timestamp}
        />
      );
    case MessageType.GuildDiscoveryDisqualified:
      return <GuildDiscoveryDisqualified createdAt={props.message.timestamp} />;
    case MessageType.ContextMenuCommand:
      return <NormalMessage {...props} isContextMenuInteraction={true} />;
    case MessageType.ThreadStarterMessage:
      return (
        <ThreadStarterMessage
          referencedMessage={props.message.referenced_message}
          createdAt={props.message.timestamp}
        />
      );
    case MessageType.AutoModerationAction:
      return (
        <AutomodAction message={props.message} isHovered={props.isHovered} />
      );
    default: {
      switch (unknownMessageTypeResponse) {
        case MessageTypeResponse.InAppError: {
          const errorMessage: ChatMessage = {
            ...props.message,
            type: MessageType.Default,
            content: `Unknown message type \`${
              props.message.type
            }\`\n\n\`\`\`json\n${JSON.stringify(
              props.message,
              null,
              2
            )}\n\`\`\``,
          };

          console.error(
            `Unknown message type \`${props.message.type}\``,
            props.message
          );

          return (
            <NormalMessage
              message={errorMessage}
              isFirstMessage={props.isFirstMessage}
            />
          );
        }
        case MessageTypeResponse.ConsoleError:
          console.error(
            `Unknown message type \`${props.message.type}\``,
            props.message
          );
          return null;
        case MessageTypeResponse.None:
          return null;
      }
    }
  }
}

function Message(props: MessageProps) {
  const { messageButtons } = useConfig();

  const buttonOptions = messageButtons?.(props.message) ?? [];

  if (props.showButtons)
    return (
      <MessageContainer buttons={buttonOptions}>
        <MessageTypeSwitch {...props} />
      </MessageContainer>
    );

  return <MessageTypeSwitch {...props} />;
}

export default memo(Message);
