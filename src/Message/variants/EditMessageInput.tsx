import React from "react";
import { useConfig } from "../../core/ConfigContext";
import type { ChatMessage } from "../../types";

import * as Styles from "../style/message";

interface EditMessageInputProps {
  message: ChatMessage;
}

function EditMessageInput(props: EditMessageInputProps) {
  const { messageEditOnSubmit } = useConfig();

  function submitMessageCallback(content: string) {
    if (!messageEditOnSubmit || !content) return;

    messageEditOnSubmit({
      ...props.message,
      content: content,
      edited_timestamp: new Date().getMilliseconds().toString(),
    });
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;

    if (e.key === "Enter") {
      submitMessageCallback(target.value);
    }
  }

  return (
    <Styles.MessageEditor
      autoCorrect={"false"}
      onKeyDown={onKeyDown}
      defaultValue={props.message.content}
    />
  );
}

export default EditMessageInput;
