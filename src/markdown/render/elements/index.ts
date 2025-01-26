import {
  commonComponentId,
  styled,
  theme,
} from "../../../Stitches/stitches.config";
import ExternalLink from "../../../ExternalLink";

export const Text = styled.withConfig({
  displayName: "md-text",
  componentId: commonComponentId,
})("span", {
  verticalAlign: "middle",
});

export const Link = styled.withConfig({
  displayName: "md-link",
  componentId: commonComponentId,
})(ExternalLink, {
  "& code": {
    color: "inherit",
  },
});

export const Heading = styled.withConfig({
  displayName: "heading",
  componentId: commonComponentId,
})("p", {
  margin: `${theme.space.xxl} 0 ${theme.space.large}`,
  fontWeight: 700,
  color: theme.colors.primaryOpacity100,

  "&:first-child": {
    marginTop: theme.space.large,
  },

  variants: {
    kind: {
      1: {
        fontSize: theme.fontSizes.xxl,
      },
      2: {
        fontSize: theme.fontSizes.xl,
      },
      3: {
        fontSize: theme.fontSizes.l,
      },
    },
  },
});

export const Subtext = styled.withConfig({
  displayName: "md-subtext",
  componentId: commonComponentId,
})("small", {
  color: theme.colors.textMuted,
  fontSize: theme.fontSizes.s,
  display: "block",
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
