import * as Styles from "./style";
import * as React from "react";
import { Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";

interface RoleMentionProps {
  roleId: Snowflake;
}

function RoleMention({ roleId }: RoleMentionProps) {
  const { resolveRole, roleMentionOnClick } = useConfig();

  const role = resolveRole(roleId);

  if (!role) {
    return <>@deleted-role</>;
  }

  const red = (role.color & 0xff_00_00) >> 16;
  const green = (role.color & 0x00_ff_00) >> 8;
  const blue = role.color & 0x00_00_ff;

  return (
    <Styles.Mention
      css={{
        color: `rgb(${red}, ${green}, ${blue})`,
        "--mention-color": `rgba(${red}, ${green}, ${blue}, 0.1)`,
        "--mention-color-hover": `rgba(${red}, ${green}, ${blue}, 0.3)`,
      }}
      onClick={() => roleMentionOnClick?.(role)}
      canBeClicked={roleMentionOnClick !== undefined}
    >
      <Styles.MentionIcon>@</Styles.MentionIcon>
      {role.name}
    </Styles.Mention>
  );
}

export const roleMention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<@&([0-9]+?)>/.exec(source),
  parse: ([, id]) => ({ id }),
  react: ({ id }, recurseParse, state) => (
    <RoleMention roleId={id} key={state.key} />
  ),
};
