import { PureComponent } from "react";
import { GuildInfo_guild_roles } from "@types";
import * as Styles from "./style/message";
import Tooltip from "@root/Tooltip";
import webpCheck from "@utils/webpCheck";
import { memoize } from "lodash";
import * as React from "react";
import { Twemoji } from "@root/Emoji";

interface RoleIconProps {
  role: GuildInfo_guild_roles;
}

class RoleIcon extends PureComponent<RoleIconProps> {
  private getRoleIcon = memoize((icon: string, roleId: string): string =>
    webpCheck(`https://cdn.discordapp.com/role-icons/${roleId}/${icon}.webp`)
  );

  render() {
    if (
      this.props.role === null ||
      (this.props.role.icon === null && this.props.role.unicodeEmoji === null)
    )
      return null;

    if (this.props.role.unicodeEmoji !== null)
      return (
        <Tooltip overlay={this.props.role.name} placement="top">
          <span>
            <Styles.RoleIcon
              stitchesProps={{ as: Twemoji }}
              disableTooltip={true}
            >
              {this.props.role.unicodeEmoji}
            </Styles.RoleIcon>
          </span>
        </Tooltip>
      );

    const iconUrl = this.getRoleIcon(this.props.role.icon, this.props.role.id);

    return (
      <Tooltip overlay={this.props.role.name} placement="top">
        <Styles.RoleIcon src={iconUrl} />
      </Tooltip>
    );
  }
}

export default RoleIcon;
