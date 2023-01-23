import { css, styled, theme } from "@root/Stitches/stitches.config";

export const SmallTimestamp = styled(
  "time",
  "small-timestamp",
  css({
    position: "absolute",
    left: 0,
    width: 56,
    textAlign: "right",
    fontSize: theme.fontSizes.s,
    marginTop: theme.space.small,
    userSelect: "none",
    color: theme.colors.primaryOpacity50,
  })
);

export const LargeTimestamp = styled(
  "time",
  "large-timestamp",
  css({
    fontSize: theme.fontSizes.s,
    marginLeft: theme.space.large,
    cursor: "default",
    height: "fit-content",
    whiteSpace: "nowrap",
    color: theme.colors.primaryOpacity50,
  })
);

export const Message = styled(
  "div",
  "message",
  css({
    position: "relative",
    padding: `2px 48px 2px ${theme.sizes.messageLeftPadding}`,
    "& a": {
      color: theme.colors.link,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    [`${SmallTimestamp}`]: {
      display: "none",
    },
    [`&:hover ${SmallTimestamp}`]: {
      display: "inherit",
    },

    // IF THERE IS A BUG WITH THE HOVER COLOR IT'S BECAUSE WE MOVED THIS
    // FROM THE CONTAINER TO HERE
    "&:hover": {
      backgroundColor: theme.colors.messageHover,
    },

    variants: {
      mentioned: {
        true: {
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
            backgroundColor: theme.colors.mentionedBorder,
          },
        },
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
  Message,
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
      padding: theme.space.medium,
      opacity: 0.7,
      backgroundColor: "transparent",

      "&:hover": {
        backgroundColor: theme.colors.primaryOpacity10,
        opacity: 1,
      },
    })
  );

  export const MessageContainer = styled(
    "div",
    "message-container",
    css({
      position: "relative",
      "&:hover": {
        [`${Buttons}`]: {
          display: "flex",
        },

        // [`${Message}`]: {
        //   backgroundColor: theme.colors.messageHover,
        // },
      },
    })
  );
}

export const ReplyInfo = styled(
  "div",
  "reply-info",
  css({
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.space.small,
  })
);

export const ReplyUser = styled(
  "span",
  "reply-user",
  css({
    display: "flex",
    alignItems: "center",
  })
);

const replySpineHeight = 12;
const replySpineTop = 11;

export const ReplySpine = styled(
  "div",
  "reply-spine",
  css({
    position: "absolute",
    height: replySpineHeight,
    top: replySpineTop,
    width: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.space.small})`,
    left: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.borderWidths.spines} / 2)`,
    borderLeft: `${theme.borderWidths.spines} solid ${theme.colors.spines}`,
    borderTop: `${theme.borderWidths.spines} solid ${theme.colors.spines}`,
    borderTopLeftRadius: 6,
  })
);

export const ThreadSpine = styled(
  "div",
  "thread-spine",
  css({
    position: "absolute",
    width: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.space.small})`,
    left: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.borderWidths.spines} / 2)`,
    borderLeft: "2px solid #4f545c",
    borderBottom: "2px solid #4f545c",
    borderBottomLeftRadius: 6,
    top: 48,
    bottom: `calc((${theme.sizes.threadButton} + ${theme.space.small} + ${theme.space.medium}) / 2)`,

    variants: {
      fromThreadCreatedType: {
        // todo: test
        true: {
          top: `calc(${theme.sizes.messageTypeIcon} + 10px)`,
          bottom: `calc(${theme.sizes.threadButton} / 2)`,
        },
      },

      hasReply: {
        true: {
          top: `calc(48px + ${replySpineHeight + replySpineTop}px + ${
            theme.space.xs
          })`,
        },
      },
    },
  })
);

export const MiniUserAvatar = styled(
  "img",
  "mini-user-avatar",
  css({
    borderRadius: "100%",
    width: 16,
    height: 16,
  })
);

export const MiniUserName = styled(
  "span",
  "mini-user-name",
  css({
    marginLeft: theme.space.small,
    marginRight: theme.space.small,
    fontSize: theme.fontSizes.m,
    opacity: 0.64,
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "25vw",
    textOverflow: "ellipsis",
  })
);
