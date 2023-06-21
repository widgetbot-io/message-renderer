import {
  APIButtonComponentWithCustomId,
  APIButtonComponentWithURL,
  APIMessage,
} from "discord-api-types/v10";
import * as Styles from "./style";
import React, { ComponentProps } from "react";
import SvgFromUrl from "../../SvgFromUrl";
import { ButtonStyle } from "discord-api-types/v10";
import Emoji from "../../Emoji";
import { useConfig } from "../../core/ConfigContext";

const buttonStyleMap: Record<
  ButtonStyle,
  ComponentProps<typeof Styles.ButtonComponent>["buttonStyle"]
> = {
  [ButtonStyle.Primary]: "primary",
  [ButtonStyle.Secondary]: "secondary",
  [ButtonStyle.Link]: "secondary",
  [ButtonStyle.Danger]: "danger",
  [ButtonStyle.Success]: "success",
};

interface ButtonComponentProps {
  button: APIButtonComponentWithCustomId | APIButtonComponentWithURL;
  message: APIMessage;
}

function ButtonComponent({ button, message }: ButtonComponentProps) {
  const { messageComponentButtonOnClick } = useConfig();

  if ("url" in button) {
    return (
      <Styles.ButtonComponent
        as="a"
        href={button.url}
        buttonStyle={buttonStyleMap[button.style]}
      >
        {button.emoji && (
          <Emoji
            emojiName={button.emoji.name}
            src={
              button.emoji.id &&
              `https://cdn.discordapp.com/emojis/${button.emoji.id}.${
                button.emoji.animated ? "gif" : "png"
              }`
            }
          />
        )}
        {button.label}
        <SvgFromUrl width={16} height={16} svg="IconLinkExternal" />
      </Styles.ButtonComponent>
    );
  }

  return (
    <Styles.ButtonComponent
      buttonStyle={buttonStyleMap[button.style]}
      onClick={() => messageComponentButtonOnClick?.(message, button.custom_id)}
    >
      {button.emoji && (
        <Emoji
          emojiName={button.emoji.name}
          src={
            button.emoji.id &&
            `https://cdn.discordapp.com/emojis/${button.emoji.id}.${
              button.emoji.animated ? "gif" : "png"
            }`
          }
        />
      )}
      {button.label}
    </Styles.ButtonComponent>
  );
}

export default ButtonComponent;
