import { Message_author } from "@types";

type User = Pick<Message_author, "avatarUrl" | "discrim">;

type AvatarSize =
  | 16
  | 20
  | 22
  | 24
  | 28
  | 32
  | 40
  | 44
  | 48
  | 56
  | 60
  | 64
  | 80
  | 96
  | 100
  | 128
  | 160
  | 240
  | 256
  | 300
  | 320
  | 480
  | 512
  | 600
  | 640
  | 1024
  | 1280
  | 1536
  | 2048
  | 3072
  | 4096;

function gifCheck(url: string) {
  return url?.includes("/a_") ? url.replace("webp", "gif") : url;
}

function getAvatarProperty(
  user: User,
  avatarSize: AvatarSize = 80
): string | null {
  if (!user.avatarUrl) return null;

  return user.avatarUrl.includes("cdn.discordapp.com")
    ? `${user.avatarUrl}?size=${avatarSize}`
    : user.avatarUrl;
}

export interface GetAvatarOptions {
  animated?: boolean;
  size?: AvatarSize;
}

function getAvatar(
  user: User,
  { animated, size }: GetAvatarOptions = {}
): string {
  // assign default values
  animated ??= false;
  size ??= 80;

  const avatarUrl = getAvatarProperty(user, size);
  const potentialGif = animated ? gifCheck(avatarUrl) : avatarUrl;

  return avatarUrl
    ? potentialGif.replace("webp", "png")
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(user.discrim) % 5
      }.png`;
}

export default getAvatar;
