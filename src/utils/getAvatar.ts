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

function checkIfAnimatedAvatar(url: string) {
  return url?.includes("/a_") ?? false;
}

function getAvatarProperty(
  user: APIUser,
  avatarSize: AvatarSize = 80,
  fileType: "webp" | "gif" = "webp"
): string | null {
  if (!user.avatar) return null;

  // todo: allow custom CDN
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${fileType}?size=${avatarSize}`;
}

export interface GetAvatarOptions {
  size?: AvatarSize;
  forceDefault?: boolean;
}

export interface UserAvatar {
  stillAvatarUrl: string;
  animatedAvatarUrl?: string;
}

function getAvatar(
  user: APIUser,
  { size = 80, forceDefault = false }: GetAvatarOptions = {}
): UserAvatar {
  const defaultAvatar = `https://cdn.discordapp.com/embed/avatars/${
    Number(BigInt(user.id) >> 22n) % 6
  }.png`;

  const stillAvatarUrl = getAvatarProperty(user, size);

  if (forceDefault || stillAvatarUrl === null)
    return { stillAvatarUrl: defaultAvatar };

  const isAnimatedAvatar = checkIfAnimatedAvatar(stillAvatarUrl);

  if (!isAnimatedAvatar) return { stillAvatarUrl: stillAvatarUrl };

  const animatedAvatarUrl =
    getAvatarProperty(user, size, "gif") ?? defaultAvatar;

  return {
    stillAvatarUrl: stillAvatarUrl,
    animatedAvatarUrl: animatedAvatarUrl,
  };
}

export default getAvatar;
