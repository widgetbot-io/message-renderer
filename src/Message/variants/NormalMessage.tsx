import React, { memo, useMemo } from "react";
import MessageAuthor from "../MessageAuthor";
import Content from "../../Content";
import Moment from "moment";
import Tooltip from "../../Tooltip";
import getAvatar, { GetAvatarOptions } from "../../utils/getAvatar";
import LargeTimestamp from "../LargeTimestamp";
import ChatTag from "../../ChatTag";
import * as Styles from "../style/message";
import {
  APIMessage,
  APIMessageInteraction,
  MessageType,
} from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import getDisplayName from "../../utils/getDisplayName";

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

const ReplyInfo = memo((props: ReplyInfoProps) => {
  const miniAvatarUrl = useMemo(
    () => getMiniAvatarUrl(props.referencedMessage, props.interaction),
    [props.referencedMessage, props.interaction]
  );
  const { resolveRole, resolveChannel, resolveMember } = useConfig();

  const miniUserName = useMemo(() => {
    if (!props.interaction && !props.referencedMessage) return null;

    const user =
      props.interaction !== undefined
        ? props.interaction.user
        : props.referencedMessage.author;

    if (!resolveChannel) return getDisplayName(user);

    const channel = resolveChannel(props.referencedMessage.channel_id);
    if (!channel || !("guild_id" in channel)) return getDisplayName(user);

    const guildMember = resolveMember(
      props.referencedMessage.author.id,
      channel.guild_id
    );

    if (!guildMember) return getDisplayName(user);

    return guildMember.nick ?? getDisplayName(guildMember.user);
  }, [props.referencedMessage, props.interaction, resolveChannel]);

  const miniUserNameColorHex = useMemo(() => {
    if (!props.referencedMessage) return null;

    const channel = resolveChannel(props.referencedMessage.channel_id);
    if (!channel || !("guild_id" in channel)) return null;

    const guildMember = resolveMember(
      props.referencedMessage.author.id,
      channel.guild_id
    );

    if (!guildMember) return null;

    const [role] = guildMember.roles
      .map((id) => resolveRole(id))
      .filter((r) => r !== undefined && r.color !== 0)
      .sort((a, b) => b.position - a.position);

    const color = role?.color;
    if (!color) return null;

    return color > 0 ? `#${color.toString(16).padStart(6, "0")}` : undefined;
  }, [resolveRole]);

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
  const { resolveChannel, resolveMember, currentUser } = useConfig();

  const member = useMemo(() => {
    const channel = resolveChannel(props.message.channel_id);

    if (!channel || !("guild_id" in channel)) return null;

    return resolveMember(props.message.author.id, channel.guild_id);
  }, [resolveChannel, resolveMember]);

  const isUserMentioned = useMemo(() => {
    const userMentionedOverride = props.overrides?.userMentioned ?? false;
    if (userMentionedOverride) return true;

    const user = currentUser();

    if (!user) return false;

    return (
      props.message.mentions.find(({ id }) => id === user.id) !== undefined
    );
  }, [currentUser, props.message.mentions, props.overrides?.userMentioned]);

  if (props.isFirstMessage)
    return (
      <Styles.Message mentioned={isUserMentioned}>
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
            author={member ?? props.message.author}
            avatarAnimated={props.isHovered ?? false}
            crossPost={Boolean(props.message.flags & (1 << 1))}
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
    <Styles.Message mentioned={isUserMentioned}>
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
