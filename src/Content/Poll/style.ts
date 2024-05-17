import {
  commonComponentId,
  styled,
  theme,
} from "../../Stitches/stitches.config";
import Emoji from "../../Emoji";

export const Poll = styled.withConfig({
  displayName: "poll",
  componentId: commonComponentId,
})("div", {
  padding: theme.space.xxl,
  backgroundColor: theme.colors.backgroundSecondary,
  borderRadius: theme.radii.sm,
  maxWidth: 440,
  minWidth: 270,
  width: "100%",
  boxSizing: "border-box",
});

export const Name = styled.withConfig({
  displayName: "name",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.textNormal,
  fontSize: theme.fontSizes.l,
  fontWeight: 500,
});

export const Answers = styled.withConfig({
  displayName: "answers",
  componentId: commonComponentId,
})("div", {
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
  marginTop: theme.space.large,
  marginBottom: theme.space.xxl,
});

export const Answer = styled.withConfig({
  displayName: "answer",
  componentId: commonComponentId,
})("div", {
  padding: `${theme.space.large} ${theme.space.xxl}`,
  borderRadius: theme.radii.sm,
  backgroundColor: theme.colors.pollBackground,
  display: "flex",
  gap: theme.space.large,
  flex: "1 0 auto",
  minHeight: 50,
  boxSizing: "border-box",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
});

const ANSWER_BAR_Z_INDEX = 1;
const ANSWER_CONTENTS_Z_INDEX = ANSWER_BAR_Z_INDEX + 1;

export const AnswerBar = styled.withConfig({
  displayName: "answer-bar",
  componentId: commonComponentId,
})("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  backgroundColor: theme.colors.backgroundModifier,
  zIndex: ANSWER_BAR_Z_INDEX,
});

export const AnswerName = styled.withConfig({
  displayName: "answer-name",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.textNormal,
  fontSize: theme.fontSizes.m,
  fontWeight: 600,
  marginRight: "auto",
  zIndex: ANSWER_CONTENTS_Z_INDEX,
});

export const AnswerVotes = styled.withConfig({
  displayName: "answer-votes",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.primaryOpacity100,
  fontWeight: 600,
  fontSize: theme.fontSizes.s,
  zIndex: ANSWER_CONTENTS_Z_INDEX,
});

export const AnswerPercentage = styled.withConfig({
  displayName: "answer-percentage",
  componentId: commonComponentId,
})("span", {
  color: theme.colors.textNormal,
  fontWeight: 600,
  fontSize: theme.fontSizes.l,
  zIndex: ANSWER_CONTENTS_Z_INDEX,
});

export const AnswerEmoji = styled.withConfig({
  displayName: "answer-emoji",
  componentId: commonComponentId,
})(Emoji, {
  width: 24,
  height: 24,
  zIndex: ANSWER_CONTENTS_Z_INDEX,
});

export const Footer = styled.withConfig({
  displayName: "footer",
  componentId: commonComponentId,
})("div", {
  fontSize: theme.fontSizes.m,
  color: theme.colors.textMuted,
});

export const FooterSeparator = styled.withConfig({
  displayName: "footer-separator",
  componentId: commonComponentId,
})("span", {
  margin: `0 ${theme.space.medium}`,
});
