const MaxAttachmentWidth = 400;
const MaxAttachmentHeight = 300;

function useSize(width: number, height: number, disabled?: boolean) {
  if (disabled) {
    return {
      width: undefined,
      height: undefined,
    }
  }

  const resultingWidth = Math.min(
    Math.floor(
      Math.min(height, MaxAttachmentHeight) / height * width
    ),
    MaxAttachmentWidth
  );
  const resultingHeight = Math.min(
    height,
    MaxAttachmentHeight,
    resultingWidth / width * height
  );

  return {
      width: resultingWidth,
      height: resultingHeight,
  };
}

export default useSize;
