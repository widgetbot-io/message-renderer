import { PureComponent } from "react";
import * as Styles from "./style/message";
import Tooltip from "../Tooltip";
import webpCheck from "../utils/webpCheck";
import { memoize } from "lodash";
import * as React from "react";
import { Twemoji } from "../Emoji";
import type { APIRole } from "discord-api-types/v10";

interface RoleIconProps {
  role: APIRole;
}

class RoleIcon extends PureComponent<RoleIconProps> {
  private getRoleIcon = memoize((icon: string, roleId: string): string =>
    webpCheck(`https://cdn.discordapp.com/role-icons/${roleId}/${icon}.webp`)
  );

  render() {
    if (
      this.props.role.unicode_emoji !== null &&
      this.props.role.unicode_emoji !== undefined
    )
      return (
        <Tooltip overlay={this.props.role.name} placement="top">
          <span>
            <Styles.RoleIcon
              as={Twemoji}
              disableTooltip={true}
              emojiName={this.props.role.unicode_emoji ?? "unknown emoji"}
            >
              {this.props.role.unicode_emoji}
            </Styles.RoleIcon>
          </span>
        </Tooltip>
      );

    if (this.props.role.icon === null || this.props.role.icon === undefined) {
      console.error(
        "Role icon AND unicode_emoji is null or undefined but RoleIcon was rendered."
      );
      return null;
    }

    const iconUrl = this.getRoleIcon(this.props.role.icon, this.props.role.id);

    return (
      <Tooltip overlay={this.props.role.name} placement="top">
        <Styles.RoleIcon src={iconUrl} />
      </Tooltip>
    );
  }
}

export default RoleIcon;
