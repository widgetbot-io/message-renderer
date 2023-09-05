import type { ComponentProps } from "react";
import React from "react";
import { useConfig } from "../core/ConfigContext";
import * as Styles from "./style";

type Props = ComponentProps<typeof Styles.ExternalLink> &
  Required<Pick<ComponentProps<typeof Styles.ExternalLink>, "href">>;

function ExternalLink(props: Props) {
  const { externalLinkOpenRequested } = useConfig();

  return (
    <Styles.ExternalLink
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
