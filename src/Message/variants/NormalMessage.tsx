import React, { memo, useMemo } from "react";
import MessageAuthor from "../MessageAuthor";
import Content from "../../Content";
import Moment from "moment";
import Tooltip from "../../Tooltip";
import type { GetAvatarOptions } from "../../utils/getAvatar";
import getAvatar from "../../utils/getAvatar";
import LargeTimestamp from "../LargeTimestamp";
import ChatTag from "../../ChatTag";
import * as Styles from "../style/message";
import type {
  APIMessage,
  APIMessageInteraction,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import { useConfig } from "../../core/ConfigContext";
import getDisplayName from "../../utils/getDisplayName";

interface ReplyInfoProps {
  channelId: Snowflake;
  referencedMessage: APIMessage["referenced_message"];
  mentioned?: boolean;
  interaction: APIMessageInteraction | undefined;
  isContextMenuInteraction?: boolean;
}

function getMiniAvatarUrl(user: APIUser) {
  const getAvatarSettings: GetAvatarOptions = {
    size: 16,
    animated: false,
  };

  return getAvatar(user, getAvatarSettings);
}

const FLAG_CROSSPOST = 1 << 1;

const ReplyInfo = memo((props: ReplyInfoProps) => {
  const user = props.interaction
    ? props.interaction.user
    : props.referencedMessage?.author;

  const { resolveRole, resolveChannel, resolveMember, avatarUrlOverride } =
    useConfig();
  const miniUserName = useMemo(() => {
    if (!props.interaction && !props.referencedMessage) return null;

    if (user === undefined) return null;

    if (!resolveChannel) return getDisplayName(user);

    const channel = resolveChannel(props.channelId);
    if (
      !channel ||
      !("guild_id" in channel) ||
      !channel.guild_id ||
      !props.referencedMessage
    )
      return getDisplayName(user);

    const guildMember = resolveMember(
      props.referencedMessage.author.id,
      channel.guild_id
    );

    if (!guildMember) return getDisplayName(user);

    return guildMember.nick ?? getDisplayName(guildMember.user as APIUser);
  }, [props.referencedMessage, props.interaction, resolveChannel]);

  const miniAvatarUrl = useMemo(
    () =>
      user === undefined
        ? null
        : avatarUrlOverride?.(user) ?? getMiniAvatarUrl(user),
    [props.referencedMessage, props.interaction]
  );

  const miniUserNameColorHex = useMemo(() => {
    if (!props.referencedMessage) return undefined;

    const channel = resolveChannel(props.referencedMessage.channel_id);
    if (!channel || !("guild_id" in channel) || !channel.guild_id)
      return undefined;

    const guildMember = resolveMember(
      props.referencedMessage.author.id,
      channel.guild_id
    );

    if (!guildMember) return undefined;

    const [role] = guildMember.roles
      .map((id) => resolveRole(id))
      .filter(
        (role): role is APIRole =>
          role !== null && role !== undefined && role.color !== 0
      )
      .sort((a, b) => b.position - a.position);

    const color = role?.color;
    if (!color) return undefined;

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
          {miniAvatarUrl && <Styles.MiniUserAvatar src={miniAvatarUrl} />}
          {props.referencedMessage && (
            <ChatTag
              author={props.referencedMessage.author}
              crossPost={Boolean(
                (props.referencedMessage.flags ?? 0) & FLAG_CROSSPOST
              )}
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

ReplyInfo.displayName = "ReplyInfo";

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
  const { currentUser, resolveChannel } = useConfig();
  const channel = resolveChannel(props.message.channel_id);
  const guildId =
    channel !== null && "guild_id" in channel ? channel.guild_id : null;

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
            channelId={props.message.channel_id}
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
            guildId={guildId}
            author={props.message.author}
            avatarAnimated={props.isHovered ?? false}
            crossPost={Boolean((props.message.flags ?? 0) & FLAG_CROSSPOST)}
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
