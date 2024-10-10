import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";
import { Link } from "../../markdown/render/elements";
import SvgFromUrl from "../../SvgFromUrl";
import { Embed, Footer } from "src/Content/Embed/style";

export const SmallTimestamp = styled.withConfig({
  displayName: "small-timestamp",
  componentId: commonComponentId,
})("time", {
  position: "absolute",
  left: 0,
  width: 56,
  textAlign: "right",
  fontSize: theme.fontSizes.s,
  marginTop: theme.space.small,
  userSelect: "none",
  color: theme.colors.primaryOpacity50,
});

export const LargeTimestamp = styled.withConfig({
  displayName: "large-timestamp",
  componentId: commonComponentId,
})("time", {
  fontSize: theme.fontSizes.s,
  marginLeft: theme.space.large,
  cursor: "default",
  height: "fit-content",
  whiteSpace: "nowrap",
  color: theme.colors.primaryOpacity50,
  lineHeight: `1.375rem`,
});

export const Message = styled.withConfig({
  displayName: "message",
  componentId: commonComponentId,
})(
  "div",

  {
    position: "relative",
    padding: `2px 48px 2px ${theme.sizes.messageLeftPadding}`,
    [`& ${Link}`]: {
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
      isMentioned: {
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
  }
);

export const MessageHeaderBase = styled.withConfig({
  displayName: "message-header",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
});

export const AutomodHeaderText = styled.withConfig({
  displayName: "automod-header-text",
  componentId: commonComponentId,
})("span", {
  marginLeft: theme.space.small,
  color: theme.colors.primaryOpacity100,
});

export const AutomodMessageInQuestion = styled.withConfig({
  displayName: "automod-message-in-question",
  componentId: commonComponentId,
})("div", {
  padding: theme.space.xl,
  backgroundColor: theme.colors.backgroundSecondary,
  borderRadius: 8,
  position: "relative",
  paddingLeft: 72,
  marginTop: theme.space.small,
});

export const AutomodMessageContent = styled.withConfig({
  displayName: "automod-message-content",
  componentId: commonComponentId,
})("div", {
  color: theme.colors.primaryOpacity80,
  whiteSpace: "break-spaces",
  fontSize: theme.fontSizes.l,
});

export const AutomodMatchInfoContainer = styled.withConfig({
  displayName: "automod-match-info-container",
  componentId: commonComponentId,
})("span", {
  display: "flex",
  flexDirection: "row",
  color: theme.colors.textMuted,
  fontSize: theme.fontSizes.s,
});

export const AutomodMatchInfo = styled.withConfig({
  displayName: "automod-match-info",
  componentId: commonComponentId,
})("span", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  "&:not(:last-child)::after": {
    marginLeft: theme.space.large,
    marginRight: theme.space.large,
    content: "",
    display: "inline-block",
    width: 4,
    height: 4,
    backgroundColor: theme.colors.automodDot,
    borderRadius: "100%",
  },
});

export const AutomodFlaggedKeyword = styled.withConfig({
  displayName: "automod-flagged-keyword",
  componentId: commonComponentId,
})("span", {
  backgroundColor: theme.colors.automodMatchedWord,
});

export namespace MessageContainerStyle {
  export const Buttons = styled.withConfig({
    displayName: "message-hover-buttons",
    componentId: commonComponentId,
  })("div", {
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
      boxShadow: "0 0 0 1px rgba(4, 4, 5, 0.15), 0 4px 4px rgba(0, 0, 0, 0.16)",
    },
  });

  export const Button = styled.withConfig({
    displayName: "message-hover-button",
    componentId: commonComponentId,
  })("button", {
    border: "none",
    display: "flex",
    padding: theme.space.medium,
    opacity: 0.7,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: theme.colors.primaryOpacity10,
      opacity: 1,
    },
  });

  export const MessageContainer = styled.withConfig({
    displayName: "message-container",
    componentId: commonComponentId,
  })("div", {
    position: "relative",
    "&:hover": {
      [`${Buttons}`]: {
        display: "flex",
      },

      // [`${Message}`]: {
      //   backgroundColor: theme.colors.messageHover,
      // },
    },
  });
}

export const ForwardInfo = styled.withConfig({
  displayName: "forward-info",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  paddingTop: "0.125rem",
  paddingBottom: "0.125rem",
});

