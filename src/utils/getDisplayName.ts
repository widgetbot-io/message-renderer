import { APIUser } from "discord-api-types/v10";

function getDisplayName(user: APIUser): string {
  return user.global_name ?? user.username;
}

export default getDisplayName;
