import type { APIMessageComponent } from "discord-api-types/v10";
import { ComponentType } from "discord-api-types/v10";
import ActionRow from "./ActionRow";
import ButtonComponent from "./ButtonComponent";
import ContainerComponent from "./ContainerComponent";
import FileComponent from "./FileComponent";
import MediaGalleryComponent from "./MediaGalleryComponent";
import React from "react";
import SectionComponent from "./SectionComponent";
import SeparatorComponent from "./SeparatorComponent";
import TextDisplayComponent from "./TextDisplayComponent";
import ThumbnailComponent from "./ThumbnailComponent";
import type { ChatMessage } from "../../types";

interface ComponentProps {
  component: APIMessageComponent;
  message: ChatMessage;
}

function Component({ component, message }: ComponentProps) {
  switch (component.type) {
    case ComponentType.ActionRow:
      return <ActionRow actionRow={component} message={message} />;
    case ComponentType.Button:
      // @ts-expect-error TS2322 Type error not applicable (tl;dr: button emoji is not optional)
      return <ButtonComponent button={component} message={message} />;
    case ComponentType.Section:
      return <SectionComponent section={component} message={message} />;
    case ComponentType.TextDisplay:
      return <TextDisplayComponent textDisplay={component} message={message} />;
    case ComponentType.Thumbnail:
      return <ThumbnailComponent thumbnail={component} />;
    case ComponentType.MediaGallery:
      return <MediaGalleryComponent mediaGallery={component} />;
    case ComponentType.File:
      return <FileComponent file={component} />;
    case ComponentType.Separator:
      return <SeparatorComponent separator={component} />;
    case ComponentType.Container:
      return <ContainerComponent container={component} message={message} />;
    default:
      return null;
  }
}

export default Component;
