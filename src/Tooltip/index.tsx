import RcTooltip from "rc-tooltip";
import type { ReactNode } from "react";
import React from "react";

export const tooltipPrefix = "message-renderer-rc-tooltip";
export const tooltipAnimPrefix = "tooltip-anim";
export const tooltipAnimDurationMs = 100;

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
    <RcTooltip
      {...props}
      prefixCls={tooltipPrefix}
      transitionName={tooltipAnimPrefix}
      transitionAppear
      transitionAppearTimeout={tooltipAnimDurationMs}
      transitionEnter
      transitionEnterTimeout={tooltipAnimDurationMs}
      transitionLeave
      transitionLeaveTimeout={tooltipAnimDurationMs}
      destroyTooltipOnHide
    >
      {children}
    </RcTooltip>
  );
}
export default Tooltip;
