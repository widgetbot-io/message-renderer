import { useMemo } from "react";
import { APIEmbedImage } from "discord-api-types/v10";

function useSize<Image extends APIEmbedImage>(
  type: string,
  image: APIEmbedImage | undefined,
  internalType: "EmbedImage" | "EmbedThumbnail",
  cancel?: boolean
) {
  const { width, height, isLarge } = useMemo(() => {
    if (cancel) return { width: null, height: null, isLarge: false };

    if (image === undefined)
      return { width: null, height: null, isLarge: false };

    if (internalType === "EmbedImage" || /^article|image$/i.test(type)) {
      const proposedWidth = 400;
      console.log("image", image);
      const proposedHeight = (proposedWidth / image.width) * image.height;

      const { width, height } =
        proposedHeight > proposedWidth
          ? { width: (300 / image.height) * image.width, height: 300 }
          : { width: proposedWidth, height: proposedHeight };

      return {
        width,
        height,
        isLarge: true,
      };
    }

    const { imageHeight, imageWidth } =
      image.width > image.height
        ? { imageWidth: 80, imageHeight: (80 / image.width) * image.height }
        : { imageWidth: (80 * image.width) / image.height, imageHeight: 80 };

    return { width: imageWidth, height: imageHeight, isLarge: false };
  }, [type, image, image, cancel]);

  return { width, height, isLarge };
}

export default useSize;
