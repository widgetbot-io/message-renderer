import * as Styles from "./style";
import React, { useCallback, useMemo } from "react";
import Tooltip from "@root/Tooltip";
import { findDefaultEmojiByUnicode } from "@root/emojiData";
import { APIReaction } from "discord-api-types/v10";

interface ReactionProps {
  reaction: APIReaction;
}

function Reaction(props: ReactionProps) {
  const emojiUrl = useMemo(() => {
    if (props.reaction.emoji.id === null) return null;

    return `https://cdn.discordapp.com/emojis/${props.reaction.emoji.id}.${
      props.reaction.emoji.animated ? "gif" : "webp"
    }?v=1&size=32&quality=lossless`;
  }, [props.reaction.emoji.id, props.reaction.emoji.animated]);

  const Emoji = useCallback(() => {
    const url = `https://cdn.discordapp.com/emojis/${props.reaction.emoji.id}.${
      props.reaction.emoji.animated ? "gif" : "webp"
    }?v=1&size=64&quality=lossless`;

    return (
      <Styles.ReactionTooltip>
        {props.reaction.emoji.id !== null ? (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emoji.name}
            src={url}
            disableTooltip
            enlarged
          />
        ) : (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emoji.name}
            disableTooltip
            enlarged
          />
        )}
        :
        {props.reaction.emoji.id !== null
          ? props.reaction.emoji.name
          : findDefaultEmojiByUnicode(props.reaction.emoji.name)
              ?.keywords?.[0] ?? "unknown emoji"}
        :
      </Styles.ReactionTooltip>
    );
  }, [
    props.reaction.emoji.animated,
    props.reaction.emoji.id,
    props.reaction.emoji.name,
  ]);

  return (
    <Tooltip overlay={<Emoji />} placement="top" mouseEnterDelay={0.5}>
      <Styles.Reaction>
        {emojiUrl ? (
          <Styles.ReactionEmoji
            src={emojiUrl}
            emojiName={props.reaction.emoji.name}
            disableTooltip
          />
        ) : (
          <Styles.ReactionEmoji
            emojiName={props.reaction.emoji.name}
            disableTooltip
          />
        )}
        <Styles.ReactionCount>{props.reaction.count}</Styles.ReactionCount>
      </Styles.Reaction>
    </Tooltip>
  );
}

export default Reaction;
