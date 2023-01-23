import React, { JSXElementConstructor } from "react";

export type Element = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type Props<C extends Element> = Omit<React.ComponentProps<C>, "ref"> & {
  overrideClassName?: string;
  className?: string;
  component: C;
  innerRef?: React.ForwardedRef<C>;
};

function OverridableStyledComponent<C extends Element>({
  component: Component,
  overrideClassName,
  className,
  innerRef,
  ...props
}: Props<C>) {
  className ??= "";

  return (
    // @ts-ignore
    <Component
      {...props}
      ref={innerRef}
      className={`${className} ${overrideClassName}`}
    />
  );
}

export default OverridableStyledComponent;
