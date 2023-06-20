import * as Styles from "./style";
import * as React from "react";
import { Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";

interface UserMentionProps {
  userId: Snowflake;
}

function UserMention({ userId }: UserMentionProps) {
  const { resolveUser } = useConfig();

  // todo: resolve current channel to resolve member
  const user = resolveUser(userId);
  const text = user?.username ?? "Unknown User";

  return (
    <Styles.Mention>
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
