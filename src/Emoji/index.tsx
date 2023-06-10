import * as Styles from "./style";
import React, { ReactNode, useMemo } from "react";
import emoji from "react-easy-emoji";
import { emojiCss } from "./style";
import Tooltip from "../Tooltip";
import { findDefaultEmojiByUnicode } from "../emojiData";
import { commonComponentId, styled } from "../Stitches/stitches.config";

type EmojiTooltipProps = {
  key?: number;
  tooltipContent: string;
  children: ReactNode;
  disabled: boolean;
};

function EmojiTooltip({
  children,
  disabled,
  key,
  tooltipContent,
}: EmojiTooltipProps) {
  if (disabled) return <>{children}</>;

  return (
    <Tooltip
      key={key}
      placement="top"
      overlay={`:${tooltipContent}:`}
      mouseEnterDelay={0.6}
      mouseLeaveDelay={0}
    >
      {children}
    </Tooltip>
  );
}

export type EmojiProps = {
  resolveNames?: boolean;
  disableTooltip?: boolean;
  emojiName: string;
  enlarged?: boolean;
} & React.ComponentPropsWithRef<"img">;

function Emoji({
  src,
  disableTooltip,
  emojiName,
  enlarged,
  ...props
}: EmojiProps) {
  const defaultEmoji = useMemo(
    () => findDefaultEmojiByUnicode(emojiName),
    [emojiName]
  );

  if (src !== undefined)
    return (
      <EmojiTooltip tooltipContent={emojiName} disabled={disableTooltip}>
        <Styles.Emoji
          {...props}
          enlarged={enlarged}
          src={src}
          alt={emojiName}
        />
      </EmojiTooltip>
    );

  if (defaultEmoji === undefined) return <>{emojiName}</>;

  return emoji(defaultEmoji.emoji, (code, string, key) => (
    <EmojiTooltip
      tooltipContent={defaultEmoji.keywords[0]}
      disabled={disableTooltip}
      key={key}
    >
      <Styles.Emoji
        {...props}
        enlarged={enlarged}
        src={`https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/${code}.svg`}
        alt={string}
      />
    </EmojiTooltip>
  ));
}

export const Twemoji = styled.withConfig({
  displayName: "twemoji",
  componentId: commonComponentId,
})(Emoji, emojiCss);

export default Emoji;
