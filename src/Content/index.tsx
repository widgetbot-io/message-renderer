import React, { Children, memo, ReactChild, ReactNode, useMemo } from "react";
import Markdown, { LinkMarkdown } from "@root/markdown/render";
import { Message as MessageData, Message_referencedMessage } from "@types";
import {
  EditedBase,
  FailedInteraction,
  TypingIndicator,
} from "@root/Message/elements";
import Tooltip from "@root/Tooltip";
import Moment from "moment/moment";
import Reactions from "@root/Message/Reactions";
import Attachment from "@root/Content/Attachment";
import StickerIcon from "@images/discordAssets/sticker-icon.svg";
import Danger from "@images/discordAssets/danger.svg";
import AttachmentIcon from "@images/discordAssets/attachment-icon.svg";
import CommandIcon from "@images/discordAssets/command-icon.svg";
import { ReplyIconBase } from "@root/Content/elements";
import Sticker from "@root/Content/Sticker";
import ThreadButton from "@root/Content/Thread/ThreadButton";
import Message from "../Message";
import Embed from "@root/Content/Embed";
import * as Styles from "./style";

interface EditedProps {
  editedAt: number;
}

const Edited = memo((props: EditedProps) => {
  return (
    <Tooltip
      overlay={Moment(props.editedAt).format("LLLL")}
      placement="top"
      mouseEnterDelay={1}
    >
      <EditedBase>(edited)</EditedBase>
    </Tooltip>
  );
});

interface ReplyIconProps {
  message: ContentProps["message"];
}

function ReplyIcon({ message }: ReplyIconProps) {
  if (message.interaction)
    return <ReplyIconBase src={CommandIcon} alt="command" />;

  if (message.stickers.length > 0)
    return <ReplyIconBase src={StickerIcon} alt="sticker" />;

  if (message.attachments.length > 0 || message.embeds.length > 0)
    return <ReplyIconBase src={AttachmentIcon} alt="attachment" />;

  return null;
}

interface MessageAccessoriesProps {
  active: boolean;
  children?: ReactNode;
}

function MessageAccessories({ children, active }: MessageAccessoriesProps) {
  if (!active || !children || Children.count(children) === 0) return <></>;

  return <Styles.MessageAccessories>{children}</Styles.MessageAccessories>;
}

interface ContentCoreProps {
  children: ReactChild;
  showTooltip: boolean;
  referencedMessage: Message_referencedMessage | null;
}

function ContentCore(props: ContentCoreProps) {
  if (!props.showTooltip) return <>{props.children}</>;

  return (
    <Tooltip
      overlay={
        <Styles.ContentMessageTooltip>
          <Message message={props.referencedMessage} isFirstMessage={true} />
        </Styles.ContentMessageTooltip>
      }
      placement="top"
      trigger={["click"]}
    >
      {props.children}
    </Tooltip>
  );
}

interface ContentProps {
  message: Omit<MessageData, "referencedMessage"> & Partial<MessageData>;
  isReplyContent?: boolean;
  noThreadButton?: boolean;
}

function Content(props: ContentProps) {
  const dominantAccessoryText = useMemo(() => {
    if (!props.isReplyContent) return null;

    if (props.message.interaction) return "Click to see command";

    if (props.message.stickers.length > 0) return "Click to see sticker";

    if (props.message.attachments.length > 0 || props.message.embeds.length > 0)
      return "Click to see attachment";

    return null;
  }, [props.message.attachments, props.message.stickers, props.isReplyContent]);

  const embedImages = useMemo(() => {
    if (!props.message.embeds || props.message.embeds.length <= 1) return [];

    if (
      !props.message.embeds.every((e) => props.message.embeds[0].url === e.url)
    )
      return [];

    const images = props.message.embeds
      .reduce((acc, embed) => [...acc, embed.image], [])
      .filter((i) => i !== null && i !== undefined);

    if (images.length === 0) return [];

    return images;
  }, [props.message.embeds]);

  if (props.message.flags & (1 << 7)) {
    const fifteenMinutes = 15 * 60 * 1000;

    if (Date.now() - props.message.createdAt > fifteenMinutes)
      return (
        <FailedInteraction>
          <img src={Danger} alt="" width={16} height={16} /> The application did
          not respond
        </FailedInteraction>
      );

    return (
      <Styles.DeferredContent>
        <TypingIndicator width={25.5} height={7} style={{ marginRight: 5 }}>
          <g>
            <circle
              cx="3.5"
              cy="3.5"
              r="3.5"
              className="typing-1"
              fill="currentColor"
            />
            <circle
              cx="12.25"
              cy="3.5"
              r="3.5"
              className="typing-2"
              fill="currentColor"
            />
            <circle
              cx="21"
              cy="3.5"
              r="3.5"
              className="typing-3"
              fill="currentColor"
            />
          </g>
        </TypingIndicator>
        {props.message.author.name} is thinking...
      </Styles.DeferredContent>
    );
  }

  return (
    <>
      <Styles.Base isReplyContent={props.isReplyContent}>
        <ContentCore
          referencedMessage={props.message}
          showTooltip={props.isReplyContent}
        >
          <Styles.ContentContainer isReplyContent={props.isReplyContent}>
            {props.message.content.length > 0 ? (
              <>
                {props.message.author.isWebhook ? (
                  <LinkMarkdown mentions={props.message.mentions}>
                    {props.message.content}
                  </LinkMarkdown>
                ) : (
                  <Markdown mentions={props.message.mentions}>
                    {props.message.content}
                  </Markdown>
                )}
                {props.message.editedAt && (
                  <Edited editedAt={props.message.editedAt} />
                )}
              </>
            ) : (
              <Styles.ReplyAccessoryText>
                {dominantAccessoryText}
              </Styles.ReplyAccessoryText>
            )}
          </Styles.ContentContainer>
        </ContentCore>
        {props.isReplyContent && <ReplyIcon message={props.message} />}
      </Styles.Base>
      {!props.isReplyContent && (
        <MessageAccessories
          active={
            props.message.reactions !== null ||
            props.message.attachments.length > 0 ||
            props.message.stickers.length > 0 ||
            props.message.thread !== null ||
            (props.message.embeds !== null && props.message.embeds.length > 0)
          }
        >
          {props.message.attachments.map((attachment) => (
            <Attachment key={attachment.url} attachment={attachment} />
          ))}
          {props.message.stickers.map((sticker) => (
            <Sticker key={sticker.id} sticker={sticker} />
          ))}
          {props.message.embeds !== null && embedImages.length > 0 ? (
            <Embed
              key={props.message.embeds[0].url}
              embed={props.message.embeds[0]}
              images={embedImages}
            />
          ) : (
            props.message.embeds.map((embed) => (
              <Embed key={embed.url} embed={embed} images={undefined} />
            ))
          )}
          {props.message.reactions && (
            <Reactions reactions={props.message.reactions} />
          )}
          {!props.noThreadButton && props.message.thread && (
            <ThreadButton
              hasReply={props.message.referencedMessage !== null}
              thread={props.message.thread}
              messageId={props.message.thread.id}
              messageContent={props.message.content}
              messageType={props.message.type}
            />
          )}
        </MessageAccessories>
      )}
    </>
  );
}

export default memo(Content);
