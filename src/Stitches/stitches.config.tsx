import { createStitches } from "@stitches/react";
import React, { JSXElementConstructor } from "react";
import OverridableStyledComponent from "@root/Stitches/OverridableStyledComponent";

const stitches = createStitches({
  theme: {
    colors: {
      primaryOpacity10: "rgba(255, 255, 255, 0.1)",
      primaryOpacity20: "rgba(255, 255, 255, 0.2)",
      primaryOpacity50: "rgba(255, 255, 255, 0.5)",
      primaryOpacity80: "rgba(255, 255, 255, 0.8)",
      primaryOpacity100: "rgba(255, 255, 255, 1.0)",
      textMuted: "rgb(163, 166, 170)",
      interactiveNormal: "rgb(185, 187, 190)",
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

type Element = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export function styled<
  Comp extends Element,
  Css extends
    | string
    | ((args: { as?: Element } & Record<string, unknown>) => string)
>(component: Comp, overrideClassName: string, cssClass: Css) {
  function componentToReturn<TStitchesProps extends { as?: Element }>(
    props: React.ComponentProps<
      TStitchesProps extends { as: Element } ? TStitchesProps["as"] : Comp
    > & {
      stitchesProps?: TStitchesProps &
        (Css extends (arg: infer P) => string ? P : {}) &
        (React.ComponentProps<Comp> extends { stitchesProps: infer P }
          ? P
          : {});
    }
  ) {
    const { stitchesProps, ...restOfProps } = props;

    const actualClassName =
      cssClass instanceof Function ? cssClass(stitchesProps) : cssClass;

    return (
      <OverridableStyledComponent
        {...(restOfProps as React.ComponentProps<Comp>)}
        component={component}
        className={actualClassName}
        overrideClassName={overrideClassName}
      />
    );
  }

  componentToReturn.toString = () => `.${overrideClassName}`;

  return componentToReturn;
}

export const { theme, globalCss, keyframes, css } = stitches;
