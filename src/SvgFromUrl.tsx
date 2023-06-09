import React, { ComponentProps } from "react";
import { getSvgUrl, Svg } from "./core/svgs";

type SvgFromUrlProps = {
  width: number;
  height: number;
  svg: Svg;
};

function SvgFromUrl({
  svg,
  width,
  height,
  ...props
}: SvgFromUrlProps & ComponentProps<"svg">) {
  const svgUrl = getSvgUrl(svg);

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <use href={`${svgUrl}#svg`} width={width} height={height} />
    </svg>
  );
}

export default SvgFromUrl;
