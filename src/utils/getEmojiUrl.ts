interface EmojiInfo {
  id: string;
  animated: boolean;
}

export function getEmojiUrl({ id, animated }: EmojiInfo): string {
  return `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}`;
}
