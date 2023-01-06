import { styled, theme } from "@root/Stitches/stitches.config";

export const Base = styled("span", {
  display: "inline-flex",
});

export const Username = styled("span", {
  color: theme.colors.primary100,
  fontWeight: 500,
  fontSize: 16,
  display: "inline",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
});
