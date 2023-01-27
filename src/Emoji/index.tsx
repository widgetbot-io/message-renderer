import * as Styles from "./style";
import React, { ReactNode, useMemo } from "react";
import { findDefaultEmojiByUnicode } from "@root/emoji";
import emoji from "react-easy-emoji";
import Tooltip from "@root/Tooltip";
import { styled } from "@root/Stitches/stitches.config";
import { emojiCss } from "./style";

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
  resolveNames = false,
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
          stitchesProps={{ enlarged }}
          src={src}
          alt={emojiName}
        />
      </EmojiTooltip>
    );

  if (defaultEmoji === undefined) return emojiName;

  return emoji(defaultEmoji.emoji, (code, string, key) => (
    <EmojiTooltip
      tooltipContent={defaultEmoji.keywords[0]}
      disabled={disableTooltip}
      key={key}
    >
      <Styles.Emoji
        {...props}
        stitchesProps={{ enlarged }}
        src={`https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/${code}.svg`}
        alt={string}
      />
    </EmojiTooltip>
  ));
}

export const Twemoji = styled(Emoji, "twemoji", emojiCss);

export default Emoji;
