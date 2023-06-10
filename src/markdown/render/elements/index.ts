import {
  commonComponentId,
  styled,
  theme,
} from "../../../Stitches/stitches.config";

export const Link = styled.withConfig({
  displayName: "md-link",
  componentId: commonComponentId,
})("a", {
  "& code": {
    color: "inherit",
  },
});

export const QuoteContainer = styled.withConfig({
  displayName: "md-quote-container",
  componentId: commonComponentId,
})("div", {
  display: "flex",
});

export const QuoteBar = styled.withConfig({
  displayName: "md-quote-bar",
  componentId: commonComponentId,
})("div", {
  margin: `${theme.space.large} 0`,
  width: 4,
  borderRadius: 4,
  backgroundColor: theme.colors.primaryOpacity10,
});

export const Quote = styled.withConfig({
  displayName: "md-quote",
  componentId: commonComponentId,
})("blockquote", {
  padding: `0 ${theme.space.large} 0 ${theme.space.xl}`,
  boxSizing: "border-box",
  textIndent: 0,
  margin: `${theme.space.large} 0`,
  maxWidth: "90%",
});

export { default as Highlighter } from "./code/loader";
// export { Channel, Mention, Role } from "./mentions";
