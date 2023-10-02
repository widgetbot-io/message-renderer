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
import { useTranslation } from "react-i18next";

interface AutomodAuthorProps {
  isAvatarAnimated?: boolean;
}

export function AutomodAuthor({ isAvatarAnimated }: AutomodAuthorProps) {
  const {
    automodAvatar: { still: avatarStill, animated: avatarAnimated },
  } = useConfig();
  const { t } = useTranslation();

  const automodAvatar = isAvatarAnimated ? avatarAnimated : avatarStill;

  return (
    <Styles.MessageAuthor>
      <Styles.Avatar data={automodAvatar} draggable={false} type="image/png" />
      <Styles.Username automod>{t("AutomodAction.username")}</Styles.Username>
      <ChatTag author="automod" crossPost={false} referenceGuild={undefined} />
    </Styles.MessageAuthor>
  );
}

interface MessageAuthorProps
  extends ComponentProps<typeof Styles.MessageAuthor> {
  author: APIUser;
  isAvatarAnimated?: boolean;
  onlyShowUsername?: boolean;
  crossPost?: boolean;
  referenceGuild?: Snowflake;
  guildId: Snowflake | null | undefined;
}

function MessageAuthor({
  onlyShowUsername,
  author,
  isAvatarAnimated,
  crossPost,
  referenceGuild,
  guildId,
  ...props
}: MessageAuthorProps) {
  const { resolveRole, resolveMember, userOnClick, avatarUrlOverride } =
    useConfig();
  const member = guildId ? resolveMember(author, guildId) : null;
  const isGuildMember = member !== null;

  const avatarUrl =
    avatarUrlOverride?.(author) ??
    getAvatar(author, {
      animated: isAvatarAnimated ?? false,
    });

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
      <Styles.Avatar data={avatarUrl} draggable={false} type="image/png">
        <Styles.AvatarFallback
          src={getAvatar(author, {
            animated: false,
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
