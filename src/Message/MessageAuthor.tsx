import * as React from "react";
import { useMemo } from "react";
import ChatTag from "../ChatTag";
import RoleIcon from "./RoleIcon";
import getAvatar from "../utils/getAvatar";
import * as Styles from "./style/author";
import type { APIGuildMember, APIUser } from "discord-api-types/v10";
import { useConfig } from "../core/ConfigContext";

interface MessageAuthorProps {
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
}: MessageAuthorProps) {
  const { resolveRole } = useConfig();
  const isGuildMember = "joined_at" in author;
  const user = isGuildMember ? author.user : author;
  const displayName = isGuildMember ? author.nick : author.username;

  const dominantRoleIconRole = useMemo(() => {
    if (!isGuildMember || !resolveRole) return null;

    const [role] = author.roles
      .map((id) => resolveRole(id))
      .filter(
        (role) =>
          role !== null && (role.icon !== null || role.unicode_emoji !== null)
      )
      .sort((a, b) => b.position - a.position);

    if (!role)
      return null;

    return role;
  }, [isGuildMember, resolveRole, author]);
  
  const dominantRoleColor = useMemo(() => {
    if (!isGuildMember || !resolveRole) return null;

    const [role] = author.roles
      .map((id) => resolveRole(id))
      .filter((r) => r !== undefined && r.color !== 0)
      .sort((a, b) => b.position - a.position);

    const color = role?.color;
    if (!color)
      return null;

    return color > 0 ? `#${color.toString(16).padStart(6, "0")}` : undefined
  }, [isGuildMember, resolveRole, author]);

  if (onlyShowUsername) {
    return (
      <Styles.MessageAuthor>
        <Styles.Username style={{ color: dominantRoleColor }}>{user.username}</Styles.Username>
      </Styles.MessageAuthor>
    );
  }

  return (
    <Styles.MessageAuthor>
      <Styles.Avatar
        src={getAvatar(user, {
          animated: avatarAnimated ?? false,
        })}
        draggable={false}
      />
      <Styles.Username style={{ color: dominantRoleColor }}>{displayName}</Styles.Username>
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
