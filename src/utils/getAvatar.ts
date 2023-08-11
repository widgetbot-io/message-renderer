import type { APIUser } from "discord-api-types/v10";

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
  user: APIUser,
  avatarSize: AvatarSize = 80
): string | null {
  if (!user.avatar) return null;

  // todo: allow custom CDN
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=${avatarSize}`;
}

export interface GetAvatarOptions {
  animated?: boolean;
  size?: AvatarSize;
}

function getAvatar(
  user: APIUser,
  { animated, size }: GetAvatarOptions = {}
): string {
  // assign default values
  animated ??= false;
  size ??= 80;

  const defaultAvatar = `https://cdn.discordapp.com/embed/avatars/${
    Number(user.discriminator ?? 0) % 5
  }.png`;

  const avatarUrl = getAvatarProperty(user, size);

  if (avatarUrl === null) return defaultAvatar;

  const potentialGif = animated ? gifCheck(avatarUrl) : avatarUrl;

  return avatarUrl ? potentialGif.replace("webp", "png") : defaultAvatar;
}

export default getAvatar;
