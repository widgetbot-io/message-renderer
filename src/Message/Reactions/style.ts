import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";
import { Twemoji } from "../../Emoji";

export const Reactions = styled.withConfig({
  displayName: "reactions",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: theme.space.small,
  userSelect: "none",
});

export const ReactionTooltip = styled.withConfig({
  displayName: "emoji-tooltip",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  alignItems: "center",
  gap: theme.space.large,
});

export const ReactionEmoji = styled.withConfig({
  displayName: "reaction-emoji",
  componentId: commonComponentId,
})(Twemoji, {
  width: 16,
  height: 16,
});

export const Reaction = styled.withConfig({
  displayName: "reaction",
  componentId: commonComponentId,
})("span", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: `${theme.space.xs} ${theme.space.medium}`,
  borderRadius: 8,
  cursor: "not-allowed",
  backgroundColor: theme.colors.backgroundSecondary,
});

export const ReactionCount = styled.withConfig({
  displayName: "reaction-count",
  componentId: commonComponentId,
})("span", {
  marginLeft: theme.space.medium,
  minWidth: 9,
  fontWeight: 500,
  fontSize: theme.fontSizes.m,
  color: theme.colors.primaryOpacity80,
});
