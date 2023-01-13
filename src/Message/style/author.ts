import { css, styled, theme } from "@root/Stitches/stitches.config";

export const MessageAuthor = styled(
  "span",
  "message-author",
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

export const Avatar = styled(
  "img",
  "message-author-avatar",
  css({
    position: "absolute",
    left: 16,
    marginTop: 1,
    borderRadius: "100%",
    width: 40,
    height: 40,
    zIndex: 1,
  })
);
