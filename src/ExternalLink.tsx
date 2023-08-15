import type { HTMLProps } from "react";
import React from "react";
import { useConfig } from "./core/ConfigContext";

function ExternalLink(
  props: HTMLProps<HTMLAnchorElement> &
    Required<Pick<HTMLProps<HTMLAnchorElement>, "href">>
) {
  const { externalLinkOpenRequested } = useConfig();

  return (
    <a
      {...props}
      rel="noreferrer noopener"
      target="_blank"
      onClick={(event) => {
        if (externalLinkOpenRequested === undefined) return;

        event.preventDefault();

        externalLinkOpenRequested(props.href);
      }}
    />
  );
}

export default ExternalLink;
