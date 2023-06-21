import {
  commonComponentId,
  styled,
  theme,
} from "../../../../Stitches/stitches.config";

export const Mention = styled.withConfig({
  displayName: "mention",
  componentId: commonComponentId,
})("span", {
  backgroundColor: theme.colors.mentionBackground,
  color: theme.colors.mentionForeground,
  borderRadius: 3,
  padding: theme.space.xs,
  fontWeight: 500,

  variants: {
    canBeClicked: {
      true: {
        "&:hover": {
          // todo: go to full color, hard because of role colors and SSR..
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
    },
  },
});

export const MentionIcon = styled.withConfig({
  displayName: "mention-icon",
  componentId: commonComponentId,
})("span", {
  verticalAlign: "middle",
});
