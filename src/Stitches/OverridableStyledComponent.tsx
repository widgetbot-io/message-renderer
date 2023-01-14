import React, { JSXElementConstructor } from "react";

type Props<C extends keyof JSX.IntrinsicElements | React.ComponentType<any>> =
  React.ComponentProps<C> & {
    overrideClassName?: string;
    className?: string;
    component: C;
  };

function OverridableStyledComponent<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>({ component: Component, overrideClassName, className, ...props }: Props<C>) {
  className ??= "";

  return (
    <Component {...props} className={`${className} ${overrideClassName}`} />
  );
}

export default OverridableStyledComponent;
