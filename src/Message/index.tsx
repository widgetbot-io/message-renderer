import NormalMessage from "@root/Message/variants/NormalMessage";
import React, { memo } from "react";
import { Message as MessageData } from "@types";
import { MessageType } from "@root/types/globalTypes";
import ChannelPinnedMessage from "@root/Message/variants/ChannelPinnedMessage";
// import MessageContainer, {
//   MessageButtonListOption,
// } from "@root/Message/MessageContainer";
// import copyIdIcon from "@images/discordAssets/3fef4f31f944477f5f3e9643cbcaab7a.svg";
// import linkIcon from "@images/discordAssets/a4c2ef2964ee9977baf61a2f6017b93d.svg";
// import speakIcon from "@images/discordAssets/speak.svg";
// import deleteIcon from "@images/discordAssets/delete.svg";

export type MessageDataModified = Omit<MessageData, "referencedMessage"> &
  Partial<MessageData>;

interface MessageProps {
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
    // case MessageType.GuildMemberJoin:
    //   return (
    //     <GuildMemberJoin
    //       createdAt={props.message.createdAt}
    //       author={props.message.author}
    //     />
    //   );
    // case MessageType.GuildDiscoveryRequalified:
    //   return <GuildDiscoveryRequalified createdAt={props.message.createdAt} />;
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
    // case MessageType.Reply:
    case MessageType.Default:
      // case MessageType.ChatInputCommand:
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
  // const buttonOptions: MessageButtonListOption[] = [
  //   {
  //     icon: linkIcon,
  //     onClick: () => {
  //       const messageLink = `https://discord.com/channels/${guildId}/${channelId}/${props.message.id}`;
  //
  //       navigator.clipboard.writeText(messageLink);
  //     },
  //     actionDescription: "Copy Message Link",
  //   },
  //   {
  //     icon: speakIcon,
  //     onClick: () => {
  //       const text = props.message.content
  //         .replace(/^\|\|([\s\S]+?)\|\|/, "spoiler")
  //         .replace(/^<a?:(\w+):\d+>/, "emoji $1")
  //         .replace(
  //           /^<@!?([0-9]+?)>/,
  //           (_, id) =>
  //             props.message.mentions?.find(
  //               (m) => m.type === MentionType.Member && m.id === id
  //             )?.name ?? "unknown user"
  //         )
  //         .replace(
  //           /^<@&?([0-9]+?)>/,
  //           (_, id) =>
  //             props.message.mentions?.find(
  //               (m) => m.type === MentionType.Role && m.id === id
  //             )?.name ??
  //             generalStore.guild?.roles.find((r) => r.id === id)?.name ??
  //             "deleted role"
  //         )
  //         .replace(
  //           /^<#?([0-9]+?)>/,
  //           (_, id) =>
  //             props.message.mentions?.find(
  //               (m) => m.type === MentionType.Channel && m.id === id
  //             )?.name ??
  //             getChannel(id)?.name ??
  //             "deleted channel"
  //         )
  //         .replace(/^<\/(.+?):\d{17,19}?>/, "/$1")
  //         .replace(/(https?:\/\/[^\s]+)/g, (link) => {
  //           const match = link.match(
  //             /^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i
  //           );
  //           return match?.[1] ?? "";
  //         });
  //
  //       const action = props.message.referencedMessage
  //         ? `replied to ${props.message.referencedMessage.author.name}}`
  //         : "said";
  //
  //       speechSynthesis.speak(
  //         new SpeechSynthesisUtterance(
  //           `${props.message.author.name} ${action} ${text}`
  //         )
  //       );
  //     },
  //     actionDescription: "Speak Message",
  //   },
  //   {
  //     icon: copyIdIcon,
  //     onClick: () => navigator.clipboard.writeText(props.message.id),
  //     actionDescription: "Copy Message ID",
  //   },
  // ];
  //
  // const userID =
  //   authStore.user &&
  //   (("id" in authStore.user && authStore.user.id) ||
  //     ("_id" in authStore.user && authStore.user._id));
  //
  // // if message was sent by logged-in user, add delete message button
  // if (props.message.isGuest && props.message.author.id === userID)
  //   buttonOptions.push({
  //     icon: deleteIcon,
  //     onClick: () => {
  //       generalStore.setMessageToDelete(props.message);
  //       store.modal.openDelete(props.thread);
  //     },
  //     actionDescription: "Delete Message",
  //   });
  //
  // // remove speak button if no content
  // if (!props.message.content) buttonOptions.splice(1, 1);
  //
  // if (props.showButtons)
  //   return (
  //     <MessageContainer buttons={buttonOptions}>
  //       <MessageTypeSwitch {...props} />
  //     </MessageContainer>
  //   );

  return <MessageTypeSwitch {...props} />;
}

export default memo(Message);
