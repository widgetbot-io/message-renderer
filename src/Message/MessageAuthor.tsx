import type { APIRole, APIUser, Snowflake } from "discord-api-types/v10";
import * as React from "react";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ChatTag from "../ChatTag";
import { useConfig } from "../core/ConfigContext";
import getAvatar from "../utils/getAvatar";
import getDisplayName from "../utils/getDisplayName";
import RoleIcon from "./RoleIcon";
import * as Styles from "./style/author";

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
  crossPost,
  referenceGuild,
  guildId,
  ...props
}: MessageAuthorProps) {
  const { resolveRole, resolveMember, userOnClick, avatarUrlOverride } =
    useConfig();
  const member = guildId ? resolveMember(author, guildId) : null;
  const isGuildMember = member !== null;

  const { stillAvatarUrl, animatedAvatarUrl } =
    avatarUrlOverride?.(author) ?? getAvatar(author);

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

  const clickable = userOnClick !== undefined;

  if (onlyShowUsername) {
    return (
      <Styles.MessageAuthor
        clickable={clickable}
        {...props}
        onClick={(e) => userOnClick?.(author, e.currentTarget)}
      >
        <Styles.Username
          clickable={clickable}
          style={{ color: dominantRoleColor }}
        >
          {displayName}
        </Styles.Username>
      </Styles.MessageAuthor>
    );
  }

  return (
    <Styles.MessageAuthor
      clickable={clickable}
      {...props}
      onClick={(e) => userOnClick?.(author, e.currentTarget)}
    >
      <Styles.AnimatedAvatarTrigger
        data-is-animated={animatedAvatarUrl !== undefined}
      >
        <Styles.StillAvatar
          data={stillAvatarUrl}
          draggable={false}
          type="image/png"
        >
          <Styles.AvatarFallback
            src={
              getAvatar(author, {
                forceDefault: true,
              }).stillAvatarUrl
            }
            alt="avatar"
          />
        </Styles.StillAvatar>
        {animatedAvatarUrl && (
          <Styles.AnimatedAvatar
            data={animatedAvatarUrl}
            draggable={false}
            type="image/gif"
          >
            <Styles.AvatarFallback
              src={
                getAvatar(author, {
                  forceDefault: true,
                }).stillAvatarUrl
              }
              alt="avatar"
            />
          </Styles.AnimatedAvatar>
        )}
      </Styles.AnimatedAvatarTrigger>
      <Styles.Username
        clickable={clickable}
        style={{ color: dominantRoleColor }}
      >
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
