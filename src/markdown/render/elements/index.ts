import { css, styled, theme } from "@root/Stitches/stitches.config";

export const Link = styled(
  "a",
  "md-link",
  css({
    "& code": {
      color: "inherit",
    },
  })
);

export const QuoteContainer = styled(
  "div",
  "md-quote-container",
  css({
    display: "flex",
  })
);

export const QuoteBar = styled(
  "div",
  "md-quote-bar",
  css({
    margin: "8px 0",
    width: 4,
    borderRadius: 4,
    backgroundColor: theme.colors.primary10,
  })
);

export const Quote = styled(
  "blockquote",
  "md-quote",
  css({
    padding: "0 8px 0 12px",
    boxSizing: "border-box",
    textIndent: 0,
    margin: "8px 0",
    maxWidth: "90%",
  })
);

export { default as Highlighter } from "./code/loader";
export { Channel, Mention, Role } from "./mentions";
