import { commonComponentId, styled, theme } from "../Stitches/stitches.config";

// export const VerifiedBot = styledOverridable(
//   "svg",
//   "chat-tag-verified-bot-svg",
//   css({
//     verticalAlign: "top",
//     width: 15,
//     height: 15,
//     marginLeft: "-.25rem",
//   }
// );

export const VerifiedBot = styled.withConfig({
  displayName: "chat-tag-verified-bot-svg",
  componentId: commonComponentId,
})("svg", {
  verticalAlign: "top",
  width: 15,
  height: 15,
  marginLeft: "-.25rem",
});

export const Tag = styled.withConfig({
  displayName: "chat-tag",
  componentId: commonComponentId,
})("span", {
  marginLeft: theme.space.small,
  fontSize: theme.fontSizes.xs,
  textTransform: "uppercase",
  height: "fit-content",
  borderRadius: 3,
  padding: `${theme.space.xxs} ${theme.space.small}`,
  alignSelf: "center",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.accent,
  color: theme.colors.primaryOpacity100,
});
