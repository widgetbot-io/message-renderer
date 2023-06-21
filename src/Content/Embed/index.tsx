import GifVEmbed from "./GifVEmbed";
import ImageEmbed from "./ImageEmbed";
import VideoAttachment from "../Attachment/VideoAttachment";
import * as Styles from "./style";
import numberToRgb from "../../utils/numberToRgb";
import moment from "moment";
import { LinkMarkdown, parseEmbedTitle } from "../../markdown/render";
import useSize from "./useSize";
import EmbedVideo from "./EmbedVideo";
import React, { useMemo } from "react";
import { APIEmbed, APIEmbedImage, EmbedType } from "discord-api-types/v10";

export interface EmbedProps {
  embed: APIEmbed;
  images: APIEmbedImage[] | undefined;
}

function Embed({ embed, images }: EmbedProps) {
  if (embed.type === EmbedType.GIFV) return <GifVEmbed embed={embed} />;

  if (embed.type === EmbedType.Image) return <ImageEmbed embed={embed} />;

  if (embed.type === EmbedType.Video && !embed.thumbnail)
    return <VideoAttachment attachmentOrEmbed={embed} />;

  const embedColor =
    embed.color !== 0 && embed.color !== undefined
      ? numberToRgb(embed.color)
      : undefined;

  const { width: widthImage, height: heightImage } = useSize(
    embed.type,
    embed.image,
    "EmbedImage",
    images?.length > 0
  );

  const {
    width: widthThumbnail,
    height: heightThumbnail,
    isLarge: isThumbnailLarge,
  } = useSize(embed.type, embed.thumbnail, "EmbedThumbnail", undefined);

  const isEmbedThin = useMemo(
    () =>
      widthImage !== null ||
      (embed.type === EmbedType.Video && embed.thumbnail !== null),
    [widthImage, embed.type, embed.thumbnail]
  );

  return (
    <Styles.Embed style={{ borderLeftColor: embedColor }} thin={isEmbedThin}>
      <Styles.ContentAndThumbnail hasLargeThumbnail={isThumbnailLarge}>
        <Styles.Content>
          {embed.provider && (
            <Styles.Provider>{embed.provider.name}</Styles.Provider>
          )}
          {embed.author && (
            <Styles.Author>
              {embed.author.proxy_icon_url && (
                <Styles.AuthorIcon src={embed.author.proxy_icon_url} />
              )}
              <Styles.AuthorName>
                {embed.author.url ? (
                  <a href={embed.author.url} target="_blank" rel="noreferrer noopener">
                    {embed.author.name}
                  </a>
                ) : (
                  embed.author.name
                )}
              </Styles.AuthorName>
            </Styles.Author>
          )}
          {embed.title &&
            (embed.url !== undefined ? (
              <Styles.Title as="a" link href={embed.url} target="_blank">
                {parseEmbedTitle(embed.title)}
              </Styles.Title>
            ) : (
              <Styles.Title>{parseEmbedTitle(embed.title)}</Styles.Title>
            ))}
          {embed.type === EmbedType.Video ? (
            <EmbedVideo
              url={embed.video.url}
              proxyUrl={embed.video.proxy_url}
              width={embed.video.width}
              height={embed.video.height}
              thumbnail={embed.thumbnail.proxy_url}
            />
          ) : (
            embed.description && (
              <Styles.Description>
                <LinkMarkdown>{embed.description}</LinkMarkdown>
              </Styles.Description>
            )
          )}
          {embed.fields && embed.fields.length > 0 && (
            <Styles.Fields>
              {embed.fields.map((field) => (
                <Styles.Field
                  key={field.name + field.value}
                  inline={field.inline}
                >
                  <Styles.FieldName>
                    {parseEmbedTitle(field.name)}
                  </Styles.FieldName>
                  <Styles.FieldValue>
                    <LinkMarkdown>{field.value}</LinkMarkdown>
                  </Styles.FieldValue>
                </Styles.Field>
              ))}
            </Styles.Fields>
          )}
        </Styles.Content>
        {embed.thumbnail && embed.type !== EmbedType.Video && (
          <Styles.Image
            src={embed.thumbnail.proxy_url}
            // originalUrl={embed.thumbnail.url}
            width={widthThumbnail}
            height={heightThumbnail}
          />
        )}
      </Styles.ContentAndThumbnail>
      {(images === undefined || images?.length === 0) && embed.image && (
        <Styles.Image
          src={embed.image.proxy_url}
          // originalUrl={embed.image.url}
          width={widthImage}
          height={heightImage}
        />
      )}
      {images?.length > 0 && (
        <Styles.Images nImages={images.length as 1 | 2 | 3 | 4}>
          {images.map((image) => (
            <Styles.ImageGridImageContainer key={image.url}>
              <Styles.Image
                src={image.proxy_url}
                // originalUrl={image.url}
                withMargin
              />
            </Styles.ImageGridImageContainer>
          ))}
        </Styles.Images>
      )}

      {(embed.footer || embed.timestamp) && (
        <Styles.Footer>
          {embed.footer?.proxy_icon_url && (
            <Styles.FooterIcon src={embed.footer.proxy_icon_url} />
          )}
          {embed.footer?.text}
          {embed.timestamp && (
            <>
              {" • "}
              {moment(embed.timestamp).calendar()}
            </>
          )}
        </Styles.Footer>
      )}
    </Styles.Embed>
  );
}

export default Embed;
