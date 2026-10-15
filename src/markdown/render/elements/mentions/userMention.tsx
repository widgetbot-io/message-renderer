import * as Styles from "./style";
import * as React from "react";
import type { APIUser, Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";
import getDisplayName from "../../../../utils/getDisplayName";

interface UserMentionProps {
  userId: Snowflake;
  fallbackUser?: APIUser;
}

function UserMention({ userId, fallbackUser }: UserMentionProps) {
  const { resolveUser, userOnClick } = useConfig();

  // todo: resolve current channel to resolve member
  const user = resolveUser(userId) ?? fallbackUser ?? null;
  const text = user ? getDisplayName(user) : "Unknown User";

  return (
    <Styles.Mention
      onClick={(e) => {
        if (user !== null) userOnClick?.(user, e.currentTarget);
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
    <UserMention
      userId={id}
      fallbackUser={state.mentions?.find((user: APIUser) => user.id === id)}
      key={state.key}
    />
  ),
};
