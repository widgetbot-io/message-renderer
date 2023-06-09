import {commonComponentId, styled} from "./Stitches/stitches.config";

export const MessageGroup = styled.withConfig({
  displayName: "message-group",
  componentId: commonComponentId,
})(
  "div",
  {
    marginTop: 17,
  }
);
