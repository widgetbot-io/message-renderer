import {
  commonComponentId,
  styled,
  theme,
} from "../../../../Stitches/stitches.config";

export const Mention = styled.withConfig({
  displayName: "mention",
  componentId: commonComponentId,
})("span", {
  backgroundColor: `var(--mention-color, ${theme.colors.mentionBackground})`,
  color: theme.colors.mentionForeground,
  borderRadius: 3,
  padding: `0 ${theme.space.xs}`,
  fontWeight: 500,
  transition: "background-color 50ms ease-out,color 50ms ease-out",

  variants: {
    canBeClicked: {
      true: {
        "&:hover": {
          backgroundColor: `var(--mention-color-hover, ${theme.colors.mentionBackgroundHover})`,
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
