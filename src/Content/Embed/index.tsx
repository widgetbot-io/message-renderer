import { Embed_image, Message_embeds } from "@types";
import GifVEmbed from "@root/Content/Embed/GifVEmbed";
import ImageEmbed from "@root/Content/Embed/ImageEmbed";
import VideoAttachment from "@root/Content/Attachment/VideoAttachment";
import { EmbedStyle } from "@root/Content/Embed/elements";
import numberToRgb from "@utils/numberToRgb";
import moment from "moment";
import { LinkMarkdown, parseEmbedTitle } from "@root/markdown/render";
import useSize from "@root/Content/Embed/useSize";
import EmbedVideo from "@root/Content/Embed/EmbedVideo";
import React from "react";

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

  return (
    <EmbedStyle.Base
      color={embedColor}
      thumbnailIsLarge={widthImage !== null}
      hasVideoWithThumbnail={
        embed.type.toLowerCase() === "video" && embed.thumbnail !== null
      }
    >
      <EmbedStyle.ContentAndThumbnail thumbnailIsLarge={isThumbnailLarge}>
        <EmbedStyle.Content>
          {embed.provider && (
            <EmbedStyle.Provider>{embed.provider.name}</EmbedStyle.Provider>
          )}
          {embed.author && (
            <EmbedStyle.Author>
              {embed.author.proxyIconUrl && (
                <EmbedStyle.AuthorIcon src={embed.author.proxyIconUrl} />
              )}
              <EmbedStyle.AuthorName>
                {embed.author.url ? (
                  <a href={embed.author.url} target="_blank">
                    {embed.author.name}
                  </a>
                ) : (
                  embed.author.name
                )}
              </EmbedStyle.AuthorName>
            </EmbedStyle.Author>
          )}
          {embed.title &&
            (embed.url !== null ? (
              <EmbedStyle.TitleWithUrl href={embed.url} target="_blank">
                {parseEmbedTitle(embed.title)}
              </EmbedStyle.TitleWithUrl>
            ) : (
              <EmbedStyle.Title>
                {parseEmbedTitle(embed.title)}
              </EmbedStyle.Title>
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
              <EmbedStyle.Description>
                <LinkMarkdown>{embed.description}</LinkMarkdown>
              </EmbedStyle.Description>
            )
          )}
          {embed.fields && embed.fields.length > 0 && (
            <EmbedStyle.Fields>
              {embed.fields.map((field) => (
                <EmbedStyle.Field
                  key={field.name + field.value}
                  inline={field.inline}
                >
                  <EmbedStyle.FieldName>
                    {parseEmbedTitle(field.name)}
                  </EmbedStyle.FieldName>
                  <EmbedStyle.FieldValue>
                    <LinkMarkdown>{field.value}</LinkMarkdown>
                  </EmbedStyle.FieldValue>
                </EmbedStyle.Field>
              ))}
            </EmbedStyle.Fields>
          )}
        </EmbedStyle.Content>
        {embed.thumbnail && embed.type.toLowerCase() !== "video" && (
          <EmbedStyle.Image
            src={embed.thumbnail.proxyUrl}
            // originalUrl={embed.thumbnail.url}
            width={widthThumbnail}
            height={heightThumbnail}
          />
        )}
      </EmbedStyle.ContentAndThumbnail>
      {(images === undefined || images?.length === 0) && embed.image && (
        <EmbedStyle.Image
          src={embed.image.proxyUrl}
          // originalUrl={embed.image.url}
          width={widthImage}
          height={heightImage}
          large={true}
        />
      )}
      {images?.length > 0 && (
        <EmbedStyle.Images amount={images.length}>
          {images.map((image) => (
            <EmbedStyle.MultiImageImageContainer key={image.url}>
              <EmbedStyle.Image
                // fillMaxSize={true}
                src={image.proxyUrl}
                // originalUrl={image.url}
                large={true}
                withMargin={false}
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
    </EmbedStyle.Base>
  );
}

export default Embed;
