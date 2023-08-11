import memoize from "memoizee";

const canUseWebP = memoize(() => {
  const elem = document.createElement("canvas");
  if (elem.getContext?.("2d")) {
    return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
  return false;
});

function webpCheck(url: string) {
  return canUseWebP() ? url : url.replace("webp", "png");
}

export default webpCheck;
