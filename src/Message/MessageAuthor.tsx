import * as React from "react";
import { ComponentProps, useMemo } from "react";
import ChatTag from "../ChatTag";
import RoleIcon from "./RoleIcon";
import getAvatar from "../utils/getAvatar";
import * as Styles from "./style/author";
import type { APIGuildMember, APIUser } from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";
import getDisplayName from "../utils/getDisplayName";

interface MessageAuthorProps
  extends ComponentProps<typeof Styles.MessageAuthor> {
  author: APIUser | APIGuildMember;
  avatarAnimated?: boolean;
  onlyShowUsername?: boolean;
  crossPost?: boolean;
  referenceGuild?: string;
}

function MessageAuthor({
  onlyShowUsername,
  author,
  avatarAnimated,
  crossPost,
  referenceGuild,
  ...props
}: MessageAuthorProps) {
  const { resolveRole, userMentionOnClick } = useConfig();
  const isGuildMember = "joined_at" in author;
  const user = isGuildMember ? author.user : author;
  const displayName = isGuildMember
    ? author.nick ?? getDisplayName(author.user)
    : getDisplayName(author);

  const dominantRoleIconRole = useMemo(() => {
    if (!isGuildMember || !resolveRole) return null;

    const [role] = author.roles
      .map((id) => resolveRole(id))
      .filter(
        (role) =>
          role !== null && (role.icon !== null || role.unicode_emoji !== null)
      )
      .sort((a, b) => b.position - a.position);

    if (!role) return null;

    return role;
  }, [isGuildMember, resolveRole, author]);

  const dominantRoleColor = useMemo(() => {
    if (!isGuildMember || !resolveRole) return null;

    const [role] = author.roles
      .map((id) => resolveRole(id))
      .filter((r) => r !== undefined && r.color !== 0)
      .sort((a, b) => b.position - a.position);

    const color = role?.color;
    if (!color) return null;

    return color > 0 ? `#${color.toString(16).padStart(6, "0")}` : undefined;
  }, [isGuildMember, resolveRole, author]);

  if (onlyShowUsername) {
    return (
      <Styles.MessageAuthor
        clickable={userMentionOnClick !== undefined}
        {...props}
        onClick={() => userMentionOnClick?.(user)}
      >
        <Styles.Username style={{ color: dominantRoleColor }}>
          {displayName}
        </Styles.Username>
      </Styles.MessageAuthor>
    );
  }

  return (
    <Styles.MessageAuthor
      clickable={userMentionOnClick !== undefined}
      {...props}
      onClick={() => userMentionOnClick?.(user)}
    >
      <Styles.Avatar
        src={getAvatar(user, {
          animated: avatarAnimated ?? false,
        })}
        draggable={false}
      />
      <Styles.Username style={{ color: dominantRoleColor }}>
        {displayName}
      </Styles.Username>
      {dominantRoleIconRole !== null && (
        <RoleIcon role={dominantRoleIconRole} />
      )}
      <ChatTag
        author={user}
        crosspost={crossPost}
        referenceGuild={referenceGuild}
      />
    </Styles.MessageAuthor>
  );
}

export default MessageAuthor;
