import * as Styles from "./style";
import * as React from "react";
import type { Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";
import { colorIntToRgba } from "../../../../utils/colorIntToCss";

interface RoleMentionProps {
  roleId: Snowflake;
}

function RoleMention({ roleId }: RoleMentionProps) {
  const { resolveRole, roleMentionOnClick } = useConfig();

  const role = resolveRole(roleId);

  if (!role) {
    return <>@deleted-role</>;
  }

  return (
    <Styles.Mention
      css={{
        color: colorIntToRgba(role.color),
        "--mention-color": colorIntToRgba(role.color, 0.1),
        "--mention-color-hover": colorIntToRgba(role.color, 0.3),
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
