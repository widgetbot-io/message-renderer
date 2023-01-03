import Emoji from "@root/Emoji";
import SimpleMarkdown from "simple-markdown";
import React from "react";

const text = {
  ...SimpleMarkdown.defaultRules.text,
  parse: ([content], recurseParse, state) =>
    state.nested
      ? { content }
      : recurseParse(content, {
          ...state,
          nested: true,
        }),

  react: (node, recurseOutput, state) => {
    return (
      <Emoji key={state.key} resolveNames>
        {node.content}
      </Emoji>
    );
  },
};

export default text;
