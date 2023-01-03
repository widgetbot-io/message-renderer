import { Message } from "@types";
import styled, { ThemedReactEmotionInterface } from "react-emotion";
import { Theme } from "@utils/emotion";

export * from "@utils/emotion";

export interface Context extends Theme {
  message: Message;
}
export default styled as ThemedReactEmotionInterface<Context>;
