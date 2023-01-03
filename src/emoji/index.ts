import * as categoryMap from "./emojis.json";
import { Emoji } from "@root/types/Emoji";

const emojisArray = Object.entries(categoryMap).map(([category, emojisObj]) => {
  return Object.entries(emojisObj).map(([utf8, keywords]) => {
    const array = keywords instanceof Array;
    const obj = keywords instanceof Object && !array;

    return {
      emoji: utf8,
      keywords: array ? keywords : obj ? undefined : [keywords],
      category,
      available: true,
      animated: false,
      ...(obj ? keywords : []),
    } as Emoji;
  });
});

export const defaultEmojis = [].concat.apply([], emojisArray);
