import type {
  APIMessageInteraction,
  APIRole,
  APIUser,
  Snowflake,
} from "discord-api-types/v10";
import { MessageType } from "discord-api-types/v10";
import Moment from "moment";
import React, { memo, useMemo, useRef } from "react";
import ChatTag from "../../ChatTag";
import Content from "../../Content";
import Tooltip from "../../Tooltip";
import { useConfig } from "../../core/ConfigContext";
import type { ChatMessage } from "../../types";
import type { GetAvatarOptions } from "../../utils/getAvatar";
import getAvatar from "../../utils/getAvatar";
import getDisplayName from "../../utils/getDisplayName";
import LargeTimestamp from "../LargeTimestamp";
import MessageAuthor from "../MessageAuthor";
import * as Styles from "../style/message";

interface ReplyInfoProps {
  channelId: Snowflake;
  referencedMessage: ChatMessage["referenced_message"];
  mentioned?: boolean;
  interaction: APIMessageInteraction | undefined;
  isContextMenuInteraction?: boolean;
}

function getMiniAvatarUrl(user: APIUser) {
  const getAvatarSettings: GetAvatarOptions = {
    size: 16,
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
      props.referencedMessage.author,
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
      props.referencedMessage.author,
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
          {miniAvatarUrl && (
            <Styles.MiniUserAvatar src={miniAvatarUrl.stillAvatarUrl} />
          )}
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

interface EditMessageInputProps {
  //   isFirstMessage?: boolean;
  message: ChatMessage;
  //   isHovered?: boolean;
  //   noThreadButton?: boolean;
  //   isEditing?:boolean;
  //   isContextMenuInteraction?: boolean;
  //   hideTimestamp?: boolean;
  //   overrides?: {
  //     userMentioned?: boolean;
  //   };
}

function EditMessageInput(props: EditMessageInputProps) {
  const { handleMessageEditSubmit } = useConfig();

  const submitMessageCallback = (content: string) => {
    if (!handleMessageEditSubmit || !content) return;

    handleMessageEditSubmit({
      ...props.message,
      content: content,
      edited_timestamp: new Date().getMilliseconds().toString(),
    });
  };

  return (
    <Styles.MessageEditor
      autoCorrect={"false"}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          submitMessageCallback(e.target.value);
        }
      }}
      defaultValue={props.message.content}
    />
  );
}

export default EditMessageInput;
