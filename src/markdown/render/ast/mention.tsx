import { Message_author, Message_mentions } from "@types";
import { MentionType } from "@root/types/globalTypes";
import { Channel, Mention, Role } from "@root/markdown/render/elements";
import SimpleMarkdown from "simple-markdown";
import * as React from "react";
export const mention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<@!?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, { mentions, users }) => ({
    id,
    mentions,
    users,
  }),
  react: (
    {
      id,
      mentions,
      users,
    }: {
      id: string;
      mentions?: Message_mentions[];
      users?: Map<string, Message_author>;
    },
    recurseOutput,
    state
  ) => (
    // mention data from message.mentions, falls back to contructing mention data from message authors
    <Mention
      key={state.key}
      id={id}
      data={
        mentions?.find((m) => m.type === MentionType.Member && m.id === id) ??
        (users?.get(id) && {
          ...users?.get(id),
          type: MentionType.Member,
          __typename: "Mention",
        })
      }
    >
      {({ name }) => `@${name}`}
    </Mention>
  ),
};

export const channel = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<#?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, { mentions }) => ({ id, mentions }),
  react: (
    { id, mentions }: { id: string; mentions: Message_mentions[] },
    recurseOutput,
    state
  ) => (
    <Channel
      key={state.key}
      id={id}
      data={mentions?.find(
        (m) => m.type === MentionType.Channel && m.id === id
      )}
    >
      {({ name }) => `#${name}`}
    </Channel>
  ),
};

const parseColor = (color: number) =>
  color ? "#" + color.toString(16).padStart(6, "0") : null;

export const role = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<@&?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, { mentions }) => ({ id, mentions }),
  react: (
    { id, mentions }: { id: string; mentions: Message_mentions[] },
    recurseOutput,
    state
  ) => (
    <Role
      key={state.key}
      id={id}
      data={mentions?.find((m) => m.type === MentionType.Role && m.id === id)}
      color={parseColor(
        // generalStore.guild?.roles.find((r) => r.id === id)?.color
        // todo: implement
        undefined
      )}
    >
      {({ displayName }) => `@${displayName}`}
    </Role>
  ),
};
