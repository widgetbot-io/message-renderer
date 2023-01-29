import * as React from "react";
import { PureComponent } from "react";
import { memoize } from "lodash";
import ChatTag from "@root/ChatTag";
import RoleIcon from "@root/Message/RoleIcon";
import getAvatar from "@utils/getAvatar";
import * as Styles from "@root/Message/style/author";
import { APIMessage, APIRole } from "discord-api-types/v10";

interface MessageAuthorProps {
  author: APIMessage["author"];
  avatarAnimated?: boolean;
  onlyShowUsername?: boolean;
  crosspost?: boolean;
  referenceGuild?: string;
}

// todo: make functional
class MessageAuthor extends PureComponent<MessageAuthorProps> {
  private convertColor = memoize((color: number) =>
    color > 0 ? `#${color.toString(16).padStart(6, "0")}` : undefined
  );

  private getDominantRoleColor = memoize(
    (roleIds: string[] | null): number | null => {
      return null;

      if (roleIds === null) return null;

      // todo: make work
      // const [role] = roleIds
      //   .map(id => generalStore.guild?.roles.find(r => r.id === id))
      //   .filter(r => r !== undefined && r.color !== 0)
      //   .sort((a, b) => b.position - a.position);
      //
      // return role?.color ?? null;
    }
  );

  private getDominantRoleIconRole = memoize(
    (roleIds: string[] | null): APIRole | null => {
      return null;

      if (roleIds === null) return null;

      // todo: make work
      // const [role] = roleIds
      //   .map(id => generalStore.guild?.roles.find(r => r.id === id))
      //   .filter(r => r !== undefined && (r.icon !== null || r.unicodeEmoji !== null))
      //   .sort((a, b) => b.position - a.position);
      //
      // // Fall back to null if the role is undefined.
      // // This can happen if the role wasn't provided with the guild, but was on the user
      // // or no role the user has had an icon or unicode emoji.
      // return role ?? null;
    }
  );

  render() {
    // Gets the dominant role color
    const dominantRoleColor = this.getDominantRoleColor(
      this.props.author.roles
    );
    const color = this.convertColor(dominantRoleColor ?? 0);

    // Gets the dominant role icon
    const dominantRoleIconRole = this.getDominantRoleIconRole(
      this.props.author.roles
    );

    if (this.props.onlyShowUsername)
      return (
        <Styles.MessageAuthor>
          <Styles.Username style={{ color }}>
            {this.props.author.username}
          </Styles.Username>
        </Styles.MessageAuthor>
      );

    return (
      <Styles.MessageAuthor>
        <Styles.Avatar
          src={getAvatar(this.props.author, {
            animated: this.props.avatarAnimated ?? false,
          })}
          draggable={false}
        />
        <Styles.Username style={{ color }}>
          {this.props.author.username}
        </Styles.Username>
        {dominantRoleIconRole !== null && (
          <RoleIcon role={dominantRoleIconRole} />
        )}
        <ChatTag
          author={this.props.author}
          crosspost={this.props.crosspost}
          referenceGuild={this.props.referenceGuild}
        />
      </Styles.MessageAuthor>
    );
  }
}

export default MessageAuthor;
