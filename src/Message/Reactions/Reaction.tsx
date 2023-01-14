import * as Styles from "./style";
import React, { useCallback, useMemo } from "react";
import Tooltip from "@root/Tooltip";
import { Message_reactions } from "@types";
import { findDefaultEmojiByUnicode } from "@root/emoji";

interface ReactionProps {
  reaction: Message_reactions;
}

function Reaction(props: ReactionProps) {
  const emojiUrl = useMemo(() => {
    if (props.reaction.emojiId === null) {
      return null;
    }

    return `https://cdn.discordapp.com/emojis/${props.reaction.emojiId}.${
      props.reaction.animated ? "gif" : "webp"
    }?v=1&size=32&quality=lossless`;
  }, [props.reaction.emojiId, props.reaction.animated]);

  const Emoji = useCallback(() => {
    const url = `https://cdn.discordapp.com/emojis/${props.reaction.emojiId}.${
      props.reaction.animated ? "gif" : "webp"
    }?v=1&size=64&quality=lossless`;

    return (
      <Styles.ReactionTooltip>
        {props.reaction.emojiId !== null ? (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emojiName}
            stitchesProps={{ enlarged: true }}
            src={url}
            disableTooltip
            enlarged
          />
        ) : (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emojiName}
            stitchesProps={{ enlarged: true }}
            disableTooltip
            enlarged
          />
        )}
        :
        {props.reaction.emojiId !== null
          ? props.reaction.emojiName
          : findDefaultEmojiByUnicode(props.reaction.emojiName)
              ?.keywords?.[0] ?? "unknown emoji"}
        :
      </Styles.ReactionTooltip>
    );
  }, [
    props.reaction.animated,
    props.reaction.emojiId,
    props.reaction.emojiName,
  ]);

  return (
    <Tooltip overlay={<Emoji />} placement="top" mouseEnterDelay={0.5}>
      <Styles.Reaction>
        {emojiUrl ? (
          <Styles.ReactionEmoji
            src={emojiUrl}
            emojiName={props.reaction.emojiName}
            disableTooltip
          />
        ) : (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emojiName}
            disableTooltip
          />
        )}
        <Styles.ReactionCount>{props.reaction.count}</Styles.ReactionCount>
      </Styles.Reaction>
    </Tooltip>
  );
}

export default Reaction;
