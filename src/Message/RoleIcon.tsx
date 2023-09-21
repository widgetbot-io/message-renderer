import * as Styles from "./style/message";
import Tooltip from "../Tooltip";
import webpCheck from "../utils/webpCheck";
import * as React from "react";
import { Twemoji } from "../Emoji";
import type { APIRole } from "discord-api-types/v10";
import { useTranslation } from "react-i18next";
import { error } from "../utils/error";

interface RoleIconProps {
  role: APIRole;
}

function RoleIcon(props: RoleIconProps) {
  const { t } = useTranslation();

  const roleIconUrl = webpCheck(
    `https://cdn.discordapp.com/role-icons/${props.role.id}/${props.role.icon}.webp`
  );

  if (
    props.role.unicode_emoji !== null &&
    props.role.unicode_emoji !== undefined
  )
    return (
      <Tooltip overlay={props.role.name} placement="top">
        <span>
          <Styles.RoleIcon
            as={Twemoji}
            disableTooltip={true}
            emojiName={props.role.unicode_emoji ?? t("unknownEntities.emoji")}
          >
            {props.role.unicode_emoji}
          </Styles.RoleIcon>
        </span>
      </Tooltip>
    );

  if (props.role.icon === null || props.role.icon === undefined) {
    error(
      "Role icon AND unicode_emoji is null or undefined but RoleIcon was rendered."
    );
    return null;
  }

  return (
    <Tooltip overlay={props.role.name} placement="top">
      <Styles.RoleIcon src={roleIconUrl} />
    </Tooltip>
  );
}

export default RoleIcon;
