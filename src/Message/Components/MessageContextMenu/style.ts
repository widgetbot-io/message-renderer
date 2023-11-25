import * as ContextMenu from "@radix-ui/react-context-menu";
import {
  commonComponentId,
  styled,
  theme,
} from "../../../Stitches/stitches.config";

export const Content = styled.withConfig({
  displayName: "context-menu-content",
  componentId: commonComponentId,
})(ContextMenu.Content, {
  backgroundColor: theme.colors.backgroundFloating,
  fontFamily: theme.fonts.main,
  fontSize: theme.fontSizes.m,
  padding: theme.space.large,
  borderRadius: 4,
  minWidth: 188,
  maxWidth: 320,
});

export const Item = styled(ContextMenu.Item, {
  color: theme.colors.interactiveNormal,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: theme.space.medium,
  paddingBottom: theme.space.medium,
  paddingLeft: theme.space.large,
  paddingRight: theme.space.large,
  outline: "none",
  borderRadius: 2,
  marginTop: theme.space.xs,
  marginBottom: theme.space.xs,

  "&:hover": {
    backgroundColor: theme.colors.contextMenuItemHoverPrimary,
    color: theme.colors.primaryFull,
    cursor: "pointer",
  },

  variants: {
    isDanger: {
      true: {
        color: theme.colors.danger,

        "&:hover": {
          backgroundColor: theme.colors.danger,
        },
      },
    },
  },
});

export const ItemIcon = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Separator = styled(ContextMenu.Separator, {
  margin: theme.space.small,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.colors.backgroundModifierAccent,
});
