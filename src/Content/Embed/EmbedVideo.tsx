import { Embed_thumbnail, Embed_video } from "@types";
import * as Styles from "./style";
import VideoAttachment from "@root/Content/Attachment/VideoAttachment";
import React, { ReactNode, useState } from "react";
import useSize from "@root/Content/Attachment/useSize";
import { getSvgUrl } from "@root/core/SvgContext";

interface ThumbnailWrapperProps {
  thumbnail?: Embed_thumbnail["url"];
  children: ReactNode;
  width: number;
  height: number;
}

function ThumbnailWrapper({
  thumbnail,
  width,
  height,
  children,
}: ThumbnailWrapperProps) {
  const [hideThumbnail, setHideThumbnail] = useState(false);
  const [error, setError] = useState(true);

  const { width: adjustedWidth, height: adjustedHeight } = useSize(
    width,
    height
  );

  if (!thumbnail || hideThumbnail) return <>{children}</>;

  const discordImageFailure = getSvgUrl("MiscDiscordImageFailure");

  return (
    <Styles.VideoThumbnail
      onClick={() => setHideThumbnail(true)}
      onError={() => setError(true)}
      style={{
        width: adjustedWidth,
        height: adjustedHeight,
        backgroundImage: `url(${error ? discordImageFailure : thumbnail})`,
      }}
    >
      <Styles.VideoThumbnailPlayButtonContainer>
        <Styles.VideoThumbnailPlayButton
          width={12}
          height={12}
          svg="IconPlay"
        />
      </Styles.VideoThumbnailPlayButtonContainer>
    </Styles.VideoThumbnail>
  );
}

interface EmbedVideoProps extends Pick<Embed_video, "width" | "height"> {
  thumbnail?: Embed_thumbnail["url"];
  url: Embed_video["url"] | null;
  proxyUrl: Embed_video["proxyUrl"] | null;
}

function EmbedVideo(props: EmbedVideoProps) {
  if (props.proxyUrl !== null)
    return (
      <ThumbnailWrapper
        thumbnail={props.thumbnail}
        width={props.width}
        height={props.height}
      >
        <VideoAttachment
          attachmentOrEmbed={{
            width: props.width,
            height: props.height,
            url: props.proxyUrl,
          }}
        />
      </ThumbnailWrapper>
    );

  const url = new URL(props.url);
  url.searchParams.set("autoplay", "1");
  url.searchParams.set("auto_play", "1");

  return (
    <ThumbnailWrapper
      thumbnail={props.thumbnail}
      width={props.width}
      height={props.height}
    >
      <Styles.VideoIframe
        width={400}
        height={225}
        src={url.toString()}
        allowFullScreen={true}
      />
    </ThumbnailWrapper>
  );
}

export default EmbedVideo;
