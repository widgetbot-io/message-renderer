import React, { useState } from "react";
import * as Styles from "./style";

interface SpoilerProps {
  children: React.ReactNode;
}

function Spoiler({ children }: SpoilerProps) {
  const [shown, setShown] = useState(false);

  return (
    <Styles.Spoiler data-show={shown} onClick={() => setShown(true)}>
      {children}
    </Styles.Spoiler>
  );
}

export default Spoiler;
