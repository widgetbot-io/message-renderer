import { createStitches } from "@stitches/react";
import React, { JSXElementConstructor } from "react";
import OverridableStyledComponent from "@root/Stitches/OverridableStyledComponent";

const stitches = createStitches({
  theme: {
    colors: {
      primary10: "rgba(255, 255, 255, 0.1)",
      primary20: "rgba(255, 255, 255, 0.2)",
      primary50: "rgba(255, 255, 255, 0.5)",
      primary80: "rgba(255, 255, 255, 0.8)",
      primary100: "rgba(255, 255, 255, 1.0)",
      accent: "#5865f2",
      background: "#36393f",
      backgroundSecondary: "#2f3136",
      backgroundTertiary: "#202225",
      messageHover: "rgba(0, 0, 0, .05)",
      link: "#00b0f4",
      mentioned: "rgba(250, 166, 26, 0.1)",
      mentionedHover: "rgba(250, 168, 26, 0.08)",
      tooltipBackground: "#18191c",
      tooltipForeground: "#dcddde",
    },
  },
});

export function styled<
  Comp extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  Css extends string | ((args: Record<string, unknown>) => string)
>(component: Comp, overrideClassName: string, cssClass: Css) {
  const componentToReturn = (
    props: React.ComponentProps<Comp> & {
      stitchesProps?: Css extends (arg: infer P) => string ? P : {};
    }
  ) => {
    const { stitchesProps, ...restOfProps } = props;

    const actualClassName =
      cssClass instanceof Function ? cssClass(stitchesProps) : cssClass;

    return (
      <OverridableStyledComponent
        {...(restOfProps as React.ComponentProps<Comp>)}
        Component={component}
        className={actualClassName}
        overrideClassName={overrideClassName}
      />
    );
  };

  componentToReturn.toString = () => `.${overrideClassName}`;

  return componentToReturn;
}

export const { theme, globalCss, keyframes, css } = stitches;
