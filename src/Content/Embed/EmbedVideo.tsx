import * as Styles from "./style";
import React, { ReactNode, useState } from "react";
import { APIEmbedThumbnail, APIEmbedVideo } from "discord-api-types/v10";
import useSize from "../Attachment/useSize";
import { getSvgUrl } from "../../core/svgs";
import VideoAttachment from "../Attachment/VideoAttachment";

interface ThumbnailWrapperProps {
  thumbnail?: APIEmbedThumbnail["url"];
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
  const [error, setError] = useState(false);

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

interface EmbedVideoProps extends Pick<APIEmbedVideo, "width" | "height"> {
  thumbnail?: APIEmbedThumbnail["url"];
  url: APIEmbedVideo["url"] | undefined;
  proxyUrl: APIEmbedVideo["proxy_url"] | undefined;
}

function EmbedVideo(props: EmbedVideoProps) {
  if (props.proxyUrl !== undefined)
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
