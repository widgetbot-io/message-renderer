import { Twemoji } from "@root/Emoji/style";
import { css, styled, theme } from "@root/Stitches/stitches.config";

export const Reactions = styled(
  "div",
  "reactions",
  css({
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
    userSelect: "none",
  })
);

export const ReactionTooltip = styled(
  "div",
  "emoji-tooltip",
  css({
    display: "flex",
    alignItems: "center",
    gap: 8,
  })
);

export const ReactionEmoji = styled(
  Twemoji,
  "reaction-emoji",
  css({
    width: 16,
    height: 16,
  })
);

export const Reaction = styled(
  "span",
  "reaction",
  css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "4px 6px",
    borderRadius: 8,
    cursor: "not-allowed",
    backgroundColor: theme.colors.backgroundSecondary,
  })
);

export const ReactionCount = styled(
  "span",
  "reaction-count",
  css({
    marginLeft: 6,
    minWidth: 9,
    fontWeight: 500,
    fontSize: 14,
    color: theme.colors.primaryOpacity80,
  })
);
