import * as Styles from "./style";
import * as React from "react";
import type { Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";
import getDisplayName from "../../../../utils/getDisplayName";

interface UserMentionProps {
  userId: Snowflake;
}

function UserMention({ userId }: UserMentionProps) {
  const { resolveUser, userOnClick } = useConfig();

  // todo: resolve current channel to resolve member
  const user = resolveUser(userId);
  const text = user ? getDisplayName(user) : "Unknown User";

  return (
    <Styles.Mention
      onClick={() => {
        if (user !== null) userOnClick?.(user);
      }}
      canBeClicked={userOnClick !== undefined}
    >
      <Styles.MentionIcon>@</Styles.MentionIcon>
      {text}
    </Styles.Mention>
  );
}

export const userMention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<@!?([0-9]+?)>/.exec(source),
  parse: ([, id]) => ({ id }),
  react: ({ id }, recurseParse, state) => (
    <UserMention userId={id} key={state.key} />
  ),
};
