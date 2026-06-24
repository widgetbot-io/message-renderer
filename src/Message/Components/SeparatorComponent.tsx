import type { APISeparatorComponent } from "discord-api-types/v10";
import { SeparatorSpacingSize } from "discord-api-types/v10";
import React from "react";
import * as Styles from "./style";

interface SeparatorComponentProps {
  separator: APISeparatorComponent;
}

function SeparatorComponent({ separator }: SeparatorComponentProps) {
  return (
    <Styles.Separator
      spacing={
        separator.spacing === SeparatorSpacingSize.Large ? "large" : "small"
      }
      divider={separator.divider ?? true}
    />
  );
}

export default SeparatorComponent;
