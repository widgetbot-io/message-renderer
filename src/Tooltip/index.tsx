import RcTooltip from "rc-tooltip";
import React, { ReactNode } from "react";

export const tooltipPrefix = "message-renderer-rc-tooltip";

type TooltipProps = {
  children: ReactNode;
  placement:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "rightTop"
    | "rightBottom"
    | "leftTop"
    | "leftBottom";
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  overlay: ReactNode;
} & Record<string, unknown>;

function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RcTooltip {...props} prefixCls={tooltipPrefix}>
      {children}
    </RcTooltip>
  );
}
export default Tooltip;
