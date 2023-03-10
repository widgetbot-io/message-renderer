import { globalCss } from "@root/Stitches/stitches.config";

export const hljsTheme = globalCss({
  ".hljs-comment, .hljs-quote": {
    color: "#586e75",
  },
  ".hljs-addition, .hljs-keyword, .hljs-selector-tag": {
    color: "#859900",
  },
  ".hljs-doctag, .hljs-literal, .hljs-meta .hljs-meta-string, .hljs-number, .hljs-regexp, .hljs-string":
    {
      color: "#2aa198",
    },
  ".hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-title":
    {
      color: "#268bd2",
    },
  ".hljs-attr, .hljs-attribute, .hljs-class .hljs-title, .hljs-template-variable, .hljs-type, .hljs-variable":
    {
      color: "#b58900",
    },
  ".hljs-bullet, .hljs-link, .hljs-meta, hljs-meta .hljs-keyword, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-subst, .hljs-symbol":
    {
      color: "#cb4b16",
    },
  ".hljs-built_in, .hljs-deletion": {
    color: "#dc322f",
  },
  ".hljs-formula": {
    background: "#073642",
  },
  ".hljs-emphasis": {
    fontStyle: "italic",
  },
  ".hljs-strong": {
    fontWeight: 500,
  },
});
