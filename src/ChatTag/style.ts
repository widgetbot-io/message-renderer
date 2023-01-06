import { styled, theme } from "@root/Stitches/stitches.config";

export const VerifiedBot = styled("svg", {
  verticalAlign: "top",
  width: 15,
  height: 15,
  marginLeft: "-.25rem",
});

export const Tag = styled("span", {
  marginLeft: 4,
  fontSize: 10,
  textTransform: "uppercase",
  height: "fit-content",
  borderRadius: 3,
  padding: "1px 4px",
  alignSelf: "center",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.accent,
  color: theme.colors.primary100,
});
