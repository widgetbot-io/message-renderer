import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";

export const MessageAuthor = styled.withConfig({
  displayName: "message-author",
  componentId: commonComponentId,
})("span", {
  display: "inline-flex",
  wordBreak: "break-all",

  variants: {
    clickable: {
      true: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  },
  "@media (max-width: 319px)": {
    flexWrap: 'wrap'
  },
});

export const Username = styled.withConfig({
  displayName: "message-author-username",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity100,
  fontWeight: 500,
  fontSize: theme.fontSizes.l,
  display: "inline",
  verticalAlign: "baseline",
  lineHeight: `1.375rem`,

  variants: {
    clickable: {
      true: {
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    automod: {
      true: {
        color: theme.colors.automodUsername,
        fontWeight: 600,
      },
    },
  },
});

export const Avatar = styled.withConfig({
  displayName: "message-author-avatar",
  componentId: commonComponentId,
})("object", {
  borderRadius: "100%",
  width: 40,
  height: 40,
  backgroundColor: theme.colors.backgroundSecondary, // when the avatar is loading
  outline: "none",
  position: "absolute",
  left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
  transform: "translateX(-50%)",
  marginTop: "calc(4px - .125rem)",
  zIndex: 1,
  "@media (max-width: 319px)": {
    left: `calc(${theme.sizes.messageLeftPadding} / 3)`,
  }
},);

export const StillAvatar = styled.withConfig({
  displayName: "message-author-still-avatar",
  componentId: commonComponentId,
})(Avatar, {});

export const AnimatedAvatar = styled.withConfig({
  displayName: "message-author-animated-avatar",
  componentId: commonComponentId,
})(Avatar, {});

export const AnimatedAvatarTrigger = styled.withConfig({
  displayName: "message-author-animated-avatar-trigger",
  componentId: commonComponentId,
})("span", {
  [`& ${AnimatedAvatar}`]: {
    display: "none",
  },
});

export const AvatarFallback = styled.withConfig({
  displayName: "message-author-avatar-fallback",
  componentId: commonComponentId,
})("img", {
  borderRadius: "100%",
  width: 40,
  height: 40,
  zIndex: 1,
});
