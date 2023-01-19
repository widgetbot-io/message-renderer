import { Embed_image, Message_embeds } from "@types";
import GifVEmbed from "@root/Content/Embed/GifVEmbed";
import ImageEmbed from "@root/Content/Embed/ImageEmbed";
import VideoAttachment from "@root/Content/Attachment/VideoAttachment";
import { EmbedStyle } from "@root/Content/Embed/elements";
import * as Styles from "./style";
import numberToRgb from "@utils/numberToRgb";
import moment from "moment";
import { LinkMarkdown, parseEmbedTitle } from "@root/markdown/render";
import useSize from "@root/Content/Embed/useSize";
import EmbedVideo from "@root/Content/Embed/EmbedVideo";
import React, { useMemo } from "react";

export interface EmbedProps {
  embed: Message_embeds;
  images: Embed_image[] | undefined;
}

function Embed({ embed, images }: EmbedProps) {
  if (embed.type.toLowerCase() === "gifv") return <GifVEmbed embed={embed} />;

  if (embed.type.toLowerCase() === "image") return <ImageEmbed embed={embed} />;

  if (embed.type.toLowerCase() === "video" && !embed.thumbnail)
    return <VideoAttachment attachmentOrEmbed={embed} />;

  const embedColor =
    embed.color !== 0 && embed.color !== null
      ? numberToRgb(embed.color)
      : undefined;

  const { width: widthImage, height: heightImage } = useSize(
    embed.type,
    embed.image,
    images?.length > 0
  );

  const {
    width: widthThumbnail,
    height: heightThumbnail,
    isLarge: isThumbnailLarge,
  } = useSize(embed.type, embed.thumbnail, undefined);

  const isEmbedThin = useMemo(
    () =>
      widthImage !== null ||
      (embed.type.toLowerCase() === "video" && embed.thumbnail !== null),
    [widthImage, embed.type, embed.thumbnail]
  );

  return (
    <Styles.Embed
      style={{ borderLeftColor: embedColor }}
      stitchesProps={{ thin: isEmbedThin }}
    >
      <Styles.ContentAndThumbnail
        stitchesProps={{ hasLargeThumbnail: isThumbnailLarge }}
      >
        <Styles.Content>
          {embed.provider && (
            <Styles.Provider>{embed.provider.name}</Styles.Provider>
          )}
          {embed.author && (
            <Styles.Author>
              {embed.author.proxyIconUrl && (
                <Styles.AuthorIcon src={embed.author.proxyIconUrl} />
              )}
              <Styles.AuthorName>
                {embed.author.url ? (
                  <a href={embed.author.url} target="_blank">
                    {embed.author.name}
                  </a>
                ) : (
                  embed.author.name
                )}
              </Styles.AuthorName>
            </Styles.Author>
          )}
          {embed.title &&
            (embed.url !== null ? (
              <Styles.Title
                stitchesProps={{ as: "a", link: true }}
                href={embed.url}
                target="_blank"
              >
                {parseEmbedTitle(embed.title)}
              </Styles.Title>
            ) : (
              <Styles.Title>{parseEmbedTitle(embed.title)}</Styles.Title>
            ))}
          {embed.type.toLowerCase() === "video" ? (
            <EmbedVideo
              url={embed.video.url}
              proxyUrl={embed.video.proxyUrl}
              width={embed.video.width}
              height={embed.video.height}
              thumbnail={embed.thumbnail.proxyUrl}
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
                  stitchesProps={{ inline: field.inline }}
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
        {embed.thumbnail && embed.type.toLowerCase() !== "video" && (
          <Styles.Image
            src={embed.thumbnail.proxyUrl}
            // originalUrl={embed.thumbnail.url}
            width={widthThumbnail}
            height={heightThumbnail}
          />
        )}
      </Styles.ContentAndThumbnail>
      {(images === undefined || images?.length === 0) && embed.image && (
        <Styles.Image
          src={embed.image.proxyUrl}
          // originalUrl={embed.image.url}
          width={widthImage}
          height={heightImage}
        />
      )}
      {images?.length > 0 && (
        <EmbedStyle.Images amount={images.length}>
          {images.map((image) => (
            <EmbedStyle.MultiImageImageContainer key={image.url}>
              <Styles.Image
                src={image.proxyUrl}
                // originalUrl={image.url}
                stitchesProps={{ withMargin: true }}
              />
            </EmbedStyle.MultiImageImageContainer>
          ))}
        </EmbedStyle.Images>
      )}

      {(embed.footer || embed.timestamp) && (
        <EmbedStyle.Footer>
          {embed.footer?.proxyIconUrl && (
            <EmbedStyle.FooterIcon src={embed.footer.proxyIconUrl} />
          )}
          {embed.footer?.text}
          {embed.timestamp && (
            <>
              {" • "}
              {moment(embed.timestamp).calendar()}
            </>
          )}
        </EmbedStyle.Footer>
      )}
    </Styles.Embed>
  );
}

export default Embed;
