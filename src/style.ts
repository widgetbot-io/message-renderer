import {commonComponentId, styled} from "@root/Stitches/stitches.config";

export const MessageGroup = styled.withConfig({
  displayName: "message-group",
  componentId: commonComponentId,
})(
  "div",
  {
    marginTop: 17,
  }
);
