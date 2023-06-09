import * as Styles from "./style";
import Reaction from "../Reactions/Reaction";
import React from "react";
import { APIReaction } from "discord-api-types/v10";

interface ReactionsProps {
  reactions: APIReaction[];
}

function Reactions(props: ReactionsProps) {
  return (
    <Styles.Reactions>
      {props.reactions.map((reaction) => (
        <Reaction
          key={
            reaction.emoji.animated + reaction.emoji.id + reaction.emoji.name
          }
          reaction={reaction}
        />
      ))}
    </Styles.Reactions>
  );
}

export default Reactions;
