import * as ContextMenu from "@radix-ui/react-context-menu";
import type { ReactElement } from "react";
import React, { useMemo } from "react";
import type {
  ContextMenuItem,
  PartialSvgConfig,
} from "../../../core/ConfigContext";
import {
  ContextMenuItemType,
  IconType,
  useConfig,
} from "../../../core/ConfigContext";
import * as Styles from "./style";
import type { ChatMessage } from "../../../types";
import SvgFromUrl from "../../../SvgFromUrl";
import type { SvgConfig } from "../../../core/svgs";

function MenuItem<SC extends PartialSvgConfig>({
  menuItem,
}: {
  menuItem: ContextMenuItem<SC>;
}) {
  switch (menuItem.type) {
    case ContextMenuItemType.Separator:
      return <Styles.Separator />;
    case ContextMenuItemType.SubMenu:
      return (
        <ContextMenu.Sub>
          <Styles.Item
            as={ContextMenu.SubTrigger}
            disabled={menuItem.isDisabled}
            isDisabled={menuItem.isDisabled}
          >
            {menuItem.content}
            <Styles.ItemIcon>
              <SvgFromUrl width={10} height={14} svg="MiscCaret" />
            </Styles.ItemIcon>
          </Styles.Item>
          <ContextMenu.Portal>
            <Styles.Content as={ContextMenu.SubContent} sideOffset={12}>
              {menuItem.items.map((subMenuItem, index) => (
                <MenuItem menuItem={subMenuItem} key={index} />
              ))}
            </Styles.Content>
          </ContextMenu.Portal>
        </ContextMenu.Sub>
      );
    case ContextMenuItemType.Item:
      return (
        <Styles.Item
          isDanger={menuItem.isDanger}
          isDisabled={menuItem.isDisabled}
          disabled={menuItem.isDisabled}
          onSelect={menuItem.onSelect}
        >
          {menuItem.content}
          <Styles.ItemIcon>
            {menuItem.icon.type === IconType.Svg ? (
              <SvgFromUrl
                width={18}
                height={18}
                svg={menuItem.icon.svg as keyof SvgConfig}
              />
            ) : (
              <img src={menuItem.icon.url} width={18} height={18} alt="" />
            )}
          </Styles.ItemIcon>
        </Styles.Item>
      );
  }
}

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
      <Styles.Trigger>{children}</Styles.Trigger>
      <ContextMenu.Portal>
        <Styles.Content>
          {menuItems.map((value, index) => (
            <MenuItem menuItem={value} key={index} />
          ))}
        </Styles.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
