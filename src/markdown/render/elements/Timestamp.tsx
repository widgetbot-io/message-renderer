import Moment from "moment";
import Tooltip from "../../../Tooltip";
import React from "react";
import {
  commonComponentId,
  css,
  styled,
  theme,
} from "../../../Stitches/stitches.config";

enum TimestampStyle {
  ShortTime = "t",
  LongTime = "T",
  ShortDate = "d",
  LongDate = "D",
  ShortDateTime = "f",
  LongDateTime = "F",
  RelativeTime = "R",
}

interface Props {
  data: {
    timestamp: `${number}`;
    style?: TimestampStyle;
  };
}

export function Timestamp({ data: { timestamp, style } }: Props) {
  const time = Moment(parseInt(timestamp) * 1000);

  // https://momentjs.com/docs/#/displaying/format/
  const formats: Record<
    Exclude<TimestampStyle, TimestampStyle.RelativeTime>,
    string
  > = {
    t: "LT",
    T: "LTS",
    d: "L",
    D: "LL",
    f: "LLL",
    F: "LLLL",
  };

  function displayTime(
    style: Exclude<TimestampStyle, TimestampStyle.RelativeTime>
  ) {
    return time.format(formats[style]);
  }

  return (
    <Tooltip
      mouseEnterDelay={0.1}
      placement="top"
      overlay={displayTime(TimestampStyle.LongDateTime)}
    >
      <TSSpan>
        {style === TimestampStyle.RelativeTime
          ? time.fromNow()
          : displayTime(style ?? TimestampStyle.ShortDateTime)}
      </TSSpan>
    </Tooltip>
  );
}

const TSSpan = styled.withConfig({
  displayName: "timestamp-span",
  componentId: commonComponentId,
})(
  "span",
  css({
    backgroundColor: theme.colors.primaryOpacity10,
    borderRadius: 3,
    padding: `0 ${theme.space.xs}`,
  })
);
