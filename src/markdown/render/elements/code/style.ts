import { css, styled, theme } from "@root/Stitches/stitches.config";

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

export const CodeBlock = styled(
  "code",
  "md-code-block",
  css({
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
  })()
);

export const InlineCode = styled(
  "code",
  "md-inline-code",
  css({
    padding: ".2em",
    margin: "-.2em 0",
    textIndent: 0,
    fontSize: "85%",
    border: "none",
    whiteSpace: "pre-wrap",
    backgroundColor: theme.colors.backgroundSecondary,
    fontFamily: fonts,
  })
);
