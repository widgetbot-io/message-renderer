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
});

export const Avatar = styled.withConfig({
  displayName: "message-author-avatar",
  componentId: commonComponentId,
})("img", {
  position: "absolute",
  left: `calc(${theme.sizes.messageLeftPadding} / 2)`,
  transform: "translateX(-50%)",
  marginTop: 1,
  borderRadius: "100%",
  width: 40,
  height: 40,
  zIndex: 1,
});
