import {
  commonComponentId,
  styled,
  theme,
} from "../../../../Stitches/stitches.config";

const fonts = `'${[
  "Consolas",
  "Operator Mono Lig",
  "Operator Mono Book",
  "Operator Mono",
  "Fira Code",
  "Menlo",
  "Monaco",
  "monospace",
].join(`','`)}'`;

export const CodeBlock = styled.withConfig({
  displayName: "md-code-block",
  componentId: commonComponentId,
})("code", {
  display: "block",
  overflowX: "auto",
  borderRadius: 4,
  fontSize: theme.fontSizes.m,
  lineHeight: "1.125rem",
  textIndent: 0,
  whiteSpace: "pre-wrap",
  backgroundColor: theme.colors.backgroundSecondary,
  border: `1px solid ${theme.colors.backgroundTertiary}`,
  marginTop: theme.space.medium,
  padding: ".5em",
  fontFamily: fonts,
});

export const InlineCode = styled.withConfig({
  displayName: "md-inline-code",
  componentId: commonComponentId,
})("code", {
  padding: ".2em",
  margin: "-.2em 0",
  textIndent: 0,
  fontSize: "85%",
  border: "none",
  whiteSpace: "pre-wrap",
  backgroundColor: theme.colors.backgroundSecondary,
  fontFamily: fonts,
  borderRadius: 3,
  verticalAlign: "middle",
});
