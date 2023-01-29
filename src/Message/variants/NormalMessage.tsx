import React, { memo, useMemo } from "react";
import MessageAuthor from "@root/Message/MessageAuthor";
import Content from "@root/Content";
import Moment from "moment";
import Tooltip from "@root/Tooltip";
import getAvatar, { GetAvatarOptions } from "@utils/getAvatar";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import ChatTag from "@root/ChatTag";
import * as Styles from "@root/Message/style/message";
import {
  APIMessage,
  APIMessageInteraction,
  MessageType,
} from "discord-api-types/v10";

interface ReplyInfoProps {
  referencedMessage: APIMessage["referenced_message"];
  mentioned?: boolean;
  interaction: APIMessageInteraction | undefined;
  isContextMenuInteraction?: boolean;
}

function getMiniAvatarUrl(
  referencedMessage: APIMessage["referenced_message"],
  interaction: APIMessage["interaction"]
) {
  const getAvatarSettings: GetAvatarOptions = {
    size: 16,
    animated: false,
  };

  if (interaction !== undefined)
    return getAvatar(interaction.user, getAvatarSettings);

  if (referencedMessage !== undefined && referencedMessage !== null)
    return getAvatar(referencedMessage.author, getAvatarSettings);

  return null;
}

function getMiniUserName(
  referencedMessage: APIMessage["referenced_message"],
  interaction: APIMessage["interaction"]
) {
  if (interaction !== undefined) return interaction.user.username;

  return referencedMessage?.author?.username ?? null;
}

function getDominantRoleColor(
  referencedMessage: APIMessage["referenced_message"]
) {
  // todo: make work
  // if (referencedMessage !== null) {
  //   const roleIds = referencedMessage.author.roles ?? [];
  //   const [role] = roleIds
  //     .map((id) => generalStore.guild?.roles.find((r) => r.id === id))
  //     .filter((r) => r !== undefined && r.color !== 0)
  //     .sort((a, b) => b.position - a.position);
  //
  //   const colorHex = role?.color ?? null;
  //   return colorHex > 0 ? `#${colorHex.toString(16).padStart(6, "0")}` : "#fff";
  // }

  return null;
}

const ReplyInfo = memo((props: ReplyInfoProps) => {
  const miniAvatarUrl = useMemo(
    () => getMiniAvatarUrl(props.referencedMessage, props.interaction),
    [props.referencedMessage, props.interaction]
  );

  const miniUserName = useMemo(
    () => getMiniUserName(props.referencedMessage, props.interaction),
    [props.referencedMessage, props.interaction]
  );

  const miniUserNameColorHex = getDominantRoleColor(props.referencedMessage);

  const unknownReply = !props.referencedMessage && !props.interaction;

  return (
    <Styles.ReplyInfo>
      <Styles.ReplySpine />
      {unknownReply ? (
        <>
          <Styles.UnknownReplyIcon
            width={12}
            height={12}
            svg="IconUnknownReply"
          />
          <Styles.UnknownReply>
            Original message was deleted or is unknown.
          </Styles.UnknownReply>
        </>
      ) : (
        <Styles.ReplyUser>
          <Styles.MiniUserAvatar src={miniAvatarUrl} />
          {props.referencedMessage && (
            <ChatTag
              author={props.referencedMessage.author}
              crosspost={!!(props.referencedMessage.flags & (1 << 1))}
              referenceGuild={
                props.referencedMessage.message_reference?.guild_id
              }
            />
          )}
          <Styles.MiniUserName style={{ color: miniUserNameColorHex }}>
            {props.mentioned && "@"}
            {miniUserName}
          </Styles.MiniUserName>
        </Styles.ReplyUser>
      )}
      {props.referencedMessage ? (
        <Content message={props.referencedMessage} isReplyContent={true} />
      ) : (
        props.interaction && (
          <Styles.SlashCommand>
            used{" "}
            <Styles.SlashCommandText>
              {!props.isContextMenuInteraction ? "/" : ""}
              {props.interaction.name}
            </Styles.SlashCommandText>
          </Styles.SlashCommand>
        )
      )}
    </Styles.ReplyInfo>
  );
});

// type Message = Omit<MessageData, "referencedMessage"> & Partial<MessageData>;

interface MessageProps {
  isFirstMessage?: boolean;
  message: APIMessage;
  isHovered?: boolean;
  noThreadButton?: boolean;
  isContextMenuInteraction?: boolean;
  hideTimestamp?: boolean;
  overrides?: {
    userMentioned?: boolean;
  };
}

function NormalMessage(props: MessageProps) {
  const shouldShowReply =
    props.message.type === MessageType.Reply ||
    Boolean(props.message.interaction);

  const isUserMentioned = useMemo(() => {
    // todo: make work
    return props.overrides?.userMentioned ?? false;
    // const user = authStore.user;
    //
    // if (!user) return false;
    //
    // if (!("_id" in user)) return false;
    //
    // const userMentioned = props.message.mentions.find(
    //   (mention) => mention.id === user._id
    // );
    //
    // return Boolean(userMentioned);
  }, [props.message.mentions, props.overrides?.userMentioned]);

  if (props.isFirstMessage)
    return (
      <Styles.Message stitchesProps={{ mentioned: isUserMentioned }}>
        {shouldShowReply && (
          <ReplyInfo
            referencedMessage={props.message.referenced_message}
            mentioned={props.message.mentions.some(
              (m) => m.id === props.message.referenced_message?.author.id
            )}
            interaction={props.message.interaction}
            isContextMenuInteraction={props.isContextMenuInteraction}
          />
        )}
        <Styles.MessageHeaderBase>
          <MessageAuthor
            author={props.message.author}
            avatarAnimated={props.isHovered ?? false}
            crosspost={!!(props.message.flags & (1 << 1))}
            referenceGuild={props.message.message_reference?.guild_id}
          />
          {props.hideTimestamp || (
            <LargeTimestamp timestamp={props.message.timestamp} />
          )}
        </Styles.MessageHeaderBase>
        <Content
          message={props.message}
          noThreadButton={props.noThreadButton}
        />
      </Styles.Message>
    );

  return (
    <Styles.Message stitchesProps={{ mentioned: isUserMentioned }}>
      <Tooltip
        placement="top"
        overlay={Moment(props.message.timestamp).format("LLLL")}
        mouseEnterDelay={1}
      >
        <Styles.SmallTimestamp dateTime={props.message.timestamp}>
          {Moment(props.message.timestamp).format("h:mm A")}
        </Styles.SmallTimestamp>
      </Tooltip>
      <Content message={props.message} noThreadButton={props.noThreadButton} />
    </Styles.Message>
  );
}

export default NormalMessage;
