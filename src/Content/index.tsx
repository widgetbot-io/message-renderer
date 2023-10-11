import type { ReactNode } from "react";
import React, { Children, memo, useMemo } from "react";
import Moment from "moment/moment";
import Message from "../Message";
import * as Styles from "./style";
import type { APIEmbedImage, APIMessage } from "discord-api-types/v10";
import { MessageFlags } from "discord-api-types/v10";
import Tooltip from "../Tooltip";
import SvgFromUrl from "../SvgFromUrl";
import Markdown, { LinkMarkdown } from "../markdown/render";
import Attachment from "./Attachment";
import Sticker from "./Sticker";
import Embed from "./Embed";
import Reactions from "../Message/Reactions";
import ThreadButton from "./Thread/ThreadButton";
import Components from "../Message/Components";
import getDisplayName from "../utils/getDisplayName";
import { useTranslation } from "react-i18next";

interface EditedProps {
  editedAt: string;
}

const Edited = memo((props: EditedProps) => {
  return (
    <Tooltip
      overlay={Moment(props.editedAt).format("LLLL")}
      placement="top"
      mouseEnterDelay={1}
    >
      <Styles.Edited>(edited)</Styles.Edited>
    </Tooltip>
  );
});

Edited.displayName = "Edited";

interface ReplyIconProps {
  message: ContentProps["message"];
}

function ReplyIcon({ message }: ReplyIconProps) {
  if (message.interaction)
    return <Styles.ReplyIcon width={20} height={20} svg="IconCommand" />;

  if (message.sticker_items && message.sticker_items?.length > 0)
    return <Styles.ReplyIcon width={20} height={20} svg="IconSticker" />;

  if (message.attachments.length > 0 || message.embeds.length > 0)
    return <Styles.ReplyIcon width={20} height={20} svg="IconAttachment" />;

  return null;
}

interface MessageAccessoriesProps {
  active: boolean;
  children?: ReactNode;
}

export function MessageAccessories({
  children,
  active,
}: MessageAccessoriesProps) {
  if (!active || !children || Children.count(children) === 0) return <></>;

  return <Styles.MessageAccessories>{children}</Styles.MessageAccessories>;
}

interface ContentCoreProps {
  children: ReactNode;
  showTooltip: boolean;
  referencedMessage: APIMessage | null;
}

function ContentCore(props: ContentCoreProps) {
  const { t } = useTranslation();

  if (!props.showTooltip) return <>{props.children}</>;

  return (
    <Tooltip
      overlay={
        <Styles.ContentMessageTooltip>
          {props.referencedMessage ? (
            <Message message={props.referencedMessage} isFirstMessage={true} />
          ) : (
            t("messageGeneric.deleted_or_unavailable")
          )}
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
  message: APIMessage;
  isReplyContent?: boolean;
  noThreadButton?: boolean;
}

function Content(props: ContentProps) {
  const { t } = useTranslation();

  const dominantAccessoryText = useMemo(() => {
    if (!props.isReplyContent) return null;

    if (props.message.interaction)
      return t("messageGeneric.slash_command_click");

    if (props.message.sticker_items && props.message.sticker_items?.length > 0)
      return t("messageGeneric.sticker_click");

    if (props.message.attachments.length > 0 || props.message.embeds.length > 0)
      return t("messageGeneric.attachment_click");

    return null;
  }, [props.message.attachments, props.message.stickers, props.isReplyContent]);

  const embedImages = useMemo(() => {
    if (
      !props.message.embeds ||
      props.message.embeds.length <= 1 ||
      props.message.embeds[0].url === undefined
    )
      return [];

    if (
      !props.message.embeds.every(
        (e) => e.url !== undefined && props.message.embeds[0].url === e.url
      )
    )
      return [];

    const images = props.message.embeds
      .reduce(
        (acc, embed) => [...acc, embed.image],
        [] as (APIEmbedImage | null | undefined)[]
      )
      .filter(
        (embedImage): embedImage is APIEmbedImage =>
          embedImage !== null && embedImage !== undefined
      );

    if (images.length === 0) return [];

    return images;
  }, [props.message.embeds]);

  if ((props.message.flags ?? 0) & MessageFlags.Loading) {
    const fifteenMinutes = 15 * 60 * 1000;

    if (
      Date.now() - new Date(props.message.timestamp).getTime() >
      fifteenMinutes
    )
      return (
        <Styles.FailedInteraction>
          <SvgFromUrl width={16} height={16} svg="IconDanger" />
          <span>The application did not respond</span>
        </Styles.FailedInteraction>
      );

    return (
      <Styles.DeferredContent>
        {/* todo: extract svg into something the lib user can change */}
        <Styles.TypingIndicator
          width={25.5}
          height={7}
          style={{ marginRight: 5 }}
        >
          <g>
            <Styles.TypingIndicatorCircle1
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill="currentColor"
            />
            <Styles.TypingIndicatorCircle2
              cx="12.25"
              cy="3.5"
              r="3.5"
              fill="currentColor"
            />
            <Styles.TypingIndicatorCircle3
              cx="21"
              cy="3.5"
              r="3.5"
              fill="currentColor"
            />
          </g>
        </Styles.TypingIndicator>
        {getDisplayName(props.message.author)} is thinking...
      </Styles.DeferredContent>
    );
  }

  return (
    <>
      <Styles.Base isReplyContent={props.isReplyContent}>
        <ContentCore
          referencedMessage={props.message}
          showTooltip={props.isReplyContent ?? false}
        >
          <Styles.ContentContainer isReplyContent={props.isReplyContent}>
            {props.message.content.length > 0 ? (
              <>
                {props.message.webhook_id !== undefined ? (
                  <LinkMarkdown mentions={props.message.mentions}>
                    {props.message.content}
                  </LinkMarkdown>
                ) : (
                  <Markdown mentions={props.message.mentions}>
                    {props.message.content}
                  </Markdown>
                )}
                {props.message.edited_timestamp && (
                  <Edited editedAt={props.message.edited_timestamp} />
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
            (props.message.reactions?.length ?? 0) > 0 ||
            props.message.attachments.length > 0 ||
            (props.message.sticker_items?.length ?? 0) > 0 ||
            props.message.thread !== undefined ||
            props.message.embeds?.length > 0 ||
            (props.message.components?.length ?? 0) > 0
          }
        >
          {props.message.attachments.map((attachment) => (
            <Attachment key={attachment.url} attachment={attachment} />
          ))}
          {props.message.sticker_items?.map((sticker) => (
            <Sticker key={sticker.id} sticker={sticker} />
          ))}
          {embedImages.length > 0 ? (
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
          {props.message.reactions && props.message.reactions?.length > 0 && (
            <Reactions reactions={props.message.reactions} />
          )}
          {(props.message.components?.length ?? 0) > 0 && (
            <Components
              components={props.message.components}
              message={props.message}
            />
          )}
          {!props.noThreadButton && props.message.thread && (
            <ThreadButton
              hasReply={props.message.referenced_message !== undefined}
              thread={props.message.thread}
              messageId={props.message.id}
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
