import SimpleMarkdown from "simple-markdown";
import * as React from "react";
import * as Styles from "./style";

interface Props {
  group: "everyone" | "here";
}

function EveryoneOrHereMention({ group }: Props) {
  return (
    <Styles.Mention canBeClicked={false}>
      <Styles.MentionIcon>@</Styles.MentionIcon>
      {group}
    </Styles.Mention>
  );
}
export const everyoneOrHereMention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source: string) => /^@(everyone|here)/.exec(source),
  parse: ([, group]) => ({ group }),
  react: ({ group }, recurseParse, state) => (
    <EveryoneOrHereMention group={group} key={state.key} />
  ),
};
