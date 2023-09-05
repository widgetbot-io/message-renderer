import memoize from "memoizee";
import * as R from "ramda";
import baseRules from "./ast";
import { Highlighter } from "./elements";
import * as Styles from "./elements";
import { astToString, flattenAst, recurse } from "./util";
import SimpleMarkdown, { defaultRules } from "simple-markdown";
import TextSpoiler from "./elements/TextSpoiler";
import { Timestamp } from "./elements/Timestamp";
import React from "react";
import { InlineCode } from "./elements/code/style";
import type { APIMessage, APIUser } from "discord-api-types/v10";
import { findDefaultEmojiByUnicode } from "../../emojiData";

function parserFor(rules: SimpleMarkdown.ReactRules, returnAst?) {
  const parser = SimpleMarkdown.parserFor(rules);
  const renderer = SimpleMarkdown.outputFor(rules, "react");
  return memoize(
    (input = "", inline = true, state = {}, transform = null) => {
      if (!inline) {
        input += "\n\n";
      }

      const parse = R.pipe.apply(
        this,
        [parser, flattenAst, transform, !returnAst && renderer].filter(Boolean)
      );

      return parse(input, { inline, ...state });
    },
    {
      normalizer: (...args) => JSON.stringify(args),
    }
  );
}

function createRules(rule: { [key: string]: any }) {
  const {
    paragraph,
    url,
    link,
    codeBlock,
    inlineCode,
    blockQuote,
    spoiler,
    timestamp,
    command,
  } = rule;

  return {
    ...rule,
    heading: {
      ...defaultRules.heading,
      match: (source, state) => {
        const prevCaptureStr =
          state.prevCapture === null ? "" : state.prevCapture[0];
        const isStartOfLineCapture = /(?:^|\n)( *)$/.exec(prevCaptureStr);

        if (isStartOfLineCapture) {
          source = isStartOfLineCapture[1] + source;
          return /^ *(#{1,3})([^\n]+?)(?:\n|$)/.exec(source);
        }

        return null;
      },
      react(node, parse, state) {
        return (
          <Styles.Heading key={state.key} kind={node.level}>
            {parse(node.content, state)}
          </Styles.Heading>
        );
      },
    },
    s: {
      order: rule.u.order,
      match: SimpleMarkdown.inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
      parse: rule.u.parse,
      react: (node, recurseOutput, state) => (
        <s key={state.key}>{recurseOutput(node.content, state)}</s>
      ),
    },
    paragraph: {
      ...paragraph,
      react: (node, recurseOutput, state) => (
        <p key={state.key}>{recurseOutput(node.content, state)}</p>
      ),
    },
    url: {
      ...url,
      match: SimpleMarkdown.inlineRegex(
        /^((https?|steam):\/\/[^\s<]+[^<.,:;"')\]\s])/
      ),
    },
    link: {
      ...link,
      react: (node, recurseOutput, state) => (
        <Styles.Link
          title={node.title || astToString(node.content)}
          href={SimpleMarkdown.sanitizeUrl(node.target)}
          target="_blank"
          rel="noreferrer"
          key={state.key}
        >
          {recurseOutput(node.content, state)}
        </Styles.Link>
      ),
    },
    inlineCode: {
      ...inlineCode,
      react: (node, recurseOutput, state) => (
        <InlineCode key={state.key}>
          {recurse(node, recurseOutput, state)}
        </InlineCode>
      ),
    },
    codeBlock: {
      ...codeBlock,
      react: (node, recurseOutput, state) => (
        <Highlighter key={state.key} language={node.lang}>
          {recurse(node, recurseOutput, state)}
        </Highlighter>
      ),
    },
    blockQuote: {
      ...blockQuote,
      react: (node, recurseOutput, state) => (
        <Styles.QuoteContainer key={state.key}>
          <Styles.QuoteBar />
          <Styles.Quote>{recurse(node, recurseOutput, state)}</Styles.Quote>
        </Styles.QuoteContainer>
      ),
    },
    spoiler: {
      ...spoiler,
      react: (node, recurseOutput, state) => (
        <TextSpoiler
          content={recurse(node, recurseOutput, state)}
          key={state.key}
        />
      ),
    },
    timestamp: {
      ...timestamp,
      react: (data, recurseOutput, state) => (
        <Timestamp data={data} key={state.key} />
      ),
    },
    command: {
      ...command,
      react: ({ name }) => "/" + name,
    },
  };
}

const rulesWithoutMaskedLinks = createRules({
  ...baseRules,
  link: {
    ...baseRules.link,
    match: () => null,
  },
});
const parse = parserFor(rulesWithoutMaskedLinks);

export const parseAllowLinks = parserFor(createRules(baseRules));
export const parseEmbedTitle = parserFor(
  R.omit(
    ["codeBlock", "br", "mention", "channelMention", "roleMention"],
    rulesWithoutMaskedLinks
  )
);

function handleUnicodeEmojis(content: string): string {
  return content.replace(
    /(\p{RI}\p{RI}|\p{Emoji}(?:\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(?:\u{200D}(?:\p{RI}\p{RI}|\p{Emoji}(\p{EMod}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?))*)/gu,
    (match) => {
      const emojiResult = findDefaultEmojiByUnicode(match);

      if (!emojiResult) return match;

      return `:${emojiResult.emoji}:`;
    }
  );
}

function Markdown({
  children: content,
  mentions,
  users,
}: {
  children: string;
  mentions?: APIMessage["mentions"];
  users?: Map<string, APIUser>;
}) {
  const unicodeEmojisHandled = handleUnicodeEmojis(content);

  return content
    ? parse(unicodeEmojisHandled, undefined, { mentions, users })
    : null;
}

export function LinkMarkdown({
  children: content,
  mentions,
  users,
}: {
  children: string;
  mentions?: APIMessage["mentions"];
  users?: Map<string, APIUser>;
}) {
  const unicodeEmojisHandled = handleUnicodeEmojis(content);

  return content
    ? parseAllowLinks(unicodeEmojisHandled, undefined, { mentions, users })
    : null;
}

export default Markdown;
