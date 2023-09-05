import * as Styles from "./style";
import React, { useCallback, useMemo } from "react";
import Tooltip from "../../Tooltip";
import { findDefaultEmojiByUnicode } from "../../emojiData";
import type { APIReaction } from "discord-api-types/v10";
import { useTranslation } from "react-i18next";

interface ReactionProps {
  reaction: APIReaction;
}

function Reaction(props: ReactionProps) {
  const { t } = useTranslation();

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

    const emojiName = props.reaction.emoji.name ?? "unknown emoji";

    return (
      <Styles.ReactionTooltip>
        {props.reaction.emoji.id !== null ? (
          <Styles.ReactionEmoji
            emojiName={emojiName}
            src={url}
            disableTooltip
            enlarged
          />
        ) : (
          <Styles.ReactionEmoji emojiName={emojiName} disableTooltip enlarged />
        )}
        :
        {props.reaction.emoji.id !== null
          ? emojiName
          : findDefaultEmojiByUnicode(props.reaction.emoji.name ?? "")
              ?.keywords?.[0] ?? t("unknownEntities.emoji")}
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
            // @ts-expect-error TS2769 (can be null only in reaction emoji objects)
            emojiName={props.reaction.emoji.name}
            disableTooltip
          />
        ) : (
          <Styles.ReactionEmoji
            // @ts-expect-error TS2769 (can be null only in reaction emoji objects)
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
