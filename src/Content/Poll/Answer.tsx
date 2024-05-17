import React from "react";
import type { APIPollAnswer } from "discord-api-types/v10";
import * as Styles from "./style";
import { getEmojiUrl } from "../../utils/getEmojiUrl";
import { t } from "i18next";

interface AnswerProps {
  answer: APIPollAnswer;
  votes: number;
  percentage: number;
}

export function Answer({ answer, votes, percentage }: AnswerProps) {
  return (
    <Styles.Answer>
      <Styles.AnswerBar
        style={{
          width: `${percentage}%`,
        }}
      />
      {answer.poll_media.emoji && (
        <Styles.AnswerEmoji
          emojiName={answer.poll_media.emoji.name ?? "Unknown"}
          src={
            answer.poll_media.emoji.id
              ? getEmojiUrl({
                  id: answer.poll_media.emoji.id,
                  animated: answer.poll_media.emoji.animated ?? false,
                })
              : undefined
          }
        />
      )}
      <Styles.AnswerName>{answer.poll_media.text}</Styles.AnswerName>
      <Styles.AnswerVotes>
        {t("polls.n_votes", { count: votes })}
      </Styles.AnswerVotes>
      <Styles.AnswerPercentage>
        {t("polls.vote_percentage", { percentage })}
      </Styles.AnswerPercentage>
    </Styles.Answer>
  );
}
