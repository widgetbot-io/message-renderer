import * as ContextMenu from "@radix-ui/react-context-menu";
import type { ReactElement } from "react";
import React, { useMemo } from "react";
import {
  ContextMenuItemType,
  IconType,
  useConfig,
} from "../../../core/ConfigContext";
import * as Styles from "./style";
import type { ChatMessage } from "../../../types";
import { error } from "../../../utils/error";
import SvgFromUrl from "../../../SvgFromUrl";

interface Props {
  children: ReactElement;
  message: ChatMessage;
}

export function MessageContextMenu({ children, message }: Props) {
  const { messageContextMenuItems } = useConfig();

  if (!messageContextMenuItems) return children;

  const menuItems = useMemo(
    () => messageContextMenuItems(message),
    [message, messageContextMenuItems]
  );

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <Styles.Content>
          {menuItems.map((value, index) => {
            switch (value.type) {
              case ContextMenuItemType.Separator:
                return <Styles.Separator key={`separator-${index}`} />;
              case ContextMenuItemType.Item:
                return (
                  <Styles.Item isDanger={value.isDanger} key={`item-${index}`}>
                    {value.content}{" "}
                    <Styles.ItemIcon>
                      {value.icon.type === IconType.Svg ? (
                        <SvgFromUrl
                          width={18}
                          height={18}
                          svg={value.icon.svg}
                        />
                      ) : (
                        <img
                          src={value.icon.url}
                          width={18}
                          height={18}
                          alt=""
                        />
                      )}
                    </Styles.ItemIcon>
                  </Styles.Item>
                );
              default:
                error("Unknown menu item type", value.type);
                return <>unknown menu item type</>;
            }
          })}
        </Styles.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
