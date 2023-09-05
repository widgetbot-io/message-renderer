import * as React from "react";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import ChatTag from "../ChatTag";
import RoleIcon from "./RoleIcon";
import getAvatar from "../utils/getAvatar";
import * as Styles from "./style/author";
import type { APIRole, APIUser, Snowflake } from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";
import getDisplayName from "../utils/getDisplayName";

interface MessageAuthorProps
  extends ComponentProps<typeof Styles.MessageAuthor> {
  author: APIUser;
  avatarAnimated?: boolean;
  onlyShowUsername?: boolean;
  crossPost?: boolean;
  referenceGuild?: Snowflake;
  guildId: Snowflake | null | undefined;
}

function MessageAuthor({
  onlyShowUsername,
  author,
  avatarAnimated,
  crossPost,
  referenceGuild,
  guildId,
  ...props
}: MessageAuthorProps) {
  const { resolveRole, resolveMember, userOnClick } = useConfig();
  const member = guildId ? resolveMember(author.id, guildId) : null;
  const isGuildMember = member !== null;

  const displayName = isGuildMember
    ? member.nick ?? getDisplayName(author)
    : getDisplayName(author);

  const dominantRoleIconRole = useMemo(() => {
    if (!isGuildMember || !resolveRole) return null;

    const [role] = member.roles
      .map((id) => resolveRole(id))
      .filter(
        (role: APIRole | null): role is APIRole =>
          role !== null &&
          ((role.icon !== null && role.icon !== undefined) ||
            (role.unicode_emoji !== null && role.unicode_emoji !== undefined))
      )
      .sort((a, b) => b.position - a.position);

    if (!role) return null;

    return role;
  }, [isGuildMember, resolveRole, member]);

  const dominantRoleColor: string | undefined = useMemo(() => {
    if (!isGuildMember || !resolveRole) return undefined;

    const [role] = member.roles
      .map((id) => resolveRole(id))
      .filter(
        (role: APIRole | null): role is APIRole =>
          role !== null && role.color !== 0
      )
      .sort((a, b) => b.position - a.position);

    const color = role?.color;
    if (!color) return undefined;

    return color > 0 ? `#${color.toString(16).padStart(6, "0")}` : undefined;
  }, [isGuildMember, resolveRole, member]);

  if (onlyShowUsername) {
    return (
      <Styles.MessageAuthor
        clickable={userOnClick !== undefined}
        {...props}
        onClick={() => userOnClick?.(author)}
      >
        <Styles.Username style={{ color: dominantRoleColor }}>
          {displayName}
        </Styles.Username>
      </Styles.MessageAuthor>
    );
  }

  return (
    <Styles.MessageAuthor
      clickable={userOnClick !== undefined}
      {...props}
      onClick={() => userOnClick?.(author)}
    >
      <Styles.Avatar
        data={getAvatar(author, {
          animated: avatarAnimated ?? false,
        })}
        draggable={false}
        type="image/png"
      >
        <Styles.AvatarFallback
          src={getAvatar(author, {
            animated: avatarAnimated ?? false,
            forceDefault: true,
          })}
          alt="avatar"
        />
      </Styles.Avatar>
      <Styles.Username style={{ color: dominantRoleColor }}>
        {displayName}
      </Styles.Username>
      {dominantRoleIconRole !== null && (
        <RoleIcon role={dominantRoleIconRole} />
      )}
      <ChatTag
        author={author}
        crossPost={crossPost ?? false}
        referenceGuild={referenceGuild}
      />
    </Styles.MessageAuthor>
  );
}

export default MessageAuthor;
