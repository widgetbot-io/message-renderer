import React, { useMemo } from "react";
import type { APIPoll } from "discord-api-types/v10";
import * as Styles from "./style";
import { Answer } from "./Answer";
import { t } from "i18next";

interface PollProps {
  poll: APIPoll;
}

export function Poll({ poll }: PollProps) {
  const timeLeft =
    (new Date(poll.expiry).getTime() - new Date().getTime()) / 1000;

  const isClosed = timeLeft <= 0;

  const nVotes = useMemo(() => {
    if (!poll.results?.answer_counts) return 0;

    return poll.results.answer_counts.reduce(
      (acc, { count }) => acc + count,
      0
    );
  }, [poll.results?.answer_counts]);

  const voteCountsPerAnswer = poll.results?.answer_counts
    .map((answer) => ({
      [answer.id]: {
        count: answer.count,
        percentage: Math.floor((answer.count / nVotes) * 100),
      },
    }))
    .reduce((acc, answer) => ({ ...acc, ...answer }), {});

  return (
    <Styles.Poll>
      <Styles.Name>{poll.question.text}</Styles.Name>
      <Styles.Answers>
        {poll.answers.map((answer) => (
          <Answer
            key={answer.answer_id}
            answer={answer}
            votes={voteCountsPerAnswer?.[answer.answer_id]?.count ?? 0}
            percentage={
              voteCountsPerAnswer?.[answer.answer_id]?.percentage ?? 0
            }
          />
        ))}
      </Styles.Answers>
      <Styles.Footer>
        {t("polls.n_votes", { count: nVotes })}
        <Styles.FooterSeparator>•</Styles.FooterSeparator>
        {isClosed ? t("polls.closed") : t("polls.time_left", { timeLeft })}
      </Styles.Footer>
    </Styles.Poll>
  );
}