export const ForwardBody = styled.withConfig({
  displayName: "forward-body",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

export const ForwardSpine = styled.withConfig({
  displayName: "forward-spine",
  componentId: commonComponentId,
})("div", {
  width: 4,
  borderRadius: 2,
  marginRight: theme.space.xl,
  flexShrink: 0,
  backgroundColor: theme.colors.primaryOpacity20,
});

export const ForwardHeader = styled.withConfig({
  displayName: "forward-header",
  componentId: commonComponentId,
})("div", {
  marginTop: 2,
  marginBottom: 4,
  display: "flex",
  gap: 4,
  color: theme.colors.primaryOpacity50,
  alignSelf: "flex-start",
  alignItems: "center",
  fontWeight: 600,
});

export const Forwarded = styled.withConfig({
  displayName: "forwarded",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity50,
  fontSize: theme.fontSizes.m,
  userSelect: "none",
  fontStyle: "italic",
});

export const ForwardFooter = styled.withConfig({
  displayName: "forward-footer",
  componentId: commonComponentId,
})(Footer, {
  marginTop: 4,
  display: "flex",
  gap: 4,
  alignSelf: "flex-start",
  color: theme.colors.primaryOpacity50,
  fontSize: theme.fontSizes.m,
  cursor: "pointer",

  "&:hover": {
    color: theme.colors.primaryOpacity60,
  },
});

export const ReplyInfo = styled.withConfig({
  displayName: "reply-info",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  marginBottom: theme.space.small,
  color: theme.colors.textMuted,
});

export const ReplyUser = styled.withConfig({
  displayName: "reply-user",
  componentId: commonComponentId,
})("span", {
  display: "flex",
  alignItems: "center",
});

const replySpineHeight = 12;
const replySpineTop = 11;

export const ReplySpine = styled.withConfig({
  displayName: "reply-spine",
  componentId: commonComponentId,
})("div", {
  position: "absolute",
  height: replySpineHeight,
  top: replySpineTop,
  width: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.space.small})`,
  left: `calc(${theme.sizes.messageLeftPadding} / 2 - ${theme.borderWidths.spines} / 2)`,
  borderLeft: `${theme.borderWidths.spines} solid ${theme.colors.spines}`,
  borderTop: `${theme.borderWidths.spines} solid ${theme.colors.spines}`,
  borderTopLeftRadius: 6,
});

export const ThreadSpine = styled.withConfig({
  displayName: "thread-spine",
})("div", {
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
});

export const MiniUserAvatar = styled.withConfig({
  displayName: "mini-user-avatar",
  componentId: commonComponentId,
})("img", {
  borderRadius: "100%",
  width: 16,
  height: 16,
});

export const MiniUserName = styled.withConfig({
  displayName: "mini-user-name",
  componentId: commonComponentId,
})("span", {
  marginLeft: theme.space.small,
  marginRight: theme.space.small,
  fontSize: theme.fontSizes.m,
  opacity: 0.64,
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  maxWidth: "25vw",
  textOverflow: "ellipsis",
  color: theme.colors.primaryOpacity100,
});

export const SystemMessage = styled.withConfig({
  displayName: "system-message",
  componentId: commonComponentId,
})(Message, {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

export const SystemMessageIconSize = 18;

export const SystemMessageIcon = styled.withConfig({
  displayName: "system-message-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  position: "absolute",
  top: "50%",
  left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
  translate: "-50% -50%",
});

export const ThreadCreatedIcon = styled.withConfig({
  displayName: "thread-created-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  position: "absolute",
  left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
  marginTop: theme.space.medium,
  top: 0,
  translate: "-50% 0",
});

export const SystemMessageContent = styled.withConfig({
  displayName: "system-message-content",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.systemMessageDark,

  variants: {
    fullColor: {
      true: {
        color: theme.colors.primaryOpacity100,
      },
    },
  },
});

// todo: once we allow library user to specify onClicks, we should based on whether one is set set the cursor to not-allowed (if there is no onClick)
export const SystemMessageLink = styled.withConfig({
  displayName: "system-message-link",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity100,

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export const SlashCommand = styled.withConfig({
  displayName: "slash-command",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity60,
  fontSize: theme.fontSizes.m,
  userSelect: "none",
});

export const UnknownReply = styled.withConfig({
  displayName: "unknown-reply",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity50,
  fontSize: theme.fontSizes.m,
  userSelect: "none",
  fontStyle: "italic",
});

export const UnknownReplyIcon = styled.withConfig({
  displayName: "unknown-reply-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  backgroundColor: theme.colors.backgroundTertiary,
  borderRadius: "50%",
  marginRight: theme.space.small,
  padding: 4, // 16 - size of svg (12), aka do not tie up to theme
});

export const ForwardIcon = styled.withConfig({
  displayName: "forward-icon",
  componentId: commonComponentId,
})(SvgFromUrl, {
  color: theme.colors.textMuted,
});

export const SlashCommandText = styled.withConfig({
  displayName: "slash-command-text",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.link,
});

export const RoleIcon = styled.withConfig({
  displayName: "role-icon",
  componentId: commonComponentId,
})("img", {
  marginLeft: theme.space.small,
  width: 20,
  height: 20,
});
