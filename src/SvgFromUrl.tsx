import React from "react";

type SvgFromUrlProps = {
  href: string;
  width: number;
  height: number;
};

function SvgFromUrl({ href, width, height }: SvgFromUrlProps) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use href={`${href}#svg`} width={width} height={height} />
    </svg>
  );
}

export default SvgFromUrl;
