import GifVEmbed from "./GifVEmbed";
import ImageEmbed from "./ImageEmbed";
import VideoAttachment from "../Attachment/VideoAttachment";
import * as Styles from "./style";
import { colorIntToRgba } from "../../utils/colorIntToCss";
import moment from "moment";
import { LinkMarkdown, parseEmbedTitle } from "../../markdown/render";
import useSize from "./useSize";
import EmbedVideo from "./EmbedVideo";
import React, { useMemo } from "react";
import type { APIEmbed, APIEmbedImage } from "discord-api-types/v10";
import { EmbedType } from "discord-api-types/v10";
import EmbeddedImage from "./EmbeddedImage";
import ExternalLink from "../../ExternalLink";

export interface EmbedProps {
  embed: APIEmbed;
  images: APIEmbedImage[] | undefined;
}

function Embed({ embed, images }: EmbedProps) {
  if (embed.type === undefined) {
    console.error("Embed: Embed type is undefined", embed);
    return null;
  }

  if (embed.type === EmbedType.GIFV) return <GifVEmbed embed={embed} />;

  if (embed.type === EmbedType.Image) return <ImageEmbed embed={embed} />;

  if (embed.type === EmbedType.Video && !embed.thumbnail)
    // @ts-expect-error TS2322 Type error not applicable (tl;dr: video embeds always have a width and height)
    return <VideoAttachment attachmentOrEmbed={embed} />;

  const embedColor =
    embed.color !== 0 && embed.color !== undefined
      ? colorIntToRgba(embed.color)
      : undefined;

  const { width: widthImage, height: heightImage } = useSize(
    embed.type,
    embed.image,
    "EmbedImage",
    !images || images.length > 0
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
          {embed.provider &&
            (embed.provider.url ? (
              <ExternalLink href={embed.provider.url}>
                <Styles.Provider>{embed.provider.name}</Styles.Provider>
              </ExternalLink>
            ) : (
              <Styles.Provider>{embed.provider.name}</Styles.Provider>
            ))}
          {embed.author && (
            <Styles.Author>
              {embed.author.proxy_icon_url && (
                <Styles.AuthorIcon src={embed.author.proxy_icon_url} />
              )}
              <Styles.AuthorName>
                {embed.author.url ? (
                  <ExternalLink href={embed.author.url}>
                    {embed.author.name}
                  </ExternalLink>
                ) : (
                  embed.author.name
                )}
              </Styles.AuthorName>
            </Styles.Author>
          )}
          {embed.title &&
            (embed.url !== undefined ? (
              <Styles.Title as={ExternalLink} link href={embed.url}>
                {parseEmbedTitle(embed.title)}
              </Styles.Title>
            ) : (
              <Styles.Title>{parseEmbedTitle(embed.title)}</Styles.Title>
            ))}
          {embed.type === EmbedType.Video && embed.video ? (
            <EmbedVideo
              url={embed.video.url}
              proxyUrl={embed.video.proxy_url}
              // @ts-expect-error TS2322 Type error not applicable (tl;dr: video embeds always have a width and height)
              width={embed.video.width}
              // @ts-expect-error TS2322 Type error not applicable (tl;dr: video embeds always have a width and height)
              height={embed.video.height}
              thumbnail={embed.thumbnail?.proxy_url}
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
          <EmbeddedImage
            embedImage={embed.thumbnail}
            width={widthThumbnail ?? undefined}
            height={heightThumbnail ?? undefined}
          />
        )}
      </Styles.ContentAndThumbnail>
      {(images === undefined || images?.length === 0) && embed.image && (
        <EmbeddedImage
          embedImage={embed.image}
          width={widthImage ?? undefined}
          height={heightImage ?? undefined}
        />
      )}
      {images && images.length > 0 && (
        <Styles.Images nImages={images.length as 1 | 2 | 3 | 4}>
          {images.map((image) => (
            <Styles.ImageGridImageContainer key={image.url}>
              <EmbeddedImage embedImage={image} withMargin />
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
