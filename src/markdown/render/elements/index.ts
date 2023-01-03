import styled from "@utils/emotion";

export const Link = styled("a")<Record<string, unknown>>`
  & code {
    color: inherit;
  }
`;

export const Edited = styled("span")<Record<string, unknown>>`
  font-size: 0.625rem;
  line-height: 0.625rem;
  margin-left: 3px;
  opacity: 0.3;
`;

export const QuoteContainer = styled("div")<Record<string, unknown>>`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const QuoteBar = styled("div")<Record<string, unknown>>`
  margin: 8px 0;
  width: 4px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.13);
`;

export const Quote = styled("blockquote")<Record<string, unknown>>`
  padding: 0 8px 0 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-indent: 0;
  margin: 8px 0;
  max-width: 90%;
`;

export { Code } from "./code";
export { default as Highlighter } from "./code/loader";
export { Channel, Mention, Role } from "./mentions";
