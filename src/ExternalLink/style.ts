import { commonComponentId, styled } from "../Stitches/stitches.config";

export const ExternalLink = styled.withConfig({
  displayName: "external-link",
  componentId: commonComponentId,
})("a", {
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});
