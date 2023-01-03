import {
  EmojiTooltipBase,
  ReactionBase,
  ReactionCountBase,
  ReactionEmojiBase,
} from "@root/Message/elements";
import React, { useCallback, useMemo } from "react";
import Tooltip from "rc-tooltip";
import { Message_reactions } from "@types";

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
      <EmojiTooltipBase>
        {props.reaction.emojiId !== null ? (
          <ReactionEmojiBase className="enlarged" src={url} />
        ) : (
          <ReactionEmojiBase className="enlarged" disableTooltip={true}>
            {props.reaction.emojiName}
          </ReactionEmojiBase>
        )}
        :
        {props.reaction.emojiId !== null
          ? props.reaction.emojiName
          : // todo: make work
            /* generalStore.emojis.get(props.reaction.emojiName)?.keywords[0] ?? */ "unknown emoji"}
        :
      </EmojiTooltipBase>
    );
  }, [
    props.reaction.animated,
    props.reaction.emojiId,
    props.reaction.emojiName,
  ]);

  return (
    <Tooltip overlay={<Emoji />} placement="top" mouseEnterDelay={0.5}>
      <ReactionBase>
        {emojiUrl ? (
          <ReactionEmojiBase src={emojiUrl} />
        ) : (
          <ReactionEmojiBase disableTooltip={true}>
            {props.reaction.emojiName}
          </ReactionEmojiBase>
        )}
        <ReactionCountBase>{props.reaction.count}</ReactionCountBase>
      </ReactionBase>
    </Tooltip>
  );
}

export default Reaction;
