import * as Styles from "./style";
import Reaction from "@root/Message/Reactions/Reaction";
import { Message_reactions } from "@types";
import React from "react";

interface ReactionsProps {
  reactions: Message_reactions[];
}

function Reactions(props: ReactionsProps) {
  return (
    <Styles.Reactions>
      {props.reactions.map((reaction) => (
        <Reaction
          key={reaction.animated + reaction.emojiId + reaction.emojiName}
          reaction={reaction}
        />
      ))}
    </Styles.Reactions>
  );
}

export default Reactions;
