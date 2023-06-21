import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";

export const Components = styled.withConfig({
  displayName: "message-components",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
});

export const ButtonComponent = styled.withConfig({
  displayName: "button-component",
  componentId: commonComponentId,
})("button", {
  padding: `${theme.space.large} ${theme.space.xxl}`,
  cursor: "pointer",
  fontWeight: 500,
  fontSize: theme.fontSizes.m,
  lineHeight: "16px",
  border: "none",
  borderRadius: 3,
  color: theme.colors.primaryOpacity100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.space.large,
  transition: "background-color .17s ease",
  textDecoration: "none",

  variants: {
    buttonStyle: {
      primary: {
        backgroundColor: theme.colors.buttonPrimaryBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonPrimaryHoverBackground,
        },
      },
      secondary: {
        backgroundColor: theme.colors.buttonSecondaryBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonSecondaryHoverBackground,
        },
      },
      danger: {
        backgroundColor: theme.colors.buttonDangerBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonDangerHoverBackground,
        },
      },
      success: {
        backgroundColor: theme.colors.buttonSuccessBackground,

        "&:hover": {
          backgroundColor: theme.colors.buttonSuccessHoverBackground,
        },
      },
    },
  },
});

export const ActionRow = styled.withConfig({
  displayName: "action-row",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "row",
  gap: theme.space.large,
});
