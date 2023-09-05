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

  variants: {
    clickable: {
      true: {
        "&:hover": {
          cursor: "pointer",
          textDecoration: "underline",
        },
      },
    },
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
  whiteSpace: "nowrap",
  lineHeight: `1.375rem`,
});

export const Avatar = styled.withConfig({
  displayName: "message-author-avatar",
  componentId: commonComponentId,
})("object", {
  position: "absolute",
  left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
  transform: "translateX(-50%)",
  marginTop: "calc(4px - .125rem)",
  borderRadius: "100%",
  width: 40,
  height: 40,
  zIndex: 1,
  backgroundColor: theme.colors.backgroundSecondary, // when the avatar is loading
  outline: "none",
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
