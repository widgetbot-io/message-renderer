import { ReactionsBase } from "@root/Message/elements";
import Reaction from "@root/Message/Reactions/Reaction";
import { Message_reactions } from "@types";
import React from "react";

interface ReactionsProps {
  reactions: Message_reactions[];
}

function Reactions(props: ReactionsProps) {
  return (
    <ReactionsBase className="reactions-base">
      {props.reactions.map((reaction) => (
        <Reaction
          key={reaction.animated + reaction.emojiId + reaction.emojiName}
          reaction={reaction}
        />
      ))}
    </ReactionsBase>
  );
}

export default Reactions;
