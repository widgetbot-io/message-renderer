import SimpleMarkdown from "simple-markdown";
import React from "react";
import Emoji from "../../../Emoji";

export const customEmoji = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<(a)?:(\w+):(\d+)>/.exec(source),
  parse: ([, animated, name, id]) => ({
    id,
    name,
    animated: !!animated,
    src: `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}`,
  }),
  react: (node, recurseOutput, state) => (
    <Emoji emojiName={node.name} enlarged={node.jumboable} src={node.src} key={state.key} />
  ),
};
