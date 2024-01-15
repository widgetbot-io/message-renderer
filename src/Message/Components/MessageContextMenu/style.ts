import * as ContextMenu from "@radix-ui/react-context-menu";
import {
  commonComponentId,
  styled,
  theme,
} from "../../../Stitches/stitches.config";
import * as MessageStyles from "../../style/message";

export const Trigger = styled(ContextMenu.Trigger, {
  [`&[data-state="open"] ${MessageStyles.Message}`]:
    MessageStyles.messageHoverStyles,
});

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

export const Item = styled.withConfig({
  displayName: "context-menu-item",
  componentId: commonComponentId,
})(ContextMenu.Item, {
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

  '&[data-state="open"], &[data-highlighted]': {
    backgroundColor: theme.colors.contextMenuItemHoverPrimary,
    color: theme.colors.primaryFull,
    cursor: "pointer",
  },

  variants: {
    isDisabled: {
      true: {
        opacity: 0.7,
        cursor: "not-allowed",
      },
    },

    isDanger: {
      true: {
        color: theme.colors.danger,

        '&[data-state="open"], &[data-highlighted]': {
          backgroundColor: theme.colors.danger,
        },
      },
    },
  },
});

export const ItemIcon = styled.withConfig({
  displayName: "context-menu-item-icon",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 18,
  height: 18,
});

export const Separator = styled.withConfig({
  displayName: "context-menu-separator",
  componentId: commonComponentId,
})(ContextMenu.Separator, {
  margin: theme.space.small,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.colors.backgroundModifierAccent,
});
