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
  forceDefault?: boolean;
}

function getAvatar(
  user: APIUser,
  { animated = false, size = 80, forceDefault = false }: GetAvatarOptions = {}
): string {
  const defaultAvatarIndex = isNaN(parseInt(user.id))
    ? 0
    : Number(BigInt(user.id) >> 22n) % 6;

  const defaultAvatar = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;

  const avatarUrl = getAvatarProperty(user, size);

  if (forceDefault || avatarUrl === null) return defaultAvatar;

  const potentialGif = animated ? gifCheck(avatarUrl) : avatarUrl;

  return avatarUrl ? potentialGif.replace("webp", "png") : defaultAvatar;
}

export default getAvatar;
