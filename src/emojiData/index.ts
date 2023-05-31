import * as categoryMap from "./emojis.json";

interface Emoji {
  category: string;
  emoji: string;
  keywords: string[];
  animated: boolean;
  available: boolean;
}

const emojisArray = Object.entries(categoryMap).map(([category, emojisObj]) => {
  // todo: refactor
  return Object.entries(emojisObj).map(([utf8, keywords]) => {
    const array = keywords instanceof Array;
    const obj = keywords instanceof Object && !array;

    let result;
    if (array) {
      result = keywords;
    } else if (obj) {
      result = undefined;
    } else {
      result = [keywords];
    }

    return {
      emoji: utf8,
      keywords: result,
      category,
      available: true,
      animated: false,
      ...(obj ? keywords : []),
    } as Emoji;
  });
});

export const defaultEmojis = emojisArray.flat();

export function findDefaultEmojiByUnicode(unicode: string): Emoji | undefined {
  return defaultEmojis.find(
    ({ emoji, keywords }) => emoji === unicode || keywords?.includes(unicode)
  );
}
