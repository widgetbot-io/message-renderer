import type { APITextDisplayComponent } from "discord-api-types/v10";
import { Markdown } from "../../markdown/render";
import React from "react";
import * as Styles from "./style";
import type { ChatMessage } from "../../types";

interface TextDisplayComponentProps {
  textDisplay: APITextDisplayComponent;
  message: ChatMessage;
}

function TextDisplayComponent({
  textDisplay,
  message,
}: TextDisplayComponentProps) {
  return (
    <Styles.TextDisplay>
      <Markdown mentions={message.mentions}>{textDisplay.content}</Markdown>
    </Styles.TextDisplay>
  );
}

export default TextDisplayComponent;
