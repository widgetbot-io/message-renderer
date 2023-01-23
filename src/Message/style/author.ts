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
    color: theme.colors.primaryOpacity100,
    fontWeight: 500,
    fontSize: theme.fontSizes.l,
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
    left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
    transform: "translateX(-50%)",
    marginTop: 1,
    borderRadius: "100%",
    width: 40,
    height: 40,
    zIndex: 1,
  })
);
