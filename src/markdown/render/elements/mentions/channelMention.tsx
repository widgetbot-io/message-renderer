import * as Styles from "./style";
import * as React from "react";
import { ChannelType, Snowflake } from "discord-api-types/v10";
import { useConfig } from "../../../../core/ConfigContext";
import SimpleMarkdown from "simple-markdown";
import SvgFromUrl from "../../../../SvgFromUrl";
import type { Svg } from "../../../../core/svgs";

function getChannelTypeSvg(type: ChannelType): Svg {
  switch (type) {
    case ChannelType.GuildVoice:
      return "IconVoiceChannel";
    case ChannelType.GuildStageVoice:
      return "IconStageChannel";
    default:
      return "IconTextChannel";
  }
}

interface ChannelMentionProps {
  channelId: Snowflake;
}

function ChannelMention({ channelId }: ChannelMentionProps) {
  const { resolveChannel, channelMentionOnClick } = useConfig();

  const channel = resolveChannel(channelId);
  if (!channel) {
    return (
      <Styles.Mention>
        <Styles.MentionIcon
          as={SvgFromUrl}
          width={16}
          height={16}
          svg="IconTextChannel"
        />
        Unknown
      </Styles.Mention>
    );
  }

  const icon = getChannelTypeSvg(channel.type);

  return (
    <Styles.Mention
      onClick={() => channelMentionOnClick?.(channel)}
      canBeClicked={channelMentionOnClick !== undefined}
    >
      <Styles.MentionIcon as={SvgFromUrl} width={16} height={16} svg={icon} />
      {channel.name}
    </Styles.Mention>
  );
}

export const channelMention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: (source) => /^<#([0-9]+?)>/.exec(source),
  parse: ([, id]) => ({ id }),
  react: ({ id }, recurseParse, state) => (
    <ChannelMention channelId={id} key={state.key} />
  ),
};
