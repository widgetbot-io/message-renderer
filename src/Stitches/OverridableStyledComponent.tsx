import React, { JSXElementConstructor } from "react";

type Props<C extends keyof JSX.IntrinsicElements | React.ComponentType<any>> =
  React.ComponentProps<C> & {
    overrideClassName?: string;
    className?: string;
    Component: C;
  };

function OverridableStyledComponent<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>({ Component, overrideClassName, className, ...props }: Props<C>) {
  className ??= overrideClassName;

  return (
    <Component {...props} className={`${className} ${overrideClassName}`} />
  );
}

export default OverridableStyledComponent;
