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
};

export default text;
