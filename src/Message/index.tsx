import NormalMessage from "@root/Message/variants/NormalMessage";
import React, { memo } from "react";
import { Message as MessageData } from "@types";
import { MessageType } from "@root/types/globalTypes";
import ChannelPinnedMessage from "@root/Message/variants/ChannelPinnedMessage";
import GuildMemberJoin from "@root/Message/variants/GuildMemberJoin";
import GuildDiscoveryRequalified from "@root/Message/variants/GuildDiscoveryRequalified";
import MessageContainer, {
  MessageButtonListOption,
} from "@root/Message/MessageContainer";
// import MessageContainer, {
//   MessageButtonListOption,
// } from "@root/Message/MessageContainer";
import copyIdIcon from "@images/discordAssets/3fef4f31f944477f5f3e9643cbcaab7a.svg";
// import linkIcon from "@images/discordAssets/a4c2ef2964ee9977baf61a2f6017b93d.svg";
// import speakIcon from "@images/discordAssets/speak.svg";
// import deleteIcon from "@images/discordAssets/delete.svg";

export type MessageDataModified = Omit<MessageData, "referencedMessage"> &
  Partial<MessageData>;

export interface MessageProps {
  isFirstMessage?: boolean;
  message: MessageDataModified;
  isHovered?: boolean;
  showButtons?: boolean;
  thread?: boolean;
  hideTimestamp?: boolean;
}

function MessageTypeSwitch(props: Omit<MessageProps, "showButtons">) {
  switch (props.message.type) {
    case MessageType.ChannelPinnedMessage:
      return (
        <ChannelPinnedMessage
          createdAt={props.message.createdAt}
          author={props.message.author}
        />
      );
    case MessageType.GuildMemberJoin:
      return (
        <GuildMemberJoin
          createdAt={props.message.createdAt}
          author={props.message.author}
        />
      );
    case MessageType.GuildDiscoveryRequalified:
      return <GuildDiscoveryRequalified createdAt={props.message.createdAt} />;
    // case MessageType.UserPremiumGuildTier1:
    // case MessageType.UserPremiumGuildTier2:
    // case MessageType.UserPremiumGuildTier3:
    //   return (
    //     <UserPremiumGuildTierUpgrade
    //       content={props.message.content}
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       type={props.message.type}
    //     />
    //   );
    // case MessageType.UserPremiumGuildSubscription:
    //   return (
    //     <UserPremiumGuildSubscription
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       content={props.message.content}
    //     />
    //   );
    // case MessageType.RecipientAdd:
    //   return (
    //     <RecipientAdd
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       target={props.message.mentions[0]}
    //     />
    //   );
    // case MessageType.RecipientRemove:
    //   return (
    //     <RecipientRemove
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       target={props.message.mentions[0]}
    //     />
    //   );
    // case MessageType.ChannelNameChange:
    //   return (
    //     <ChannelNameChange
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       content={props.message.content}
    //     />
    //   );
    // case MessageType.ThreadCreated:
    //   return (
    //     <ThreadCreated
    //       createdAt={props.message.createdAt}
    //       thread={props.message.thread}
    //       author={props.message.author}
    //       messageId={props.message.id}
    //       messageReference={props.message.messageReference}
    //       messageContent={props.message.content}
    //     />
    //   );
    case MessageType.Reply:
    case MessageType.Default:
    case MessageType.ChatInputCommand:
      return <NormalMessage {...props} />;
    // case MessageType.ChannelFollowAdd:
    //   return (
    //     <ChannelFollowAdd
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //       content={props.message.content}
    //     />
    //   );
    // case MessageType.GuildDiscoveryGracePeriodInitialWarning:
    //   return (
    //     <GuildDiscoveryGracePeriodInitialWarning
    //       createdAt={props.message.createdAt}
    //     />
    //   );
    // case MessageType.GuildDiscoveryGracePeriodFinalWarning:
    //   return (
    //     <GuildDiscoveryGracePeriodFinalWarning
    //       createdAt={props.message.createdAt}
    //     />
    //   );
    // case MessageType.GuildDiscoveryDisqualified:
    //   return <GuildDiscoveryDisqualified createdAt={props.message.createdAt} />;
    // case MessageType.ContextMenuCommand:
    //   return <NormalMessage {...props} isContextMenuInteraction={true} />;
    // case MessageType.ThreadStarterMessage:
    //   return (
    //     <NormalMessage
    //       {...props}
    //       message={props.message.referencedMessage}
    //       noThreadButton={true}
    //     />
    //   );
    default: {
      const errorMessage: MessageDataModified = {
        ...props.message,
        type: MessageType.Default,
        content: `Unknown message type \`${
          props.message.type
        }\`\n\n\`\`\`json\n${JSON.stringify(props.message, null, 2)}\n\`\`\``,
      };

      return (
        <NormalMessage
          message={errorMessage}
          isFirstMessage={props.isFirstMessage}
          isHovered={props.isHovered}
        />
      );
    }
  }
}

function Message(props: MessageProps) {
  const buttonOptions: MessageButtonListOption[] = [
    {
      icon: copyIdIcon,
      onClick: () => navigator.clipboard.writeText(props.message.id),
      actionDescription: "Copy Message ID",
    },
  ];

  if (props.showButtons)
    return (
      <MessageContainer buttons={buttonOptions}>
        <MessageTypeSwitch {...props} />
      </MessageContainer>
    );

  return <MessageTypeSwitch {...props} />;
}

export default memo(Message);
