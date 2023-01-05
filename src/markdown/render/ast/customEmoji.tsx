import Emoji from "@root/Emoji";
import Tooltip from "@root/Tooltip";
import SimpleMarkdown from "simple-markdown";
import React from "react";

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
    <Tooltip
      key={state.key}
      placement="top"
      overlay={`:${node.name}:`}
      mouseEnterDelay={0.6}
      mouseLeaveDelay={0}
    >
      <span>
        <Emoji enlarged={node.jumboable} src={node.src} />
      </span>
    </Tooltip>
  ),
};
