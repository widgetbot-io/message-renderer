import SimpleMarkdown from "simple-markdown";
import { recurse } from "../util";
import * as Styles from "../elements";
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
  react(node, recurseOutput, state) {
    return (
      <Styles.Text key={state.key}>
        {recurse(node, recurseOutput, state)}
      </Styles.Text>
    );
  },
};

export default text;
