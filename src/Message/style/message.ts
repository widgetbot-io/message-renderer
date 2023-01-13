import { css, styled, theme } from "@root/Stitches/stitches.config";

export const SmallTimestampBase = styled(
  "time",
  "small-timestamp",
  css({
    position: "absolute",
    left: 0,
    width: 56,
    textAlign: "right",
    fontSize: "0.6875rem",
    marginTop: "4px",
    userSelect: "none",
    color: theme.colors.primary50,
  })
);

export const MessageBase = styled(
  "div",
  "message",
  css({
    position: "relative",
    padding: "2px 48px 2px 72px",
    "& a": {
      color: theme.colors.link,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    [`${SmallTimestampBase}`]: {
      display: "none",
    },
    [`&:hover ${SmallTimestampBase}`]: {
      display: "inherit",
    },
    // todo: styling
    "&[data-is-mentioned='true']": {
      backgroundColor: theme.colors.mentioned,
      "&:hover": {
        backgroundColor: theme.colors.mentionedHover,
      },
      "&:before": {
        content: "",
        position: "absolute",
        left: 0,
        top: 0,
        width: 2,
        height: "100%",
        backgroundColor: "#faa81a",
      },
    },
  })
);

export const MessageHeaderBase = styled(
  "div",
  "message-header",
  css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  })
);

export const SystemMessageBase = styled(
  MessageBase,
  "system-message",
  css({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  })
);

export namespace MessageContainerStyle {
  export const Buttons = styled(
    "div",
    "message-hover-buttons",
    css({
      position: "absolute",
      right: 14,
      top: 0,
      transform: "translateY(-50%)",
      display: "none",
      flexDirection: "row",
      boxShadow: "0 0 0 1px rgba(4, 4, 5, 0.15)",
      backgroundColor: theme.colors.background,
      zIndex: 1,
      borderRadius: 4,
      overflow: "hidden",
      transition: "box-shadow 0.1s ease-in-out",

      "&:hover": {
        cursor: "pointer",
        boxShadow:
          "0 0 0 1px rgba(4, 4, 5, 0.15), 0 4px 4px rgba(0, 0, 0, 0.16)",
      },
    })
  );

  export const Button = styled(
    "button",
    "message-hover-button",
    css({
      border: "none",
      display: "flex",
      padding: 6,
      opacity: 0.7,
      backgroundColor: "transparent",

      "&:hover": {
        backgroundColor: theme.colors.primary10,
        opacity: 1,
      },
    })
  );

  export const Base = styled(
    "div",
    "message-container",
    css({
      position: "relative",
      "&:hover": {
        [`${Buttons}`]: {
          display: "flex",
        },

        [`${MessageBase}`]: {
          backgroundColor: theme.colors.messageHover,
        },
      },
    })
  );
}
