import { css, styled, theme } from "@root/Stitches/stitches.config";

export const Base = styled(
  "span",
  "message-author-base",
  css({
    display: "inline-flex",
  })
);

export const Username = styled(
  "span",
  "message-author-username",
  css("span", {
    color: theme.colors.primary100,
    fontWeight: 500,
    fontSize: 16,
    display: "inline",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
  })
);
